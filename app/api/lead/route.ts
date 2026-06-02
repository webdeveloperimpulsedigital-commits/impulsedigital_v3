import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, preferredTime, userRequirement, recommendedDirection } = await req.json();

    // 1. Dispatch Email alert via Resend
    let emailSent = false;
    let emailErrorMsg = '';

    try {
      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        console.error('RESEND_API_KEY is not defined in environment variables.');
        emailErrorMsg = 'RESEND_API_KEY is missing';
      } else {
        const dateFormatted = new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'medium',
          timeStyle: 'short'
        }) + ' (IST)';

        const emailHtmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>New Chatbot Lead</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 20px; color: #111827;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
              <tr>
                <td style="background: linear-gradient(135deg, #8a5cf6 0%, #b829ea 100%); padding: 24px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">New Chatbot Lead Captured</h1>
                  <p style="color: rgba(255, 255, 255, 0.85); margin: 4px 0 0 0; font-size: 13px;">Impulse Digital Growth Assistant (Adwait)</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 24px;">
                  <h2 style="font-size: 15px; font-weight: 600; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #f3f4f6; padding-bottom: 6px; color: #1f2937;">Contact Information</h2>
                  <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; margin-bottom: 20px; color: #4b5563;">
                    <tr>
                      <td width="35%" style="font-weight: 600; color: #374151;">Name:</td>
                      <td>${name}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Company:</td>
                      <td>${company}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Email:</td>
                      <td><a href="mailto:${email}" style="color: #8a5cf6; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Phone Number:</td>
                      <td><a href="tel:${phone}" style="color: #8a5cf6; text-decoration: none;">${phone}</a></td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Preferred Time:</td>
                      <td>${preferredTime}</td>
                    </tr>
                  </table>

                  <h2 style="font-size: 15px; font-weight: 600; margin-bottom: 12px; border-bottom: 2px solid #f3f4f6; padding-bottom: 6px; color: #1f2937;">Consultation Details</h2>
                  <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; color: #4b5563;">
                    <tr>
                      <td width="35%" style="font-weight: 600; color: #374151;">Requirement:</td>
                      <td>${userRequirement || 'Not specified'}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Recommended Path:</td>
                      <td>${recommendedDirection || 'Not specified'}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Captured Time:</td>
                      <td>${dateFormatted}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="background-color: #f3f4f6; padding: 14px; text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
                  This notification was generated automatically from the chat widget on <a href="https://www.theimpulsedigital.com" target="_blank" style="color: #9ca3af; text-decoration: underline;">www.theimpulsedigital.com</a>.
                </td>
              </tr>
            </table>
          </body>
          </html>
        `;

        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Impulse Digital Chatbot <onboarding@resend.dev>',
            to: 'adwait@theimpulsedigital.com',
            subject: `New Chatbot Lead - ${company}`,
            html: emailHtmlContent,
          }),
        });

        if (resendResponse.ok) {
          emailSent = true;
          console.log('Lead email notification sent successfully');
        } else {
          const errorText = await resendResponse.text();
          console.error('Resend API error response:', errorText);
          emailErrorMsg = `Resend API error status ${resendResponse.status}`;
        }
      }
    } catch (resendError: any) {
      console.error('Error sending Resend email alert:', resendError);
      emailErrorMsg = resendError.message || 'Error executing Resend email alert';
    }

    return NextResponse.json({ 
      success: true, 
      emailSent,
      emailError: emailErrorMsg || undefined 
    });
  } catch (error: any) {
    console.error('Error in lead email API route:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';
