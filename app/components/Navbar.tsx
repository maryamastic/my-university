"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const megaData: Record<string, { cols: { head: string; links: { label: string; href: string }[] }[] }> = {
  School: {
    cols: [
      { head: "The School", links: [
        { label: "About Us", href: "/about" },
        { label: "The New Campus", href: "/about" },
        { label: "Accreditations & Labels", href: "/about" },
        { label: "Our CSR Approach", href: "/about" },
        { label: "Rankings", href: "/about" },
        { label: "News", href: "/about" },
        { label: "Partnerships & Networks", href: "/about" },
      ]},
    ],
  },
  Programs: {
    cols: [
      { head: "Bachelor's Degree", links: [
        { label: "International Bachelor in Management", href: "/programs/bachelors" },
        { label: "Bachelor in Digital Marketing", href: "/programs/bachelors" },
        { label: "Bachelor in Tourism & Hospitality", href: "/programs/bachelors" },
        { label: "Bachelor in Hotel Management", href: "/programs/bachelors" },
      ]},
      { head: "Master's / MSc", links: [
        { label: "MBA – Master of Business Administration", href: "/programs/masters" },
        { label: "MSc Supply Chain Management", href: "/programs/masters" },
        { label: "MSc International Finance", href: "/programs/masters" },
        { label: "MSc International Management", href: "/programs/masters" },
        { label: "Master in International Business", href: "/programs/masters" },
        { label: "MSc Tourism & Hospitality Management", href: "/programs/masters" },
      ]},
      { head: "Executive Education", links: [
        { label: "MBA Full-Time", href: "/programs/masters" },
        { label: "MBA Part-Time", href: "/programs/masters" },
        { label: "DBA – Doctorate of Business Administration", href: "/programs/masters" },
        { label: "Other Executive Programs", href: "/programs/masters" },
      ]},
      { head: "All Programs", links: [
        { label: "Browse All Programs", href: "/programs" },
        { label: "Short Programs", href: "/programs" },
        { label: "Exchange Programs", href: "/programs" },
      ]},
    ],
  },
  Admissions: {
    cols: [
      { head: "Admissions by Program", links: [
        { label: "Bachelor's Degree", href: "/contact" },
        { label: "Master's / MSc", href: "/contact" },
        { label: "MBA", href: "/contact" },
        { label: "DBA", href: "/contact" },
      ]},
      { head: "Admission Methods", links: [
        { label: "How to Apply", href: "/contact" },
        { label: "Tuition Fees", href: "/contact" },
        { label: "Scholarships & Funding", href: "/contact" },
        { label: "Apply Online", href: "/contact" },
      ]},
    ],
  },
  International: {
    cols: [
      { head: "International", links: [
        { label: "International Affairs", href: "/about" },
        { label: "Grants & Financing", href: "/about" },
        { label: "Partner Universities", href: "/about" },
        { label: "International Students", href: "/about" },
      ]},
    ],
  },
  "Student Services": {
    cols: [
      { head: "Professionalization", links: [
        { label: "Internships", href: "/about" },
        { label: "Apprenticeships", href: "/about" },
        { label: "Partner Companies", href: "/about" },
        { label: "Career Services", href: "/about" },
      ]},
      { head: "Student Life", links: [
        { label: "Student Associations", href: "/about" },
        { label: "Student Housing", href: "/about" },
        { label: "Financing Your Studies", href: "/about" },
        { label: "Diversity & Inclusion", href: "/about" },
      ]},
    ],
  },
};

const navItems = ["School", "Programs", "Admissions", "International", "Student Services"];

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(label);
  };
  const close = () => {
    closeTimer.current = setTimeout(() => setActive(null), 100);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  return (
    <>
      {/* ── TOP UTILITY BAR ── */}

      {/* ── MAIN NAV ── */}
      <nav style={{ background: "#fff", position: "sticky", top: 0, zIndex: 200, boxShadow: "0 2px 16px rgba(0,0,0,0.2)" }}>
        <div className="container" style={{ display: "flex", alignItems: "stretch", justifyContent: "space-between", height: "64px" }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", paddingRight: "24px" }}>
            <div>
              <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "20px", fontWeight: 800, color: "#003366", lineHeight: 1.05 }}>Global</div>
              <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "20px", fontWeight: 800, color: "#e84e0f", lineHeight: 1.05 }}>University</div>
            </div>
          </Link>

          {/* Desktop nav items */}
          <div style={{ display: "flex", alignItems: "stretch" }} className="desktop-nav">
            {navItems.map((label) => (
              <div key={label} style={{ display: "flex", alignItems: "stretch" }}
                onMouseEnter={() => open(label)} onMouseLeave={close}>
                <button style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "Montserrat, sans-serif", fontSize: "12px", fontWeight: 700,
                  color: active === label ? "#000" : "#000",
                  padding: "0 14px", height: "100%",
                  display: "flex", alignItems: "center", gap: "5px",
                  borderBottom: active === label ? "3px solid #e84e0f" : "3px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                  whiteSpace: "nowrap",
                }}>
                  {label}
                  <motion.span animate={{ rotate: active === label ? 180 : 0 }} transition={{ duration: 0.2 }}
                    style={{ display: "inline-block", fontSize: "9px", opacity: 0.6 }}>▾</motion.span>
                </button>
              </div>
            ))}
          </div>

          {/* Apply and brochure button */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="desktop-nav">
  <Link href="/contact" className="btn btn-orange" style={{ fontSize: "11px" }}>Apply Online</Link>
  <Link href="/contact" className="btn btn-orange" style={{ fontSize: "11px" }}>Brochure</Link>
</div>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="hamburger"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#fff", fontSize: "1.5rem", padding: "0 1rem" }}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* ── MEGA MENU PANEL ── */}
        <AnimatePresence>
          {active && megaData[active] && (
            <motion.div key={active}
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.16 }}
              onMouseEnter={cancelClose} onMouseLeave={close}
              style={{
                position: "absolute", top: "100%", left: 0, right: 0,
                background: "#fff", 
                boxShadow: "0 12px 40px rgba(0,0,0,0.15)", zIndex: 500,
              }}>
              <div className="container" style={{
                padding: "32px 2rem",
                display: "grid",
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
                      <MegaLink key={link.label} href={link.href} label={link.label} onClose={() => setActive(null)} />
                    ))}
                    {col.head === "All Programs" && (
                      <div style={{ marginTop: "16px" }}>
                        <Link href="/programs" className="btn btn-orange" style={{ fontSize: "10px", padding: "9px 16px" }}
                          onClick={() => setActive(null)}>
                          View All
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28 }}
              style={{ background: "#002244", overflow: "hidden", position: "absolute", top: "100%", left: 0, right: 0, zIndex: 400, maxHeight: "80vh", overflowY: "auto" }}>
              <div style={{ padding: "1rem 2rem 2rem" }}>
                {navItems.map((label) => (
                  <div key={label} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <button onClick={() => setMobileExpanded(mobileExpanded === label ? null : label)}
                      style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", fontFamily: "Montserrat, sans-serif", fontSize: "13px", fontWeight: 700, color: "#fff" }}>
                      {label}
                      <span style={{ fontSize: "9px", opacity: 0.6 }}>{mobileExpanded === label ? "▲" : "▾"}</span>
                    </button>
                    {mobileExpanded === label && megaData[label] && (
                      <div style={{ paddingLeft: "16px", paddingBottom: "12px" }}>
                        {megaData[label].cols.map((col) => (
                          <div key={col.head} style={{ marginBottom: "12px" }}>
                            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "6px" }}>{col.head}</p>
                            {col.links.map((link) => (
                              <Link key={link.label} href={link.href} onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                                style={{ display: "block", fontFamily: "Open Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.65)", textDecoration: "none", padding: "4px 0" }}>
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div style={{ marginTop: "20px" }}>
                  <Link href="/contact" className="btn btn-orange" style={{ width: "100%", justifyContent: "center" }}
                    onClick={() => setMobileOpen(false)}>
                    Apply Online
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function MegaLink({ href, label, onClose }: { href: string; label: string; onClose: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={href} onClick={onClose}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "flex", alignItems: "center", gap: "4px", padding: "5px 0", fontFamily: "Open Sans, sans-serif", fontSize: "13px", color: hov ? "#e84e0f" : "#333", textDecoration: "none", transition: "color 0.15s" }}>
      {hov && <span style={{ color: "#e84e0f", fontSize: "11px", fontWeight: 700 }}>›</span>}
      {label}
    </Link>
  );
}