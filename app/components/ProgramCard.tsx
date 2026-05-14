"use client";

type Program = { title: string; code: string; duration: string; level: string; };

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <div
      style={{ background: "#f8f4ef", border: "1px solid rgba(201,168,76,0.25)", padding: "2rem", transition: "all 0.3s ease", cursor: "pointer" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.background = "#fff"; e.currentTarget.style.boxShadow = "6px 6px 0 rgba(201,168,76,0.15)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; e.currentTarget.style.background = "#f8f4ef"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
        <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 700, color: "rgba(201,168,76,0.35)" }}>{program.code}</span>
        <span style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#c9a84c", border: "1px solid rgba(201,168,76,0.4)", padding: "0.25rem 0.75rem" }}>{program.level}</span>
      </div>
      <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.25rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "0.75rem", lineHeight: 1.3 }}>{program.title}</h3>
      <p style={{ fontSize: "0.78rem", color: "#8a9090", letterSpacing: "0.1em", textTransform: "uppercase" as const }}>Duration: {program.duration}</p>
    </div>
  );
}