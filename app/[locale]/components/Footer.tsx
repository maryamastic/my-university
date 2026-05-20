"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

function FL({ label, href }: { label: string; href: string }) {
  const [h, setH] = useState(false);
  return (
    <Link href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "block", fontFamily: "Open Sans, sans-serif", fontSize: "13px", color: h ? "#fff" : "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "8px", transition: "color 0.18s" }}>
      {label}
    </Link>
  );
}

function SI({ label }: { label: string }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ width: "32px", height: "32px", borderRadius: "50%", background: h ? "#e84e0f" : "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontFamily: "Montserrat, sans-serif", fontSize: "10px", fontWeight: 700, color: h ? "#fff" : "rgba(255,255,255,0.6)", transition: "all 0.2s" }}>
      {label}
    </div>
  );
}

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer style={{ background: "#0d1b2e" }}>
      <div className="container" style={{ padding: "48px 2rem 36px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "36px" }}>

        {/* Brand */}
        <div>
          <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "22px", fontWeight: 800, color: "#fff", lineHeight: 1.05 }}>Global</div>
          <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "22px", fontWeight: 800, color: "#e84e0f", lineHeight: 1.05, marginBottom: "12px" }}>University</div>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px", fontWeight: 700, fontStyle: "italic", color: "rgba(255,255,255,0.82)", lineHeight: 1.6, marginBottom: "14px", whiteSpace: "pre-line" }}>
            {t("tagline")}
          </p>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.9 }}>
            123 University Avenue<br />London, EC1A 1BB<br />United Kingdom<br />+44 (0) 20 7123 4567
          </p>
          <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
            {["Li", "Fb", "Ig", "Yt"].map((s) => <SI key={s} label={s} />)}
          </div>
        </div>

        {/* Programs */}
        <div>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "14px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            {t("programs")}
          </p>
          <FL label={t("bachelors")} href={`/${locale}/programs/bachelors`} />
          <FL label={t("masters")}   href={`/${locale}/programs/masters`} />
          <FL label={t("mba")}       href={`/${locale}/programs/masters`} />
          <FL label={t("allPrograms")} href={`/${locale}/programs`} />
        </div>

        {/* School */}
        <div>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "14px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            {t("school")}
          </p>
          <FL label={t("aboutUs")}        href={`/${locale}/about`} />
          <FL label={t("accreditations")} href={`/${locale}/about`} />
          <FL label={t("rankings")}       href={`/${locale}/about`} />
          <FL label={t("news")}           href={`/${locale}/about`} />
        </div>

        {/* Admissions */}
        <div>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "14px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            {t("admissions")}
          </p>
          <FL label={t("howToApply")}   href={`/${locale}/contact`} />
          <FL label={t("tuition")}      href={`/${locale}/contact`} />
          <FL label={t("scholarships")} href={`/${locale}/contact`} />
          <FL label={t("contactUs")}    href={`/${locale}/contact`} />
          <Link href={`/${locale}/contact`} className="btn btn-orange"
            style={{ marginTop: "16px", fontSize: "10px", padding: "9px 16px", display: "inline-block" }}>
            {t("applyNow")}
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "14px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} {t("copyright")}
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {[t("legal"), t("privacy"), t("accessibility")].map((item) => (
              <Link key={item} href="#"
                style={{ fontFamily: "Open Sans, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}