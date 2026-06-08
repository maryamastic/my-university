"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";

export default function ProgramsPage() {
  const t = useTranslations("programs");
  const locale = useLocale();

  const bachelors = [
    { title: t("bba.title"), code: "BBA", duration: t("bba.duration"), desc: t("bba.desc"), slug: "bba" },
    { title: t("dm.title"),  code: "DM",  duration: t("dm.duration"),  desc: t("dm.desc"),  slug: "master-digital-marketing" },
    { title: t("bth.title"), code: "BTH", duration: t("bth.duration"), desc: t("bth.desc"), slug: "bachelor-tourism-hospitality" },
    { title: t("bhm.title"), code: "BHM", duration: t("bhm.duration"), desc: t("bhm.desc"), slug: "bachelor-hotel-management" },
  ];

  const masters = [
    { title: t("mba.title"), code: "MBA", duration: t("mba.duration"), desc: t("mba.desc"), slug: "mba" },
    { title: t("mib.title"), code: "MIB", duration: t("mib.duration"), desc: t("mib.desc"), slug: "master-international-business" },
    { title: t("scm.title"), code: "SCM", duration: t("scm.duration"), desc: t("scm.desc"), slug: "msc-supply-chain" },
    { title: t("mim.title"), code: "MIM", duration: t("mim.duration"), desc: t("mim.desc"), slug: "master-international-management" },
    { title: t("mth.title"), code: "MTH", duration: t("mth.duration"), desc: t("mth.desc"), slug: "master-tourism-hospitality" },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ minHeight: "60vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", padding: "8rem 0 5rem" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "#e84e0f", zIndex: 3 }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "1.5rem" }}>{t("heroLabel")}</p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 300, lineHeight: 1.05, color: "#0d1b2e", marginBottom: "2rem", maxWidth: "750px" }}>
            {t("heroH1")} <em style={{ color: "#e84e0f" }}>{t("heroH1Highlight")}</em>
          </h1>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 300, fontSize: "1.05rem", color: "#0d1b2e", maxWidth: "500px", lineHeight: 1.85 }}>{t("heroP")}</p>
        </div>
      </section>

      {/* Quick nav */}
      <section style={{ background: "#e84e0f", padding: "1.5rem 0" }}>
        <div className="container" style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href={`/${locale}/programs/bachelors`} style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#0d1b2e", fontWeight: 500, textDecoration: "none" }}>→ {t("navBachelors")}</Link>
          <Link href={`/${locale}/programs/masters`} style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#0d1b2e", fontWeight: 500, textDecoration: "none" }}>→ {t("navMasters")}</Link>
        </div>
      </section>

      {/* Bachelor's */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container">
          <FadeUp>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "0.75rem" }}>{t("undergraduate")}</p>
                <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#1a1a2e" }}>{t("bachelorsH2")}</h2>
              </div>
              <Link href={`/${locale}/programs/bachelors`} style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a1a2e", border: "1px solid #1a1a2e", padding: "0.6rem 1.2rem", textDecoration: "none" }}>{t("viewAll")}</Link>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "1.5rem" }}>
            {bachelors.map((p, i) => (
              <FadeUp key={p.code} delay={i * 0.08}>
                <Link href={`/${locale}/programs/${p.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.2)", padding: "2.5rem 2rem", transition: "all 0.25s", cursor: "pointer" }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
                      <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 700, color: "rgba(232, 78, 15, 0.15)", lineHeight: 1 }}>{p.code}</span>
                      <span style={{ fontSize: "0.7rem", color: "#e84e0f", border: "1px solid #e84e0f", padding: "0.2rem 0.7rem", letterSpacing: "0.08em" }}>{p.duration}</span>
                    </div>
                    <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "0.75rem", lineHeight: 1.35 }}>{p.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "#5a6070", lineHeight: 1.85, marginBottom: "1.5rem" }}>{p.desc}</p>
                    <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#e84e0f", borderBottom: "1px solid rgba(201,168,76,0.4)", paddingBottom: "2px" }}>
                      {t("enquire")} →
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Master's */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <FadeUp>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "0.75rem" }}>{t("postgraduate")}</p>
                <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#1a1a2e" }}>{t("mastersH2")}</h2>
              </div>
              <Link href={`/${locale}/programs/masters`} style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a1a2e", border: "1px solid #1a1a2e", padding: "0.6rem 1.2rem", textDecoration: "none" }}>{t("viewAll")}</Link>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "1.5rem" }}>
            {masters.map((p, i) => (
              <FadeUp key={p.code} delay={i * 0.08}>
                <Link href={`/${locale}/programs/${p.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ background: "#f8f4ef", border: "1px solid rgba(201,168,76,0.2)", padding: "2.5rem 2rem", transition: "all 0.25s", cursor: "pointer" }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
                      <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 700, color: "rgba(232, 78, 15, 0.15)", lineHeight: 1 }}>{p.code}</span>
                      <span style={{ fontSize: "0.7rem", color: "#e84e0f", border: "1px solid #e84e0f", padding: "0.2rem 0.7rem", letterSpacing: "0.08em" }}>{p.duration}</span>
                    </div>
                    <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "0.75rem", lineHeight: 1.35 }}>{p.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "#5a6070", lineHeight: 1.85, marginBottom: "1.5rem" }}>{p.desc}</p>
                    <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#e84e0f", borderBottom: "1px solid rgba(201,168,76,0.4)", paddingBottom: "2px" }}>
                      {t("enquire")} →
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0d1b2e", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FadeUp>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 300, color: "#f8f4ef", marginBottom: "1rem" }}>{t("ctaH2")}</h2>
            <p style={{ color: "rgba(248,244,239,0.5)", marginBottom: "2.5rem" }}>{t("ctaP")}</p>
            <Link href={`/${locale}/contact`} className="btn btn-orange">{t("talkAdmissions")}</Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}