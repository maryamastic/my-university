"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0d1b2e", borderTop: "1px solid rgba(201,168,76,0.2)", padding: "5rem 0 2rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3.5rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
              <div style={{ width: "36px", height: "36px", border: "1px solid #c9a84c", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#c9a84c", fontWeight: 700 }}>GU</span>
              </div>
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#f8f4ef", fontWeight: 600 }}>Global University</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(248,244,239,0.5)", lineHeight: 1.85, maxWidth: "270px" }}>
              A world-class institution committed to shaping global leaders through academic excellence.
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.4rem" }}>Admissions</p>
              <a href="mailto:admissions@globaluniversity.edu" style={{ color: "rgba(248,244,239,0.55)", fontSize: "0.85rem", textDecoration: "none" }}>
                admissions@globaluniversity.edu
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {[
            { heading: "Navigate", links: [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Contact", href: "/contact" }] },
            { heading: "Programs", links: [{ label: "Bachelor's", href: "/programs/bachelors" }, { label: "Master's", href: "/programs/masters" }, { label: "All Programs", href: "/programs" }] },
          ].map((col) => (
            <div key={col.heading}>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem" }}>{col.heading}</p>
              {col.links.map((item) => (
                <Link key={item.label} href={item.href}
                  style={{ display: "block", fontSize: "0.85rem", color: "rgba(248,244,239,0.5)", textDecoration: "none", marginBottom: "0.65rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,244,239,0.5)")}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Location */}
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem" }}>Location</p>
            <p style={{ fontSize: "0.85rem", color: "rgba(248,244,239,0.5)", lineHeight: 1.9 }}>
              123 University Avenue<br />London, EC1A 1BB<br />United Kingdom
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(201,168,76,0.12)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(248,244,239,0.3)" }}>© {new Date().getFullYear()} Global University. All rights reserved.</p>
          <p style={{ fontSize: "0.75rem", color: "rgba(201,168,76,0.4)", letterSpacing: "0.1em" }}>Excellence · Integrity · Innovation</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}