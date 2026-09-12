"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/* ── LANGUAGE SWITCHER ── */
function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
const pathname = usePathname();
const [open, setOpen] = useState(false);

  const switchTo = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <button onClick={() => setOpen(!open)} style={{
        background: "none", border: "1px solid rgba(255,255,255,0.3)",
        cursor: "pointer", color: "rgba(255,255,255,0.9)",
        fontFamily: "Montserrat, sans-serif", fontSize: "11px", fontWeight: 700,
        letterSpacing: "0.08em", padding: "5px 10px",
        display: "flex", alignItems: "center", gap: "5px",
      }}>
        {locale === "en" ? "🇬🇧" : "🇫🇷"} {locale.toUpperCase()} ▾
      </button>

      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 998 }} />
          <div style={{
            position: "absolute", top: "calc(100% + 8px)", right: 0, left: "auto",
            background: "#fff", border: "1px solid #e0e0e0",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)", minWidth: "130px", zIndex: 999,
          }}>
            {[
              { code: "en", flag: "🇬🇧", name: "English" },
              { code: "fr", flag: "🇫🇷", name: "Français" },
            ].map((l) => (
              <button key={l.code} onClick={() => switchTo(l.code)} style={{
                display: "flex", alignItems: "center", gap: "8px",
                width: "100%", padding: "10px 14px",
                background: l.code === locale ? "#f0f4f8" : "#fff",
                border: "none",
                borderLeft: l.code === locale ? "3px solid #003366" : "3px solid transparent",
                cursor: "pointer",
                fontFamily: "Montserrat, sans-serif", fontSize: "11px", fontWeight: 700,
                color: l.code === locale ? "#003366" : "#444",
                letterSpacing: "0.06em", textAlign: "left", transition: "background 0.15s",
              }}
              onMouseEnter={(e) => { if (l.code !== locale) e.currentTarget.style.background = "#f8f8f8"; }}
              onMouseLeave={(e) => { if (l.code !== locale) e.currentTarget.style.background = "#fff"; }}>
                {l.flag} {l.code.toUpperCase()}
                <span style={{ fontSize: "10px", color: "#999", fontWeight: 400 }}>{l.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);
  const pathname = usePathname();
useEffect(() => {
  setMobileOpen(false);
  setMobileExpanded(null);
  setMobileSubExpanded(null);
}, [pathname]);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(key);
  };
  const closeMenu = () => { closeTimer.current = setTimeout(() => setActive(null), 100); };
  const cancelClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [mobileOpen]);

  // Nav items use translation keys
  const navItems = [
    { key: "home",     label: t("home"),     href: "/",        hasMega: false },
    { key: "about",    label: t("about"),    href: "/about",   hasMega: false },
    { key: "programs", label: t("programs"), href: "/programs",hasMega: true  },
    { key: "contact",  label: t("contact"),  href: "/contact", hasMega: false },
  ];

  // Mega menu built from translations
  const megaData = {
    programs: {
     cols: [
  {
    head: t("mega.bachelorsHead"),
    links: [
      { label: t("mega.bachelor1"), href: "/programs/international-business-retail-management" },
      { label: t("mega.bachelor2"), href: "/programs/sales-project-management" },
      { label: t("mega.bachelor3"), href: "/programs/hospitality-tourism-management" },
      { label: t("mega.bachelor4"), href: "/programs/entrepreneurship-startup-strategies" },
    ],
  },
  {
    head: t("mega.bbsHead"),
    links: [
      { label: t("mega.bbs1"), href: "/programs/bbs-international-business-management" },
      { label: t("mega.bbs2"), href: "/programs/bbs-hotel-and-tourismmanagement" },
    ],
  },
  {
    head: t("mega.mastersHead"),
    links: [
      { label: t("mega.master1"), href: "/programs/master-international-business-management" },
      { label: t("mega.master2"), href: "/programs/master-hotel-tourism-management" },
      { label: t("mega.master3"), href: "/programs/master-entrepreneurship-startup-strategies" },
      { label: t("mega.master4"), href: "/programs/master-international-marketing" },
      { label: t("mega.master5"), href: "/programs/master-human-resource-management" },
      { label: t("mega.master6"), href: "/programs/master-luxury-brand-management" },
    ],
  },
  {
    head: t("mega.execHead"),
    links: [
      { label: t("mega.exec1"), href: "/programs/dba" },
      { label: t("mega.exec2"), href: "/programs/fle" },
    ],
  },
  {
    head: t("mega.allHead"),
    links: [
      { label: t("mega.all1"), href: "/programs" },
      { label: t("mega.all2"), href: "/programs/bachelors" },
    { label: t("mega.all3"), href: "/programs/masters" },
    ],
    showBtn: true,
  },
],
    },
  } as Record<string, { cols: { head: string; links: { label: string; href: string }[]; showBtn?: boolean }[] }>;

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 200 }}>

      {/* ── TOP UTILITY BAR ── */}
      <div style={{ background: "#e84e0f", padding: "3px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "16px" }}>
          <Link href={`/${locale}/contact`}
            style={{ fontFamily: "Open Sans, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.85)", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}>
            {t("contactUs")}
          </Link>
          <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.3)" }} />
          <Link href={`/${locale}/contact`}
            style={{ fontFamily: "Open Sans, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.85)", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}>
            {t("openDay")}
          </Link>
          <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.3)" }} />
          <LangSwitcher />
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <nav style={{ background: "#0d1b2e", boxShadow: "0 2px 20px rgba(0,0,0,0.35)", position: "relative" }}>
        <div className="container" style={{ display: "flex", alignItems: "stretch", justifyContent: "space-between", height: "64px" }}>

          {/* Logo */}
          <Link href={`/${locale}`} style={{ textDecoration: "none", display: "flex", alignItems: "center", paddingRight: "24px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <img
                  src="https://img.icons8.com/ios/50/e84e0f/eiffel-tower.png"
                  width="36"
                  height="36"
                  alt="Eiffel Tower"
                />
                <div>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "18px", fontWeight: 800, color: "#fff", lineHeight: 1.05 }}>Nexora</div>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "18px", fontWeight: 800, color: "#e84e0f", lineHeight: 1.05 }}>Business School International</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "stretch" }} className="desktop-nav">
            {navItems.map((item) => (
              <div key={item.key}
                style={{ display: "flex", alignItems: "stretch" }}
                onMouseEnter={() => item.hasMega ? openMenu(item.key) : setActive(item.key)}
                onMouseLeave={() => item.hasMega ? closeMenu() : setActive(null)}>
                <Link href={`/${locale}${item.href}`} style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "Montserrat, sans-serif", fontSize: "12px", fontWeight: 700,
                  color: active === item.key ? "#fff" : "rgba(255,255,255,0.85)",
                  padding: "0 14px", height: "100%",
                  display: "flex", alignItems: "center",
                  gap: item.hasMega ? "5px" : "0",
                  borderBottom: active === item.key ? "3px solid #e84e0f" : "3px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                  whiteSpace: "nowrap", textDecoration: "none",
                }}>
                  {item.label}
                  {item.hasMega && (
                    <motion.span animate={{ rotate: active === item.key ? 180 : 0 }} transition={{ duration: 0.2 }}
                      style={{ display: "inline-block", fontSize: "9px", opacity: 0.6 }}>▾</motion.span>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Apply button */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="desktop-nav">
            <Link href={`/${locale}/contact`} className="btn btn-orange" style={{ fontSize: "11px" }}>
              {t("applyOnline")}
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="hamburger"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#fff", fontSize: "1.5rem", padding: "0.5rem 0.5rem" }}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* ── MEGA MENU ── */}
        <AnimatePresence>
          {active && megaData[active] && (
            <motion.div key={active}
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.16 }}
              onMouseEnter={cancelClose} onMouseLeave={closeMenu}
              style={{
                position: "absolute", top: "100%", left: 0, right: 0,
                background: "#fff", borderTop: "3px solid #e84e0f",
                boxShadow: "0 12px 40px rgba(0,0,0,0.15)", zIndex: 500,
              }}>
              <div className="container" style={{
                padding: "32px 2rem", display: "grid",
                gridTemplateColumns: `repeat(${megaData[active].cols.length}, 1fr)`,
                gap: "24px",
              }}>
                {megaData[active].cols.map((col) => (
                  <div key={col.head}>
                    <p style={{
                      fontFamily: "Montserrat, sans-serif", fontSize: "10px", fontWeight: 800,
                      letterSpacing: "0.15em", textTransform: "uppercase", color: "#003366",
                      paddingBottom: "8px", borderBottom: "2px solid #e84e0f", marginBottom: "10px",
                    }}>{col.head}</p>
                    {col.links.map((link) => (
                      <MegaLink key={link.href} href={`/${locale}${link.href}`}
                        label={link.label} onClose={() => setActive(null)} />
                    ))}
                    {col.showBtn && (
                      <div style={{ marginTop: "16px" }}>
                        <Link href={`/${locale}/programs`} className="btn btn-orange"
                          style={{ fontSize: "10px", padding: "9px 16px" }}
                          onClick={() => setActive(null)}>
                          {t("mega.viewAll")}
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>

      {/* ── MOBILE DRAWER (slides in from the right) ──
          Rendered through a portal directly into <body> so it is
          always positioned relative to the real viewport, regardless
          of any transformed/positioned ancestor elsewhere on the page. */}
      {mounted && createPortal(
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* backdrop */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  zIndex: 9998,
                  pointerEvents: "auto",
                }}
              />
              {/* drawer panel */}
              <motion.div
                initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  backgroundColor: "#080f1c",
                  position: "fixed",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  height: "100%",
                  width: "85vw",
                  maxWidth: "360px",
                  zIndex: 9999,
                  overflowY: "auto",
                  overflowX: "hidden",
                  boxSizing: "border-box",
                  boxShadow: "-8px 0 30px rgba(0,0,0,0.4)",
                }}>
                <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem 1.25rem 0" }}>
                  <button onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", fontSize: "1.4rem" }}>
                    ✕
                  </button>
                </div>
                <div style={{ padding: "0.5rem 1.5rem 2rem" }}>
                  {navItems.map((item) => (
                    <div key={item.key} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                      {item.hasMega ? (
                        <>
                          <button onClick={() => setMobileExpanded(mobileExpanded === item.key ? null : item.key)}
                            style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", fontFamily: "Montserrat, sans-serif", fontSize: "13px", fontWeight: 700, color: "#fff" }}>
                            {item.label}
                            <motion.span
                              animate={{ rotate: mobileExpanded === item.key ? 180 : 0 }}
                              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                              style={{ display: "inline-block", fontSize: "9px", opacity: 0.6 }}>
                              ▾
                            </motion.span>
                          </button>
                          <AnimatePresence initial={false}>
                            {mobileExpanded === item.key && megaData[item.key] && (
                              <motion.div
                                key="submenu"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ height: { duration: 0.32, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.22 } }}
                                style={{ overflow: "hidden" }}>
                                                             <div style={{ paddingLeft: "16px", paddingBottom: "12px" }}>
                                  {megaData[item.key].cols.map((col, colIdx) => (
                                    <motion.div key={col.head}
                                      initial={{ opacity: 0, y: -6 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.25, delay: 0.05 + colIdx * 0.04 }}
                                      style={{ marginBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                                      <button
                                        onClick={() => setMobileSubExpanded(mobileSubExpanded === col.head ? null : col.head)}
                                        style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", fontFamily: "Montserrat, sans-serif", fontSize: "9px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e84e0f" }}>
                                        {col.head}
                                        <motion.span
                                          animate={{ rotate: mobileSubExpanded === col.head ? 180 : 0 }}
                                          transition={{ duration: 0.2 }}
                                          style={{ display: "inline-block", fontSize: "8px", opacity: 0.7 }}>
                                          ▾
                                        </motion.span>
                                      </button>
                                      <AnimatePresence initial={false}>
                                        {mobileSubExpanded === col.head && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ height: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.18 } }}
                                            style={{ overflow: "hidden" }}>
                                            <div style={{ paddingBottom: "8px" }}>
                                              {col.links.map((link) => (
                                                <Link key={link.href} href={`/${locale}${link.href}`}
                                                  onClick={() => { setMobileOpen(false); setMobileExpanded(null); setMobileSubExpanded(null); }}
                                                  style={{ display: "block", fontFamily: "Open Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.65)", textDecoration: "none", padding: "4px 0", whiteSpace: "normal", wordBreak: "break-word", overflowWrap: "break-word", transition: "color 0.15s" }}
                                                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                                                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}>
                                                  {link.label}
                                                </Link>
                                              ))}
                                              {col.showBtn && (
                                                <Link href={`/${locale}/programs`}
                                                  onClick={() => { setMobileOpen(false); setMobileExpanded(null); setMobileSubExpanded(null); }}
                                                  style={{ display: "inline-block", marginTop: "6px", fontFamily: "Montserrat, sans-serif", fontSize: "11px", fontWeight: 700, color: "#e84e0f", textDecoration: "underline" }}>
                                                  {t("mega.viewAll")}
                                                </Link>
                                              )}
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link href={`/${locale}${item.href}`} onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                          style={{ display: "block", padding: "12px 0", fontFamily: "Montserrat, sans-serif", fontSize: "13px", fontWeight: 700, color: "#fff", textDecoration: "none" }}>
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div style={{ marginTop: "20px" }}>
                    <Link href={`/${locale}/contact`} className="btn btn-orange"
                      style={{ width: "100%", justifyContent: "center" }}
                      onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}>
                      {t("applyOnline")}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

function MegaLink({ href, label, onClose }: { href: string; label: string; onClose: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={href} onClick={onClose}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "flex", alignItems: "center", gap: "4px", padding: "5px 0", fontFamily: "Open Sans, sans-serif", fontSize: "13px", color: hov ? "#e84e0f" : "#333", textDecoration: "none", transition: "color 0.15s" }}>
      <span style={{
        color: "#e84e0f",
        fontSize: "11px",
        fontWeight: 700,
        opacity: hov ? 1 : 0,
        width: hov ? "auto" : 0,
        overflow: "hidden",
        transition: "opacity 0.15s",
        display: "inline-block",
      }}>›</span>
      {label}
    </Link>
  );
}