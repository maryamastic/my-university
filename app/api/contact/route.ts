import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, program, message } = await req.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",       // change after verifying your domain
    to: "info@modesse.fr",
    subject: `New Contact Form Submission – ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "—"}</p>
      <p><strong>Program:</strong> ${program || "—"}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}