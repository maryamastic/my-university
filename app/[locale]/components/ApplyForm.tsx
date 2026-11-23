"use client";
import { useState, type FormEvent, type CSSProperties, type ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const MAX_FILE_MB = 3;
const ALLOWED_EXT = ["jpg", "jpeg", "png", "pdf"];

// specKeys point at nav.mega.* in messages/*.json, so names match the navbar
const PROGRAMS: Record<string, { years: "bachelor" | "master" | null; specKeys: string[] }> = {
  bachelor: { years: "bachelor", specKeys: ["bachelor1", "bachelor2", "bachelor3", "bachelor4", "bbs1", "bbs2"] },
  master: { years: "master", specKeys: ["master1", "master2", "master3", "master4", "master5", "master6"] },
  dba: { years: null, specKeys: [] },
  fle: { years: null, specKeys: [] },
};

const DOCS = [
  { name: "passport", req: true },
  { name: "photo", req: true },
  { name: "cv", req: true },
  { name: "coverLetter", req: true },
  { name: "diploma", req: true },
  { name: "transcript", req: true },
  { name: "visa", req: false },
  { name: "languageCert", req: false },
];

/* ── styles ── */
const labelStyle: CSSProperties = {
  display: "block", fontFamily: "Montserrat, sans-serif", fontSize: "11px", fontWeight: 700,
  letterSpacing: "0.04em", color: "#0d1b2e", marginBottom: "6px",
};
const inputStyle: CSSProperties = {
  width: "100%", boxSizing: "border-box", padding: "11px 12px", fontSize: "14px",
  fontFamily: "Open Sans, sans-serif", border: "1px solid #cfd6df", background: "#fff",
  color: "#0d1b2e", borderRadius: 0,
};
const card: CSSProperties = {
  background: "#fff", border: "1px solid #e3e8ef", borderTop: "3px solid #e84e0f",
  boxShadow: "0 2px 14px rgba(0,0,0,0.05)", padding: "28px", marginBottom: "28px",
};
const grid: CSSProperties = {
  display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px 24px",
};

function Section({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section style={card}>
      <h3 style={{
        display: "flex", alignItems: "center", gap: "12px", margin: "0 0 22px",
        fontFamily: "Montserrat, sans-serif", fontSize: "13px", fontWeight: 800,
        letterSpacing: "0.12em", textTransform: "uppercase", color: "#003366",
      }}>
        <span style={{
          width: "26px", height: "26px", borderRadius: "50%", background: "#e84e0f", color: "#fff",
          display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", letterSpacing: 0,
        }}>{n}</span>
        {title}
      </h3>
      {children}
    </section>
  );
}

function Field({ text, required = true, children }: { text: string; required?: boolean; children: ReactNode }) {
  return (
    <div>
      <label style={labelStyle}>{text}{required ? " *" : ""}</label>
      {children}
    </div>
  );
}

function Select({ name, options, placeholder }: { name: string; options: string[]; placeholder: string }) {
  return (
    <select name={name} required defaultValue="" style={inputStyle}>
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

export default function ApplyForm() {
  const locale = useLocale();
  const t = useTranslations("apply");
  const nav = useTranslations("nav");

  // dynamic-key helpers (keep TypeScript happy with typed or untyped messages)
  const tx = (k: string) => t(k as Parameters<typeof t>[0]);
  const list = (k: string) => t.raw(k as Parameters<typeof t.raw>[0]) as string[];
  const years = (k: "bachelor" | "master") => list(`years.${k}`);

  const [program, setProgram] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const prog = PROGRAMS[program];
  const specs = prog ? prog.specKeys.map((k) => nav(`mega.${k}` as Parameters<typeof nav>[0])) : [];

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const data = new FormData(e.currentTarget);

    for (const d of DOCS) {
      const f = data.get(d.name);
      if (f instanceof File && f.size > 0) {
        const ext = f.name.split(".").pop()?.toLowerCase() ?? "";
        if (!ALLOWED_EXT.includes(ext) || f.size > MAX_FILE_MB * 1024 * 1024) {
          setError(t("errorFile", { name: f.name }));
          return;
        }
      }
    }

    data.set("locale", locale);
    setStatus("sending");
    try {
      const res = await fetch("/api/apply", { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError(t("errorGeneric"));
      setStatus("idle");
    }
  };

  if (status === "done") {
    return (
      <div style={{ textAlign: "center", padding: "64px 16px" }}>
        <div style={{ fontSize: "48px", color: "#e84e0f" }}>✓</div>
        <h2 style={{ fontFamily: "Montserrat, sans-serif", color: "#003366", margin: "12px 0" }}>{t("successTitle")}</h2>
        <p style={{ fontFamily: "Open Sans, sans-serif", color: "#444" }}>{t("successText")}</p>
        <Link href={`/${locale}`} className="btn btn-orange" style={{ marginTop: "20px" }}>{t("backHome")}</Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      {/* honeypot: bots fill it, people never see it */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }} />

      <Section n={1} title={t("personal")}>
        <div style={grid}>
          <Field text={t("lastName")}><input style={inputStyle} name="lastName" required /></Field>
          <Field text={t("firstName")}><input style={inputStyle} name="firstName" required /></Field>
          <Field text={t("passportNumber")}><input style={inputStyle} name="passportNumber" required /></Field>
          <Field text={t("gender")}><Select name="gender" options={list("genders")} placeholder={t("select")} /></Field>
          <Field text={t("phone")}><input style={inputStyle} name="phone" type="tel" required /></Field>
          <Field text={t("email")}><input style={inputStyle} name="email" type="email" required /></Field>
          <Field text={t("address")}><input style={inputStyle} name="address" required /></Field>
          <Field text={t("city")}><input style={inputStyle} name="city" required /></Field>
          <Field text={t("postalCode")}><input style={inputStyle} name="postalCode" required /></Field>
          <Field text={t("dob")}><input style={inputStyle} name="dob" type="date" required /></Field>
          <Field text={t("nationality")}><input style={inputStyle} name="nationality" required /></Field>
          <Field text={t("placeOfBirth")}><input style={inputStyle} name="placeOfBirth" required /></Field>
          <Field text={t("countryOfBirth")}><input style={inputStyle} name="countryOfBirth" required /></Field>
        </div>
      </Section>

      <Section n={2} title={t("academic")}>
        <div style={grid}>
          <Field text={t("institution")}><input style={inputStyle} name="institution" required /></Field>
          <Field text={t("degree")}><input style={inputStyle} name="degree" required /></Field>
          <Field text={t("frenchLevel")}>
            <Select name="frenchLevel" options={["A1", "A2", "B1", "B2", "C1", "C2"]} placeholder={t("select")} />
          </Field>
          <Field text={t("englishLevel")}>
            <Select name="englishLevel" options={["A0", "A1", "A2", "B1", "B2", "C1", "C2"]} placeholder={t("select")} />
          </Field>
        </div>
      </Section>

      <Section n={3} title={t("selection")}>
        <div style={grid}>
          <Field text={t("residence")}><Select name="residence" options={list("residences")} placeholder={t("select")} /></Field>
          <Field text={t("program")}>
            <select name="program" required style={inputStyle} value={program} onChange={(e) => setProgram(e.target.value)}>
              <option value="" disabled>{t("select")}</option>
              {Object.keys(PROGRAMS).map((k) => (
                <option key={k} value={k}>{tx(`programOptions.${k}`)}</option>
              ))}
            </select>
          </Field>
          {specs.length > 0 && (
            <Field text={t("specialisation")}>
              <Select key={program + "s"} name="specialisation" options={specs} placeholder={t("select")} />
            </Field>
          )}
          {prog?.years && (
            <Field text={t("year")}>
              <Select key={program + "y"} name="year" options={years(prog.years)} placeholder={t("select")} />
            </Field>
          )}
          {program === "fle" && (
            <Field text={t("fleLevel")}>
              <Select name="fleLevel" options={["A1", "A2", "B1", "B2", "C1"]} placeholder={t("select")} />
            </Field>
          )}
          <Field text={t("intake")}><Select name="intake" options={list("intakes")} placeholder={t("select")} /></Field>
          <Field text={t("language")}><Select name="language" options={list("languages")} placeholder={t("select")} /></Field>
          <Field text={t("reference")}><input style={inputStyle} name="reference" required /></Field>
        </div>
      </Section>

      <Section n={4} title={t("documents")}>
        <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "13px", color: "#666", margin: "-8px 0 18px" }}>
          {t("docNote")}
        </p>
        <div style={grid}>
          {DOCS.map((d) => (
            <Field key={d.name} text={tx(`docs.${d.name}`)} required={d.req}>
              <input style={{ ...inputStyle, padding: "8px" }} type="file" name={d.name}
                required={d.req} accept=".jpg,.jpeg,.png,.pdf" />
            </Field>
          ))}
        </div>
      </Section>

      <label style={{
        display: "flex", gap: "10px", alignItems: "flex-start", margin: "8px 0",
        fontFamily: "Open Sans, sans-serif", fontSize: "13px", color: "#333", cursor: "pointer",
      }}>
        <input type="checkbox" name="terms" required style={{ marginTop: "3px" }} />
        <span>{t("terms")} *</span>
      </label>

      {error && (
        <p role="alert" style={{ color: "#b00020", fontFamily: "Open Sans, sans-serif", fontSize: "13px", margin: "12px 0" }}>
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-orange"
        style={{ marginTop: "16px", cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.7 : 1 }}>
        {status === "sending" ? t("sending") : t("submit")}
      </button>
    </form>
  );
}