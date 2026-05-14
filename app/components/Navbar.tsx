"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const programLinks = [
  { label: "Bachelor's Programs", href: "/programs/bachelors", desc: "3-year undergraduate degrees" },
  { label: "Master's Programs", href: "/programs/masters", desc: "2-year postgraduate degrees" },
  { label: "All Programs", href: "/programs", desc: "Browse the full catalog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "#1a1a2e" : "#f8f4ef";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(248,244,239,0.97)" : "rgba(13,27,46,0.55)",
      backdropFilter: "blur(14px)",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.25)" : "1px solid rgba(248,244,239,0.08)",
      padding: "0 2rem",
      transition: "background 0.4s, border-color 0.4s",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <motion.div whileHover={{ scale: 1.05 }}
            style={{ width: "36px", height: "36px", border: "1px solid #c9a84c", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", fontWeight: 700, color: "#c9a84c" }}>GU</span>
          </motion.div>
          <div>
            <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem", fontWeight: 600, color: textColor, lineHeight: 1.1, transition: "color 0.4s" }}>
              Global University
            </p>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c" }}>
              Excellence in Education
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="desktop-nav">
          <NavLink href="/" label="Home" textColor={textColor} />
          <NavLink href="/about" label="About" textColor={textColor} />

          {/* Programs dropdown */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => setProgramsOpen(true)}
            onMouseLeave={() => setProgramsOpen(false)}>
            <span style={{
              fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem",
              letterSpacing: "0.12em", textTransform: "uppercase" as const,
              color: programsOpen ? "#c9a84c" : textColor,
              cursor: "pointer", position: "relative", paddingBottom: "4px",
              display: "flex", alignItems: "center", gap: "5px",
              transition: "color 0.25s",
            }}>
              Programs
              <motion.span animate={{ rotate: programsOpen ? 180 : 0 }} transition={{ duration: 0.25 }}
                style={{ display: "inline-block", fontSize: "0.6rem" }}>▾</motion.span>
              <motion.span
                style={{ position: "absolute", bottom: 0, left: 0, height: "1.5px", background: "#c9a84c" }}
                initial={{ width: 0 }}
                animate={{ width: programsOpen ? "100%" : 0 }}
                transition={{ duration: 0.25 }}
              />
            </span>

            <AnimatePresence>
              {programsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                  exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
                  transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    position: "absolute", top: "calc(100% + 18px)", left: "50%",
                    transform: "translateX(-50%)", transformOrigin: "top center",
                    background: "#fff", border: "1px solid rgba(201,168,76,0.2)",
                    minWidth: "250px", padding: "0.75rem 0",
                    boxShadow: "0 16px 48px rgba(13,27,46,0.12)",
                  }}>
                  {/* Arrow tip */}
                  <div style={{
                    position: "absolute", top: "-6px", left: "50%",
                    transform: "translateX(-50%) rotate(45deg)",
                    width: "10px", height: "10px", background: "#fff",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRight: "none", borderBottom: "none",
                  }} />
                  {programLinks.map((item, i) => (
                    <DropdownItem key={item.href} item={item} index={i} onClose={() => setProgramsOpen(false)} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href="/contact" label="Contact" textColor={textColor} />

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="btn-gold" style={{ fontSize: "0.72rem", padding: "0.6rem 1.5rem" }}>
              Apply Now
            </Link>
          </motion.div>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: textColor, fontSize: "1.4rem", cursor: "pointer", display: "none", transition: "color 0.4s" }}
          className="hamburger">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: "#fff", borderTop: "1px solid rgba(201,168,76,0.2)", overflow: "hidden" }}>
            <div style={{ padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Home", href: "/" }, { label: "About", href: "/about" },
                { label: "All Programs", href: "/programs" },
                { label: "Bachelor's", href: "/programs/bachelors" },
                { label: "Master's", href: "/programs/masters" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", color: "#1a1a2e", textDecoration: "none" }}>
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-gold" style={{ textAlign: "center", marginTop: "0.5rem" }}>Apply Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ href, label, textColor }: { href: string; label: string; textColor: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href}
      style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", color: hovered ? "#c9a84c" : textColor, transition: "color 0.25s", position: "relative", paddingBottom: "4px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {label}
      <motion.span
        style={{ position: "absolute", bottom: 0, left: 0, height: "1.5px", background: "#c9a84c" }}
        initial={{ width: 0 }}
        animate={{ width: hovered ? "100%" : 0 }}
        transition={{ duration: 0.25 }}
      />
    </Link>
  );
}

function DropdownItem({ item, index, onClose }: { item: typeof programLinks[0]; index: number; onClose: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07, duration: 0.2 }}>
      <Link href={item.href} onClick={onClose}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "block", padding: "0.8rem 1.5rem", textDecoration: "none",
          borderLeft: hovered ? "2px solid #c9a84c" : "2px solid transparent",
          background: hovered ? "#faf7f2" : "transparent",
          transition: "all 0.2s",
        }}>
        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.83rem", color: hovered ? "#c9a84c" : "#1a1a2e", fontWeight: 500, transition: "color 0.2s" }}>
          {item.label}
        </p>
        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: "#8a9090", marginTop: "3px" }}>
          {item.desc}
        </p>
      </Link>
    </motion.div>
  );
}