"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    background: "#f4f4f4",
    border: "1px solid #e0e0e0",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.88rem",
    color: "#1a1a2e",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#666",
    display: "block",
    marginBottom: "0.4rem",
  };

  const infoRow = (icon: string, label: string, value: string, isLink = false) => (
    <div style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid #e0e0e0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.4rem" }}>
        <span style={{ fontSize: "1rem" }}>{icon}</span>
        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#003366" }}>{label}</p>
      </div>
      {isLink ? (
        <a href={`mailto:${value}`} style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.88rem", color: "#666", textDecoration: "none", lineHeight: 1.8 }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#e84e0f")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}>
          {value}
        </a>
      ) : (
        <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.88rem", color: "#666", lineHeight: 1.8, whiteSpace: "pre-line" }}>{value}</p>
      )}
    </div>
  );

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        minHeight: "60vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "8rem 0 5rem",
      }}>
        {/* Same bg image */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }} />
        {/* Same orange bottom line */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "#e84e0f", zIndex: 3 }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
            <Link href={`/${locale}`}
              style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", color: "#0d1b2e", textDecoration: "none", opacity: 0.6 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}>
              Home
            </Link>
            <span style={{ color: "#0d1b2e", fontSize: "0.75rem", opacity: 0.4 }}>›</span>
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", color: "#0d1b2e" }}>{t("tag")}</span>
          </div>

          {/* Tag — plain orange text, DM Sans, same as About/Homepage */}
          <p style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#e84e0f",
            marginBottom: "1.5rem",
          }}>
            {t("tag")}
          </p>

          {/* H1 — Cormorant, weight 300, dark navy, same as About/Homepage */}
          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#0d1b2e",
            marginBottom: "2rem",
            maxWidth: "750px",
          }}>
            {t("h1")}
          </h1>

          {/* P — DM Sans, dark navy, same as About/Homepage */}
          <p style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 300,
            fontSize: "1.05rem",
            color: "#0d1b2e",
            maxWidth: "460px",
            lineHeight: 1.85,
          }}>
            {t("heroP")}
          </p>
        </div>
      </section>
      {/* ── MAIN CONTENT ── */}
      <section style={{ background: "#fff", padding: "5rem 0 6rem" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>

          {/* ── LEFT: CONTACT INFO ── */}
          <div>
            {/* Section label */}
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "0.75rem" }}>
              {t("infoLabel")}
            </p>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "22px", fontWeight: 800, color: "#003366", marginBottom: "8px" }}>
              {t("infoLabel")}
            </h2>
            <div style={{ width: "48px", height: "4px", background: "#e84e0f", marginBottom: "2.5rem" }} />

            {/* Info card */}
            <div style={{ background: "#f8f4ef", padding: "2.5rem", marginBottom: "0" }}>
              {/* Admissions email */}
              <div style={{ marginBottom: "1.75rem", paddingBottom: "1.75rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "0.4rem" }}>
                  {t("admissionsLabel")}
                </p>
                <a href="mailto:info@modesse.fr"
                  style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.85rem", color: "rgba(0, 0, 0, 0.75)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0, 0, 0, 0.75)")}>
                  info@modesse.fr
                </a>
              </div>

              {/* General email */}
              <div style={{ marginBottom: "1.75rem", paddingBottom: "1.75rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "0.4rem" }}>
                  {t("generalLabel")}
                </p>
                <a href="mailto:info@modesse.fr"
                  style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.85rem", color: "rgba(0, 0, 0, 0.75)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0, 0, 0, 0.75)")}>
                 info@modesse.fr
                </a>
              </div>

              {/* Phone */}
              <div style={{ marginBottom: "1.75rem", paddingBottom: "1.75rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "0.4rem" }}>
                  {t("phoneLabel")}
                </p>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.85rem", color: "rgba(0, 0, 0, 0.75)" }}>
                  +44 (0) 20 7123 4567
                </p>
              </div>

              {/* Address */}
              <div style={{ marginBottom: "1.75rem", paddingBottom: "1.75rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "0.4rem" }}>
                  {t("addressLabel")}
                </p>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.85rem", color: "rgba(0, 0, 0, 0.75)", lineHeight: 1.8 }}>
                  Paris, France
                </p>
              </div>

              {/* Office Hours */}
              <div>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "0.4rem" }}>
                  {t("hoursLabel")}
                </p>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.85rem", color: "rgba(0, 0, 0, 0.75)", lineHeight: 1.8, whiteSpace: "pre-line" }}>
                  {t("hoursVal")}
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <div style={{ background: "#fff", border: "1px solid #e0e0e0", padding: "3rem" }}>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "22px", fontWeight: 800, color: "#003366", marginBottom: "0.4rem" }}>
              {t("formH3")}
            </h2>
            <div style={{ width: "48px", height: "4px", background: "#e84e0f", marginBottom: "0.75rem" }} />
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.85rem", color: "#666", marginBottom: "2rem" }}>
              {t("formP")}
            </p>

            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ width: "52px", height: "52px", background: "#003366", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                  <span style={{ color: "#fff", fontSize: "1.3rem" }}>✓</span>
                </div>
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#003366", marginBottom: "0.5rem" }}>{t("successTitle")}</h3>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.88rem", color: "#666" }}>{t("successP")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                {/* Name + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>{t("nameLabel")} *</label>
                    <input required style={inputStyle} placeholder={t("namePlaceholder")}
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={(e) => { e.target.style.borderColor = "#003366"; e.target.style.background = "#fff"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.background = "#f4f4f4"; }} />
                  </div>
                  <div>
                    <label style={labelStyle}>{t("emailLabel")} *</label>
                    <input required type="email" style={inputStyle} placeholder={t("emailPlaceholder")}
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={(e) => { e.target.style.borderColor = "#003366"; e.target.style.background = "#fff"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.background = "#f4f4f4"; }} />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>{t("phoneInputLabel")}</label>
                  <input style={inputStyle} placeholder={t("phonePlaceholder")}
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={(e) => { e.target.style.borderColor = "#003366"; e.target.style.background = "#fff"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.background = "#f4f4f4"; }} />
                </div>

                {/* Program select */}
                <div>
                  <label style={labelStyle}>{t("programLabel")}</label>
                  <select style={{ ...inputStyle, cursor: "pointer" }}
                    value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })}
                    onFocus={(e) => { e.target.style.borderColor = "#003366"; e.target.style.background = "#fff"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.background = "#f4f4f4"; }}>
                    <option value="">{t("programDefault")}</option>
                    <optgroup label={t("bachelorsGroup")}>
                      <option>Bachelor of Business Administration</option>
                      <option>BSc Digital Marketing</option>
                      <option>Bachelor of Tourism & Hospitality</option>
                      <option>Bachelor in Hotel Management</option>
                    </optgroup>
                    <optgroup label={t("mastersGroup")}>
                      <option>MBA – Master of Business Administration</option>
                      <option>MSc Supply Chain Management</option>
                      <option>Master in International Business</option>
                      <option>Master in International Management</option>
                      <option>MSc Tourism & Hospitality</option>
                    </optgroup>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>{t("messageLabel")} *</label>
                  <textarea required rows={5} style={{ ...inputStyle, resize: "vertical" }}
                    placeholder={t("messagePlaceholder")}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => { e.target.style.borderColor = "#003366"; e.target.style.background = "#fff"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.background = "#f4f4f4"; }} />
                </div>

                <button type="submit" disabled={status === "sending"}
                  className="btn btn-orange"
                  style={{ border: "none", cursor: "pointer", opacity: status === "sending" ? 0.7 : 1, alignSelf: "flex-start" }}>
                  {status === "sending" ? t("sending") : t("send")}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}