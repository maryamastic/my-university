"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FadeUp from "./components/FadeUp";
import ProgramCard from "./components/ProgramCard";
import HeroSection from "./components/HeroSection";

export default function Home() {
  const t = useTranslations("home");
  const locale = useLocale();

  // ── All data built from translations ──
  const programs = [
    { title: t("programs.bba.title"), code: t("programs.bba.code"), duration: t("programs.bba.duration"), level: t("programs.bba.sub") },
    { title: t("programs.mba.title"), code: t("programs.mba.code"), duration: t("programs.mba.duration"), level: t("programs.mba.sub") },
    { title: t("programs.dm.title"),  code: t("programs.dm.code"),  duration: t("programs.dm.duration"),  level: t("programs.dm.sub") },
    { title: t("programs.scm.title"), code: t("programs.scm.code"), duration: t("programs.scm.duration"), level: t("programs.scm.sub") },
    { title: t("programs.bth.title"), code: t("programs.bth.code"), duration: t("programs.bth.duration"), level: t("programs.bth.sub") },
    { title: t("programs.mib.title"), code: t("programs.mib.code"), duration: t("programs.mib.duration"), level: t("programs.mib.sub") },
  ];

  const stats = [
    { number: "5,000+", label: t("statsStudents") },
    { number: "94%",    label: t("statsEmployment") },
    { number: "60+",    label: t("statsPartners") },
    { number: "120+",   label: t("statsAlumni") },
  ];

  const whyUs = [
    { icon: "🌍", title: t("why1Title"), desc: t("why1Desc") },
    { icon: "🎓", title: t("why2Title"), desc: t("why2Desc") },
    { icon: "💼", title: t("why3Title"), desc: t("why3Desc") },
    { icon: "🔬", title: t("why4Title"), desc: t("why4Desc") },
  ];

  return (
    <>
      <Navbar />
 <HeroSection t={t} locale={locale} />
 {/* ── STATS ── */}
      <section style={{ background: "#e84e0f", padding: "3.5rem 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))", gap: "2rem", textAlign: "center" }}>
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{s.number}</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(247,247,247,0.65)", marginTop: "0.4rem" }}>{s.label}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <FadeUp>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "1rem" }}>{t("aboutLabel")}</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#1a1a2e", marginBottom: "1.2rem" }}>
              {t("aboutH2")} <em style={{ color: "#e84e0f" }}>{t("aboutH2Highlight")}</em>
            </h2>
            <div className="gold-line" />
            <p style={{ color: "#5a6070", marginTop: "1.5rem", marginBottom: "1.2rem", fontSize: "0.95rem", lineHeight: 1.9 }}>{t("aboutP1")}</p>
            <p style={{ color: "#5a6070", marginBottom: "2rem", fontSize: "0.95rem", lineHeight: 1.9 }}>{t("aboutP2")}</p>
            <Link href={`/${locale}/about`} className="btn btn-orange">{t("discoverMore")}</Link>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.25)", padding: "3rem", position: "relative", boxShadow: "8px 8px 0 rgba(201,168,76,0.12)" }}>
              <div style={{ position: "absolute", top: "-1rem", left: "-1rem", width: "2rem", height: "2rem", border: "2px solid #e84e0f", borderRight: "none", borderBottom: "none" }} />
              <div style={{ position: "absolute", bottom: "-1rem", right: "-1rem", width: "2rem", height: "2rem", border: "2px solid #e84e0f", borderLeft: "none", borderTop: "none" }} />
              <blockquote style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 300, fontStyle: "italic", color: "#1a1a2e", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                {t("quote")}
              </blockquote>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#e84e0f" }}>{t("quoteAuthor")}</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "1rem" }}>{t("programsLabel")}</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#1a1a2e" }}>{t("programsH2")}</h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: "1.5rem" }}>
            {programs.map((p, i) => (
              <FadeUp key={p.code} delay={i * 0.08}>
                <ProgramCard program={p} />
              </FadeUp>
            ))}
          </div>
          <FadeUp style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href={`/${locale}/programs`} className="btn btn-orange">{t("viewAll")}</Link>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "1rem" }}>{t("whyLabel")}</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#1a1a2e" }}>{t("whyH2")}</h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "2rem" }}>
            {whyUs.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.2)", padding: "2.5rem 2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", color: "#1a1a2e", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "#5a6070", lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#003366", padding: "6rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FadeUp>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "1rem" }}>{t("ctaLabel")}</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#f8f4ef", marginBottom: "1rem" }}>
              {t("ctaH2")}
            </h2>
            <p style={{ color: "rgba(248,244,239,0.5)", marginBottom: "2.5rem", fontSize: "0.95rem" }}>
              {t("ctaP")}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href={`/${locale}/contact`} className="btn btn-orange">{t("applyOnline")}</Link>
              <Link href={`/${locale}/contact`} className="btn btn-outline-white" style={{ color: "#f8f4ef" }}>{t("contactAdmissions")}</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}