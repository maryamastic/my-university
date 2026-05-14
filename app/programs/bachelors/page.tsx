import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const programs = [
  { title: "Bachelor of Business Administration", code: "BBA", duration: "3 Years", intake: "September & January", desc: "A comprehensive program covering management, finance, marketing, and entrepreneurship. Graduates are prepared for leadership roles across all sectors of the global economy.", modules: ["Business Strategy", "Financial Management", "Marketing Principles", "Organisational Behaviour", "Entrepreneurship", "Business Ethics"] },
  { title: "BSc Digital Marketing", code: "DM", duration: "3 Years", intake: "September", desc: "Master the full spectrum of modern digital marketing — from SEO and content strategy to data analytics, paid media, and brand storytelling.", modules: ["SEO & Content Strategy", "Social Media Marketing", "Google Analytics", "Paid Advertising", "Brand Management", "Consumer Psychology"] },
  { title: "Bachelor of Tourism & Hospitality Management", code: "BTH", duration: "3 Years", intake: "September & January", desc: "An industry-integrated degree that covers tourism strategy, event management, and global hospitality operations.", modules: ["Tourism Management", "Event Planning", "Cultural Tourism", "Revenue Management", "Sustainable Tourism", "Guest Experience Design"] },
  { title: "Bachelor in Hotel Management", code: "BHM", duration: "3 Years", intake: "September", desc: "Develop the operational and leadership skills needed to manage world-class hotels, resorts, and hospitality enterprises.", modules: ["Hotel Operations", "Food & Beverage Management", "Front Office Management", "Housekeeping Management", "Financial Control", "Leadership in Hospitality"] },
];

export default function BachelorsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#0d1b2e", padding: "10rem 0 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "linear-gradient(135deg, transparent, rgba(201,168,76,0.06))", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Undergraduate</p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 300, color: "#f8f4ef", maxWidth: "650px", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Bachelor&apos;s <em style={{ color: "#c9a84c" }}>Programs</em>
          </h1>
          <div style={{ width: "60px", height: "2px", background: "#c9a84c", marginBottom: "1.5rem" }} />
          <p style={{ color: "rgba(248,244,239,0.55)", maxWidth: "480px", fontSize: "1rem", lineHeight: 1.85 }}>
            Begin your academic journey with a rigorous undergraduate degree that builds the foundations of a successful international career.
          </p>
        </div>
      </section>

      {/* Programs list */}
      <section className="section" style={{ background: "#f8f4ef" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {programs.map((p, i) => (
              <div key={p.code} style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.2)", padding: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                    <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "3rem", fontWeight: 700, color: "rgba(201,168,76,0.25)", lineHeight: 1 }}>{p.code}</span>
                    <span style={{ fontSize: "0.7rem", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.4)", padding: "0.25rem 0.8rem", letterSpacing: "0.1em" }}>Undergraduate</span>
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
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 300, color: "#f8f4ef", marginBottom: "1rem" }}>Ready to Apply?</h2>
          <p style={{ color: "rgba(248,244,239,0.5)", marginBottom: "2.5rem" }}>Admissions are open. Secure your place today.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">Apply Now</Link>
            <Link href="/programs/masters" className="btn-outline-light">View Master's</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}