// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'martin.ngungu.kioko@gmail.com', // Your Gmail address
        pass: 'hrka othh cwdq szsn', // Your generated app password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'ngushdare@gmail.com', // Recipient email
      subject: subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Error sending email' }, { status: 500 });
  }
}