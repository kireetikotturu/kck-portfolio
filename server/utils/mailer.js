import nodemailer from 'nodemailer';

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return null;
  }

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter;
}

/**
 * Sends a notification email for a new contact form submission.
 * Best-effort: never throws — a failed email should never break the API response.
 */
export async function sendContactNotification({ name, email, message }) {
  const t = getTransporter();

  if (!t) {
    console.warn('⚠️  EMAIL_USER / EMAIL_PASS not set — skipping email notification.');
    return;
  }

  const to = process.env.EMAIL_TO || process.env.EMAIL_USER;

  try {
    await t.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <p><strong>New message from your portfolio site</strong></p>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
        </div>
      `,
    });
    console.log('📧 Contact notification email sent');
  } catch (err) {
    console.error('❌ Failed to send contact notification email:', err.message);
  }
}

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}