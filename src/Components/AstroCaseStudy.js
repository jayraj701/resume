import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import SiteAppBar from "./SiteAppBar";

const architectureBlocks = [
  { num: "01", title: "Multi-Tenant SaaS Foundation", tag: "Core Design", color: "#064E3B" },
  { num: "02", title: "Event-Driven Bulk Processing Pipeline", tag: "Async Architecture", color: "#065F46" },
  { num: "03", title: "Quota & Feature Enforcement Engine", tag: "Plan Management", color: "#0D9488" },
  { num: "04", title: "Dual-Storage Market Data Strategy", tag: "Data Layer", color: "#065F46" },
  { num: "05", title: "Multi-Auth Provider Migration", tag: "Zero Downtime", color: "#064E3B" },
  { num: "06", title: "OpenTelemetry-First Observability", tag: "Production", color: "#0F172A" },
];

const integrations = [
  { name: "Amazon SP-API", desc: "Seller account auth, listing restrictions" },
  { name: "Keepa", desc: "Price history, rank & offer data" },
  { name: "Stripe", desc: "Subscription billing & webhooks" },
  { name: "Stytch", desc: "Primary user authentication (JWT)" },
  { name: "Azure AD B2C", desc: "Legacy authentication (migration)" },
  { name: "Azure Service Bus", desc: "Async message transport" },
  { name: "Azure SignalR", desc: "Real-time bulk job progress" },
  { name: "Azure Cosmos DB", desc: "Hot Keepa chart reads" },
  { name: "Azure Blob Storage", desc: "Cold chart archival & compression" },
  { name: "Redis", desc: "Distributed cache & session state" },
  { name: "Application Insights", desc: "APM & distributed tracing" },
  { name: "MessageBird", desc: "Transactional email & SMS" },
  { name: "OpenAI", desc: "AI-powered supplier search" },
  { name: "Azure Key Vault", desc: "Secret management (Staging & Prod)" },
];

const metrics = [
  { value: "27", label: "API Domains", sub: "Domain-scoped controllers" },
  { value: "220+", label: "Automated Tests", sub: "Service + controller layers" },
  { value: "14", label: "Solution Projects", sub: "Strict layered architecture" },
  { value: "3", label: "Client Surfaces", sub: "SPA · Extension · Admin" },
  { value: "~80%", label: "Data Compression", sub: "Keepa chart payload reduction" },
  { value: "<90ms", label: "API Response", sub: "Production p99 latency" },
];

const challenges = [
  {
    title: "Financial Calculation Precision at Scale",
    body: "Amazon seller profitability requires sub-cent precision across referral fees, FBA fees, inbound shipping, and prep costs. All decimal fields use precision(18,4). Calculations are stored in the database rather than computed on read — enabling real-time filtering and sorting on ROI, margin, and break-even across large product catalogues.",
  },
  {
    title: "High-Volume Keepa Data Without IO Saturation",
    body: "Keepa returns multi-year price/rank/offer history as large JSON payloads (1–5 MB per product). GZip compression achieves ~80% reduction. Data is split across Cosmos DB (hot partition-key reads) and Azure Blob Storage (cost-effective cold archival). A SemaphoreSlim(12) prevents connection pool exhaustion during concurrent bulk ingestion.",
  },
  {
    title: "Zero-Downtime Auth Provider Migration",
    body: "Migrating from Azure AD B2C to Stytch required simultaneously supporting three token types. UserCompanyAugmentationMiddleware normalises claims from all providers into a single internal format — keeping all downstream controllers and services completely auth-provider-agnostic and requiring no per-endpoint changes.",
  },
  {
    title: "Quota Enforcement Without Service Coupling",
    body: "Services need to check quotas before performing operations, but quota rules change with plan configuration. The ILimitEngine abstracts all quota concerns — plan tiers, company overrides, cooldown gates. Services call EvaluateAsync() with no knowledge of plan definitions, enabling instant plan changes without code deployments.",
  },
  {
    title: "Real-Time Feedback for Multi-Minute Bulk Operations",
    body: "Bulk uploads of 1,000+ ASINs take minutes to process. HTTP long-polling was not viable. SignalR provides persistent per-operation connection channels. Progress events are published via MassTransit consumers, keeping the hosted service fully decoupled from the real-time transport layer.",
  },
];

const Cover = () => (
  <div style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0F172A 0%, #1E293B 45%, #134E4A 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: "40px 20px",
  }}>
    {/* Background grid */}
    <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.05 }}>
      <defs>
        <pattern id="astro-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#astro-grid)" />
    </svg>

    {/* Decorative data wave lines */}
    <svg style={{ position: "absolute", bottom: "10%", left: "5%", width: "90%", height: "200px", opacity: 0.08 }} viewBox="0 0 800 200">
      <polyline points="0,160 60,140 120,155 200,100 280,120 360,70 440,90 520,50 600,65 680,30 760,45 800,20" fill="none" stroke="#34D399" strokeWidth="3" />
      <polyline points="0,185 80,175 160,180 240,150 320,165 400,130 480,145 560,110 640,125 720,90 800,70" fill="none" stroke="#0D9488" strokeWidth="2" strokeDasharray="8,4" />
    </svg>

    {/* Decorative circles */}
    <div style={{ position: "absolute", top: "8%", right: "8%", width: 180, height: 180, border: "1px solid rgba(13,148,136,0.2)", borderRadius: "50%" }} />
    <div style={{ position: "absolute", top: "12%", right: "12%", width: 100, height: 100, border: "1px solid rgba(13,148,136,0.12)", borderRadius: "50%" }} />
    <div style={{ position: "absolute", bottom: "15%", left: "5%", width: 120, height: 120, border: "1px solid rgba(52,211,153,0.12)", borderRadius: "50%" }} />

    {/* Top accent bar */}
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #0D9488, #34D399, #F59E0B)" }} />

    {/* Badge */}
    <div style={{
      background: "rgba(13,148,136,0.15)",
      border: "1px solid rgba(13,148,136,0.35)",
      borderRadius: 100,
      padding: "8px 24px",
      marginBottom: 32,
      zIndex: 1,
    }}>
      <span style={{ color: "#34D399", fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase" }}>
        Platform Architecture Case Study
      </span>
    </div>

    {/* Product icon */}
    <svg width="64" height="64" viewBox="0 0 64 64" style={{ marginBottom: 24, zIndex: 1 }}>
      {/* Chart bars */}
      <rect x="6" y="38" width="8" height="18" rx="2" fill="#34D399" opacity="0.6" />
      <rect x="18" y="28" width="8" height="28" rx="2" fill="#0D9488" opacity="0.7" />
      <rect x="30" y="18" width="8" height="38" rx="2" fill="#34D399" opacity="0.8" />
      <rect x="42" y="24" width="8" height="32" rx="2" fill="#0D9488" opacity="0.7" />
      {/* Trend line */}
      <polyline points="10,36 22,26 34,16 46,22" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="10" cy="36" r="3" fill="#F59E0B" />
      <circle cx="46" cy="22" r="3" fill="#F59E0B" />
    </svg>

    {/* Title */}
    <h1 style={{
      color: "white",
      fontSize: "clamp(28px, 6vw, 50px)",
      fontWeight: 800,
      textAlign: "center",
      margin: 0,
      lineHeight: 1.1,
      zIndex: 1,
      letterSpacing: -1,
    }}>
      Astro Terra
    </h1>
    <p style={{
      color: "#94A3B8",
      fontSize: "clamp(14px, 2.5vw, 19px)",
      textAlign: "center",
      margin: "12px 0 40px",
      zIndex: 1,
      maxWidth: 520,
      lineHeight: 1.5,
    }}>
      Amazon Seller Analytics &amp; Product Intelligence Platform — Architecture &amp; Engineering
    </p>

    {/* Divider */}
    <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, #0D9488, #34D399)", marginBottom: 40, zIndex: 1 }} />

    {/* Author */}
    <div style={{ textAlign: "center", zIndex: 1 }}>
      <h2 style={{ color: "white", fontSize: "clamp(20px, 4vw, 30px)", fontWeight: 700, margin: 0, letterSpacing: -0.5 }}>
        Jayraj Nimbalkar
      </h2>
      <p style={{ color: "#34D399", fontSize: 16, fontWeight: 600, margin: "8px 0 4px", letterSpacing: 2, textTransform: "uppercase" }}>
        CTO &amp; Principal Architect
      </p>
      <p style={{ color: "#64748B", fontSize: 14, margin: 0 }}>
        2024 — Present · SaaS B2B · Multi-Tenant
      </p>
    </div>

    {/* Tags strip */}
    <div style={{
      display: "flex",
      gap: 1,
      marginTop: 56,
      zIndex: 1,
      flexWrap: "wrap",
      justifyContent: "center",
    }}>
      {[
        { icon: "🛒", label: "Amazon SP-API" },
        { icon: "⚙️", label: ".NET 9 / ASP.NET Core" },
        { icon: "☁️", label: "Azure Multi-Cloud" },
        { icon: "📊", label: "Real-Time Analytics" },
        { icon: "💳", label: "Stripe Billing" },
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
    <h2 style={{ textAlign: "center", fontSize: 28, color: "#0F172A", fontWeight: 700, margin: "0 0 8px" }}>Platform at a Glance</h2>
    <p style={{ textAlign: "center", color: "#64748B", fontSize: 14, margin: "0 0 40px" }}>Scale and complexity of the architecture</p>
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
          <div style={{ fontSize: 34, fontWeight: 800, color: "#0D9488", lineHeight: 1 }}>{m.value}</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A", marginTop: 8 }}>{m.label}</div>
          <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>{m.sub}</div>
        </div>
      ))}
    </div>
  </div>
);

const ArchitectureSection = () => (
  <div style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
    <h2 style={{ fontSize: 28, color: "#0F172A", fontWeight: 700, margin: "0 0 8px" }}>Architectural Building Blocks</h2>
    <p style={{ color: "#64748B", fontSize: 14, margin: "0 0 40px" }}>Six key design decisions that define the platform</p>
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {architectureBlocks.map((b, i) => (
        <div key={i} style={{
          display: "flex",
          alignItems: "center",
          background: b.color,
          borderRadius: 10,
          padding: "20px 24px",
          gap: 20,
        }}>
          <div style={{ fontSize: 32, fontWeight: 800, color: "rgba(255,255,255,0.2)", fontFamily: "monospace", minWidth: 50 }}>{b.num}</div>
          <div style={{ flex: 1 }}>
            <div style={{ color: "white", fontSize: 17, fontWeight: 700 }}>{b.title}</div>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "4px 14px",
            borderRadius: 100,
            color: "rgba(255,255,255,0.7)",
            fontSize: 12,
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}>{b.tag}</div>
        </div>
      ))}
    </div>
  </div>
);

const IntegrationsSection = () => (
  <div style={{ background: "#0F172A", padding: "60px 20px" }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: 28, color: "white", fontWeight: 700, margin: "0 0 8px" }}>Integration Ecosystem</h2>
      <p style={{ color: "#64748B", fontSize: 14, margin: "0 0 40px" }}>14 external services — Amazon data, cloud infrastructure, and business operations</p>
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
            <div style={{ color: "#34D399", fontSize: 14, fontWeight: 700 }}>{t.name}</div>
            <div style={{ color: "#94A3B8", fontSize: 12, marginTop: 2 }}>{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TechStack = () => {
  const stack = [
    { cat: "Runtime", items: ".NET 9 · ASP.NET Core 9 · EF Core 9.0.1" },
    { cat: "Primary DB", items: "PostgreSQL (Npgsql 9.0.3)" },
    { cat: "Cache & NoSQL", items: "Redis (StackExchange 2.8) · Azure Cosmos DB (SDK v3)" },
    { cat: "Messaging", items: "MassTransit 8.3.6 + Azure Service Bus · Internal ServiceBus abstraction" },
    { cat: "Real-Time", items: "Azure SignalR Service 1.30.3 · ProgressHub · NotificationHub" },
    { cat: "Storage", items: "Azure Blob Storage (chart archival, GZip compressed)" },
    { cat: "Auth", items: "Stytch JWT (JWKS) · Azure AD B2C · Azure Entra ID (admin)" },
    { cat: "Observability", items: "OpenTelemetry SDK · Azure Monitor OTLP · Application Insights" },
    { cat: "CI / CD", items: "Azure DevOps · PR validation pipeline · Staging → Prod (manual gate)" },
    { cat: "Testing", items: "xUnit · Moq · Shouldly · SQLite in-memory EF Core" },
  ];
  return (
    <div style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: 28, color: "#0F172A", fontWeight: 700, margin: "0 0 8px" }}>Technology Stack</h2>
      <p style={{ color: "#64748B", fontSize: 14, margin: "0 0 40px" }}>Purpose-built for reliability, observability, and multi-tenant scale</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {stack.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 16, alignItems: "baseline", padding: "12px 0", borderBottom: "1px solid #F1F5F9", flexWrap: "wrap" }}>
            <div style={{ minWidth: 130, color: "#0D9488", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>{s.cat}</div>
            <div style={{ color: "#334155", fontSize: 14, lineHeight: 1.6, flex: 1 }}>{s.items}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SolutionStructure = () => {
  const [open, setOpen] = useState(false);
  const projects = [
    { name: "Astro.Terra.Host.WebApi", desc: "Startup host, controllers, middleware, DI wiring" },
    { name: "Astro.Terra.Service", desc: "Business logic, consumers, hosted services" },
    { name: "Astro.Terra.Service.Abstractions", desc: "Service interfaces, DTOs, error types, enumerations" },
    { name: "Astro.Terra.Data", desc: "EF Core DbContext, migrations" },
    { name: "Astro.Terra.Data.Abstractions", desc: "Entity models, repository interface" },
    { name: "Astro.Terra.Infrastructure", desc: "Azure Blob, Cosmos DB, SP-API adapters" },
    { name: "Astro.KeepaIntegration", desc: "Keepa API client, chart models" },
    { name: "Astro.Terra.Service.Tests", desc: "Service layer unit tests — 159+ passing" },
    { name: "Astro.Terra.WebApi.UnitTests", desc: "Controller + calculator tests — 61+ passing" },
    { name: "Astro.Terra.AdapterTests", desc: "Integration / adapter tests" },
    { name: "Astro.Terra.Host.Daemon", desc: "Scheduled batch daemon host" },
    { name: "Astro.Terra.AutomationClient", desc: "Automation API client" },
    { name: "Tools/", desc: "StripeSubscriptionAudit, data migration utilities" },
  ];

  return (
    <div style={{ background: "#F8FAFC", padding: "60px 20px", borderTop: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, color: "#0F172A", fontWeight: 700, margin: "0 0 8px" }}>14-Project Solution Structure</h2>
        <p style={{ color: "#64748B", fontSize: 14, margin: "0 0 16px" }}>
          Strict inward dependency rules — inner layers have no knowledge of outer layers
        </p>

        {/* Dependency flow */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 32, flexWrap: "wrap" }}>
          {["Host.WebApi", "→", "Service", "→", "Service.Abstractions"].map((s, i) => (
            <div key={i} style={s === "→" ? { color: "#94A3B8", fontSize: 18, fontWeight: 300 } : {
              background: "#0F172A",
              color: "white",
              padding: "6px 14px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "monospace",
            }}>{s}</div>
          ))}
          <div style={{ color: "#94A3B8", fontSize: 13, marginLeft: 4 }}>· Data · Infrastructure</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {(open ? projects : projects.slice(0, 6)).map((p, i) => (
            <div key={i} style={{
              display: "flex",
              gap: 16,
              padding: "12px 16px",
              background: "white",
              borderRadius: 8,
              border: "1px solid #E2E8F0",
              alignItems: "center",
              flexWrap: "wrap",
            }}>
              <div style={{ fontFamily: "monospace", fontSize: 13, color: "#0D9488", fontWeight: 700, minWidth: 260 }}>{p.name}</div>
              <div style={{ color: "#64748B", fontSize: 13, flex: 1 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {!open && (
          <button
            onClick={() => setOpen(true)}
            style={{
              marginTop: 12,
              background: "none",
              border: "1px solid #E2E8F0",
              borderRadius: 8,
              padding: "10px 20px",
              cursor: "pointer",
              color: "#0D9488",
              fontWeight: 600,
              fontSize: 13,
              width: "100%",
            }}
          >
            Show all {projects.length} projects ↓
          </button>
        )}
      </div>
    </div>
  );
};

const ChallengesSection = () => (
  <div style={{ background: "linear-gradient(135deg, #0F172A, #134E4A)", padding: "60px 20px" }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: 28, color: "white", fontWeight: 700, margin: "0 0 8px" }}>Key Engineering Challenges</h2>
      <p style={{ color: "#64748B", fontSize: 14, margin: "0 0 40px" }}>Hard problems solved in production</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {challenges.map((c, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(52,211,153,0.15)",
            borderRadius: 12,
            padding: "24px",
          }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{
                background: "linear-gradient(135deg, #0D9488, #34D399)",
                color: "white",
                fontSize: 12,
                fontWeight: 800,
                width: 28,
                height: 28,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontFamily: "monospace",
              }}>{String(i + 1).padStart(2, "0")}</div>
              <div style={{ color: "#F1F5F9", fontSize: 16, fontWeight: 700, lineHeight: 1.4 }}>{c.title}</div>
            </div>
            <p style={{ color: "#94A3B8", fontSize: 14, margin: "0 0 0 42px", lineHeight: 1.75 }}>{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DataFlowSection = () => (
  <div style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
    <h2 style={{ fontSize: 28, color: "#0F172A", fontWeight: 700, margin: "0 0 8px" }}>Bulk Upload Data Flow</h2>
    <p style={{ color: "#64748B", fontSize: 14, margin: "0 0 40px" }}>Request acceptance decoupled from processing — real-time progress via SignalR</p>
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {[
        { step: "01", title: "API Request", detail: "Validate file format · check LimitEngine quota · create Operation record · return operationId immediately" },
        { step: "02", title: "Internal Dispatch", detail: "BulkUploadsDispatcher enqueues to in-process ServiceBus — fast, non-blocking" },
        { step: "03", title: "Background Processing", detail: "BulkUploadBatchesConsumerHostedService dequeues · splits into configurable chunks · fetches Keepa + SP-API enrichment" },
        { step: "04", title: "Calculate & Persist", detail: "BreakEven, ROI, Margin calculated · financial fields stored at precision(18,4) · Product records persisted" },
        { step: "05", title: "Progress Events", detail: "MassTransit OperationUpdateConsumer receives progress · updates Operation.ProcessedCount and Status" },
        { step: "06", title: "Real-Time Feedback", detail: "SignalR ProgressHub pushes live updates to user's connection group · client renders progress bar" },
        { step: "07", title: "Completion", detail: "Operation.Status = Complete · final SignalR push · UI displays enriched product results" },
      ].map((s, i, arr) => (
        <div key={i} style={{ display: "flex", gap: 0 }}>
          {/* Step indicator column */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 20 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: i === 0 || i === arr.length - 1 ? "#0D9488" : "#E2E8F0",
              color: i === 0 || i === arr.length - 1 ? "white" : "#64748B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 800,
              fontFamily: "monospace",
              flexShrink: 0,
            }}>{s.step}</div>
            {i < arr.length - 1 && (
              <div style={{ width: 2, flex: 1, background: "#E2E8F0", margin: "4px 0", minHeight: 20 }} />
            )}
          </div>
          {/* Content */}
          <div style={{ paddingBottom: i < arr.length - 1 ? 20 : 0, paddingTop: 6, flex: 1 }}>
            <div style={{ color: "#0F172A", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{s.title}</div>
            <div style={{ color: "#64748B", fontSize: 13, lineHeight: 1.65 }}>{s.detail}</div>
          </div>
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
    <p style={{ color: "#0D9488", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", margin: "4px 0 8px" }}>CTO &amp; Principal Architect</p>
    <p style={{ color: "#94A3B8", fontSize: 12, margin: 0 }}>Astro Terra — 2024 to Present</p>
    <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, #0D9488, #34D399)", margin: "20px auto 0" }} />
  </div>
);

const AstroCaseStudy = () => (
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
      <ArchitectureSection />
      <DataFlowSection />
      <IntegrationsSection />
      <TechStack />
      <SolutionStructure />
      <ChallengesSection />
      <CaseStudyFooter />
    </Box>
  </>
);

export default AstroCaseStudy;
