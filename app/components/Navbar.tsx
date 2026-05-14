"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.78rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    textDecoration: "none",
    transition: "color 0.2s",
    color: scrolled ? "#1a1a2e" : "#f8f4ef",
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(248,244,239,0.97)" : "rgba(13,27,46,0.6)",
      backdropFilter: "blur(14px)",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.25)" : "1px solid rgba(248,244,239,0.1)",
      padding: "0 2rem",
      transition: "background 0.4s, border-color 0.4s",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: "36px", height: "36px", border: "1px solid #c9a84c", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", fontWeight: 700, color: "#c9a84c" }}>GU</span>
          </div>
          <div>
            <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem", fontWeight: 600, color: scrolled ? "#1a1a2e" : "#f8f4ef", lineHeight: 1.1, transition: "color 0.4s" }}>
              Global University
            </p>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c" }}>
              Excellence in Education
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="desktop-nav">
          {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }].map((item) => (
            <Link key={item.label} href={item.href} style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "#1a1a2e" : "#f8f4ef")}>
              {item.label}
            </Link>
          ))}

          {/* Programs dropdown */}
          <div style={{ position: "relative" }}>
            <button onClick={() => setProgramsOpen(!programsOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.3rem", ...linkStyle }}>
              Programs ▾
            </button>
            {programsOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 1rem)", left: "50%", transform: "translateX(-50%)", background: "#fff", border: "1px solid rgba(201,168,76,0.2)", minWidth: "210px", padding: "0.5rem 0", boxShadow: "0 8px 32px rgba(13,27,46,0.12)" }}>
                {[
                  { label: "Bachelor's Programs", href: "/programs/bachelors" },
                  { label: "Master's Programs", href: "/programs/masters" },
                  { label: "All Programs", href: "/programs" },
                ].map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setProgramsOpen(false)}
                    style={{ display: "block", padding: "0.65rem 1.5rem", fontSize: "0.8rem", fontFamily: "DM Sans, sans-serif", color: "#1a1a2e", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s, background 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#c9a84c"; e.currentTarget.style.background = "#faf7f2"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#1a1a2e"; e.currentTarget.style.background = "transparent"; }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "#1a1a2e" : "#f8f4ef")}>
            Contact
          </Link>

          <Link href="/contact" className="btn-gold" style={{ fontSize: "0.72rem", padding: "0.6rem 1.5rem" }}>
            Apply Now
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: scrolled ? "#1a1a2e" : "#f8f4ef", fontSize: "1.4rem", cursor: "pointer", display: "none" }}
          className="hamburger">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid rgba(201,168,76,0.2)", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
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
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}