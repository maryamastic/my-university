import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_BYTES = 3 * 1024 * 1024;
const ALLOWED_EXT = ["jpg", "jpeg", "png", "pdf"];
const FILE_FIELDS = ["passport", "photo", "cv", "coverLetter", "diploma", "transcript", "visa", "languageCert"];
const REQUIRED_FILES = ["passport", "photo", "cv", "coverLetter", "diploma", "transcript"];
const REQUIRED_TEXT = [
  "lastName", "firstName", "passportNumber", "gender", "phone", "email", "address", "city",
  "postalCode", "dob", "nationality", "placeOfBirth", "countryOfBirth", "institution", "degree",
  "frenchLevel", "englishLevel", "residence", "program", "intake", "language", "reference",
];

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // honeypot: pretend success so bots move on
    if (String(form.get("website") ?? "") !== "") return NextResponse.json({ ok: true });

    const text: Record<string, string> = {};
    for (const [k, v] of form.entries()) {
      if (typeof v === "string") text[k] = v.trim().slice(0, 500);
    }

    for (const k of REQUIRED_TEXT) {
      if (!text[k]) return NextResponse.json({ error: `Missing ${k}` }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (text.terms === undefined) {
      return NextResponse.json({ error: "Terms not accepted" }, { status: 400 });
    }

    const attachments: { filename: string; content: Buffer }[] = [];
    for (const k of FILE_FIELDS) {
      const f = form.get(k);
      const has = f instanceof File && f.size > 0;
      if (!has) {
        if (REQUIRED_FILES.includes(k)) return NextResponse.json({ error: `Missing file ${k}` }, { status: 400 });
        continue;
      }
      const ext = f.name.split(".").pop()?.toLowerCase() ?? "";
      if (!ALLOWED_EXT.includes(ext) || f.size > MAX_BYTES) {
        return NextResponse.json({ error: `Invalid file ${k}` }, { status: 400 });
      }
      attachments.push({
        filename: `${k}-${text.lastName}-${text.firstName}.${ext}`.replace(/[^\w.\-]/g, "_"),
        content: Buffer.from(await f.arrayBuffer()),
      });
    }

    const rows = Object.entries(text)
      .filter(([k]) => !["website", "terms", "locale"].includes(k))
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`)
      .join("");

    const port = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  // local dev only: antivirus/VPN can re-sign certificates
  tls: { rejectUnauthorized: process.env.NODE_ENV === "production" },
});
    await transporter.sendMail({
      from: `"Nexora Applications" <${process.env.SMTP_USER}>`,
      to: process.env.APPLY_TO_EMAIL,
      replyTo: text.email,
      subject: `New application: ${text.firstName} ${text.lastName} (${text.program})`,
      html: `<h2>New application</h2><table>${rows}</table>`,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("apply error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}