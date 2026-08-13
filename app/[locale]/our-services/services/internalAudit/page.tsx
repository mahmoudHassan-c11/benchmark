"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  ShieldCheck,
  Search,
  BarChart3,
  Settings2,
  ClipboardCheck,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Cog,
  Landmark,
  Cpu,
  ShieldAlert,
  Workflow,
  ClipboardList,
  FlaskConical,
  LineChart,
  FileText,
  RotateCw,
  ChevronLeft,
  CheckCircle2,
  Compass,
} from "lucide-react";
import "@/app/globals.css";

const heroHighlights = [
  { key: "independent", icon: <ShieldCheck size={28} strokeWidth={1.5} /> },
  { key: "riskBased", icon: <Search size={28} strokeWidth={1.5} /> },
  { key: "insights", icon: <BarChart3 size={28} strokeWidth={1.5} /> },
  { key: "improvement", icon: <Settings2 size={28} strokeWidth={1.5} /> },
] as const;

const addValueItems = [
  { key: "evaluate", icon: <ClipboardCheck size={58} strokeWidth={1.5} /> },
  { key: "identify", icon: <AlertTriangle size={58} strokeWidth={1.5} /> },
  { key: "recommend", icon: <Lightbulb size={58} strokeWidth={1.5} /> },
  { key: "enhance", icon: <TrendingUp size={58} strokeWidth={1.5} /> },
] as const;

const auditServices = [
  { key: "operational", icon: <Cog size={42} strokeWidth={1.5} /> },
  { key: "financial", icon: <Landmark size={42} strokeWidth={1.5} /> },
  { key: "compliance", icon: <ClipboardList size={42} strokeWidth={1.5} /> },
  { key: "it", icon: <Cpu size={42} strokeWidth={1.5} /> },
  { key: "fraud", icon: <ShieldAlert size={42} strokeWidth={1.5} /> },
  { key: "process", icon: <Workflow size={42} strokeWidth={1.5} /> },
] as const;

const methodologySteps = [
  { key: "plan", icon: <ClipboardList size={38} strokeWidth={1.5} /> },
  { key: "assess", icon: <Search size={38} strokeWidth={1.5} /> },
  { key: "test", icon: <FlaskConical size={38} strokeWidth={1.5} /> },
  { key: "analyze", icon: <LineChart size={38} strokeWidth={1.5} /> },
  { key: "report", icon: <FileText size={38} strokeWidth={1.5} /> },
  { key: "followUp", icon: <RotateCw size={38} strokeWidth={1.5} /> },
] as const;

export default function InternalAuditPage() {
  const t = useTranslations("internalAuditPage");

  return (
    <div className="internal-audit-page">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="breadcrumb flex items-center gap-1"
      >
        <div className="container">
          <ul className="flex items-center gap-1">
            <li>
              <Link href="/">{t("breadcrumb.home")}</Link>
            </li>
            <li>
              <Link href="/our-services/services">{t("breadcrumb.services")}</Link>
            </li>
            <li aria-current="page">{t("breadcrumb.current")}</li>
          </ul>
        </div>
      </nav>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner flex items-center justify-center lg:items-start lg:justify-between">
          <div className="hero-content px-36">
            <span className="section-label">{t("hero.label")}</span>
            <h1>{t("hero.title")}</h1>
            <p className="subtitle">{t("hero.subtitle")}</p>
            <p className="description">{t("hero.description")}</p>

            <div className="hero-highlights-grid">
              {heroHighlights.map((item) => (
                <div className="highlight-card" key={item.key}>
                  <div className="icon">{item.icon}</div>
                  <h3>{t(`hero.highlights.${item.key}.title`)}</h3>
                  <p>{t(`hero.highlights.${item.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual hidden lg:block ">
            <Image
              src="/images/audit.jpg"
              alt={t("hero.imageAlt")}
              width={600}
              height={800}
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* What is Internal Audit */}
      <section className="what-is">
        <div className="container what-is-grid flex-col lg:flex-row gap-x-4">
          <div className="what-is-intro lg:w-[35%]">
            <h2>{t("whatIs.title")}</h2>
            <p>{t("whatIs.description")}</p>
          </div>

          <div className="add-value lg:w-[60%]">
            <h2>{t("addValue.title")}</h2>
            <div className="add-value-grid">
              {addValueItems.map((item) => (
                <div className="value-card" key={item.key}>
                  <div className="icon block">{item.icon}</div>
                  <h3>{t(`addValue.items.${item.key}.title`)}</h3>
                  <p>{t(`addValue.items.${item.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="audit-services">
        <div className="audit-content flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-10 pb-[50px] md:pb-0 md:h-[100%]">
          <div className="container">
            <div className="audit-service-box flex-1 container">
              <h2>{t("services.title")}</h2>
              <div className="audit-services-grid">
                {auditServices.map((service) => (
                  <div className="service-card" key={service.key}>
                    <div className="icon">{service.icon}</div>
                    <h3>{t(`services.items.${service.key}.title`)}</h3>
                    <p>{t(`services.items.${service.key}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="split-visual w-full lg:w-[380px] shrink-0">
            <Image
              src="/images/glass-financial-chart.jpg"
              alt={t("services.imageAlt")}
              width={500}
              height={300}
              className="img w-full h-auto object-cover md:h-[100%]"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
              }}
            />
          </div>
        </div>
      </section>
      {/* Methodology */}
      <section className="methodology bg-[#F5F1E8] py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#0d2b28] mb-10 lg:mb-16 flex items-center justify-center gap-4">
            <span className="hidden sm:block h-px w-16 bg-[#c9a227]" />
            {t("methodology.title")}
            <span className="hidden sm:block h-px w-16 bg-[#c9a227]" />
          </h2>

          <div className="methodology-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-2 lg:gap-x-0">
            {methodologySteps.map((step, i) => (
              <div className="relative flex items-center" key={step.key}>
                <div
                  className="methodology-card bg-[#E5D9C3] w-full pt-8 pb-6 px-4 lg:px-6 flex flex-col items-center text-center"
                  style={{
                    clipPath:
                      "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%, 12% 50%)",
                  }}
                >
                  <span className="step-number flex items-center justify-center w-8 h-8 rounded-full bg-[#0d2b28] text-[#c9a227] text-md font-bold mb-3">
                    {t(`methodology.steps.${step.key}.number`)}
                  </span>
                  <h3 className="text-[#0d2b28] text-xl font-bold text- mb-2">
                    {t(`methodology.steps.${step.key}.title`)}
                  </h3>
                  <p className="text-[#4a4a42] text-sm leading-relaxed mb-4">
                    {t(`methodology.steps.${step.key}.desc`)}
                  </p>
                  <div className="text-[#0d2b28]">{step.icon}</div>
                </div>

                {i < methodologySteps.length - 1 && (
                  <span
                    className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-6 h-6 rounded-full bg-[#F5F1E8] text-[#0d2b28]"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Areas & CTA */}
      <section className="key-areas-cta bg-[#0d2b28] py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="key-areas-cta-grid grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-center">
            {/* Key Areas List */}
            <div className="key-areas">
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-8">
                {t("keyAreas.title")}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {t.raw("keyAreas.items").map((item: string) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-white/90 text-sm leading-relaxed"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 mt-0.5 text-[#c9a227]"
                      strokeWidth={2}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Box */}
            <div className="cta-box relative bg-[#EDE3D0] rounded-2xl p-8 sm:p-10 overflow-hidden">
              <div className="relative z-10 max-w-[65%] sm:max-w-[60%]">
                <h3 className="text-[#0d2b28] text-lg sm:text-xl font-bold mb-3">
                  {t("cta.title")}
                </h3>
                <p className="text-[#3d3d35] text-sm leading-relaxed mb-6">
                  {t("cta.description")}
                </p>
                <Link
                  href="/contact"
                  className="btn btn-primary inline-flex items-center gap-2 bg-[#0d2b28] text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-[#123a35] transition-colors"
                >
                  {t("cta.button")}
                  <ChevronLeft size={16} aria-hidden="true" />
                </Link>
              </div>

              {/* Decorative compass icon */}
              <Compass
                size={140}
                strokeWidth={1}
                className="absolute -right-6 top-1/2 -translate-y-1/2 text-[#0d2b28]/15 sm:text-[#0d2b28]/20"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
