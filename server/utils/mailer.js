const RESEND_API_URL = 'https://api.resend.com/emails';

/**
 * Sends a notification email for a new contact form submission using
 * Resend's HTTPS API. HTTPS (not raw SMTP) is what makes this reliable
 * on platforms like Render, whose free tier can have flaky outbound SMTP.
 *
 * Best-effort: never throws — a failed email should never break the API response.
 */
export async function sendContactNotification({ name, email, message }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.EMAIL_TO;

  if (!apiKey || !to) {
    console.warn('⚠️  RESEND_API_KEY / EMAIL_TO not set — skipping email notification.');
    return;
  }

  // onboarding@resend.dev works with no domain verification, but only
  // delivers to the email address on your Resend account (which is fine
  // here since EMAIL_TO is your own inbox).
  const from = process.env.RESEND_FROM || 'Portfolio Contact Form <onboarding@resend.dev>';

  try {
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
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
      }),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => '');
      throw new Error(`Resend API responded ${response.status}: ${body}`);
    }

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