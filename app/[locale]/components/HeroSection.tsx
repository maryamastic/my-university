"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface HeroSectionProps {
  t: ReturnType<typeof useTranslations>;
  locale: string;
}
export default function HeroSection({ t, locale }: HeroSectionProps) {
  return (
    <section style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }} />
      <div style={{ position: "absolute", top: "-8rem", right: "-8rem", width: "38rem", height: "38rem", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.1)", pointerEvents: "none", zIndex: 2 }} />
      <div style={{ position: "absolute", bottom: "4rem", left: "-5rem", width: "22rem", height: "22rem", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.07)", pointerEvents: "none", zIndex: 2 }} />

      <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: "8rem" }}>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "1.5rem" }}>
          {t("heroTag")}
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 300, lineHeight: 1.05, color: "#0d1b2e", marginBottom: "2rem", maxWidth: "750px" }}>
          {t("heroH1Line1")}<br />
          <em style={{ color: "#e84e0f" }}>{t("heroH1Highlight")}</em> {t("heroH1Line2")}<br />
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
          style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 300, fontSize: "1.05rem", color: "#0d1b2e", maxWidth: "460px", marginBottom: "3rem", lineHeight: 1.85 }}>
          {t("heroP")}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href={`/${locale}/programs`} className="btn btn-orange">{t("ourPrograms")}</Link>
        </motion.div>
      </div>
    </section>
  );
}