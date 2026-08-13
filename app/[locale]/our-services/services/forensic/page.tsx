"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Target,
  Search,
  ShieldCheck,
  Scale,
  TrendingDown,
  Eye,
  Award,
  Fingerprint as FingerprintIcon,
  Briefcase,
  ClipboardList,
  Cpu,
  Landmark,
  Landmark as GovIcon,
  Fuel,
  Pill,
  Radio,
  Factory,
  Lock,
  KeyRound,
  CheckCircle2,
  ChevronLeft,
  Compass,
} from "lucide-react";
import "@/app/globals.css";
import Image from "next/image";

const heroFeatures = [
  { key: "uncover", icon: <Target size={48} strokeWidth={1.5} /> },
  { key: "investigate", icon: <Search size={48} strokeWidth={1.5} /> },
  { key: "protect", icon: <ShieldCheck size={48} strokeWidth={1.5} /> },
  { key: "support", icon: <Scale size={48} strokeWidth={1.5} /> },
] as const;

const whyCards = [
  { key: "detect", icon: <ShieldCheck size={46} strokeWidth={1.5} /> },
  { key: "minimize", icon: <TrendingDown size={46} strokeWidth={1.5} /> },
  { key: "strengthen", icon: <Scale size={46} strokeWidth={1.5} /> },
  { key: "restore", icon: <Eye size={46} strokeWidth={1.5} /> },
] as const;

const capabilities = [
  { key: "fraud", icon: <Award size={36} strokeWidth={1.5} /> },
  {
    key: "financialCrime",
    icon: <FingerprintIcon size={36} strokeWidth={1.5} />,
  },
  { key: "dispute", icon: <ClipboardList size={36} strokeWidth={1.5} /> },
  { key: "dataAnalytics", icon: <Cpu size={36} strokeWidth={1.5} /> },
  { key: "internal", icon: <Briefcase size={36} strokeWidth={1.5} /> },
] as const;

const globalStats = ["countries", "industries", "investigations"] as const;

const industries = [
  { key: "financial", icon: <Landmark size={42} strokeWidth={1.5} /> },
  { key: "government", icon: <GovIcon size={42} strokeWidth={1.5} /> },
  { key: "energy", icon: <Fuel size={42} strokeWidth={1.5} /> },
  { key: "healthcare", icon: <Pill size={42} strokeWidth={1.5} /> },
  { key: "technology", icon: <Radio size={42} strokeWidth={1.5} /> },
  { key: "manufacturing", icon: <Factory size={42} strokeWidth={1.5} /> },
] as const;

const confidentialItems = [
  { key: "absolute", icon: <KeyRound size={46} strokeWidth={1.5} /> },
  { key: "independent", icon: <Scale size={46} strokeWidth={1.5} /> },
  { key: "ethical", icon: <CheckCircle2 size={46} strokeWidth={1.5} /> },
] as const;

export default function ForensicPage() {
  const t = useTranslations("forensicPage");

  return (
    <div className="forensic-page">
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
      <section className="hero">
        <div className="">
          <div className="hero-grid flex justify-between ">
            <div className="hero-left  pl-6 w-full lg:w-[35%]">
              <h1>
                {t("hero.titleLine1")}

                <span>{t("hero.titleLine2")}</span>

                {t("hero.titleLine3")}
              </h1>
              <h2>{t("hero.subtitle")}</h2>
              <p className="hero-desc">{t("hero.description")}</p>

              <div className="hero-features">
                {heroFeatures.map((f) => (
                  <div className="hf" key={f.key}>
                    <span className="icon">{f.icon}</span>
                    <p>{t(`hero.features.${f.key}`)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual w-[55%] hidden lg:block relative">
              <Image
                src="/images/lens.jpg"
                alt={t("hero.imageAlt")}
                width={600}
                height={800}
                className="img relative w-full h-full"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
                }}
              />
              <blockquote className="hero-quote absolute">
                {t("hero.quote.line1")}
                <br />
                <span>{t("hero.quote.line2")}</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why + Capabilities */}
      <section className="why-section-forensic-page">
        <div className="px-6 why-flex-section flex flex-col lg:flex-row justify-between">
          <div className="why-left-section relative mb-25 w-full lg:w-[45%]">
            <h2 className="sectiontitle left">{t("why.title")}</h2>
            <p className="why-desc-section">{t("why.description")}</p>
            <div className="why-cards-section">
              {whyCards.map((card) => (
                <div className="why-card-section " key={card.key}>
                  <span className="icon">{card.icon}</span>
                  <strong>{t(`why.cards.${card.key}.title`)}</strong>
                  <p>{t(`why.cards.${card.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="why-right w-full lg:w-[45%]">
            <h2 className="sectiontitle left">{t("capabilities.title")}</h2>
            {capabilities.map((cap) => (
              <div className="cap" key={cap.key}>
                <span className="cap-icon">{cap.icon}</span>
                <div>
                  <strong>{t(`capabilities.items.${cap.key}.title`)}</strong>
                  <p>{t(`capabilities.items.${cap.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Expertise */}
      <section className="global">
        <div className="px-6  flex flex-col lg:flex-row">
          <div className="global-left lg:w-[48%]">
            <h2 className="section-title left">{t("global.title")}</h2>
            <p className="global-desc">{t("global.description")}</p>

            <div className="w-full overflow-hidden ">
              <video
                src="/images/branch2.mp4"
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
          </div>

          <div className="global-right lg:w-[48%]">
            <div className="stats">
              {globalStats.map((key) => (
                <div className="stat" key={key}>
                  <strong>{t(`global.stats.${key}.value`)}</strong>
                  <p>{t(`global.stats.${key}.label`)}</p>
                </div>
              ))}
            </div>

            <div className="industries">
              {industries.map((ind) => (
                <div className="ind" key={ind.key}>
                  <span className="icon">{ind.icon}</span>
                  <p>{t(`global.industries.${ind.key}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="confidential px-6 lg:px-0 py-20 lg:py-0">
        <div className="conf-grid flex flex-col lg:flex-row  justify-between">
          <div className="conf-left mb-5 lg:w-[45%] flex flex-col lg:flex-row ">
            <div className="hero-visual w-full relative">
              <Image
                src="/images/lock.jpg"
                alt={t("hero.imageAlt")}
                width={600}
                height={800}
                className="img relative w-full h-full"
                style={{
                  maskImage: `
    linear-gradient(to left, transparent 0%, black 25%, black 100%),
    linear-gradient(to bottom, transparent 0%, black 25%, black 100%),
    linear-gradient(to top, transparent 0%, black 25%, black 100%),
    linear-gradient(to right, transparent 0%, black 25%, black 100%)
  `,
                  WebkitMaskImage: `
    linear-gradient(to left, transparent 0%, black 25%, black 100%),
    linear-gradient(to bottom, transparent 0%, black 25%, black 100%),
    linear-gradient(to top, transparent 0%, black 25%, black 100%),
    linear-gradient(to right, transparent 0%, black 25%, black 100%)
  `,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              />
            </div>
            <div className="info flex flex-col justify-center">
              <h2>
                {t("confidential.titleLine1")}
                <br />
                <span>{t("confidential.titleLine2")}</span>
              </h2>
              <p>{t("confidential.description")}</p>
            </div>
          </div>

          <div className="conf-right lg:w-[50%]">
            {confidentialItems.map((item) => (
              <div className="conf-item" key={item.key}>
                <span className="icon gold-shine">{item.icon}</span>
                <div>
                  <strong>{t(`confidential.items.${item.key}.title`)}</strong>
                  <p className="gold-shine">
                    {t(`confidential.items.${item.key}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-final">
        <div className="cta-content">
          <div className="cta-text">
            <span className="cta-label">Strategic Insight</span>

            <h1>
              {t("cta.titleLine1")}
              <br />
              {t("cta.titleLine2")}
            </h1>

            <p>{t("cta.description")}</p>

            <Link href="/contact" className="cta-btn big">
              {t("cta.button")}
              <ChevronLeft size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="cta-image">
            <Image
              src="/images/chess.jpg"
              alt={t("hero.imageAlt")}
              fill
              className="chess-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="chess-overlay" />

            <blockquote className="chess-quote">
              {t("hero.quote.line1")}
              <br />
              <span>{t("hero.quote.line2")}</span>
            </blockquote>
          </div>
        </div>

        <div className="cta-words">
          {t.raw("cta.words").map((word: string) => (
            <span key={word}>{word}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
