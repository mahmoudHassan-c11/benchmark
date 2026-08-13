"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Compass,
  User,
  ShieldAlert,
  Handshake,
  Building2,
  Search,
  Ruler,
  Settings2,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  AlertTriangle,
  Users,
  Eye,
  Puzzle,
  Target,
  ChevronLeft,
} from "lucide-react";
import "@/app/globals.css";
import Image from "next/image";

const absenceItems = [
  { key: "direction", icon: <Compass size={24} strokeWidth={1.5} /> },
  { key: "accountability", icon: <User size={24} strokeWidth={1.5} /> },
  { key: "risk", icon: <ShieldAlert size={24} strokeWidth={1.5} /> },
  { key: "trust", icon: <Handshake size={24} strokeWidth={1.5} /> },
] as const;

const heroFeatures = [
  { key: "direction", icon: <Compass size={26} strokeWidth={1.5} /> },
  { key: "accountability", icon: <User size={26} strokeWidth={1.5} /> },
  { key: "riskControl", icon: <ShieldAlert size={26} strokeWidth={1.5} /> },
  { key: "trust", icon: <Handshake size={26} strokeWidth={1.5} /> },
] as const;

const frameworkStepsLeft = [
  { key: "assess", icon: <Search size={26} strokeWidth={1.5} /> },
  { key: "design", icon: <Ruler size={26} strokeWidth={1.5} /> },
] as const;

const frameworkStepsRight = [
  { key: "implement", icon: <Settings2 size={26} strokeWidth={1.5} /> },
  { key: "monitor", icon: <TrendingUp size={26} strokeWidth={1.5} /> },
] as const;

const impactCards = [
  { key: "decisions", icon: <ShieldCheck size={28} strokeWidth={1.5} /> },
  { key: "excellence", icon: <BarChart3 size={28} strokeWidth={1.5} /> },
  { key: "resilience", icon: <AlertTriangle size={28} strokeWidth={1.5} /> },
  { key: "stakeholderTrust", icon: <Users size={28} strokeWidth={1.5} /> },
  { key: "growth", icon: <TrendingUp size={28} strokeWidth={1.5} /> },
] as const;

const bannerPoints = [
  { key: "perspective", icon: <Eye size={26} strokeWidth={1.5} /> },
  { key: "tailored", icon: <Puzzle size={26} strokeWidth={1.5} /> },
  { key: "impact", icon: <Target size={26} strokeWidth={1.5} /> },
] as const;

export default function GovernancePage() {
  const t = useTranslations("governancePage");

  return (
    <div className="governance-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/images/governance.png"
            alt={t("hero.imageAlt")}
            fill
            priority
            className="hero-bg-image"
            sizes="100vw"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-inner container">
          <p className="breadcrumb">
            <Link href="/">{t("breadcrumb.home")}</Link>
            {" › "}
            <Link href="/our-services">{t("breadcrumb.services")}</Link>
            {" › "}
            <span>{t("breadcrumb.current")}</span>
          </p>

          <div className="hero-grid">
            {/* LEFT CONTENT */}
            <div className="hero-left">
              <h1>{t("hero.title")}</h1>

              <h2
                dangerouslySetInnerHTML={{
                  __html: t.raw("hero.subtitle"),
                }}
              />

              <p className="hero-desc">{t("hero.description")}</p>

              <Link href="/contact" className="cta-btn big">
                {t("hero.cta")}
                <ChevronLeft size={18} aria-hidden="true" />
              </Link>
            </div>

            {/* RIGHT PANEL */}
            <div className="hero-right">
              <div className="absence-panel">
                <h3>{t("hero.absencePanel.title")}</h3>

                {absenceItems.map((item) => (
                  <div className="absence-item" key={item.key}>
                    <span className="icon">{item.icon}</span>

                    <div>
                      <strong>
                        {t(`hero.absencePanel.items.${item.key}.title`)}
                      </strong>

                      <p>{t(`hero.absencePanel.items.${item.key}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="hero-features">
            {heroFeatures.map((f) => (
              <div className="feature" key={f.key}>
                <span className="icon">{f.icon}</span>

                <div>
                  <strong>{t(`hero.features.${f.key}.title`)}</strong>

                  <p>{t(`hero.features.${f.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="framework">
        <div className="container">
          <h2 className="section-title">{t("framework.title")}</h2>
          <div className="framework-grid">
            <div className="fw-side left">
              {frameworkStepsLeft.map((step) => (
                <div className="fw-item" key={step.key}>
                  <div className="fw-text">
                    <strong>{t(`framework.steps.${step.key}.title`)}</strong>
                    <p>{t(`framework.steps.${step.key}.desc`)}</p>
                  </div>
                  <span className="fw-icon">{step.icon}</span>
                </div>
              ))}
            </div>

            <div className="fw-center">
              <div className="cycle">
                <div className="cycle-ring" />
                <div className="cycle-core">
                  <strong
                    dangerouslySetInnerHTML={{
                      __html: t.raw("framework.center.title"),
                    }}
                  />
                  <small
                    dangerouslySetInnerHTML={{
                      __html: t.raw("framework.center.subtitle"),
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="fw-side right">
              {frameworkStepsRight.map((step) => (
                <div className="fw-item" key={step.key}>
                  <span className="fw-icon">{step.icon}</span>
                  <div className="fw-text">
                    <strong>{t(`framework.steps.${step.key}.title`)}</strong>
                    <p>{t(`framework.steps.${step.key}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="impact">
        <div className="container">
          <h2 className="section-title dark">{t("impact.title")}</h2>
          <div className="impact-grid">
            {impactCards.map((card) => (
              <div className="impact-card" key={card.key}>
                <span className="icon">{card.icon}</span>
                <strong>{t(`impact.cards.${card.key}.title`)}</strong>
                <p>{t(`impact.cards.${card.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="banner">
        {/* Background Image */}
        <div className="banner-bg">
          <Image
            src="/images/chess.jpg"
            alt={t("hero.imageAlt")}
            fill
            className="banner-bg-image"
            sizes="100vw"
          />
          <div className="banner-overlay" />
        </div>

        <div className="container banner-inner">
          <div className="banner-text">
            <h2>
              {t("banner.titleLine1")}
              <br />
              <span>{t("banner.titleLine2")}</span>
            </h2>

            <p>{t("banner.description")}</p>

            <Link href="/contact" className="cta-btn big">
              {t("banner.cta")}
              <ChevronLeft size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="banner-points">
            {bannerPoints.map((point) => (
              <div className="bp" key={point.key}>
                <span className="icon">{point.icon}</span>

                <div>
                  <strong>{t(`banner.points.${point.key}.title`)}</strong>

                  <p>{t(`banner.points.${point.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
