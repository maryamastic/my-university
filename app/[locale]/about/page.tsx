"use client";
import { useTranslations, useLocale } from "next-intl";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";
import Link from "next/link";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();

  const values = [
    { n: "01", title: t("value1Title"), desc: t("value1Desc") },
    { n: "02", title: t("value2Title"), desc: t("value2Desc") },
    { n: "03", title: t("value3Title"), desc: t("value3Desc") },
    { n: "04", title: t("value4Title"), desc: t("value4Desc") },
  ];

  const team = [
    { name: "Prof. Sarah Mitchell", role: t("role1") },
    { name: "Dr. James Okonkwo",   role: t("role2") },
    { name: "Prof. Amara Chen",    role: t("role3") },
    { name: "Dr. Lucas Ferreira",  role: t("role4") },
  ];

  const stats = [
    { n: "1969",   l: t("statFounded") },
    { n: "5,000+", l: t("statStudents") },
    { n: "200+",   l: t("statFaculty") },
    { n: "60+",    l: t("statNationalities") },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#0f2041", padding: "8rem 0 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "#e8352a" }} />
        <div className="container">
          <span style={{ display: "inline-block", background: "#e8352a", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.35rem 0.9rem", marginBottom: "1.5rem" }}>
            {t("tag")}
          </span>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, color: "#fff", maxWidth: "700px", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            {t("h1")}
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", maxWidth: "520px", lineHeight: 1.8 }}>
            {t("heroP")}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <FadeUp>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8352a", marginBottom: "0.75rem" }}>{t("missionLabel")}</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#0f2041", marginBottom: "0.75rem" }}>{t("missionH2")}</h2>
            <div style={{ width: "48px", height: "3px", background: "#e8352a", marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.85, marginBottom: "1rem" }}>{t("missionP1")}</p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.85 }}>{t("missionP2")}</p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {stats.map((s) => (
                <div key={s.l} style={{ background: "#f5f6f8", border: "1px solid #e5e7eb", padding: "2rem", textAlign: "center" }}>
                  <p style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 900, color: "#0f2041" }}>{s.n}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#6b7280", marginTop: "0.3rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "#f5f6f8" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8352a", marginBottom: "0.75rem" }}>{t("valuesLabel")}</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#0f2041" }}>{t("valuesH2")}</h2>
            <div style={{ width: "48px", height: "3px", background: "#e8352a", margin: "0.75rem auto 0" }} />
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "2rem" }}>
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.1}>
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "2.5rem 2rem", borderTop: "4px solid #e8352a" }}>
                  <p style={{ fontFamily: "Playfair Display, serif", fontSize: "2.5rem", fontWeight: 900, color: "rgba(232,53,42,0.15)", marginBottom: "1rem" }}>{v.n}</p>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700, color: "#0f2041", marginBottom: "0.75rem" }}>{v.title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8352a", marginBottom: "0.75rem" }}>{t("leadershipLabel")}</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#0f2041" }}>{t("leadershipH2")}</h2>
            <div style={{ width: "48px", height: "3px", background: "#e8352a", margin: "0.75rem auto 0" }} />
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "2rem" }}>
            {team.map((m, i) => (
              <FadeUp key={m.name} delay={i * 0.1}>
                <div style={{ textAlign: "center", padding: "2.5rem 1.5rem", border: "1px solid #e5e7eb" }}>
                  <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#0f2041", margin: "0 auto 1.25rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1.4rem", color: "#fff", fontWeight: 700 }}>
                      {m.name.split(" ").map((w) => w[0]).slice(1, 3).join("")}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 700, color: "#0f2041", marginBottom: "0.4rem" }}>{m.name}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#e8352a", fontWeight: 500 }}>{m.role}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e8352a", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FadeUp>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>{t("ctaH2")}</h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem" }}>{t("ctaP")}</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href={`/${locale}/contact`} className="btn btn-outline-white">{t("applyNow")}</Link>
              <Link href={`/${locale}/programs`} style={{ display: "inline-block", padding: "0.8rem 2rem", background: "#fff", color: "#e8352a", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none" }}>{t("viewPrograms")}</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}