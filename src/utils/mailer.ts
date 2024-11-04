// src/utils/mailer.ts

import nodemailer from 'nodemailer';

// Create a transporter using your email service details
const transporter = nodemailer.createTransport({
  host: 'smtp.tormasclick.co.ke', // Replace with your SMTP host if needed
  port: 587, // Port for TLS
  secure: false, // Set to true if using port 465 for SSL
  auth: {
    user: process.env.EMAIL_USER, // Use the environment variable
    pass: process.env.EMAIL_PASS, // Use the environment variable
  },
});

// Function to send an email
export const sendEmail = async (to: string, subject: string, message: string) => {
  try {
    await transporter.sendMail({
      from: `"Martin Kioko" <${process.env.EMAIL_USER}>`, // Use the environment variable
      to, // Recipient address
      subject, // Subject line
      text: message, // Plain text body
    });
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};