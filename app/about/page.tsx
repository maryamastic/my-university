import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const team = [
  { name: "Prof. Sarah Mitchell", role: "Dean of Academic Affairs", exp: "28 years" },
  { name: "Dr. James Okonkwo", role: "Head of Business School", exp: "19 years" },
  { name: "Prof. Amara Chen", role: "Director of Research", exp: "22 years" },
  { name: "Dr. Lucas Ferreira", role: "Head of International Programs", exp: "15 years" },
];

const values = [
  { title: "Academic Rigour", desc: "We uphold the highest standards of scholarship, critical thinking, and intellectual integrity in everything we do." },
  { title: "Global Perspective", desc: "Our diverse community reflects the world we prepare students for — inclusive, international, and forward-thinking." },
  { title: "Innovation", desc: "We embrace new ideas, new methods, and new technologies to keep our education at the frontier of knowledge." },
  { title: "Integrity", desc: "Honesty, ethics, and responsibility are the cornerstones of our institutional character and student experience." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#0d1b2e", padding: "10rem 0 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "linear-gradient(135deg, transparent, rgba(201,168,76,0.06))", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>About Us</p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 300, color: "#f8f4ef", maxWidth: "650px", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Shaping the Leaders of <em style={{ color: "#c9a84c" }}>Tomorrow</em>
          </h1>
          <div style={{ width: "60px", height: "2px", background: "#c9a84c", marginBottom: "1.5rem" }} />
          <p style={{ color: "rgba(248,244,239,0.55)", maxWidth: "520px", fontSize: "1rem", lineHeight: 1.85 }}>
            Founded on the principles of excellence, integrity, and global citizenship, Global University has been a beacon of higher education for over five decades.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Our Mission</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#1a1a2e", marginBottom: "1.2rem" }}>
              Education That Transforms <em style={{ color: "#c9a84c" }}>Lives</em>
            </h2>
            <div className="gold-line" />
            <p style={{ color: "#5a6070", marginTop: "1.5rem", marginBottom: "1.2rem", fontSize: "0.95rem", lineHeight: 1.9 }}>
              Our mission is to provide a transformative educational experience that equips students with the knowledge, skills, and character to lead with purpose in a complex world.
            </p>
            <p style={{ color: "#5a6070", fontSize: "0.95rem", lineHeight: 1.9 }}>
              We are committed to fostering an environment where intellectual curiosity thrives, diverse perspectives are celebrated, and every student is empowered to reach their full potential.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              { n: "1969", label: "Year Founded" },
              { n: "5,000+", label: "Active Students" },
              { n: "200+", label: "Faculty Members" },
              { n: "60+", label: "Nationalities" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.2)", padding: "2rem", textAlign: "center" }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.4rem", fontWeight: 700, color: "#0d1b2e", lineHeight: 1 }}>{s.n}</p>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a9090", marginTop: "0.5rem" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Our Values</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#1a1a2e" }}>What We Stand For</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: "2rem" }}>
            {values.map((v, i) => (
              <div key={v.title} style={{ padding: "2.5rem 2rem", borderTop: "2px solid #c9a84c" }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "3rem", fontWeight: 700, color: "rgba(201,168,76,0.2)", lineHeight: 1, marginBottom: "1rem" }}>0{i + 1}</p>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", color: "#1a1a2e", marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "#5a6070", lineHeight: 1.85 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Leadership</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#1a1a2e" }}>Our Academic Leaders</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "2rem" }}>
            {team.map((member) => (
              <div key={member.name} style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.2)", padding: "2.5rem 2rem", textAlign: "center" }}>
                <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#0d1b2e", border: "2px solid #c9a84c", margin: "0 auto 1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", color: "#c9a84c", fontWeight: 700 }}>
                    {member.name.split(" ").slice(-1)[0][0]}{member.name.split(" ").slice(-2, -1)[0]?.[0]}
                  </span>
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: "#1a1a2e", marginBottom: "0.4rem" }}>{member.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "#c9a84c", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{member.role}</p>
                <p style={{ fontSize: "0.78rem", color: "#8a9090" }}>{member.exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0d1b2e", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 300, color: "#f8f4ef", marginBottom: "1rem" }}>
            Become Part of Our Story
          </h2>
          <p style={{ color: "rgba(248,244,239,0.5)", marginBottom: "2.5rem" }}>Admissions are open for the upcoming academic year.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">Apply Now</Link>
            <Link href="/programs" className="btn-outline-light">View Programs</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}