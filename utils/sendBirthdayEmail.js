import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  },
  connectionTimeout: 10000 // 10 seconds
});



transporter.verify((error, success) => {
  if (error) {
    console.warn("⚠️ SMTP verification failed:", error.message);
  } else {
    console.log("✅ SMTP server is ready to send emails");
  }
});

const sendBirthdayEmail = async (user) => {
  const mailOptions = {
  from: `"Niyi\'s Birthday Mailer" <${process.env.ELASTIC_SENDER_EMAIL}>`,
    to: user.email,
    subject: '🎂 Happy Birthday!',
    html: `<p>Hey ${user.username}, wishing you a fantastic birthday filled with joy and cake! 🎂🎉</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent to ${user.email}`);
  } catch (err) {
    console.error(`⚠️ Failed to send email to ${user.email}: ${err.message}`);
    try {
      await transporter.sendMail(mailOptions);
      console.log(`🔁 Retry successful for ${user.email}`);
    } catch (retryErr) {
      console.error(`❌ Retry failed for ${user.email}: ${retryErr.message}`);
    }
  }
};

export default sendBirthdayEmail;
