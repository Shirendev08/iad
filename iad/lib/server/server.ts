'use server';
import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  email: string;
  information: string;
}

const sendEmail = async (formData: FormData) => {
  const { name, email, information } = formData;

  console.log('Form Data received:', formData);

  // Set up the transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'pcniiacc@gmail.com',
      pass: 'pcpcpc1234',
    },
  });

  console.log('SMTP Configuration:', {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS ? '****' : 'MISSING PASSWORD',
  });

  // Email content
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'pcniiacc@gmail.com',
    subject: 'Шүгэл үлээх суваг',
    html: `
      <h1>Шүгэл үлээх суваг</h1>
      <p><strong>Нэр:</strong> ${name}</p>
      <p><strong>Майл хаяг:</strong> ${email}</p>
      <p><strong>Санал хүсэлт:</strong> ${information}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);  // Log the error details
    throw new Error('Failed to send email');
  }
};

export default sendEmail;
