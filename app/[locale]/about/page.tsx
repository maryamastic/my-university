import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#0f2041", padding: "8rem 0 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "#e8352a" }} />
        <div className="container">
          <span style={{ display: "inline-block", background: "#e8352a", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.35rem 0.9rem", marginBottom: "1.5rem" }}>About Us</span>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, color: "#fff", maxWidth: "700px", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Shaping the Leaders of Tomorrow
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", maxWidth: "520px", lineHeight: 1.8 }}>
            Founded on the principles of excellence and global citizenship, Global University has been a beacon of higher education for over five decades.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <FadeUp>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8352a", marginBottom: "0.75rem" }}>Our Mission</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#0f2041", marginBottom: "0.75rem" }}>Education That Transforms Lives</h2>
            <div style={{ width: "48px", height: "3px", background: "#e8352a", marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.85, marginBottom: "1rem" }}>Our mission is to provide a transformative educational experience that equips students with the knowledge, skills, and character to lead with purpose in a complex world.</p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.85 }}>We foster an environment where intellectual curiosity thrives, diverse perspectives are celebrated, and every student is empowered to reach their full potential.</p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {[{ n: "1969", l: "Year Founded" }, { n: "5,000+", l: "Students" }, { n: "200+", l: "Faculty Members" }, { n: "60+", l: "Nationalities" }].map((s) => (
                <div key={s.l} style={{ background: "#f5f6f8", border: "1px solid #e5e7eb", padding: "2rem", textAlign: "center" }}>
                  <p style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 900, color: "#0f2041" }}>{s.n}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#6b7280", marginTop: "0.3rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "#f5f6f8" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8352a", marginBottom: "0.75rem" }}>Our Values</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#0f2041" }}>What We Stand For</h2>
            <div style={{ width: "48px", height: "3px", background: "#e8352a", margin: "0.75rem auto 0" }} />
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "2rem" }}>
            {[
              { n: "01", title: "Academic Rigour", desc: "We uphold the highest standards of scholarship and critical thinking in everything we do." },
              { n: "02", title: "Global Perspective", desc: "Our diverse community reflects the world we prepare students for — inclusive and forward-thinking." },
              { n: "03", title: "Innovation", desc: "We embrace new ideas, methods, and technologies to keep education at the frontier." },
              { n: "04", title: "Integrity", desc: "Honesty, ethics, and responsibility are the cornerstones of our institutional character." },
            ].map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.1}>
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "2.5rem 2rem", borderTop: "4px solid #e8352a" }}>
                  <p style={{ fontFamily: "Playfair Display, serif", fontSize: "2.5rem", fontWeight: 900, color: "rgba(232,53,42,0.15)", marginBottom: "1rem" }}>{v.n}</p>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700, color: "#0f2041", marginBottom: "0.75rem" }}>{v.title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8352a", marginBottom: "0.75rem" }}>Leadership</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#0f2041" }}>Our Academic Leaders</h2>
            <div style={{ width: "48px", height: "3px", background: "#e8352a", margin: "0.75rem auto 0" }} />
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "2rem" }}>
            {[
              { name: "Prof. Sarah Mitchell", role: "Dean of Academic Affairs" },
              { name: "Dr. James Okonkwo", role: "Head of Business School" },
              { name: "Prof. Amara Chen", role: "Director of Research" },
              { name: "Dr. Lucas Ferreira", role: "Head of International Programs" },
            ].map((m, i) => (
              <FadeUp key={m.name} delay={i * 0.1}>
                <div style={{ textAlign: "center", padding: "2.5rem 1.5rem", border: "1px solid #e5e7eb" }}>
                  <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#0f2041", margin: "0 auto 1.25rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1.4rem", color: "#fff", fontWeight: 700 }}>
                      {m.name.split(" ").map((w) => w[0]).slice(1, 3).join("")}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 700, color: "#0f2041", marginBottom: "0.4rem" }}>{m.name}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#e8352a", fontWeight: 500 }}>{m.role}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e8352a", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FadeUp>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>Become Part of Our Story</h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem" }}>Admissions are open for the upcoming academic year.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-outline-white">Apply Now</Link>
              <Link href="/programs" style={{ display: "inline-block", padding: "0.8rem 2rem", background: "#fff", color: "#e8352a", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none" }}>View Programs</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}