"use client";
import { useTranslations, useLocale } from "next-intl";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeUp from "../../components/FadeUp";
import Link from "next/link";

export default function BachelorsPage() {
  const t = useTranslations("programs");
  const locale = useLocale();

  const programs = [
    { title: t("bba.title"), code: "BBA", duration: t("bba.duration"), intake: t("bba.intake"), desc: t("bba.desc"), modules: [t("bba.m1"), t("bba.m2"), t("bba.m3"), t("bba.m4"), t("bba.m5"), t("bba.m6")] },
    { title: t("dm.title"),  code: "DM",  duration: t("dm.duration"),  intake: t("dm.intake"),  desc: t("dm.desc"),  modules: [t("dm.m1"),  t("dm.m2"),  t("dm.m3"),  t("dm.m4"),  t("dm.m5"),  t("dm.m6")] },
    { title: t("bth.title"), code: "BTH", duration: t("bth.duration"), intake: t("bth.intake"), desc: t("bth.desc"), modules: [t("bth.m1"), t("bth.m2"), t("bth.m3"), t("bth.m4"), t("bth.m5"), t("bth.m6")] },
    { title: t("bhm.title"), code: "BHM", duration: t("bhm.duration"), intake: t("bhm.intake"), desc: t("bhm.desc"), modules: [t("bhm.m1"), t("bhm.m2"), t("bhm.m3"), t("bhm.m4"), t("bhm.m5"), t("bhm.m6")] },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
  {/* Hero — Bachelors */}
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
            {t("undergraduate")}
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
            {t("bachelorsH1")} <em style={{ color: "#e84e0f" }}>{t("bachelorsH1Highlight")}</em>
          </h1>

          <p style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 300,
            fontSize: "1.05rem",
            color: "#0d1b2e",
            maxWidth: "480px",
            lineHeight: 1.85,
          }}>
            {t("bachelorsHeroP")}
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
                      
                      <span style={{ fontSize: "0.7rem", color: "#e84e0f", border: "1px solid rgba(201,168,76,0.4)", padding: "0.25rem 0.8rem", letterSpacing: "0.1em" }}>{t("undergraduate")}</span>
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
                    <Link href={`/${locale}/contact`} className="btn btn-orange" style={{ fontSize: "0.75rem" }}>{t("applyNow")}</Link>
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
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 300, color: "#f8f4ef", marginBottom: "1rem" }}>{t("bachelorsCtaH2")}</h2>
            <p style={{ color: "rgba(248,244,239,0.5)", marginBottom: "2.5rem" }}>{t("bachelorsCtaP")}</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href={`/${locale}/contact`} className="btn btn-orange">{t("applyNow")}</Link>
              <Link href={`/${locale}/programs/masters`} className="btn btn-outline-white">{t("viewMasters")}</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}