import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const programs = [
  { title: "Master of Business Administration", code: "MBA", duration: "2 Years", intake: "September & January", desc: "Our flagship MBA develops visionary business leaders with advanced strategic, financial, and leadership capabilities for senior roles in global organisations.", modules: ["Strategic Management", "Corporate Finance", "Leadership & Change", "Global Business Strategy", "Innovation & Entrepreneurship", "Executive Communication"] },
  { title: "Master in International Business", code: "MIB", duration: "2 Years", intake: "September", desc: "Navigate complex global markets with expertise in cross-cultural management, international trade policy, and multinational strategy.", modules: ["International Trade Law", "Cross-Cultural Management", "Global Market Entry", "Foreign Direct Investment", "International Negotiations", "Emerging Markets"] },
  { title: "MSc Supply Chain Management", code: "SCM", duration: "2 Years", intake: "September & January", desc: "Build mastery in end-to-end supply chain strategy, procurement optimisation, logistics, and operations management.", modules: ["Procurement Strategy", "Logistics & Distribution", "Demand Forecasting", "Supplier Relationship Mgmt", "Operations Research", "Sustainability in SCM"] },
  { title: "Master in International Management", code: "MIM", duration: "2 Years", intake: "September", desc: "Develop advanced management competencies with emphasis on multinational organisations, global strategy, and cross-border leadership.", modules: ["Global Leadership", "Organisational Design", "Corporate Governance", "International HR", "Digital Transformation", "Stakeholder Management"] },
  { title: "Master of Tourism & Hospitality Management", code: "MTH", duration: "2 Years", intake: "September", desc: "An advanced degree for hospitality professionals seeking senior leadership positions in global tourism, hotels, and travel industries.", modules: ["Tourism Policy & Planning", "Revenue Optimisation", "Digital Tourism", "Crisis Management", "Sustainable Hospitality", "Destination Marketing"] },
];

export default function MastersPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#0d1b2e", padding: "10rem 0 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "linear-gradient(135deg, transparent, rgba(201,168,76,0.06))", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Postgraduate</p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 300, color: "#f8f4ef", maxWidth: "650px", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Master&apos;s <em style={{ color: "#c9a84c" }}>Programs</em>
          </h1>
          <div style={{ width: "60px", height: "2px", background: "#c9a84c", marginBottom: "1.5rem" }} />
          <p style={{ color: "rgba(248,244,239,0.55)", maxWidth: "480px", fontSize: "1rem", lineHeight: 1.85 }}>
            Elevate your expertise with a postgraduate qualification designed to fast-track your career to senior leadership and global impact.
          </p>
        </div>
      </section>

      {/* Programs list */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {programs.map((p) => (
              <div key={p.code} style={{ background: "#f8f4ef", border: "1px solid rgba(201,168,76,0.2)", padding: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                    <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "3rem", fontWeight: 700, color: "rgba(201,168,76,0.25)", lineHeight: 1 }}>{p.code}</span>
                    <span style={{ fontSize: "0.7rem", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.4)", padding: "0.25rem 0.8rem", letterSpacing: "0.1em" }}>Postgraduate</span>
                  </div>
                  <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "1rem", lineHeight: 1.3 }}>{p.title}</h2>
                  <p style={{ fontSize: "0.9rem", color: "#5a6070", lineHeight: 1.85, marginBottom: "1.5rem" }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
                    <div>
                      <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a9090", marginBottom: "0.2rem" }}>Duration</p>
                      <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "#1a1a2e" }}>{p.duration}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a9090", marginBottom: "0.2rem" }}>Intake</p>
                      <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "#1a1a2e" }}>{p.intake}</p>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-gold" style={{ fontSize: "0.75rem" }}>Apply Now</Link>
                </div>
                <div>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem" }}>Key Modules</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    {p.modules.map((mod) => (
                      <div key={mod} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <span style={{ width: "5px", height: "5px", background: "#c9a84c", borderRadius: "50%", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.83rem", color: "#5a6070" }}>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0d1b2e", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 300, color: "#f8f4ef", marginBottom: "1rem" }}>Take the Next Step</h2>
          <p style={{ color: "rgba(248,244,239,0.5)", marginBottom: "2.5rem" }}>Our admissions team will help you choose the right program.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">Apply Now</Link>
            <Link href="/programs/bachelors" className="btn-outline-light">View Bachelor's</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}