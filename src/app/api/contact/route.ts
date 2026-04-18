import nodemailer from "nodemailer";

const RECIPIENT = process.env.CONTACT_EMAIL ?? "tomas.mertin@gmail.com";

function getTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.porkbun.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  role?: string;
  teamSize?: string;
  currentStack?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name || !body.email || !body.company) {
      return Response.json(
        { error: "Name, email, and company are required." },
        { status: 400 },
      );
    }

    const html = `
      <h2>New Discovery Call Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(body.name)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${esc(body.email)}">${esc(body.email)}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Company</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(body.company)}</td></tr>
        ${body.role ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Role</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(body.role)}</td></tr>` : ""}
        ${body.teamSize ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">QA Team Size</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(body.teamSize)}</td></tr>` : ""}
        ${body.currentStack ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Current Stack</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(body.currentStack)}</td></tr>` : ""}
      </table>
      ${body.message ? `<h3 style="margin-top:24px">Challenge / Message</h3><p style="white-space:pre-wrap;background:#f5f5f5;padding:16px;border-radius:8px">${esc(body.message)}</p>` : ""}
      <hr style="margin-top:32px;border:none;border-top:1px solid #eee"/>
      <p style="color:#999;font-size:12px">Sent from qawave.ai contact form</p>
    `;

    const transport = getTransport();
    await transport.sendMail({
      from: process.env.SMTP_USER,
      to: RECIPIENT,
      replyTo: body.email,
      subject: `Discovery Call Request — ${body.name} (${body.company})`,
      html,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Failed to send email." },
      { status: 500 },
    );
  }
}

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
