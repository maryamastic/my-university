"use client";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeUp from "../../components/FadeUp";

const WHATSAPP = "33745932244";

const programs: Record<string, {
  code: string; title: string; level: string; duration: string;
  intake: string; fees: string; certification: string; objective: string;
  semesters: { label: string; courses: string[] }[];
  whatsappMsg: string;
}> = {
  "international-business-retail-management": {
    code: "IBRM", title: "International Business & Retail Management",
    level: "Undergraduate — Bachelor ", duration: "3 Years",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition", certification: " Level 6 Title (confirm registration number with MISB)",
    objective: "This program develops expertise in management, commerce, and strategy, with artificial intelligence tools integrated throughout. Students master cross-border commercial operations, retail strategy, and international business development in line with market expectations.",
    semesters: [
      { label: "Year 1", courses: ["Introduction to International Business", "Retail Fundamentals", "Business Communication", "Marketing Principles", "Introduction to AI in Business", "French as a Foreign Language"] },
      { label: "Year 2", courses: ["International Trade Operations", "Distribution Management", "Consumer Behaviour", "Supply Chain Basics", "Cross-Cultural Management", "Business French"] },
      { label: "Year 3", courses: ["Retail Strategy", "Global Business Development", "Customer Relationship Management", "Capstone Project", "Internship / Professional Practice"] },
    ],
    whatsappMsg: "Hello, I am interested in the International Business & Retail Management Bachelor at MISB. Could you please provide more information?",
  },
  "sales-project-management": {
    code: "SPM", title: "Sales & Project Management",
    level: "Undergraduate — Bachelor ", duration: "3 Years",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition", certification: " Level 6 Title (confirm registration number with MISB)",
    objective: "This program prepares students to lead commercial organisations and manage complex projects, from conception to delivery, with measurable results, using AI tools integrated throughout the curriculum.",
    semesters: [
      { label: "Year 1", courses: ["Introduction to Sales", "Project Management Fundamentals", "Business Communication", "Marketing Principles", "Introduction to AI in Business", "French as a Foreign Language"] },
      { label: "Year 2", courses: ["Commercial Negotiation", "Agile Project Delivery", "Client Relationship Management", "Team Leadership", "Cross-Cultural Management", "Business French"] },
      { label: "Year 3", courses: ["Sales Strategy", "Complex Project Delivery", "Performance Measurement", "Capstone Project", "Internship / Professional Practice"] },
    ],
    whatsappMsg: "Hello, I am interested in the Sales & Project Management Bachelor at MISB. Could you please provide more information?",
  },
  "hospitality-tourism-management": {
    code: "HTM", title: "Hospitality & Tourism Management",
    level: "Undergraduate — Bachelor ", duration: "3 Years",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition", certification: " Level 6 Title (confirm registration number with MISB)",
    objective: "This program develops expertise in managing hotel establishments and tourism operations in global environments, combining hands-on practice with strategic and AI-integrated coursework.",
    semesters: [
      { label: "Year 1", courses: ["Introduction to Hospitality", "Tourism Sociology", "Front Office Operations", "Food & Beverage Basics", "Introduction to AI in Business", "French as a Foreign Language"] },
      { label: "Year 2", courses: ["Hotel Operations Management", "Tourism Strategy", "Guest Experience Design", "Event Management", "Cross-Cultural Management", "Business French"] },
      { label: "Year 3", courses: ["Revenue Management", "Destination Marketing", "Sustainable Tourism", "Capstone Project", "Internship / Professional Practice"] },
    ],
    whatsappMsg: "Hello, I am interested in the Hospitality & Tourism Management Bachelor at MISB. Could you please provide more information?",
  },
  "entrepreneurship-startup-strategies": {
    code: "ESS", title: "Entrepreneurship & Startup Strategies",
    level: "Undergraduate — Bachelor ", duration: "3 Years",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition", certification: " Level 6 Title (confirm registration number with MISB)",
    objective: "This program builds the entrepreneurial skills needed to launch, structure, and scale innovative businesses on fast-moving markets, integrating AI tools throughout the curriculum.",
    semesters: [
      { label: "Year 1", courses: ["Introduction to Entrepreneurship", "Business Model Design", "Business Communication", "Marketing Principles", "Introduction to AI in Business", "French as a Foreign Language"] },
      { label: "Year 2", courses: ["Business Plan Development", "Innovation Management", "Funding & Investment Basics", "Growth Strategy", "Cross-Cultural Management", "Business French"] },
      { label: "Year 3", courses: ["Lean Startup Methodology", "Scaling Ventures", "Pitch & Investor Relations", "Capstone Project", "Internship / Professional Practice"] },
    ],
    whatsappMsg: "Hello, I am interested in the Entrepreneurship & Startup Strategies Bachelor at MISB. Could you please provide more information?",
  },
  "master-international-business-management": {
    code: "MIBM", title: "International Business Management",
    level: "Postgraduate — Mastère", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition", certification: " Level 7 Title (confirm registration number with MISB)",
    objective: "This Mastère prepares students and professionals for strategic, high-responsibility roles, combining academic rigour, an international vision, and a leadership-oriented approach to piloting projects and driving change in global organisations.",
    semesters: [
      { label: "1st Semester", courses: ["Global Market Strategy", "Cross-Cultural Management", "International Finance", "Research Methodology"] },
      { label: "2nd Semester", courses: ["Strategic Leadership", "Change Management", "Global Business Development", "Business French / FLE"] },
      { label: "3rd Semester", courses: ["Advanced Strategic Management", "International Negotiation", "Digital Transformation", "Professional Practice"] },
      { label: "4th Semester", courses: ["Consulting Project", "Master Thesis"] },
    ],
    whatsappMsg: "Hello, I am interested in the International Business Management Mastère at MISB. Could you please provide more information?",
  },
  "master-hotel-tourism-management": {
    code: "MHTM", title: "Hotel & Tourism Management",
    level: "Postgraduate — Mastère", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition", certification: " Level 7 Title (confirm registration number with MISB)",
    objective: "This Mastère prepares hospitality professionals for senior leadership positions in global tourism industries, blending strategic hospitality management with an international outlook.",
    semesters: [
      { label: "1st Semester", courses: ["Hospitality Strategy", "Tourism Policy & Planning", "International Finance", "Research Methodology"] },
      { label: "2nd Semester", courses: ["Revenue Optimisation", "Destination Marketing", "Crisis & Risk Management", "Business French / FLE"] },
      { label: "3rd Semester", courses: ["Luxury Hospitality", "Digital Tourism", "Sustainable Hospitality", "Professional Practice"] },
      { label: "4th Semester", courses: ["Consulting Project", "Master Thesis"] },
    ],
    whatsappMsg: "Hello, I am interested in the Hotel & Tourism Management Mastère at MISB. Could you please provide more information?",
  },
  "master-entrepreneurship-startup-strategies": {
    code: "MESS", title: "Entrepreneurship & Startup Strategies",
    level: "Postgraduate — Mastère", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition", certification: " Level 7 Title (confirm registration number with MISB)",
    objective: "This Mastère deepens entrepreneurial and leadership skills, preparing students to launch and scale ventures in complex, fast-changing international markets.",
    semesters: [
      { label: "1st Semester", courses: ["Venture Strategy", "Innovation Leadership", "International Finance", "Research Methodology"] },
      { label: "2nd Semester", courses: ["Scaling & Growth", "Investment & Fundraising", "Global Market Entry", "Business French / FLE"] },
      { label: "3rd Semester", courses: ["Strategic Risk-Taking", "Digital Business Models", "Sustainable Enterprise", "Professional Practice"] },
      { label: "4th Semester", courses: ["Consulting Project", "Master Thesis"] },
    ],
    whatsappMsg: "Hello, I am interested in the Entrepreneurship & Startup Strategies Mastère at MISB. Could you please provide more information?",
  },
  "master-international-marketing": {
    code: "MIM", title: "International Marketing",
    level: "Postgraduate — Mastère", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition", certification: " Level 7 Title (confirm registration number with MISB)",
    objective: "This Mastère develops advanced marketing strategy skills for professionals managing brands and campaigns across borders and cultures.",
    semesters: [
      { label: "1st Semester", courses: ["Global Marketing Strategy", "Consumer Behaviour Across Markets", "International Finance", "Research Methodology"] },
      { label: "2nd Semester", courses: ["Digital & International Campaigns", "Brand Strategy", "Market Research", "Business French / FLE"] },
      { label: "3rd Semester", courses: ["International Communications", "E-commerce Strategy", "Marketing Analytics", "Professional Practice"] },
      { label: "4th Semester", courses: ["Consulting Project", "Master Thesis"] },
    ],
    whatsappMsg: "Hello, I am interested in the International Marketing Mastère at MISB. Could you please provide more information?",
  },
  "master-human-resource-management": {
    code: "MHRM", title: "Human Resources Management",
    level: "Postgraduate — Mastère", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition", certification: " Level 7 Title (confirm registration number with MISB)",
    objective: "This Mastère builds expertise in leading people strategy and organisational development within international companies, preparing graduates for senior HR leadership roles.",
    semesters: [
      { label: "1st Semester", courses: ["International HR Strategy", "Organisational Behaviour", "International Finance", "Research Methodology"] },
      { label: "2nd Semester", courses: ["Talent Management", "Labour Law & Compliance", "Change & Culture Management", "Business French / FLE"] },
      { label: "3rd Semester", courses: ["Leadership Development", "Compensation & Benefits", "Diversity & Inclusion", "Professional Practice"] },
      { label: "4th Semester", courses: ["Consulting Project", "Master Thesis"] },
    ],
    whatsappMsg: "Hello, I am interested in the Human Resources Management Mastère at MISB. Could you please provide more information?",
  },
  "master-luxury-brand-management": {
    code: "MLBM", title: "Luxury Brand Management",
    level: "Postgraduate — Mastère", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition", certification: " Level 7 Title (confirm registration number with MISB)",
    objective: "This Mastère masters the strategic and creative dimensions of managing prestige brands, preparing graduates for leadership roles across global luxury markets.",
    semesters: [
      { label: "1st Semester", courses: ["Luxury Brand Strategy", "Heritage & Storytelling", "International Finance", "Research Methodology"] },
      { label: "2nd Semester", courses: ["Luxury Retail & Distribution", "Digital Luxury Marketing", "Consumer Psychology in Luxury", "Business French / FLE"] },
      { label: "3rd Semester", courses: ["Global Luxury Markets", "Brand Extension & Licensing", "Sustainability in Luxury", "Professional Practice"] },
      { label: "4th Semester", courses: ["Consulting Project", "Master Thesis"] },
    ],
    whatsappMsg: "Hello, I am interested in the Luxury Brand Management Mastère at MISB. Could you please provide more information?",
  },
    "bbs-international-business-management": {
    code: "BBS-IBM", title: "BBS — International Business Management",
    level: "Undergraduate — BBS", duration: "3 Years",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition",
    certification: "Bachelor in Business Studies (BBS) — French/English",
    objective: "The BBS offers a rigorous academic training in management and strategy, grounded in the standards of leading business schools. Designed to develop operational, internationally-minded profiles, it builds mastery of business fundamentals, analytical capability, and the agility to thrive in demanding international environments.",
    semesters: [
      { label: "Year 1", courses: ["Business Fundamentals", "Introduction to Management", "Financial Literacy", "Business Communication", "French as a Foreign Language"] },
      { label: "Year 2", courses: ["International Management", "Cross-Cultural Communication", "Marketing Principles", "Analytical Thinking", "Business French"] },
      { label: "Year 3", courses: ["Global Market Awareness", "Strategic Analysis", "Capstone Project", "Internship / Professional Practice"] },
    ],
    whatsappMsg: "Hello, I am interested in the BBS International Business Management program at MISB. Could you please provide more information?",
  },
  "bbs-hotel-and-tourismmanagement": {
    code: "BBS-HTM", title: "BBS — Hotel and Tourism Management",
    level: "Undergraduate — BBS", duration: "3 Years",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition",
    certification: "Bachelor in Business Studies (BBS) — French/English",
    objective: "This BBS track prepares operationally-minded graduates for the hospitality and tourism sector, combining rigorous business fundamentals with sector-specific operational training and an international outlook.",
    semesters: [
      { label: "Year 1", courses: ["Hospitality Fundamentals", "Introduction to Tourism", "Financial Literacy", "Business Communication", "French as a Foreign Language"] },
      { label: "Year 2", courses: ["Tourism Operations", "Cross-Cultural Communication", "Guest Service Standards", "Analytical Thinking", "Business French"] },
      { label: "Year 3", courses: ["Global Tourism Awareness", "Strategic Analysis", "Capstone Project", "Internship / Professional Practice"] },
    ],
    whatsappMsg: "Hello, I am interested in the BBS Hotel and Tourism Management program at MISB. Could you please provide more information?",
  },
    "dba": {
    code: "DBA", title: "Doctorate in Business Administration",
    level: "Doctorate", duration: "3 Years",
    intake: "September / October or January / February",
    fees: "From €3,200 (1st year, non-European) / €1,600/year thereafter — tiered by residency, confirm with MISB",
    certification: "Doctorate in Business Administration (French/English)",
    objective: "The DBA is a prestigious doctoral programme designed for professionals seeking to elevate their expertise through cutting-edge research, innovative strategy, and global business insight. It prepares future leaders through rigorous, research-driven study conducted in French or English.",
    semesters: [
      { label: "Year 1", courses: ["Advanced Research Methodology", "Strategic Management Theory", "Literature Review & Thesis Framing", "Academic Writing"] },
      { label: "Year 2", courses: ["Applied Business Research", "Data Collection & Analysis", "Global Business Insight", "Thesis Supervision I"] },
      { label: "Year 3", courses: ["Doctoral Thesis Completion", "Publication & Academic Writing", "Thesis Defence Preparation", "Thesis Supervision II"] },
    ],
    whatsappMsg: "Hello, I am interested in the DBA program at MISB. Could you please provide more information?",
  },
  "fle": {
    code: "FLE", title: "Français Langue Étrangère (FLE)",
    level: "Language Programme", duration: "Ongoing / Term-based",
    intake: "September / October or January / February",
    fees: "Contact admissions for current tuition",
    certification: "MISB French Language Certificate of Completion",
    objective: "MISB's French as a Foreign Language programme supports international students in building the language skills needed to thrive academically, professionally, and socially in France — taught alongside your main degree programme.",
    semesters: [
      { label: "Beginner Level", courses: ["Everyday Communication", "Basic Grammar & Vocabulary", "Pronunciation", "Cultural Orientation"] },
      { label: "Intermediate Level", courses: ["Academic French", "Business French", "Oral Expression", "Written Expression"] },
      { label: "Advanced Level", courses: ["French Culture & Society", "Professional Correspondence", "Presentation Skills", "Exam Preparation (DELF/DALF)"] },
    ],
    whatsappMsg: "Hello, I am interested in the FLE (French as a Foreign Language) program at MISB. Could you please provide more information?",
  },
};
const WAIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

   export default function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
     const resolvedParams = React.use(params);
     const locale = useLocale();
     const td = useTranslations("programDetail");

const p = programs[resolvedParams.slug];
if (!p) notFound();
  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(p.whatsappMsg)}`;

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ minHeight: "60vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", padding: "8rem 0 5rem" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "#e84e0f", zIndex: 3 }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <Link href={`/${locale}`} style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", color: "#0d1b2e", opacity: 0.6, textDecoration: "none" }}>{td("breadcrumbHome")}</Link>
            <span style={{ color: "#0d1b2e", opacity: 0.4 }}>›</span>
            <Link href={`/${locale}/programs`} style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", color: "#0d1b2e", opacity: 0.6, textDecoration: "none" }}>{td("breadcrumbPrograms")}</Link>
            <span style={{ color: "#0d1b2e", opacity: 0.4 }}>›</span>
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", color: "#0d1b2e" }}>{p.code}</span>
          </div>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "1.5rem" }}>{p.level}</p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, lineHeight: 1.05, color: "#0d1b2e", marginBottom: "2rem", maxWidth: "800px" }}>
            {p.title}
          </h1>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 300, fontSize: "1.05rem", color: "#0d1b2e", maxWidth: "560px", lineHeight: 1.85, marginBottom: "2.5rem" }}>
            {p.objective.substring(0, 180)}...
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-orange"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
              <WAIcon /> {td("whatsappBtn")}
            </a>
            <Link href={`/${locale}/contact`} className="btn btn-outline-navy">{td("contactBtn")}</Link>
          </div>
        </div>
      </section>

      {/* ── INFO BAR ── */}
      <section style={{ background: "#e84e0f" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {[
            { label: td("level"),    value: p.level },
            { label: td("duration"), value: p.duration },
            { label: td("intake"),   value: p.intake },
            { label: td("fees"),     value: p.fees },
          ].map((item, i) => (
            <div key={item.label} style={{ padding: "1.5rem 1rem", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none", textAlign: "center" }}>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: "4px" }}>{item.label}</p>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OBJECTIVE ── */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <FadeUp>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "1rem" }}>{td("objectiveLabel")}</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#0d1b2e", marginBottom: "1.5rem" }}>{td("aboutProgram")}</h2>
            <div style={{ width: "48px", height: "3px", background: "#e84e0f", marginBottom: "2rem" }} />
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.92rem", color: "#555", lineHeight: 1.9, marginBottom: "2rem" }}>{p.objective}</p>
            <div style={{ background: "#f4f4f4", padding: "1.5rem", border: "1px solid #e0e0e0", marginBottom: "2rem" }}>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#003366", marginBottom: "0.75rem" }}>{td("certificationLabel")}</p>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.9rem", color: "#444" }}>{p.certification}</p>
            </div>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "1rem 2rem", background: "#25D366", color: "#fff", fontFamily: "Montserrat, sans-serif", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1ebe5d")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}>
              <WAIcon /> {td("whatsappBtn")}
            </a>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div style={{ background: "#003366", padding: "2.5rem", color: "#fff" }}>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "1.5rem" }}>{td("detailsLabel")}</p>
              {[
                { label: td("degreeLevel"),       value: p.level },
                { label: td("duration"),          value: p.duration },
                { label: td("certificationLabel"),value: p.certification },
                { label: td("intake"),            value: p.intake },
                { label: td("tuitionFees"),       value: p.fees },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: "1.25rem", paddingBottom: "1.25rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "0.3rem" }}>{item.label}</p>
                  <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── PROGRAM STRUCTURE ── */}
      <section className="section" style={{ background: "#f4f4f4" }}>
        <div className="container">
          <FadeUp style={{ marginBottom: "3rem" }}>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "1rem" }}>{td("curriculumLabel")}</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#0d1b2e" }}>{td("programStructure")}</h2>
            <div style={{ width: "48px", height: "3px", background: "#e84e0f", marginTop: "0.75rem" }} />
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {p.semesters.map((sem, i) => (
              <FadeUp key={sem.label} delay={i * 0.08}>
                <div style={{ background: "#fff", border: "1px solid #e0e0e0", borderLeft: "4px solid #e84e0f", padding: "2rem" }}>
                  <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 800, color: "#003366", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                    {sem.label}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                    {sem.courses.map((course) => (
                      <span key={course} style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.82rem", color: "#444", background: "#f4f4f4", border: "1px solid #e0e0e0", padding: "0.3rem 0.85rem" }}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ background: "#0d1b2e", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FadeUp>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#e84e0f", marginBottom: "1rem" }}>{td("readyLabel")}</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#fff", marginBottom: "1rem" }}>{td("ctaH2")}</h2>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", marginBottom: "2.5rem" }}>{td("ctaP")}</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "0.85rem 2rem", background: "#25D366", color: "#fff", fontFamily: "Montserrat, sans-serif", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none", border: "2px solid #25D366", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#25D366"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.color = "#fff"; }}>
                <WAIcon /> {td("whatsappBtn")}
              </a>
              <Link href={`/${locale}/contact`} className="btn btn-outline-white">{td("contactBtn")}</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}