"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  ShieldCheck,
  FileCheck2,
  BarChart3,
  Target,
  Landmark,
  Scale,
  Globe2,
  Users,
  FileBarChart,
  TrendingUp,
  Search,
  LineChart,
  ClipboardPen,
  ShieldPlus,
  Network,
  HeartHandshake,
  Puzzle,
  BadgeCheck,
  Medal,
  ChevronLeft,
} from "lucide-react";
import "@/app/globals.css";

const heroValues = [
  { key: "reduceRisk", icon: <ShieldCheck size={22} strokeWidth={1.5} /> },
  { key: "compliance", icon: <FileCheck2 size={22} strokeWidth={1.5} /> },
  { key: "strategy", icon: <BarChart3 size={22} strokeWidth={1.5} /> },
] as const;

const mattersCards = [
  { key: "strategy", icon: <Target size={28} strokeWidth={1.5} /> },
  { key: "regulatory", icon: <Landmark size={28} strokeWidth={1.5} /> },
  { key: "disputes", icon: <Scale size={28} strokeWidth={1.5} /> },
  { key: "global", icon: <Globe2 size={28} strokeWidth={1.5} /> },
] as const;

const relationshipSteps = [
  { key: "pricing", icon: <Users size={28} strokeWidth={1.5} /> },
  { key: "compliance", icon: <FileBarChart size={28} strokeWidth={1.5} /> },
  { key: "growth", icon: <TrendingUp size={28} strokeWidth={1.5} /> },
] as const;

const approachSteps = [
  { key: "understand", icon: <Search size={28} strokeWidth={1.5} /> },
  { key: "analyze", icon: <LineChart size={28} strokeWidth={1.5} /> },
  { key: "determine", icon: <ClipboardPen size={28} strokeWidth={1.5} /> },
  { key: "defend", icon: <ShieldPlus size={28} strokeWidth={1.5} /> },
] as const;

const strengthCards = [
  { key: "expertise", icon: <Globe2 size={28} strokeWidth={1.5} /> },
  { key: "methodologies", icon: <Network size={28} strokeWidth={1.5} /> },
  { key: "documentation", icon: <Network size={28} strokeWidth={1.5} /> },
  { key: "support", icon: <HeartHandshake size={28} strokeWidth={1.5} /> },
] as const;

const whyChooseCards = [
  { key: "experience", icon: <Globe2 size={28} strokeWidth={1.5} /> },
  { key: "tailored", icon: <Puzzle size={28} strokeWidth={1.5} /> },
  { key: "trackRecord", icon: <BadgeCheck size={28} strokeWidth={1.5} /> },
  { key: "excellence", icon: <Medal size={28} strokeWidth={1.5} /> },
] as const;

export default function TransferPricingPage() {
  const t = useTranslations("transferPricingPage");

  return (
    <div className="transfer-pricing-page">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <div className="container">
          <ul>
            <li>
              <Link href="/">{t("breadcrumb.home")}</Link>
            </li>
            <li>
              <Link href="/our-services">{t("breadcrumb.services")}</Link>
            </li>
            <li aria-current="page">{t("breadcrumb.current")}</li>
          </ul>
        </div>
      </nav>
      {/* Hero */}
      <section className="hero min-h-[200vh]">
        <div className="video w-full overflow-hidden h-[100vh] lg:h-full">
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
        <div className=" absolute top-50 container flex item-center justify-center flex-col lg:flex-row">
          <div className="hero-content ">
            <h1>
              <span className="t-white">{t("hero.titleWhite")}</span>
              <span className="t-gold">{t("hero.titleGold")}</span>
            </h1>
            <p className="subtitle">{t("hero.subtitle")}</p>
            <p className="description">{t("hero.description")}</p>

            <div className="hero-values">
              {heroValues.map((v) => (
                <div className="value-item" key={v.key}>
                  {v.icon}
                  <span>{t(`hero.values.${v.key}`)}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-highlights mt-15">
            <h2
              dangerouslySetInnerHTML={{
                __html: t.raw("hero.highlights.title"),
              }}
            />
            <ul>
              {t.raw("hero.highlights.items").map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      {/* Why Transfer Pricing Matters */}
      <section className="matters">
        <div className="container matters-grid flex-col lg:flex-row">
          <div className="why-content">
            <h2 className="section-title">{t("matters.title")}</h2>
            <p>{t("matters.description")}</p>

            <div className="why-grid">
              {mattersCards.map((card) => (
                <div className="why-card" key={card.key}>
                  {card.icon}
                  <h3>{t(`matters.cards.${card.key}`)}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="relationship-content">
            <h2 className="section-title">{t("relationship.title")}</h2>
            <p>{t("relationship.description")}</p>

            <div className="relationship-steps">
              {relationshipSteps.map((step, i) => (
                <>
                  <div className="step" key={step.key}>
                    {step.icon}
                    <h3>{t(`relationship.steps.${step.key}`)}</h3>
                  </div>
                  {i < relationshipSteps.length - 1 && (
                    <span
                      className="arrow"
                      aria-hidden="true"
                      key={`arrow-${step.key}`}
                    >
                      →
                    </span>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Approach & Strength */}
      <section className="strength-section">
        <div className="container">
          <div className="strength-header">
            <h2 className="section-title">{t("strength.title")}</h2>
          </div>

          <div className="strength-grid">
            {strengthCards.map((card) => (
              <div className="strength-card" key={card.key}>
                <div className="strength-icon">{card.icon}</div>

                <div className="strength-content">
                  <h3>{t(`strength.cards.${card.key}.title`)}</h3>
                  <p>{t(`strength.cards.${card.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="banner-strip">
            <div className="banner-icon">
              <ShieldCheck size={40} strokeWidth={1.5} aria-hidden="true" />
            </div>

            <div className="banner-text">
              <p>{t("banner.line1")}</p>
              <p>{t("banner.line2")}</p>
              <p className="gold">{t("banner.line3")}</p>
            </div>

            <div className="banner-tagline">
              <p>{t("banner.tagline")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose & Coverage */}
      <section className="panel-section">
        <div className="container">
          <div className="panel choose-coverage flex flex-col lg:flex-row items-center justify-between">
            <div className="why-choose">
              <h2 className="section-title">{t("whyChoose.title")}</h2>
              <div className="why-choose-grid">
                {whyChooseCards.map((card) => (
                  <div className="choose-card" key={card.key}>
                    {card.icon}
                    <h3>{t(`whyChoose.cards.${card.key}.title`)}</h3>
                    <p>{t(`whyChoose.cards.${card.key}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="global-coverage">
              <h2 className="section-title">{t("coverage.title")}</h2>
              <ul className="regions">
                {t.raw("coverage.regions").map((region: string) => (
                  <li key={region}>{region}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-panel flex-col lg:flex-row gap-x-7">
            <Target
              className="cta-icon"
              size={40}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <div className="cta-text">
              <h2>{t("cta.title")}</h2>
              <p>{t("cta.description")}</p>
            </div>
            <Link
              href="/contact"
              className="btn mt-8 group flex items-center gap-1.5 bg-[#BF925E] text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-[5px] hover:bg-[#A87B4A] transition-colors"
            >
              <ChevronLeft className="btn-arrow" size={18} aria-hidden="true" />
              {t("cta.button")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
