import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos requeridos deben estar completados' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const emailData = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'contacto@techservicesguzps.com',
      to: process.env.EMAIL_TO || 'info@techservicesguzps.com',
      replyTo: email,
      subject: `Nuevo contacto desde el sitio web: ${company || name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #00d4ff 0%, #0077ff 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Nuevo Mensaje de Contacto</h1>
          </div>
          
          <div style="background: #f5f5f5; padding: 30px;">
            <h2 style="color: #333; margin-top: 0;">Información del Cliente</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              ${company ? `<p style="margin: 10px 0;"><strong>Empresa:</strong> ${company}</p>` : ''}
            </div>
            
            <h3 style="color: #333;">Mensaje:</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff;">
              <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">TechServices Guz PS - Sistema de Contacto Web</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email enviado exitosamente', id: emailData.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el email. Por favor intenta nuevamente.' },
      { status: 500 }
    );
  }
}
