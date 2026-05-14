import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const bachelors = [
  { title: "Bachelor of Business Administration", code: "BBA", duration: "3 Years", desc: "A comprehensive program covering management, finance, marketing, and entrepreneurship for the global marketplace." },
  { title: "BSc Digital Marketing", code: "DM", duration: "3 Years", desc: "Master modern marketing strategies including SEO, social media, data analytics, and digital campaign management." },
  { title: "Bachelor of Tourism & Hospitality", code: "BTH", duration: "3 Years", desc: "Explore the dynamic world of tourism and hospitality management with a global, hands-on approach." },
  { title: "Bachelor in Hotel Management", code: "BHM", duration: "3 Years", desc: "Develop operational and strategic skills to lead world-class hospitality establishments." },
];

const masters = [
  { title: "Master of Business Administration", code: "MBA", duration: "2 Years", desc: "Our flagship MBA develops visionary business leaders with advanced strategic, financial, and leadership capabilities." },
  { title: "Master in International Business", code: "MIB", duration: "2 Years", desc: "Navigate complex global markets with expertise in cross-cultural management, international trade, and strategy." },
  { title: "MSc Supply Chain Management", code: "SCM", duration: "2 Years", desc: "Build expertise in logistics, procurement, operations, and global supply chain strategy." },
  { title: "Master in International Management", code: "MIM", duration: "2 Years", desc: "Develop strategic management skills with an emphasis on multinational organisations and global leadership." },
  { title: "Master of Tourism & Hospitality", code: "MTH", duration: "2 Years", desc: "An advanced degree for hospitality professionals seeking leadership roles in global tourism industries." },
];

export default function ProgramsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#0d1b2e", padding: "10rem 0 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "linear-gradient(135deg, transparent, rgba(201,168,76,0.06))", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Academic Offerings</p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 300, color: "#f8f4ef", maxWidth: "650px", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Our Academic <em style={{ color: "#c9a84c" }}>Programs</em>
          </h1>
          <div style={{ width: "60px", height: "2px", background: "#c9a84c", marginBottom: "1.5rem" }} />
          <p style={{ color: "rgba(248,244,239,0.55)", maxWidth: "500px", fontSize: "1rem", lineHeight: 1.85 }}>
            From undergraduate foundations to postgraduate specialisations, our programs are designed to launch careers and transform ambitions.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section style={{ background: "#c9a84c", padding: "1.5rem 0" }}>
        <div className="container" style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/programs/bachelors" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#0d1b2e", fontWeight: 500, textDecoration: "none" }}>
            → Bachelor's Programs
          </Link>
          <Link href="/programs/masters" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#0d1b2e", fontWeight: 500, textDecoration: "none" }}>
            → Master's Programs
          </Link>
        </div>
      </section>

      {/* Bachelor's */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.75rem" }}>Undergraduate</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#1a1a2e" }}>Bachelor's Programs</h2>
            </div>
            <Link href="/programs/bachelors" className="btn-outline-dark" style={{ fontSize: "0.75rem" }}>View All</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "1.5rem" }}>
            {bachelors.map((p) => (
              <div key={p.code} style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.2)", padding: "2.5rem 2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
                  <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 700, color: "rgba(201,168,76,0.3)", lineHeight: 1 }}>{p.code}</span>
                  <span style={{ fontSize: "0.7rem", color: "#8a9090", border: "1px solid #ddd", padding: "0.2rem 0.7rem", letterSpacing: "0.08em" }}>{p.duration}</span>
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "0.75rem", lineHeight: 1.35 }}>{p.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#5a6070", lineHeight: 1.85, marginBottom: "1.5rem" }}>{p.desc}</p>
                <Link href="/contact" style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.4)", paddingBottom: "2px" }}>
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master's */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.75rem" }}>Postgraduate</p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#1a1a2e" }}>Master's Programs</h2>
            </div>
            <Link href="/programs/masters" className="btn-outline-dark" style={{ fontSize: "0.75rem" }}>View All</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "1.5rem" }}>
            {masters.map((p) => (
              <div key={p.code} style={{ background: "#f8f4ef", border: "1px solid rgba(201,168,76,0.2)", padding: "2.5rem 2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
                  <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 700, color: "rgba(201,168,76,0.3)", lineHeight: 1 }}>{p.code}</span>
                  <span style={{ fontSize: "0.7rem", color: "#8a9090", border: "1px solid #ddd", padding: "0.2rem 0.7rem", letterSpacing: "0.08em" }}>{p.duration}</span>
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "0.75rem", lineHeight: 1.35 }}>{p.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#5a6070", lineHeight: 1.85, marginBottom: "1.5rem" }}>{p.desc}</p>
                <Link href="/contact" style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.4)", paddingBottom: "2px" }}>
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0d1b2e", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 300, color: "#f8f4ef", marginBottom: "1rem" }}>
            Not Sure Which Program Fits You?
          </h2>
          <p style={{ color: "rgba(248,244,239,0.5)", marginBottom: "2.5rem" }}>Our admissions team is here to guide you.</p>
          <Link href="/contact" className="btn-gold">Talk to Admissions</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}