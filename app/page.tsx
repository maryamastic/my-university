"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProgramCard from "./components/ProgramCard";
import FadeUp from "./components/FadeUp";

const programs = [
  { title: "Bachelor of Business Administration", code: "BBA", duration: "3 Years", level: "Undergraduate" },
  { title: "Master of Business Administration", code: "MBA", duration: "2 Years", level: "Postgraduate" },
  { title: "BSc Digital Marketing", code: "DM", duration: "3 Years", level: "Undergraduate" },
  { title: "MSc Supply Chain Management", code: "SCM", duration: "2 Years", level: "Postgraduate" },
  { title: "Bachelor of Tourism & Hospitality", code: "BTH", duration: "3 Years", level: "Undergraduate" },
  { title: "Master in International Business", code: "MIB", duration: "2 Years", level: "Postgraduate" },
];

const stats = [
  { number: "5,000+", label: "Students Enrolled" },
  { number: "94%", label: "Employment Rate" },
  { number: "60+", label: "Countries Represented" },
  { number: "120+", label: "Industry Partners" },
];

const whyUs = [
  { icon: "🌍", title: "Global Network", desc: "Connect with 60,000+ alumni across 60 countries and build lasting professional relationships." },
  { icon: "🎓", title: "Expert Faculty", desc: "Learn from world-renowned professors and industry practitioners with decades of experience." },
  { icon: "💼", title: "Career Support", desc: "Dedicated career services, internship placements, and a 94% graduate employment rate." },
  { icon: "🔬", title: "Research Excellence", desc: "Access cutting-edge research facilities and collaborate on projects with global impact." },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0d1b2e 0%, #1e3358 60%, #0d1b2e 100%)", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-8rem", right: "-8rem", width: "38rem", height: "38rem", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.1)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "4rem", left: "-5rem", width: "22rem", height: "22rem", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.07)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "8rem" }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>
            Welcome to Global University
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 300, lineHeight: 1.05, color: "#f8f4ef", marginBottom: "2rem", maxWidth: "750px" }}>
            Shape Your<br /><em style={{ color: "#c9a84c" }}>Future</em> at a<br />World-Class<br />Institution
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 300, fontSize: "1.05rem", color: "rgba(248,244,239,0.6)", maxWidth: "460px", marginBottom: "3rem", lineHeight: 1.85 }}>
            An internationally acclaimed university preparing students for leadership in a connected, ever-changing world.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/programs" className="btn-gold">Explore Programs</Link>
            <Link href="/about" className="btn-outline-light">About Us</Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#c9a84c", padding: "3.5rem 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))", gap: "2rem", textAlign: "center" }}>
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 700, color: "#0d1b2e", lineHeight: 1 }}>{s.number}</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(13,27,46,0.65)", marginTop: "0.4rem" }}>{s.label}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <FadeUp>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>About Us</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#1a1a2e", marginBottom: "1.2rem" }}>
              A Legacy of Academic <em style={{ color: "#c9a84c" }}>Excellence</em>
            </h2>
            <div className="gold-line" />
            <p style={{ color: "#5a6070", marginTop: "1.5rem", marginBottom: "1.2rem", fontSize: "0.95rem", lineHeight: 1.9 }}>
              Global University has been shaping tomorrow&apos;s leaders for decades. Our diverse international community fosters intellectual curiosity, cultural understanding, and professional excellence.
            </p>
            <p style={{ color: "#5a6070", marginBottom: "2rem", fontSize: "0.95rem", lineHeight: 1.9 }}>
              With world-renowned faculty, cutting-edge research facilities, and an unmatched global network, we equip students with everything they need to thrive.
            </p>
            <Link href="/about" className="btn-navy">Learn More</Link>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.25)", padding: "3rem", position: "relative", boxShadow: "8px 8px 0 rgba(201,168,76,0.12)" }}>
              <div style={{ position: "absolute", top: "-1rem", left: "-1rem", width: "2rem", height: "2rem", border: "2px solid #c9a84c", borderRight: "none", borderBottom: "none" }} />
              <div style={{ position: "absolute", bottom: "-1rem", right: "-1rem", width: "2rem", height: "2rem", border: "2px solid #c9a84c", borderLeft: "none", borderTop: "none" }} />
              <blockquote style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 300, fontStyle: "italic", color: "#1a1a2e", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                &ldquo;Education is not the filling of a pail, but the lighting of a fire.&rdquo;
              </blockquote>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c" }}>— William Butler Yeats</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Academic Programs</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#1a1a2e" }}>Explore Our Programs</h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: "1.5rem" }}>
            {programs.map((p, i) => (
              <FadeUp key={p.code} delay={i * 0.08}>
                <ProgramCard program={p} />
              </FadeUp>
            ))}
          </div>
          <FadeUp style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/programs" className="btn-gold">View All Programs</Link>
          </FadeUp>
        </div>
      </section>

      {/* WHY US */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Why Choose Us</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#1a1a2e" }}>Built for Global Leaders</h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "2rem" }}>
            {whyUs.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.2)", padding: "2.5rem 2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", color: "#1a1a2e", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "#5a6070", lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0d1b2e", padding: "6rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FadeUp>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Begin Your Journey</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#f8f4ef", marginBottom: "1rem" }}>
              Ready to Start Your Story?
            </h2>
            <p style={{ color: "rgba(248,244,239,0.5)", marginBottom: "2.5rem", fontSize: "0.95rem" }}>
              Join thousands of students who chose excellence.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-gold">Apply Now</Link>
              <Link href="/contact" className="btn-outline-light">Contact Admissions</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}