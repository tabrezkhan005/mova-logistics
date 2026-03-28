import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, country, product, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !country || !product || !message) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to Mova team
    await transporter.sendMail({
      from: `"Mova Logistics Website" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Export Inquiry from ${name} — ${product}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F2F2A; padding: 24px 32px; border-bottom: 3px solid #D4AF37;">
            <h1 style="color: #FFFFFF; font-size: 20px; margin: 0;">New Export Inquiry</h1>
          </div>
          <div style="padding: 32px; background: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333; width: 140px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${company || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Country</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${country}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Product</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${product}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #333; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #555; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 32px; background: #0F2F2A; text-align: center;">
            <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 0;">Mova Logistics — Premium Indian Spice Exporters</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please try again." },
      { status: 500 }
    );
  }
}
