import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";
import { ProgramCard, NewsCard } from "../components/HomeCards";

const programs = [
  { title: "Bachelor's Degree", sub: "Undergraduate", duration: "3 Years", href: "/programs/bachelors", accent: "#003366" },
  { title: "Master's / MSc", sub: "Postgraduate", duration: "2 Years", href: "/programs/masters", accent: "#003366" },
  { title: "MBA", sub: "Executive Education", duration: "1–2 Years", href: "/programs/masters", accent: "#e84e0f" },
  { title: "Exchange Programs", sub: "International", duration: "1 Semester", href: "/programs", accent: "#003366" },
];

const stats = [
  { n: "4,000+", l: "Students" },
  { n: "20,000+", l: "Alumni Worldwide" },
  { n: "60+", l: "Partner Universities" },
  { n: "94%", l: "Employment Rate" },
];

const steps = [
  { n: "1", title: "Application", desc: "Apply online with your academic transcripts and personal statement through our portal." },
  { n: "2", title: "Interview", desc: "Eligible candidates are invited for a motivation interview with our admissions team on campus." },
  { n: "3", title: "Enrolment", desc: "Once admitted, complete your enrolment form and secure your place in your chosen programme." },
];

const news = [
  { date: "April 2026", tag: "Rankings", title: "Global University enters Top 50 Business Schools Worldwide" },
  { date: "March 2026", tag: "Campus", title: "New campus opens September 2026 — designed by and for students" },
  { date: "February 2026", tag: "Accreditation", title: "Awarded triple accreditation: EQUIS, AACSB and AMBA" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ background: "#003366", minHeight: "88vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, width: "40%", height: "100%", background: "rgba(0,0,0,0.12)", clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5px", background: "#e84e0f" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "3rem", paddingBottom: "5rem" }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "20px" }}>
            School of Business &amp; Management
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2 }}
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.08, maxWidth: "760px", marginBottom: "20px" }}>
            Build Bridges,<br /><span style={{ color: "#e84e0f" }}>Shape</span> a Better World
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.38 }}
            style={{ fontFamily: "Open Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.68)", maxWidth: "480px", lineHeight: 1.8, marginBottom: "32px" }}>
            A globally recognised institution offering world-class programmes by an international faculty — preparing students for leadership in a connected world.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.52 }}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/programs" className="btn btn-orange">Our Programmes</Link>
            <Link href="/contact" className="btn btn-outline-white">Apply Online</Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e0e0e0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {stats.map((s, i) => (
            <FadeUp key={s.l} delay={i * 0.08}>
              <div style={{ padding: "28px 16px", textAlign: "center", borderRight: i < 3 ? "1px solid #e0e0e0" : "none" }}>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "32px", fontWeight: 800, color: "#003366", lineHeight: 1 }}>{s.n}</p>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "11px", fontWeight: 600, color: "#999", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.07em" }}>{s.l}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section" style={{ background: "#f4f4f4" }}>
        <div className="container">
          <FadeUp style={{ marginBottom: "28px" }}>
            <span className="sec-label">Academic Excellence</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "28px", fontWeight: 800, color: "#003366" }}>Our Programmes</h2>
            <span className="sec-bar" />
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "16px", marginBottom: "28px" }}>
            {programs.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.08}>
                <ProgramCard p={p} />
              </FadeUp>
            ))}
          </div>
          <FadeUp><Link href="/programs" className="btn btn-navy">View All Programmes</Link></FadeUp>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          <FadeUp>
            <span className="sec-label">A School of Excellence</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "26px", fontWeight: 800, color: "#003366", lineHeight: 1.25 }}>A Business School Recognised Worldwide</h2>
            <span className="sec-bar" />
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#666", lineHeight: 1.85, marginBottom: "14px" }}>
              Global University holds prestigious triple accreditation from EQUIS, AACSB, and AMBA. It stands out for its distinctive teaching approach, combining interdisciplinary expertise with rich multicultural experiences.
            </p>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "14px", color: "#666", lineHeight: 1.85, marginBottom: "24px" }}>
              This unique positioning empowers students to develop innovative ideas that create lasting impact for businesses and society.
            </p>
            <Link href="/about" className="btn btn-navy">Discover More</Link>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ background: "#f4f4f4", padding: "28px", border: "1px solid #e0e0e0" }}>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", marginBottom: "16px" }}>Accreditations</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                {["EQUIS", "AACSB", "AMBA", "QS Ranked"].map((a) => (
                  <div key={a} style={{ background: "#fff", border: "1px solid #e0e0e0", padding: "16px", textAlign: "center" }}>
                    <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px", fontWeight: 800, color: "#003366" }}>{a}</p>
                    <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "11px", color: "#999", marginTop: "2px" }}>Accredited</p>
                  </div>
                ))}
              </div>
              <div style={{ background: "#003366", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px", fontWeight: 800, color: "#fff" }}>Triple Accredited</p>
                  <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>Business School</p>
                </div>
                <div style={{ width: "40px", height: "40px", background: "#e84e0f", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "18px", fontWeight: 700 }}>✓</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── HOW TO JOIN ── */}
      <section className="section" style={{ background: "#003366" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="sec-label">Admissions</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "28px", fontWeight: 800, color: "#fff" }}>How to Join Us</h2>
            <div style={{ width: "48px", height: "4px", background: "#e84e0f", margin: "8px auto 0" }} />
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.12}>
                <div style={{ padding: "32px 24px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderTop: "4px solid #e84e0f" }}>
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "40px", fontWeight: 800, color: "rgba(232,78,15,0.25)", lineHeight: 1, marginBottom: "14px" }}>{s.n}</p>
                  <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "16px", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>{s.title}</h3>
                  <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/contact" className="btn btn-orange">Apply Online</Link>
          </FadeUp>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <FadeUp style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "12px", marginBottom: "28px" }}>
            <div>
              <span className="sec-label">Stay Informed</span>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "28px", fontWeight: 800, color: "#003366" }}>Latest News</h2>
              <span className="sec-bar" style={{ marginBottom: 0 }} />
            </div>
            <Link href="#" className="link-arrow">All News →</Link>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "16px" }}>
            {news.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}><NewsCard item={item} /></FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#e84e0f", padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FadeUp>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
              Which Programme Is Right For You?
            </h2>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.85)", maxWidth: "440px", margin: "0 auto 28px", lineHeight: 1.7 }}>
              Find the programme that best matches your goals with our personalised orientation tool.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/programs" className="btn btn-outline-white">Find Your Programme</Link>
              <Link href="/contact" className="btn btn-white">Apply Now</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}