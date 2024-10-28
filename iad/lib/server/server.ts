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
  var fileContent = null
  if (file){
    fileContent = Buffer.from(await (file as File).arrayBuffer());
  }

  // Set up the transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.outlook.com',
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
    to: 'rm808@bogdbank.com',
    subject: 'Шүгэл үлээх суваг',
    html: `
      <h1>Шүгэл үлээх суваг</h1>
      <p><strong>Нэр:</strong> ${name}</p>
      <p><strong>Майл хаяг:</strong> ${email}</p>
      <p><strong>Санал хүсэлт:</strong> ${information}</p>
      <p><strong>File:</strong> ${file}</p>
    `,
    attachments: file && fileContent? [
      {
        filename: (file as File).name,
        content: fileContent,
      },
    ]:undefined,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    // Make sure to log the error message if it exists
    if (error instanceof Error) {
      console.log(error.message);
    }
    throw new Error('Failed to send email');
  }
};


export default sendEmail;
