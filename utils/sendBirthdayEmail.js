import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  },
  connectionTimeout: 10000
});

// Verify SMTP connection at startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP verification failed:", error.message);
  } else {
    console.log("✅ SMTP server is ready to send emails");
  }
});

const sendBirthdayEmail = async (user) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: user.email,
    subject: '🎂 Happy Birthday!',
    text: `Hey ${user.username}, wishing you a fantastic birthday filled with joy and cake!🎂🎉`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent to ${user.email}`);
  } catch (err) {
    console.error(`⚠️ Failed to send email to ${user.email}: ${err.message}`);
    // Retry once
    try {
      await transporter.sendMail(mailOptions);
      console.log(`🔁 Retry successful for ${user.email}`);
    } catch (retryErr) {
      console.error(`❌ Retry failed for ${user.email}: ${retryErr.message}`);
    }
  }
};

export default sendBirthdayEmail;
