"use client";
import { useState } from "react";
import Link from "next/link";

export function ProgramCard({ p }: {
  p: { title: string; sub?: string; level?: string; duration: string; href?: string; accent?: string; code?: string }
}) {
  const [hov, setHov] = useState(false);
  const accent = p.accent ?? "#003366";
  const label  = p.sub ?? p.level ?? "";
  const href   = p.href ?? "#";

  return (
    <Link href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "block", textDecoration: "none", background: "#fff",
        borderTop: `4px solid ${accent}`, padding: "24px 20px",
        boxShadow: hov ? "0 8px 28px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.06)",
        transform: hov ? "translateY(-4px)" : "none", transition: "all 0.25s",
      }}>
      <span style={{
        display: "inline-block", fontFamily: "Montserrat, sans-serif",
        fontSize: "9px", fontWeight: 800, letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: accent === "#e84e0f" ? "#e84e0f" : "#003366",
        border: `1px solid ${accent === "#e84e0f" ? "#e84e0f" : "#003366"}`,
        padding: "3px 10px", marginBottom: "12px",
      }}>{label}</span>
      <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "15px", fontWeight: 800, color: "#1a1a1a", marginBottom: "6px", lineHeight: 1.3 }}>
        {p.title}
      </h3>
      <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "12px", color: "#999", marginBottom: "16px" }}>
        {p.duration}
      </p>
      <span className="link-arrow">Discover →</span>
    </Link>
  );
}

export function NewsCard({ item }: { item: { date: string; tag: string; title: string } }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ border: "1px solid #e0e0e0", padding: "24px", background: "#fff", boxShadow: hov ? "0 8px 28px rgba(0,0,0,0.1)" : "none", transform: hov ? "translateY(-3px)" : "none", transition: "all 0.25s", cursor: "pointer" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
        <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#e84e0f", background: "rgba(232,78,15,0.08)", padding: "3px 8px" }}>{item.tag}</span>
        <span style={{ fontFamily: "Open Sans, sans-serif", fontSize: "11px", color: "#999" }}>{item.date}</span>
      </div>
      <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.5, marginBottom: "14px" }}>{item.title}</h3>
      <span className="link-arrow">Read more →</span>
    </div>
  );
}