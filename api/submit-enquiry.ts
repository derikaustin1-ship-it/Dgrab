import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, businessName, businessType, phone, email, websiteType, details, hp_field } = req.body || {};

    // 1. Bot & Spam Protection via Honeypot
    if (hp_field) {
      // Silently pretend success to bots
      return res.status(200).json({ success: true, message: 'Enquiry received' });
    }

    // 2. Server-side Input Validation
    if (!name || !businessName || !phone) {
      return res.status(400).json({ error: 'Please fill in all required fields (Name, Business Name, and Phone/WhatsApp).' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.NOTIFICATION_RECIPIENT_EMAIL || 'theywantweb@gmail.com';
    const senderEmail = process.env.SENDER_EMAIL || 'Dgrab Enquiries <onboarding@resend.dev>';

    const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const emailBodyText = `New Free Sample Website Request

Name:
${name}

Business:
${businessName}

Business Type:
${businessType || 'N/A'}

Phone / WhatsApp:
${phone}

Email:
${email || 'Not provided'}

Website Required:
${websiteType || 'Business Website'}

Additional Details:
${details || 'None provided'}

Submitted:
${submittedAt} IST

Source:
Dgrab Website
Form type: Free Sample Website Request`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
        <div style="background: linear-gradient(135deg, #0284c7, #1e40af); padding: 24px; border-radius: 12px 12px 0 0; text-align: center; color: white;">
          <h2 style="margin: 0; font-size: 22px;">New Free Sample Website Request</h2>
          <p style="margin: 4px 0 0 0; opacity: 0.9; font-size: 14px;">Dgrab Studio Enquiry</p>
        </div>

        <div style="background: #ffffff; padding: 28px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 140px; color: #475569;">Visitor Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Business Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${businessName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Business Type:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${businessType || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Phone / WhatsApp:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0284c7; font-weight: bold;">
                <a href="tel:${phone}" style="color: #0284c7; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Email Address:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">
                ${email ? `<a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a>` : 'Not provided'}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Website Required:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${websiteType || 'Business Website'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Additional Details:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${details || 'None provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Submitted:</td>
              <td style="padding: 10px 0; color: #64748b; font-size: 13px;">${submittedAt} IST</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Source:</td>
              <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Dgrab Website (Free Sample Website Request)</td>
            </tr>
          </table>
        </div>
      </div>
    `;

    // 3. Fallback Mode when RESEND_API_KEY is not set yet
    if (!apiKey) {
      console.log('--- ENQUIRY SUBMISSION LOG (RESEND_API_KEY NOT CONFIGURED) ---');
      console.log(emailBodyText);
      return res.status(200).json({
        success: true,
        message: 'Enquiry received in server log. Configure RESEND_API_KEY for live email delivery to theywantweb@gmail.com.',
      });
    }

    // 4. Send Email via Resend Transactional Email API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: senderEmail,
        to: [recipientEmail],
        reply_to: email && email.includes('@') ? email : undefined,
        subject: 'New Free Sample Request — Dgrab',
        text: emailBodyText,
        html: emailHtml,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API Error:', data);
      return res.status(500).json({ error: data.message || 'Failed to deliver notification email.' });
    }

    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error('Server error sending enquiry email:', err);
    return res.status(500).json({ error: 'Server error while processing enquiry.' });
  }
}
