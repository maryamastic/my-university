"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";

export default function MastersPage() {
  const t = useTranslations("programs");
  const locale = useLocale();

  const programs = [
    { title: t("mibm.title"), code: "MIBM", duration: t("mibm.duration"), intake: t("mibm.intake"), desc: t("mibm.desc"), modules: [t("mibm.m1"), t("mibm.m2"), t("mibm.m3"), t("mibm.m4"), t("mibm.m5"), t("mibm.m6")] },
    { title: t("mhtm.title"), code: "MHTM", duration: t("mhtm.duration"), intake: t("mhtm.intake"), desc: t("mhtm.desc"), modules: [t("mhtm.m1"), t("mhtm.m2"), t("mhtm.m3"), t("mhtm.m4"), t("mhtm.m5"), t("mhtm.m6")] },
    { title: t("mess.title"), code: "MESS", duration: t("mess.duration"), intake: t("mess.intake"), desc: t("mess.desc"), modules: [t("mess.m1"), t("mess.m2"), t("mess.m3"), t("mess.m4"), t("mess.m5"), t("mess.m6")] },
    { title: t("mim.title"),  code: "MIM",  duration: t("mim.duration"),  intake: t("mim.intake"),  desc: t("mim.desc"),  modules: [t("mim.m1"),  t("mim.m2"),  t("mim.m3"),  t("mim.m4"),  t("mim.m5"),  t("mim.m6")] },
    { title: t("mhrm.title"), code: "MHRM", duration: t("mhrm.duration"), intake: t("mhrm.intake"), desc: t("mhrm.desc"), modules: [t("mhrm.m1"), t("mhrm.m2"), t("mhrm.m3"), t("mhrm.m4"), t("mhrm.m5"), t("mhrm.m6")] },
    { title: t("mlbm.title"), code: "MLBM", duration: t("mlbm.duration"), intake: t("mlbm.intake"), desc: t("mlbm.desc"), modules: [t("mlbm.m1"), t("mlbm.m2"), t("mlbm.m3"), t("mlbm.m4"), t("mlbm.m5"), t("mlbm.m6")] },
  ];

  const slugs: Record<string, string> = {
    MIBM: "master-international-business-management",
    MHTM: "master-hotel-tourism-management",
    MESS: "master-entrepreneurship-startup-strategies",
    MIM:  "master-international-marketing",
    MHRM: "master-human-resource-management",
    MLBM: "master-luxury-brand-management",
  };

  return (
    <>
      <Navbar />

      {/* Hero — Masters */}
      <section style={{
        minHeight: "60vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "8rem 0 5rem",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "#e84e0f", zIndex: 3 }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#e84e0f",
            marginBottom: "1.5rem",
          }}>
            {t("postgraduate")}
          </p>

          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#0d1b2e",
            marginBottom: "2rem",
            maxWidth: "750px",
          }}>
            {t("mastersH1")} <em style={{ color: "#e84e0f" }}>{t("mastersH1Highlight")}</em>
          </h1>

          <p style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 300,
            fontSize: "1.05rem",
            color: "#0d1b2e",
            maxWidth: "480px",
            lineHeight: 1.85,
          }}>
            {t("mastersHeroP")}
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {programs.map((p) => (
              <FadeUp key={p.code}>
                <div style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.2)", padding: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                      <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "3rem", fontWeight: 700, color: "rgba(232, 78, 15, 0.15)", lineHeight: 1 }}>{p.code}</span>

                      <span style={{ fontSize: "0.7rem", color: "#e84e0f", border: "1px solid rgba(201,168,76,0.4)", padding: "0.25rem 0.8rem", letterSpacing: "0.1em" }}>{t("postgraduate")}</span>
                    </div>
                    <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "1rem", lineHeight: 1.3 }}>{p.title}</h2>
                    <p style={{ fontSize: "0.9rem", color: "#5a6070", lineHeight: 1.85, marginBottom: "1.5rem" }}>{p.desc}</p>
                    <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
                      <div>
                        <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a9090", marginBottom: "0.2rem" }}>{t("duration")}</p>
                        <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "#1a1a2e" }}>{p.duration}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a9090", marginBottom: "0.2rem" }}>{t("intake")}</p>
                        <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "#1a1a2e" }}>{p.intake}</p>
                      </div>
                    </div>
                    <Link href={`/${locale}/programs/${slugs[p.code]}`} className="btn btn-orange" style={{ fontSize: "0.75rem" }}>{t("applyNow")}</Link>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "1.2rem" }}>{t("keyModules")}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                      {p.modules.map((mod) => (
                        <div key={mod} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                          <span style={{ width: "5px", height: "5px", background: "#e84e0f", borderRadius: "50%", flexShrink: 0 }} />
                          <span style={{ fontSize: "0.83rem", color: "#5a6070" }}>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0d1b2e", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FadeUp>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 300, color: "#f8f4ef", marginBottom: "1rem" }}>{t("mastersCtaH2")}</h2>
            <p style={{ color: "rgba(248,244,239,0.5)", marginBottom: "2.5rem" }}>{t("mastersCtaP")}</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href={`/${locale}/contact`} className="btn btn-orange">{t("applyNow")}</Link>
              <Link href={`/${locale}/programs/bachelors`} className="btn btn-outline-white">{t("viewBachelors")}</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}