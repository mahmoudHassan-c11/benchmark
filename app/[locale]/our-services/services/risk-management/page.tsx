"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import "@/app/globals.css";
import {
  Search,
  Gauge,
  ShieldCheck,
  Eye,
  ClipboardList,
  Target,
  Settings2,
  DollarSign,
  Scale,
  Cpu,
  MessageSquareWarning,
  ShieldPlus,
  TrendingUp,
  BarChart3,
  Rocket,
  ChevronLeft,
} from "lucide-react";
import "@/app/globals.css";

const approachSteps = [
  { key: "identify", icon: <Search size={42} strokeWidth={1.5} /> },
  { key: "assess", icon: <Gauge size={42} strokeWidth={1.5} /> },
  { key: "mitigate", icon: <ShieldCheck size={42} strokeWidth={1.5} /> },
  { key: "monitor", icon: <Eye size={42} strokeWidth={1.5} /> },
  { key: "report", icon: <ClipboardList size={42} strokeWidth={1.5} /> },
] as const;

const riskAreas = [
  { key: "strategic", icon: <Target size={42} strokeWidth={1.5} /> },
  { key: "operational", icon: <Settings2 size={42} strokeWidth={1.5} /> },
  { key: "financial", icon: <DollarSign size={42} strokeWidth={1.5} /> },
  { key: "compliance", icon: <Scale size={42} strokeWidth={1.5} /> },
  { key: "technology", icon: <Cpu size={42} strokeWidth={1.5} /> },
  {
    key: "reputational",
    icon: <MessageSquareWarning size={42} strokeWidth={1.5} />,
  },
] as const;

const whyItems = [
  { key: "protect", icon: <ShieldPlus size={52} strokeWidth={1.5} /> },
  { key: "improve", icon: <TrendingUp size={52} strokeWidth={1.5} /> },
  { key: "enhance", icon: <BarChart3 size={52} strokeWidth={1.5} /> },
  { key: "drive", icon: <Rocket size={52} strokeWidth={1.5} /> },
] as const;

export default function RiskManagementPage() {
  const t = useTranslations("riskManagementPage");

  return (
    <div className="risk-management-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <ul className="flex items-center">
          <li>
            <Link href="/">{t("breadcrumb.home")}</Link>
          </li>
          <li>
            <Link href="/our-services/services">{t("breadcrumb.services")}</Link>
          </li>
          <li aria-current="page">{t("breadcrumb.current")}</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero flex justify-between">
        <div className="hero-content">
          <h1>{t("hero.title")}</h1>
          <p className="tagline">{t("hero.tagline")}</p>
          <p className="description">{t("hero.description")}</p>
          <Link
            href="/contact"
            className="btn w-[40%] mt-8 group flex items-center gap-1.5 bg-[#BF925E] text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-[5px] hover:bg-[#A87B4A] transition-colors"
          >
            {t("hero.cta")}
          </Link>
        </div>
        {/* Video Section */}
        <div className="relative flex-[60%] lg:w-1/2 h-full sm:h-[320px] md:h-[400px] md:block hidden overflow-hidden">
          <video
            src="/images/video-3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              maskImage: `
          linear-gradient(to right, transparent, black 10%, black 90%, transparent),
          linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)
        `,
              maskComposite: "intersect",
              WebkitMaskImage: `
          linear-gradient(to right, transparent, black 10%, black 90%, transparent),
          linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)
        `,
              WebkitMaskComposite: "source-in",
            }}
          />
        </div>
      </section>

      {/* Our Approach */}
      <section className="approach">
        <h2>{t("approach.title")}</h2>
        <div className="approach-grid">
          {approachSteps.map((step) => (
            <InfoCard
              key={step.key}
              icon={step.icon}
              title={t(`approach.steps.${step.key}.title`)}
              desc={t(`approach.steps.${step.key}.desc`)}
            />
          ))}
        </div>
      </section>

      {/* Key Risk Areas */}
      <section className="risk-areas">
        <h2>{t("riskAreas.title")}</h2>
        <div className="risk-areas-grid">
          {riskAreas.map((area) => (
            <InfoCard
              key={area.key}
              icon={area.icon}
              title={t(`riskAreas.items.${area.key}.title`)}
              desc={t(`riskAreas.items.${area.key}.desc`)}
            />
          ))}
        </div>
      </section>

      {/* Why It Matters */}
      <section className="whySection">
        <div className="why-intro">
          <h2>{t("why.title")}</h2>
          <p>{t("why.description")}</p>
        </div>
        <div className="whyGrid">
          {whyItems.map((item) => (
            <InfoCard
              key={item.key}
              icon={item.icon}
              title={t(`why.items.${item.key}.title`)}
              desc={t(`why.items.${item.key}.desc`)}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-text">
          <h2>{t("cta.title")}</h2>
          <p>{t("cta.description")}</p>
        </div>
        <div className="cta-action">
          <Link
            href="/contact"
            className="btn mt-8 group flex items-center gap-1.5 bg-[#BF925E] text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-[5px] hover:bg-[#A87B4A] transition-colors"
          >
            <ChevronLeft size={18} aria-hidden="true" />
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ---------- Helper Component ---------- */

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="info-card">
      <div className="info-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
