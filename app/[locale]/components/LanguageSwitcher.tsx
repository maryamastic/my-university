"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
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
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "1px solid rgba(255,255,255,0.3)",
          cursor: "pointer",
          color: "rgba(255,255,255,0.85)",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          padding: "4px 10px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}>
        {locale === "en" ? "🇬🇧" : "🇫🇷"} {locale.toUpperCase()} ▾
      </button>

      {open && (
        <>
          {/* Backdrop to close on outside click */}
          <div
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 998 }}
          />
          <div style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            background: "#fff",
            border: "1px solid #e0e0e0",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            minWidth: "100px",
            zIndex: 999,
          }}>
            {[
              { code: "en", label: "🇬🇧 EN", name: "English" },
              { code: "fr", label: "🇫🇷 FR", name: "Français" },
            ].map((l) => (
              <button
                key={l.code}
                onClick={() => switchTo(l.code)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                  padding: "10px 14px",
                  background: l.code === locale ? "#f0f2f5" : "#fff",
                  border: "none",
                  borderLeft: l.code === locale ? "3px solid #003366" : "3px solid transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: l.code === locale ? "#003366" : "#555",
                  letterSpacing: "0.08em",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (l.code !== locale) e.currentTarget.style.background = "#f8f8f8";
                }}
                onMouseLeave={(e) => {
                  if (l.code !== locale) e.currentTarget.style.background = "#fff";
                }}>
                {l.label}
                <span style={{ fontSize: "10px", color: "#999", fontWeight: 400 }}>{l.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}