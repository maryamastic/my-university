"use client";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";
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
  "bba": {
    code: "BBA", title: "Bachelor of Business Administration",
    level: "Undergraduate", duration: "3 Years",
    intake: "September / October or January / February",
    fees: "€3,000/year — Total: €9,000", certification: "Level 6 RNCP Title",
    objective: "This professional degree is recommended for those considering a career abroad or in an international environment. The training is general, but the third year allows for specialisation in two areas, which the student can deepen by continuing their MBA studies.",
    semesters: [
      { label: "1st Year — 1st Semester", courses: ["Introduction to Organisations", "Financial Mathematics", "Introduction to Cross-Cultural Communications", "Principles of Marketing", "Accounting Principles", "Innovation and Digital Marketing", "Using Social Media in Business", "Research Methods II", "Introduction to Operations and Supply Chain", "LV1 English", "LV2 FLE"] },
      { label: "1st Year — 2nd Semester", courses: ["Introduction to Management", "Economic Conditions", "Introduction to Statistics", "Mix Marketing and Communication", "Comparative Contracts Law", "Research Methods I", "International Seminar", "Business IT Tools II", "Introduction to Geopolitics", "LV1 English", "LV2 FLE"] },
      { label: "2nd Year — 1st Semester", courses: ["Financial Accounting", "Cross-Cultural Management", "International Economics", "Market Research", "Human Resources Management", "International Trade", "Advanced Statistics", "Business IT Tools III", "Geopolitical Future", "LV1 English", "LV2 FLE"] },
      { label: "2nd Year — 2nd Semester", courses: ["Financial Analysis", "International Business Environment", "International Negotiation", "Innovation and Digital Marketing", "Using Social Media in Business", "Research Methods II", "Introduction to Operations and Supply Chain", "LV1 English", "LV2 FLE"] },
      { label: "3rd Year — 1st Semester", courses: ["Business Ethics & Corporate Social Responsibility", "Sustainable Supply Chain Management", "Graduation Assignment", "Business Strategy", "French as a Foreign Language"] },
      { label: "3rd Year — Elective Courses (choose 2)", courses: ["Strategic Marketing Planning", "Marketing Tourism", "Treasury and International Risk Management", "Data Analysis for Business Management", "Advertising and Promotion", "International HR Management", "Family Entrepreneurship", "Innovation & Lean Start-up", "Luxury Brand Management", "Financial Management", "Geopolitics"] },
    ],
    whatsappMsg: "Hello, I am interested in the BBA program at Modesse Business School. Could you please provide more information?",
  },
  "bachelor-tourism-hospitality": {
    code: "BTH", title: "Bachelor in Tourism and Hospitality Management",
    level: "Undergraduate", duration: "3 Years",
    intake: "September / October or January / February",
    fees: "€3,000/year — Total: €9,000", certification: "Level 6 RNCP Title",
    objective: "To introduce students to the world of tourism and hospitality. The 3-year programme inducts students into modern and technological ways of engaging and promoting tourism culture. We offer state-of-the-art education in hospitality management with hands-on experience for the benefit of the students.",
    semesters: [
      { label: "1st Year", courses: ["Introduction to Hospitality in Tourism and Events", "Tourism Sociology", "Academic Writing & Study Skills", "Consumer Marketing", "Academic English Communications", "Personal & Professional Development & Communications", "Economics for the Global Service Industry", "Introduction to Dining Operations LAB", "Principles of Event Management", "Food & Beverage Service Operations LAB", "Introduction to the French language"] },
      { label: "2nd Year", courses: ["Tourism Planning and Experience", "Hotel and Restaurant Design", "Heritage Tourism and International Hospitality Cultures", "Human Resources Management in Tourism", "Marketing Tourism and E-Commerce", "Tourism and Hospitality Law", "Front Office Operations and Reservation Systems", "Housekeeping Operations", "Transportation: The Airline and Cruising Industry", "Hotel Yield Management", "Wine and Beverage Studies", "Food Hygiene, Safety and Terminology"] },
      { label: "3rd Year", courses: ["Sustainable Tourism in the Developing World", "Strategic Management in Hotel and Hospitality Businesses", "Costing and Budgets of Tourism and Hospitality Industry", "Dissertation", "Tourism and Urban Change", "Event Experience Design", "Food and Beverage Workshops", "Commodity Purchasing and Food Merchandising", "Business French language"] },
    ],
    whatsappMsg: "Hello, I am interested in the Bachelor in Tourism and Hospitality Management at Modesse Business School. Could you please provide more information?",
  },
  "bachelor-hotel-management": {
    code: "BHM", title: "Bachelor in Hotel Management",
    level: "Undergraduate", duration: "3 Years",
    intake: "September / October or January / February",
    fees: "€3,000/year — Total: €9,000", certification: "Level 6 RNCP Title",
    objective: "Develop your operational skills in the hotel industry to become responsible for managing a team, implementing a marketing plan, selling and negotiating hotel products and services, mastering interpersonal communication, and managing key performance indicators.",
    semesters: [
      { label: "1st Year", courses: ["Management", "Marketing", "HR Management", "Office Tools", "Business Economics", "Sustainable Development and CSR", "Interculturality", "Professional Culture", "Hygiene and Safety", "Nutrition", "Vintage Wines", "Business Discovery", "English F&B", "F&B Environment", "Hospitality Environment", "Operational Internship"] },
      { label: "2nd Year", courses: ["Financial Management", "Strategic Marketing", "HR Management", "Advanced Excel", "Business Law", "Oral Communication", "Economic Environment", "Documentary and Strategic Monitoring", "Tourism Economy", "Crus des Vins du Monde", "Sustainable Development Project & CSR", "Business English & English for Hospitality", "F&B Environment", "Hospitality Environment", "Professional Practice"] },
      { label: "3rd Year", courses: ["Management Control", "Operational Marketing", "Management and Leadership", "Taxation", "Intercultural Team Management", "Sales Technique and Negotiation", "Professional IT", "Communication", "Community Management", "Business Game", "Wines, Beers, Spirits", "Geopolitics", "Tourism and Travel", "English for Managers", "Professional Practice"] },
    ],
    whatsappMsg: "Hello, I am interested in the Bachelor in Hotel Management at Modesse Business School. Could you please provide more information?",
  },
  "master-international-business": {
    code: "MIB", title: "Master in International Business",
    level: "Postgraduate", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "€5,000/year — Total: €10,000", certification: "Level 7 RNCP Title",
    objective: "This International Business MBA provides a worldwide approach to the major sales and managerial issues: management, business administration, and marketing. It transmits the new values of international leadership to students and develops their global vision, allowing them to take on the management functions they are aiming for.",
    semesters: [
      { label: "1st Semester", courses: ["Internationalisation of the Firm", "International Human Resource Management", "International Trade", "International Entrepreneurship", "Global Marketing Management", "Cross-cultural Management", "International Finance", "Research Methodology", "Power Platform by Microsoft", "Inclusive Leadership Across Cultures"] },
      { label: "2nd Semester", courses: ["StratMe'Up", "Introduction to Big Data and Business Analytics", "International Supply Chain Management", "International Project Management", "Legal Issues in International Business", "Influence of Politics on Economic Decision Making", "Culture Matters: The Culturoscope Approach", "Research Methods in Business & Strategy"] },
      { label: "3rd Semester", courses: ["Strategic Management", "Strategic Finance", "Strategic Marketing", "Decision & Game Theory", "Management Control", "Sales & Relations Strategies", "Purchase & Supply Chain", "HR and Diversity Management", "Module Soft Skills", "English for Business I or FLE"] },
      { label: "4th Semester", courses: ["Entrepreneurship and Systemic Change", "Alternative & Sustainable Business Model", "Digital Change Management", "Digital Business Model", "Geopolitics and Business Strategy", "International Entrepreneurship Week", "English for Business 2 or FLE"] },
    ],
    whatsappMsg: "Hello, I am interested in the Master in International Business at Modesse Business School. Could you please provide more information?",
  },
  "mba": {
    code: "MBA", title: "Master of Business Administration (MBA)",
    level: "Postgraduate", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "€5,000/year — Total: €10,000", certification: "Level 7 RNCP Title",
    objective: "The MBA is a state-of-the-art training program providing thorough expertise in management and leadership for executives and managers. Participants acquire solid strategic competences essential to perform outstandingly in the world of management. Whether developing your career, changing sector, or starting a business, the MBA provides the necessary knowledge and toolkit.",
    semesters: [
      { label: "1st Semester", courses: ["Ethics & CSR", "French as Second Language I", "Fundamentals of Sustainable Development for Business", "Area Study I", "Leadership and Change Management", "Finance", "Public & Media Relations", "Innovation Management & New Product Development"] },
      { label: "2nd Semester", courses: ["Business Planning", "Public Speaking and Communication Skills for Managers", "Negotiation Workshop", "Strategic Management", "Area Study II", "New Technology & Business", "Strategic Alliances", "Capstone Master Project"] },
      { label: "3rd Semester", courses: ["Team Management", "Economic Business Philosophy", "Strategic Planning", "Marketing & Sales Activity Management Control", "Operational Marketing", "Key Accounts Negotiation", "Sales Action Plan", "Commercial Performance Management"] },
      { label: "4th Semester", courses: ["Project Work I", "International Project II", "Master Thesis"] },
    ],
    whatsappMsg: "Hello, I am interested in the MBA at Modesse Business School. Could you please provide more information?",
  },
  "master-international-marketing": {
    code: "MIM-MKT", title: "Master in International Marketing",
    level: "Postgraduate", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "€5,000/year — Total: €10,000", certification: "Level 7 RNCP Title",
    objective: "The international marketing program combines an international dimension (programme in at least two countries), a digital dimension (Open Innovation Challenge and professional thesis), and a managerial dimension providing fundamental skills in strategy, finance, project management, marketing, and communication.",
    semesters: [
      { label: "Program Modules", courses: ["Strategic Management", "Performance Control", "Business Ethics", "Digital Business", "Project Management", "Marketing Strategy & Operation", "Financial Management", "Entrepreneurship", "International Marketing", "Consumer Behavior Analysis", "Digital Marketing", "Digital Transformation", "Business Intelligence", "Management of IT", "Digital Law", "Web Design & Development", "Brand Strategy and Management", "Change Management & Knowledge", "Market Finance", "Risk Management", "Sustainable Strategies", "Doing Business Internationally", "Business Law", "HR Management", "Impact Leadership", "Leading Change", "Sales & Negotiation", "Capstone Project"] },
    ],
    whatsappMsg: "Hello, I am interested in the Master in International Marketing at Modesse Business School. Could you please provide more information?",
  },
  "master-digital-marketing": {
    code: "MDM", title: "Master in Digital Marketing",
    level: "Postgraduate", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "€5,000/year — Total: €10,000", certification: "Level 7 RNCP Title",
    objective: "The Master in Digital Marketing Management provides future managers with specialised knowledge, analytical, technical, and managerial skills needed to thrive in global digital marketing and communications fields. Students develop innovative, responsible marketing strategies harnessing digital technologies to maximise customer experience.",
    semesters: [
      { label: "1st Semester", courses: ["Digital Marketing Strategy", "Consumer Psychology & Behavior in Digital Era", "Digital Communication", "Customer Experience Management and Omnichannel Strategy", "Marketing Design for Augmented and Virtual Reality", "Community Management and Social Media Strategy", "Online Marketing Research Methods", "Research Methodology", "Power Platform by Microsoft", "Soft Skills"] },
      { label: "2nd Semester", courses: ["Marketing Challenge", "Pricing and Customer Value", "Storytelling in the Digital Era", "Mobile Strategy", "Introduction of Digital Metrics", "Graphic and Web Design & Brand Communication", "Gamification in Marketing", "Research Methods in Marketing"] },
      { label: "3rd Semester", courses: ["Strategic Management", "Strategic Finance", "Strategic Marketing", "Decision & Game Theory", "Management Control", "Sales & Relations Strategies", "Purchase & Supply Chain", "HR and Diversity Management", "Module Soft Skills", "English for Business 1 or FLE"] },
      { label: "4th Semester", courses: ["Marketing for Alternative Organisations", "Cross-cultural Negotiations", "Blockchain for Marketing & Sales", "Mark'Strat", "Sector Marketing", "International Entrepreneurship Week", "Power Platform by Microsoft", "English for Business 2 or FLE"] },
    ],
    whatsappMsg: "Hello, I am interested in the Master in Digital Marketing at Modesse Business School. Could you please provide more information?",
  },
  "master-international-management": {
    code: "MIM", title: "Master in International Management",
    level: "Postgraduate", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "€5,000/year — Total: €10,000", certification: "Level 7 RNCP Title",
    objective: "To provide students with comprehensive knowledge and skills in managing businesses and organisations in a global context. The programme equips students with tools and expertise to navigate the complexities of international markets, cultural differences, and diverse business environments.",
    semesters: [
      { label: "1st Semester", courses: ["Strategic Management", "Accounting", "Organisational Behaviour", "Managing Business Information and Technology", "Excel for Professionals"] },
      { label: "2nd Semester", courses: ["Finance", "International Marketing", "International Strategy", "Business Plan and Entrepreneurship", "Introduction to Research", "Internationalisation and Professionalisation", "Internship"] },
      { label: "3rd Semester", courses: ["Advanced Strategy: Sustainable Business Development", "Cross-cultural Management & International HRM", "International Management Control", "Commercial Negotiation", "Digital Marketing", "Export and International Trade", "Supply Chain Management", "Practitioner Conferences"] },
      { label: "4th Semester", courses: ["International Project Management & Consulting Projects", "Internship / Entrepreneurial Project"] },
    ],
    whatsappMsg: "Hello, I am interested in the Master in International Management at Modesse Business School. Could you please provide more information?",
  },
  "master-tourism-hospitality": {
    code: "MTH", title: "Master in Tourism and Hospitality Management",
    level: "Postgraduate", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "€5,000/year — Total: €10,000", certification: "Level 7 RNCP Title",
    objective: "The fields of tourism and hospitality have experienced a revolution in recent years. Digital, innovation, and international development are at the heart of our training program. The program includes special activities to gain practical experience: creative competitions, company visits, and master classes.",
    semesters: [
      { label: "1st Year — Professional Methods and Practices", courses: ["Business Game", "Professional Technical Workshops and Personal Management", "Trade Conferences"] },
      { label: "1st Year — Cross-cutting and Fundamental Courses", courses: ["International Accounting", "Business Plan and Setting Up a Company", "Company Strategy", "International Negotiation", "Business English / TOEIC", "Management Information Systems", "Business Skills"] },
      { label: "1st Year — Specialized Courses", courses: ["B2C Marketing", "International Marketing", "Digital Marketing", "International Trade", "Global Geopolitical and International Relations", "Brand Strategies", "Marketing Tools in Luxury and Fashion Industries", "Traditional and New Communications Strategies"] },
      { label: "2nd Year — Management", courses: ["Cross Cultural and Team Management", "Business Plan and Hospitality", "Tourism Law", "Pricing and Yield Management in Tourism", "Hospitality Strategic Forecasting and Budgeting", "Tourism, Geopolitics, and Emerging Country Trends"] },
      { label: "2nd Year — Marketing", courses: ["Consumer Psychology and Persuasion Strategy", "Marketing and Sales Strategies", "International Marketing", "Brand Management Strategies", "E-tourism", "CRM and Client Database Management"] },
      { label: "2nd Year — Key Sectors", courses: ["Luxury Travel and Tourism", "Tourism and Leisure Marketing", "Hotel Business Management", "Catering and Gastronomy", "Events Project Management"] },
    ],
    whatsappMsg: "Hello, I am interested in the Master in Tourism and Hospitality Management at Modesse Business School. Could you please provide more information?",
  },
  "msc-supply-chain": {
    code: "SCM", title: "MSc Supply Chain Management",
    level: "Postgraduate", duration: "2 Years",
    intake: "September / October or January / February",
    fees: "€5,000/year — Total: €10,000", certification: "Level 7 RNCP Title",
    objective: "A supply chain manager is a master in all areas including sourcing, planning, transportation, distribution, warehousing, inventory management, customer service, and strategic leadership. This intensive programme provides the knowledge and skills required to become a well-rounded supply chain manager.",
    semesters: [
      { label: "1st Semester", courses: ["Operations and Supply Chain Management", "Lean Management", "Innovation Management", "Advanced Statistics", "Supply Chain Strategy", "Agile Project Management", "Business Ethics and Sustainability", "Research Methodology", "Power Platform by Microsoft", "Soft Skills"] },
      { label: "2nd Semester", courses: ["Global Supply Chain: Contemporary Challenges", "Responsible Purchasing", "Advanced Operations & Supply Chain Management", "Supply Chain and Big Data", "Lean Six Sigma", "Sustainable Supply Chain", "Supplier Relationship Management", "Research Methods in Management"] },
      { label: "3rd Semester", courses: ["Strategic Management", "Strategic Finance", "Strategic Marketing", "Decision & Game Theory", "Management Control", "Sales & Relations Strategies", "Purchase & Supply Chain", "HR and Diversity Management", "Module Soft Skills", "English for Business 1 or FLE"] },
      { label: "4th Semester", courses: ["Sustainable Management", "Global Supply Chain Sustainability and Digitalisation", "Alternative & Sustainable Business Model", "Economics of Big Data, AI & Blockchain", "Digital Business Model", "Statistics for Business", "International Entrepreneurship Week", "English for Business 2 or FLE"] },
    ],
    whatsappMsg: "Hello, I am interested in the MSc Supply Chain Management at Modesse Business School. Could you please provide more information?",
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