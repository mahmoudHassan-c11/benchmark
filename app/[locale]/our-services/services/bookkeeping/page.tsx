"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  BadgeCheck,
  Timer,
  Lock,
  Headset,
  Network,
  Workflow,
  Activity,
  Cable,
  TrendingUp,
  Users2,
  ShieldAlert,
  FileInput,
  PenLine,
  Scale,
  FileBarChart,
  MessageSquareText,
  ChevronLeft,
} from "lucide-react";
import "@/app/globals.css";

const heroHighlights = [
  { key: "accurate", icon: <CheckCircle2 size={38} strokeWidth={1.5} /> },
  { key: "timely", icon: <Clock size={38} strokeWidth={1.5} /> },
  { key: "compliant", icon: <ShieldCheck size={38} strokeWidth={1.5} /> },
] as const;

const statsItems = [
  { key: "accurate", icon: <BadgeCheck size={42} strokeWidth={1.5} /> },
  { key: "onTime", icon: <Timer size={42} strokeWidth={1.5} /> },
  { key: "secure", icon: <Lock size={42} strokeWidth={1.5} /> },
  { key: "support", icon: <Headset size={42} strokeWidth={1.5} /> },
] as const;

const erpFeatures = [
  { key: "integrated", icon: <Network size={28} strokeWidth={1.5} /> },
  { key: "automated", icon: <Workflow size={28} strokeWidth={1.5} /> },
  { key: "realtime", icon: <Activity size={28} strokeWidth={1.5} /> },
  { key: "seamless", icon: <Cable size={28} strokeWidth={1.5} /> },
  { key: "scalable", icon: <TrendingUp size={28} strokeWidth={1.5} /> },
  { key: "collaboration", icon: <Users2 size={28} strokeWidth={1.5} /> },
  { key: "security", icon: <ShieldAlert size={28} strokeWidth={1.5} /> },
] as const;

const processSteps = [
  { key: "collect", icon: <FileInput size={28} strokeWidth={1.5} /> },
  { key: "record", icon: <PenLine size={28} strokeWidth={1.5} /> },
  { key: "reconcile", icon: <Scale size={28} strokeWidth={1.5} /> },
  { key: "report", icon: <FileBarChart size={28} strokeWidth={1.5} /> },
  { key: "advise", icon: <MessageSquareText size={28} strokeWidth={1.5} /> },
] as const;

export default function BookkeepingPage() {
  const t = useTranslations("bookkeepingPage");

  return (
    <div className="bookkeeping-page">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="breadcrumb pb-8!">
        <div className="container">
          <ul className="flex items-center gap-2">
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
      <section className="hero relative h-[100vh] overflow-hidden">
        {/* Background Image */}
        <div className="hero-visual absolute inset-0">
          <Image
            src="/images/bookkeping2.jpg"
            alt={t("hero.imageAlt")}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Overlay */}
        <div className="hero-overlay absolute inset-0"></div>

        {/* Content */}
        <div className="hero-inner container relative z-10 h-full flex items-center">
          <div className="hero-content">
            <h1>{t("hero.title")}</h1>

            <p className="subtitle">{t("hero.subtitle")}</p>

            <p className="description">{t("hero.description")}</p>

            <div className="highlights-flex">
              {heroHighlights.map((item) => (
                <div className="highlight-Item" key={item.key}>
                  <div className="icon">{item.icon}</div>

                  <div>
                    <h3>{t(`hero.highlights.${item.key}.title`)}</h3>

                    <p>{t(`hero.highlights.${item.key}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar container">
        <div className="stats-grid">
          {statsItems.map((item) => (
            <div className="stat-card" key={item.key}>
              <div className="icon">{item.icon}</div>
              <div className="info">
                <h3>{t(`stats.${item.key}.title`)}</h3>
                <p>{t(`stats.${item.key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ERP & Software Solutions */}
      <section className="erp-section">
        <div className="container erp-grid">
          <div className="erp-intro">
            <span className="section-label">ERP SOLUTIONS</span>

            <h2>{t("erp.title")}</h2>

            <p>{t("erp.description1")}</p>
            <p>{t("erp.description2")}</p>

            <ul className="platforms-list">
              {t.raw("erp.platforms").map((platform: string) => (
                <li key={platform}>
                  <span>✓</span>
                  {platform}
                </li>
              ))}
            </ul>
          </div>

          <div className="erp-features">
            {erpFeatures.map((feature, index) => (
              <div className="erp-feature" key={feature.key}>
                <div className="feature-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="feature-icon">{feature.icon}</div>

                <div className="feature-content">
                  <h3>{t(`erp.features.${feature.key}.title`)}</h3>

                  {feature.key !== "integrated" && (
                    <p>{t(`erp.features.${feature.key}.desc`)}</p>
                  )}
                </div>

                <span className="feature-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process */}
      <section className="process">
        <div className="container">
          <h2>{t("process.title")}</h2>
          <div className="process-grid">
            {processSteps.map((step) => (
              <div className="process-card" key={step.key}>
                <div className="icon">{step.icon}</div>
                <span className="step-number">
                  {t(`process.steps.${step.key}.number`)}
                </span>

                <h3>{t(`process.steps.${step.key}.title`)}</h3>
                <p>{t(`process.steps.${step.key}.desc`)}</p>
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
          <div className="cta-action">
            <Link href="/contact" className="btn btn-primary">
              {t("cta.button")}
              <ChevronLeft size={18} aria-hidden="true" />
            </Link>
            <div className="cta-badges">
              {t.raw("cta.badges").map((badge: string) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
