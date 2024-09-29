'use server';

import * as nodemailer from 'nodemailer';

// Sends an email provided in HTML format. Note that this function depends on two
// environment variables expected to be set by the caller: GMAIL_USER and GMAIL_PASSWORD
export default async function sendEmail(
  from: string,
  to: string,
  subject: string,
  html: string,
) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const response = await transporter.sendMail({
    from,
    to,
    subject,
    html,
  });

  if (response.rejected.length > 0) {
    throw new Error(response.response);
  }

  return;
}
