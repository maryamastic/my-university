"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your EmailJS logic or API route
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  const inputStyle = {
    width: "100%", padding: "0.9rem 1.1rem",
    background: "#fff", border: "1px solid rgba(201,168,76,0.25)",
    fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", color: "#1a1a2e",
    outline: "none", transition: "border-color 0.2s",
  };

  const labelStyle = { fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#5a6070", display: "block", marginBottom: "0.5rem" };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#0d1b2e", padding: "10rem 0 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "linear-gradient(135deg, transparent, rgba(201,168,76,0.06))", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Get In Touch</p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 300, color: "#f8f4ef", maxWidth: "600px", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            We&apos;re Here to <em style={{ color: "#c9a84c" }}>Help You</em>
          </h1>
          <div style={{ width: "60px", height: "2px", background: "#c9a84c", marginBottom: "1.5rem" }} />
          <p style={{ color: "rgba(248,244,239,0.55)", maxWidth: "460px", fontSize: "1rem", lineHeight: 1.85 }}>
            Whether you have questions about admissions, programs, or campus life — our team is ready to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>

          {/* Info */}
          <div>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Contact Information</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 300, color: "#1a1a2e", marginBottom: "2rem" }}>Reach Out to Us</h2>

            {[
              { label: "Admissions Office", value: "admissions@globaluniversity.edu" },
              { label: "General Enquiries", value: "info@globaluniversity.edu" },
              { label: "Phone", value: "+44 (0) 20 7123 4567" },
              { label: "Location", value: "123 University Avenue\nLondon, EC1A 1BB\nUnited Kingdom" },
              { label: "Office Hours", value: "Mon – Fri: 9am – 5pm\nSat: 10am – 2pm" },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: "1.8rem", paddingBottom: "1.8rem", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.4rem" }}>{item.label}</p>
                <p style={{ fontSize: "0.9rem", color: "#1a1a2e", lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.2)", padding: "3rem" }}>
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 300, color: "#1a1a2e", marginBottom: "0.5rem" }}>Send Us a Message</h3>
            <p style={{ fontSize: "0.85rem", color: "#8a9090", marginBottom: "2.5rem" }}>We respond within 1–2 business days.</p>

            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#c9a84c", marginBottom: "1rem" }}>✓</p>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", color: "#1a1a2e", marginBottom: "0.75rem" }}>Message Received</h3>
                <p style={{ fontSize: "0.9rem", color: "#5a6070" }}>Thank you for reaching out. Our admissions team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input required style={inputStyle} placeholder="John Smith" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.25)")} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input required type="email" style={inputStyle} placeholder="john@example.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.25)")} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input style={inputStyle} placeholder="+44 7700 900000" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.25)")} />
                </div>

                <div>
                  <label style={labelStyle}>Program of Interest</label>
                  <select style={{ ...inputStyle, cursor: "pointer" }} value={form.program}
                    onChange={(e) => setForm({ ...form, program: e.target.value })}>
                    <option value="">Select a program...</option>
                    <optgroup label="Bachelor's Programs">
                      <option>Bachelor of Business Administration (BBA)</option>
                      <option>BSc Digital Marketing</option>
                      <option>Bachelor of Tourism & Hospitality</option>
                      <option>Bachelor in Hotel Management</option>
                    </optgroup>
                    <optgroup label="Master's Programs">
                      <option>Master of Business Administration (MBA)</option>
                      <option>Master in International Business</option>
                      <option>MSc Supply Chain Management</option>
                      <option>Master in International Management</option>
                      <option>Master of Tourism & Hospitality</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Your Message *</label>
                  <textarea required rows={5} style={{ ...inputStyle, resize: "vertical" as const }} placeholder="Tell us about yourself and how we can help..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.25)")} />
                </div>

                <button type="submit" className="btn-gold"
                  style={{ cursor: "pointer", opacity: status === "sending" ? 0.7 : 1 }}
                  disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}