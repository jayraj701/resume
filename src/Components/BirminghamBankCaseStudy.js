import React from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import SiteAppBar from "./SiteAppBar";

const phases = [
  { num: "01", title: "Core Banking Transformation", year: "2022", color: "#0A2E5C" },
  { num: "02", title: "Tactical Deposit Portal (POC)", year: "2023", color: "#1A4A8A" },
  { num: "03", title: "SAM — Savings Platform", year: "2023-24", color: "#2563EB" },
  { num: "04", title: "Direct Debit System", year: "2023-24", color: "#1A4A8A" },
  { num: "05", title: "Platform Infrastructure", year: "2022-25", color: "#0A2E5C" },
  { num: "06", title: "Omni-Channel Operations", year: "2024-25", color: "#0F172A" },
];

const integrations = [
  { name: "Mambu", desc: "Core Banking Engine" },
  { name: "nCino", desc: "Loan Origination" },
  { name: "Lloyds Commercial", desc: "Banking Partner, SUN, EDN API" },
  { name: "AccessPay", desc: "BACS-Approved Software" },
  { name: "Tink", desc: "Open Banking & PSD2" },
  { name: "LexisNexis", desc: "KYC & Biometric Verification" },
  { name: "Equifax", desc: "Credit Bureau & Scoring" },
  { name: "ComplyAdvantage", desc: "AML & Sanctions Screening" },
  { name: "Callsign", desc: "ML Fraud Detection & Geo-tagging" },
  { name: "Bird", desc: "Email & SMS Communications" },
  { name: "Royal Mail", desc: "Address Lookup" },
  { name: "Banfico", desc: "Confirmation of Payee" },
  { name: "Intercom", desc: "Chatbot & Customer Service" },
  { name: "Azure Entra ID", desc: "SSO & Identity" },
];

const metrics = [
  { value: "3", label: "Years", sub: "March 2022 – April 2025" },
  { value: "35+", label: "Team Members", sub: "Cross-functional leadership" },
  { value: "500+", label: "Customers", sub: "Tactical POC validation" },
  { value: "14", label: "Integrations", sub: "Each with exit strategy" },
  { value: "6", label: "Microservices", sub: "Domain-driven design" },
  { value: "<25ms", label: "Avg Response", sub: "Production API latency" },
];

const Cover = () => (
  <div style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #0A2E5C 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: "40px 20px",
  }}>
    {/* Background grid pattern */}
    <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.05 }}>
      <defs>
        <pattern id="bb-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bb-grid)" />
    </svg>

    {/* Decorative financial chart lines */}
    <svg style={{ position: "absolute", bottom: "10%", left: "5%", width: "90%", height: "200px", opacity: 0.08 }} viewBox="0 0 800 200">
      <polyline points="0,180 80,160 160,140 240,120 320,90 400,100 480,60 560,70 640,30 720,40 800,10" fill="none" stroke="#60A5FA" strokeWidth="3" />
      <polyline points="0,190 80,185 160,170 240,155 320,130 400,140 480,110 560,100 640,80 720,75 800,50" fill="none" stroke="#34D399" strokeWidth="2" strokeDasharray="8,4" />
    </svg>

    {/* Decorative circles */}
    <div style={{ position: "absolute", top: "8%", right: "8%", width: 180, height: 180, border: "1px solid rgba(96,165,250,0.15)", borderRadius: "50%" }} />
    <div style={{ position: "absolute", top: "12%", right: "12%", width: 100, height: 100, border: "1px solid rgba(96,165,250,0.1)", borderRadius: "50%" }} />
    <div style={{ position: "absolute", bottom: "15%", left: "5%", width: 120, height: 120, border: "1px solid rgba(52,211,153,0.1)", borderRadius: "50%" }} />

    {/* Top bar */}
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #2563EB, #34D399, #F59E0B)" }} />

    {/* Case study badge */}
    <div style={{
      background: "rgba(37,99,235,0.15)",
      border: "1px solid rgba(37,99,235,0.3)",
      borderRadius: 100,
      padding: "8px 24px",
      marginBottom: 32,
      zIndex: 1,
    }}>
      <span style={{ color: "#60A5FA", fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase" }}>
        Technology Leadership Case Study
      </span>
    </div>

    {/* Bank icon */}
    <svg width="64" height="64" viewBox="0 0 64 64" style={{ marginBottom: 24, zIndex: 1 }}>
      <rect x="8" y="52" width="48" height="6" rx="2" fill="#34D399" opacity="0.8" />
      <rect x="12" y="24" width="6" height="28" rx="1" fill="#60A5FA" opacity="0.6" />
      <rect x="22" y="24" width="6" height="28" rx="1" fill="#60A5FA" opacity="0.7" />
      <rect x="36" y="24" width="6" height="28" rx="1" fill="#60A5FA" opacity="0.7" />
      <rect x="46" y="24" width="6" height="28" rx="1" fill="#60A5FA" opacity="0.6" />
      <polygon points="32,4 4,22 60,22" fill="#2563EB" opacity="0.8" />
      <circle cx="32" cy="15" r="3" fill="#0F172A" />
    </svg>

    {/* Title */}
    <h1 style={{
      color: "white",
      fontSize: "clamp(32px, 7vw, 52px)",
      fontWeight: 800,
      textAlign: "center",
      margin: 0,
      lineHeight: 1.1,
      zIndex: 1,
      letterSpacing: -1,
    }}>
      Birmingham Bank
    </h1>
    <p style={{
      color: "#94A3B8",
      fontSize: "clamp(15px, 3vw, 20px)",
      textAlign: "center",
      margin: "12px 0 40px",
      zIndex: 1,
      maxWidth: 500,
      lineHeight: 1.5,
    }}>
      Digital Banking Platform — Architecture, Delivery &amp; Transformation
    </p>

    {/* Divider */}
    <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, #2563EB, #34D399)", marginBottom: 40, zIndex: 1 }} />

    {/* Author */}
    <div style={{ textAlign: "center", zIndex: 1 }}>
      <h2 style={{ color: "white", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, margin: 0, letterSpacing: -0.5 }}>
        Jayraj Nimbalkar
      </h2>
      <p style={{ color: "#60A5FA", fontSize: 16, fontWeight: 600, margin: "8px 0 4px", letterSpacing: 2, textTransform: "uppercase" }}>
        Principal Engineer
      </p>
      <p style={{ color: "#64748B", fontSize: 14, margin: 0 }}>
        March 2022 — April 2025
      </p>
    </div>

    {/* Bottom tags strip */}
    <div style={{
      display: "flex",
      gap: 1,
      marginTop: 56,
      zIndex: 1,
      flexWrap: "wrap",
      justifyContent: "center",
    }}>
      {[
        { icon: "☁️", label: "AWS & Azure" },
        { icon: "🏦", label: "Mambu & nCino" },
        { icon: "🔒", label: "PCI DSS" },
        { icon: "💳", label: "BACS Direct Debit" },
        { icon: "🛡️", label: "KYC / AML" },
      ].map((t, i, arr) => (
        <div key={i} style={{
          background: "rgba(255,255,255,0.05)",
          padding: "10px 18px",
          borderRadius: i === 0 ? "8px 0 0 8px" : i === arr.length - 1 ? "0 8px 8px 0" : 0,
          border: "1px solid rgba(255,255,255,0.08)",
          borderLeft: i > 0 ? "none" : undefined,
        }}>
          <span style={{ color: "#CBD5E1", fontSize: 12, fontWeight: 500 }}>{t.icon} {t.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const MetricsSection = () => (
  <div style={{ background: "#F8FAFC", padding: "60px 20px", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
    <h2 style={{ textAlign: "center", fontSize: 28, color: "#0F172A", fontWeight: 700, margin: "0 0 8px" }}>Key Metrics &amp; Outcomes</h2>
    <p style={{ textAlign: "center", color: "#64748B", fontSize: 14, margin: "0 0 40px" }}>Measurable impact across the platform</p>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, maxWidth: 900, margin: "0 auto" }}>
      {metrics.map((m, i) => (
        <div key={i} style={{
          background: "white",
          borderRadius: 12,
          padding: "24px 20px",
          width: 155,
          textAlign: "center",
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          border: "1px solid #E2E8F0",
        }}>
          <div style={{ fontSize: 36, fontWeight: 800, color: "#2563EB", lineHeight: 1 }}>{m.value}</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A", marginTop: 8 }}>{m.label}</div>
          <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>{m.sub}</div>
        </div>
      ))}
    </div>
  </div>
);

const PhasesSection = () => (
  <div style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
    <h2 style={{ fontSize: 28, color: "#0F172A", fontWeight: 700, margin: "0 0 8px" }}>Delivery Phases</h2>
    <p style={{ color: "#64748B", fontSize: 14, margin: "0 0 40px" }}>Three years of progressive platform delivery</p>
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {phases.map((p, i) => (
        <div key={i} style={{
          display: "flex",
          alignItems: "center",
          background: p.color,
          borderRadius: 10,
          padding: "20px 24px",
          gap: 20,
        }}>
          <div style={{ fontSize: 32, fontWeight: 800, color: "rgba(255,255,255,0.2)", fontFamily: "monospace", minWidth: 50 }}>{p.num}</div>
          <div style={{ flex: 1 }}>
            <div style={{ color: "white", fontSize: 17, fontWeight: 700 }}>{p.title}</div>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "4px 14px",
            borderRadius: 100,
            color: "rgba(255,255,255,0.7)",
            fontSize: 12,
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}>{p.year}</div>
        </div>
      ))}
    </div>
  </div>
);

const IntegrationsSection = () => (
  <div style={{ background: "#0F172A", padding: "60px 20px" }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: 28, color: "white", fontWeight: 700, margin: "0 0 8px" }}>Integration Ecosystem</h2>
      <p style={{ color: "#64748B", fontSize: 14, margin: "0 0 40px" }}>14 third-party integrations — each with documented exit strategy</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {integrations.map((t, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 10,
            padding: "14px 18px",
            width: "calc(50% - 14px)",
            minWidth: 200,
            boxSizing: "border-box",
          }}>
            <div style={{ color: "#60A5FA", fontSize: 14, fontWeight: 700 }}>{t.name}</div>
            <div style={{ color: "#94A3B8", fontSize: 12, marginTop: 2 }}>{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TechStack = () => {
  const stack = [
    { cat: "Cloud", items: "AWS (ECS Fargate, RDS, SQS, S3, API Gateway), Microsoft Azure" },
    { cat: "Core Banking", items: "Mambu, nCino" },
    { cat: "Payments", items: "Lloyds (SUN, EDN), AccessPay (BACS), Tink (Open Banking)" },
    { cat: "Identity & KYC", items: "LexisNexis RiskNarrative, Equifax, Callsign, Biometrics" },
    { cat: "AML", items: "ComplyAdvantage (Sanctions, PEP, Adverse Media)" },
    { cat: "Architecture", items: "Domain-Driven Microservices, Event-Driven, REST APIs" },
    { cat: "Auth", items: "Azure Entra ID, OTP / MFA" },
    { cat: "Comms", items: "Bird (Email & SMS), Intercom (Chatbot)" },
    { cat: "Compliance", items: "PCI DSS, FCA, BACS Scheme Rules" },
  ];
  return (
    <div style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: 28, color: "#0F172A", fontWeight: 700, margin: "0 0 8px" }}>Technology Stack</h2>
      <p style={{ color: "#64748B", fontSize: 14, margin: "0 0 40px" }}>Multi-cloud, multi-platform architecture</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {stack.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 16, alignItems: "baseline", padding: "12px 0", borderBottom: "1px solid #F1F5F9", flexWrap: "wrap" }}>
            <div style={{ minWidth: 130, color: "#2563EB", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>{s.cat}</div>
            <div style={{ color: "#334155", fontSize: 14, lineHeight: 1.6, flex: 1 }}>{s.items}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LeadershipSection = () => (
  <div style={{ background: "linear-gradient(135deg, #0F172A, #1E293B)", padding: "60px 20px" }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: 28, color: "white", fontWeight: 700, margin: "0 0 32px" }}>Leadership &amp; Strategic Impact</h2>
      {[
        "Defined the technical vision for Birmingham Bank's entire digital platform — conceived, architected, and built from the ground up.",
        "Made the build vs. buy call — recommended in-house over nCino for deposits, validated with a tactical POC, then scaled to strategic delivery.",
        "Proved capacity before committing — the Tactical Deposit Portal validated the entire operating model (tech, ops, finance) before committing to the full SAM build.",
        "Led 35+ team members across project management, business analysis, technical leadership, and development.",
        "Built for resilience and independence — exit plans and data recovery strategies for every third-party relationship.",
        "Ensured PCI DSS compliance, coordinated penetration testing, and designed disaster recovery plans.",
        "Delivered for every stakeholder — customers, brokers, operations, finance, compliance, and the board.",
      ].map((t, i) => (
        <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "flex-start" }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "linear-gradient(135deg, #2563EB, #34D399)",
            marginTop: 7, flexShrink: 0,
          }} />
          <p style={{ color: "#CBD5E1", fontSize: 15, margin: 0, lineHeight: 1.7 }}>{t}</p>
        </div>
      ))}
    </div>
  </div>
);

const CaseStudyFooter = () => (
  <div style={{
    padding: "40px 20px",
    textAlign: "center",
    borderTop: "1px solid #E2E8F0",
  }}>
    <p style={{ color: "#0F172A", fontSize: 18, fontWeight: 700, margin: 0 }}>Jayraj Nimbalkar</p>
    <p style={{ color: "#2563EB", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", margin: "4px 0 8px" }}>Principal Engineer</p>
    <p style={{ color: "#94A3B8", fontSize: 12, margin: 0 }}>Birmingham Bank — March 2022 to April 2025</p>
    <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, #2563EB, #34D399)", margin: "20px auto 0" }} />
  </div>
);

const BirminghamBankCaseStudy = () => (
  <>
    <SiteAppBar />
    <Box sx={{
      pt: "64px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      bgcolor: "white",
      color: "#0F172A",
    }}>
      {/* Back navigation */}
      <Box sx={{ px: { xs: 2, md: 4 }, py: 1.5, borderBottom: "1px solid #F1F5F9", bgcolor: "white" }}>
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{
            color: "#0D2137",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "0.9rem",
            "&:hover": { bgcolor: "rgba(13,33,55,0.05)" },
          }}
        >
          Back to Portfolio
        </Button>
      </Box>

      <Cover />
      <MetricsSection />
      <PhasesSection />
      <IntegrationsSection />
      <TechStack />
      <LeadershipSection />
      <CaseStudyFooter />
    </Box>
  </>
);

export default BirminghamBankCaseStudy;
