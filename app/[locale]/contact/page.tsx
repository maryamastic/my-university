"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "1rem 1.25rem",
    background: "#f4f4f4",
    border: "1px solid #e0e0e0",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.9rem",
    color: "#1a1a2e",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
    borderRadius: "0",
  };

  return (
    <>
      <Navbar />

      {/* ── HERO — same as homepage navy ── */}
      <section style={{
        background: "#003366",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
        paddingBottom: "3rem",
      }}>
        {/* Same diagonal accent as homepage */}
        <div style={{ position: "absolute", right: 0, top: 0, width: "40%", height: "100%", background: "rgba(0,0,0,0.12)", clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)", pointerEvents: "none" }} />
        {/* Same orange bottom line as homepage */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5px", background: "#e84e0f" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Breadcrumb — exactly like PGBS screenshot */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
            <Link href={`/${locale}`}
              style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
              {t("breadcrumbHome")}
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>›</span>
            <span style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.9)" }}>
              {t("breadcrumbContact")}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.1,
          }}>
            {t("h1")}
          </h1>
        </div>
      </section>

      {/* ── MAIN CONTENT — white bg like homepage sections ── */}
      <section style={{ background: "#fff", padding: "5rem 0 6rem" }}>
        <div className="container" style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}>

          {/* ── LEFT: FORM ── */}
          <div>
            <h2 style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "28px",
              fontWeight: 800,
              color: "#003366",
              marginBottom: "0.5rem",
            }}>
              {t("formH2")}
            </h2>
            {/* Orange bar — same as sec-bar on homepage */}
            <div style={{ width: "48px", height: "4px", background: "#e84e0f", margin: "10px 0 12px" }} />
            <p style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: "0.9rem",
              color: "#666",
              marginBottom: "2.5rem",
              lineHeight: 1.7,
            }}>
              {t("formSubtitle")}
            </p>

            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "4rem 2rem", background: "#f4f4f4" }}>
                <div style={{ width: "56px", height: "56px", background: "#003366", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                  <span style={{ color: "#fff", fontSize: "1.4rem" }}>✓</span>
                </div>
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#003366", marginBottom: "0.6rem" }}>{t("successTitle")}</h3>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.9rem", color: "#666" }}>{t("successP")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input
                  required type="email"
                  placeholder={t("emailPlaceholder")}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "#003366"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.background = "#f4f4f4"; }}
                />
                <input
                  required type="text"
                  placeholder={t("subjectPlaceholder")}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "#003366"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.background = "#f4f4f4"; }}
                />
                <textarea
                  required rows={9}
                  placeholder={t("bodyPlaceholder")}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => { e.target.style.borderColor = "#003366"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.background = "#f4f4f4"; }}
                />
                <div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      padding: "0.85rem 2rem",
                      background: "#003366",
                      color: "#fff",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      border: "2px solid #003366",
                      cursor: "pointer",
                      opacity: status === "sending" ? 0.7 : 1,
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#002244"; e.currentTarget.style.borderColor = "#002244"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#003366"; e.currentTarget.style.borderColor = "#003366"; }}>
                    {status === "sending" ? t("sending") : t("send")}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ── RIGHT: CONTACT INFO — card like PGBS ── */}
          <div style={{
            background: "#fff",
            border: "1px solid #e0e0e0",
            padding: "2.5rem",
            marginTop: "6rem",
          }}>

            {/* Office */}
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2.5rem" }}>
              <span style={{ fontSize: "1.3rem", marginTop: "2px" }}>📍</span>
              <div>
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem", fontWeight: 800, color: "#003366", marginBottom: "0.5rem" }}>
                  {t("officeLabel")}
                </h3>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.88rem", color: "#666", lineHeight: 1.8 }}>
                  {t("officeAddress")}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "#e0e0e0", marginBottom: "2.5rem" }} />

            {/* Email */}
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2.5rem" }}>
              <span style={{ fontSize: "1.3rem", marginTop: "2px" }}>✉️</span>
              <div>
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem", fontWeight: 800, color: "#003366", marginBottom: "0.5rem" }}>
                  {t("emailLabel")}
                </h3>
                <a href={`mailto:${t("emailContact")}`}
                  style={{ display: "block", fontFamily: "Open Sans, sans-serif", fontSize: "0.88rem", color: "#666", textDecoration: "none", marginBottom: "4px" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e84e0f")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}>
                  {t("emailContact")}
                </a>
                <a href={`mailto:${t("emailAdmission")}`}
                  style={{ display: "block", fontFamily: "Open Sans, sans-serif", fontSize: "0.88rem", color: "#666", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e84e0f")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}>
                  {t("emailAdmission")}
                </a>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "#e0e0e0", marginBottom: "2.5rem" }} />

            {/* Phone */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <span style={{ fontSize: "1.3rem", marginTop: "2px" }}>📞</span>
              <div>
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem", fontWeight: 800, color: "#003366", marginBottom: "0.5rem" }}>
                  {t("phoneLabel")}
                </h3>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.88rem", color: "#666" }}>
                  {t("phoneValue")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}