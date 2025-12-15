import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // 1. Extraemos el nuevo campo 'interest'
    const { name, email, company, interest, message } = await request.json();

    // 2. Validación de campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Por favor completa los campos obligatorios.' },
        { status: 400 }
      );
    }

    // 3. Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido.' },
        { status: 400 }
      );
    }

    // 4. Construcción del Asunto Dinámico
    // Esto te ayuda a filtrar correos rápidamente en tu bandeja de entrada
    const subjectLine = `[Web Lead] ${interest || 'Consulta General'} - ${company || name}`;

    // 5. Envío con Resend
    const emailData = await resend.emails.send({
      from: 'TechServices Notificaciones <onboarding@resend.dev>', // Usamos el dominio por defecto de Resend si no tienes uno verificado
      to: 'techservicesguz@gmail.com',
      reply_to: email, // IMPORTANTE: Al dar click en responder, va directo al cliente
      subject: subjectLine,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Nuevo Lead Tecnológico</title>
        </head>
        <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f5; margin: 0; padding: 0;">
          
          <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 30px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">Nuevo Contacto Web</h1>
              <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 14px;">TechServices Guz PS</p>
            </div>

            <div style="padding: 40px;">
              
              <div style="text-align: center; margin-bottom: 30px;">
                <span style="background-color: #eff6ff; color: #2563eb; padding: 8px 16px; border-radius: 50px; font-weight: bold; font-size: 14px; border: 1px solid #bfdbfe;">
                  Interesado en: ${interest || 'Consultoría General'}
                </span>
              </div>

              <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px;">
                <tr>
                  <td style="font-weight: bold; width: 30%; color: #64748b;">Cliente:</td>
                  <td style="font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; color: #64748b;">Email:</td>
                  <td><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                ${company ? `
                <tr>
                  <td style="font-weight: bold; color: #64748b;">Empresa:</td>
                  <td style="font-weight: 500;">${company}</td>
                </tr>
                ` : ''}
              </table>

              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;">

              <h3 style="color: #0f172a; margin-top: 0; font-size: 16px;">Mensaje del Cliente:</h3>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; color: #475569;">
                ${message.replace(/\n/g, '<br>')}
              </div>

            </div>

            <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b;">
              <p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
              <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} TechServices Guz PS</p>
            </div>

          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: 'Email enviado exitosamente', id: emailData.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error interno al enviar el mensaje.' },
      { status: 500 }
    );
  }
}