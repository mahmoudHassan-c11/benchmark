"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  ClipboardList,
  Globe2,
  FileCheck2,
  Briefcase,
  Search,
  LineChart,
  PenTool,
  Rocket,
  RefreshCw,
  ChevronLeft,
  Check,
  ArrowRight,
} from "lucide-react";
import "@/app/globals.css";

const servicesCards = [
  { key: "taxPlanning", icon: <ClipboardList size={32} strokeWidth={1.5} /> },
  { key: "internationalTax", icon: <Globe2 size={32} strokeWidth={1.5} /> },
  { key: "taxCompliance", icon: <FileCheck2 size={32} strokeWidth={1.5} /> },
  { key: "advisory", icon: <Briefcase size={32} strokeWidth={1.5} /> },
] as const;

const approachSteps = [
  { key: "understand", icon: <Search size={28} strokeWidth={1.5} /> },
  { key: "analyze", icon: <LineChart size={28} strokeWidth={1.5} /> },
  { key: "design", icon: <PenTool size={28} strokeWidth={1.5} /> },
  { key: "implement", icon: <Rocket size={28} strokeWidth={1.5} /> },
  { key: "review", icon: <RefreshCw size={28} strokeWidth={1.5} /> },
] as const;

const insightItems = ["trends", "transferPricing", "checklist"] as const;

export default function TaxConsultingPage() {
  const t = useTranslations("taxConsultingPage");

  return (
    <div className="tax-consulting-page">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <div className="container">
          <ul>
            <li>
              <Link href="/">{t("breadcrumb.home")}</Link>
            </li>
            <li>
              <Link href="/our-services/services">
                {t("breadcrumb.services")}
              </Link>
            </li>
            <li aria-current="page">{t("breadcrumb.current")}</li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="video w-full overflow-hidden h-screen lg:h-full">
          <video
            src="/images/globe.mp4"
            autoPlay
            loop
            muted
            playsInline
            className=" inset-0 w-full h-full object-cover"
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
        <div className="hero-inner absolute top-24 sm:top-32 lg:top-50 container flex items-center justify-center flex-col lg:flex-row">
          <div className="hero-content w-full">
            <h1 className="text-white">{t("hero.title")}</h1>

            <p className="subtitle">{t("hero.subtitle")}</p>

            <p className="description">{t("hero.description")}</p>

            <div className="hero-actions flex items-center justify-between w-full lg:w-3/4 flex-col lg:flex-row">
              <Link
                href="/contact"
                className="btn mt-8 group flex items-center gap-1.5 bg-[#BF925E] text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-[5px] hover:bg-[#A87B4A] transition-colors"
              >
                {t("hero.ctaPrimary")}
              </Link>

              <Link
                href="/insights"
                className="btn mt-8 group flex items-center gap-1.5 bg-[#BF925E] text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-[5px] hover:bg-[#A87B4A] transition-colors"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="services-cards">
        <div className="container services-cards-grid">
          {servicesCards.map((card) => (
            <div className="service-card" key={card.key}>
              <div className="icon">{card.icon}</div>
              <div>
                <h3>{t(`servicesCards.${card.key}.title`)}</h3>
                <p>{t(`servicesCards.${card.key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tax Planning Section */}
      <section className="split-section tax-planning">
        <div className="split-grid">
          <div className="split-content">
            <span className="section-label">
              {t("taxPlanningSection.label")}
            </span>
            <h2>{t("taxPlanningSection.title")}</h2>
            <ul>
              {t.raw("taxPlanningSection.points").map((point: string) => (
                <li key={point}>
                  <Check className="icon" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="split-visual">
            <Image
              src="/images/img-chess.jpg"
              alt={t("taxPlanningSection.imageAlt")}
              width={500}
              height={300}
              className="img"
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

      {/* International Tax Section */}
      <section className="split-section international-tax">
        <div className="split-grid">
          <div className="split-visual">
            <Image
              src="/images/img-globe.jpg"
              alt={t("internationalTaxSection.imageAlt")}
              width={500}
              height={400}
              className="img"
              style={{
                maskImage:
                  "linear-gradient(to left, transparent 0%, black 25%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to left, transparent 0%, black 25%, black 100%)",
              }}
            />
          </div>
          <div className="split-content">
            <span className="section-label">
              {t("internationalTaxSection.label")}
            </span>
            <h2>{t("internationalTaxSection.title")}</h2>
            <p>{t("internationalTaxSection.description")}</p>
            <ul>
              {t.raw("internationalTaxSection.points").map((point: string) => (
                <li key={point}>
                  <Check className="icon" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Insights & Resources */}
      <section className="insights">
        <div className="container">
          <h2>{t("insights.title")}</h2>
          <div className="insights-grid">
            {insightItems.map((key) => (
              <article className="insight-card" key={key}>
                <span className="tag">{t(`insights.items.${key}.tag`)}</span>
                <h3>{t(`insights.items.${key}.title`)}</h3>
                <Link
                  href="/our-services/services/taxConsulting/insights"
                  className="btn"
                >
                  <ArrowRight />
                  {t("insights.readMore")}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="approach">
        <div className="container">
          <h2>{t("approach.title")}</h2>
          <div className="approach-grid">
            {approachSteps.map((step) => (
              <div className="approach-card" key={step.key}>
                <span className="step-number">
                  {t(`approach.steps.${step.key}.number`)}
                </span>
                {step.icon}
                <h3>{t(`approach.steps.${step.key}.title`)}</h3>
                <p>{t(`approach.steps.${step.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div className="cta-text">
            <h2>{t("cta.title")}</h2>
            <p>{t("cta.description")}</p>
          </div>
          <Link href="/contact" className="btn btn-primary btn-large">
            {t("cta.button")}
            <ChevronLeft size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
