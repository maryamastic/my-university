import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProgramCard from "./components/ProgramCard";

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

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO — dark navy section ── */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d1b2e 0%, #1e3358 60%, #0d1b2e 100%)",
        display: "flex", alignItems: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-8rem", right: "-8rem", width: "38rem", height: "38rem", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.12)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "4rem", left: "-5rem", width: "22rem", height: "22rem", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "8rem" }}>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>
            Welcome to Global University
          </p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 300, lineHeight: 1.05, color: "#f8f4ef", marginBottom: "2rem", maxWidth: "750px" }}>
            Shape Your<br />
            <em style={{ color: "#c9a84c", fontStyle: "italic" }}>Future</em> at a<br />
            World-Class<br />Institution
          </h1>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 300, fontSize: "1.05rem", color: "rgba(248,244,239,0.6)", maxWidth: "460px", marginBottom: "3rem", lineHeight: 1.85 }}>
            An internationally acclaimed university preparing students for leadership in a connected, ever-changing world.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/programs" className="btn-gold">Explore Programs</Link>
            <Link href="/about" className="btn-outline-light">About Us</Link>
          </div>
        </div>
      </section>

      {/* ── STATS — gold bar ── */}
      <section style={{ background: "#c9a84c", padding: "3.5rem 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))", gap: "2rem", textAlign: "center" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.8rem", fontWeight: 700, color: "#0d1b2e", lineHeight: 1 }}>{s.number}</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(13,27,46,0.65)", marginTop: "0.4rem" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT — light cream section ── */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>About Us</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#1a1a2e", marginBottom: "1.2rem" }}>
              A Legacy of Academic <em style={{ color: "#c9a84c" }}>Excellence</em>
            </h2>
            <div className="gold-line" />
            <p style={{ color: "#5a6070", marginTop: "1.5rem", marginBottom: "1.2rem", fontSize: "0.95rem", lineHeight: 1.9 }}>
              Global University has been shaping tomorrow&apos;s leaders for decades. Our diverse international community fosters intellectual curiosity, cultural understanding, and professional excellence across every discipline.
            </p>
            <p style={{ color: "#5a6070", marginBottom: "2rem", fontSize: "0.95rem", lineHeight: 1.9 }}>
              With world-renowned faculty, cutting-edge research facilities, and an unmatched global network, we equip students with everything they need to thrive.
            </p>
            <Link href="/about" className="btn-navy">Learn More</Link>
          </div>

          {/* Quote card */}
          <div style={{ position: "relative" }}>
            <div style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.25)", padding: "3rem", position: "relative", boxShadow: "8px 8px 0 rgba(201,168,76,0.12)" }}>
              <div style={{ position: "absolute", top: "-1rem", left: "-1rem", width: "2rem", height: "2rem", border: "2px solid #c9a84c", borderRight: "none", borderBottom: "none" }} />
              <div style={{ position: "absolute", bottom: "-1rem", right: "-1rem", width: "2rem", height: "2rem", border: "2px solid #c9a84c", borderLeft: "none", borderTop: "none" }} />
              <blockquote style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 300, fontStyle: "italic", color: "#1a1a2e", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                &ldquo;Education is not the filling of a pail, but the lighting of a fire.&rdquo;
              </blockquote>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c" }}>— William Butler Yeats</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS — white section ── */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Academic Programs</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#1a1a2e" }}>
              Explore Our Programs
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: "1.5rem" }}>
            {programs.map((p) => <ProgramCard key={p.code} program={p} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/programs" className="btn-gold">View All Programs</Link>
          </div>
        </div>
      </section>

      {/* ── WHY US — cream section ── */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Why Choose Us</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#1a1a2e" }}>Built for Global Leaders</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "2rem" }}>
            {[
              { icon: "🌍", title: "Global Network", desc: "Connect with 60,000+ alumni across 60 countries and build lasting professional relationships." },
              { icon: "🎓", title: "Expert Faculty", desc: "Learn from world-renowned professors and industry practitioners with decades of experience." },
              { icon: "💼", title: "Career Support", desc: "Dedicated career services, internship placements, and a 94% graduate employment rate." },
              { icon: "🔬", title: "Research Excellence", desc: "Access cutting-edge research facilities and collaborate on projects with global impact." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.2)", padding: "2.5rem 2rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", color: "#1a1a2e", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "#5a6070", lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — navy section ── */}
      <section style={{ background: "#0d1b2e", padding: "6rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
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
        </div>
      </section>

      <Footer />
    </>
  );
}