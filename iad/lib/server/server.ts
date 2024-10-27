'use server';
import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  email: string;
  information: string;
  file: null
}

const sendEmail = async (data: FormData): Promise<void> => {
  const { name, email, information, file } = data;

  console.log('Form Data received:', data);

  // Set up the transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS 
    },
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
      <p><strong>File:</strong> ${file}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);  // Log the error details
    // Make sure to log the error message if it exists
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    throw new Error('Failed to send email');
  }
};


export default sendEmail;
