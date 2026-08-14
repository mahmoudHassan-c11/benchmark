"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Image as ImageIcon,
  Calculator,
  FileText,
  Search,
  Fingerprint,
  ShieldAlert,
  Landmark,
  Globe,
  Headset,
  ArrowLeft,
} from "lucide-react";
import "@/app/globals.css";

const services = [
  { key: "bookkeeping", icon: <Calculator size={34} strokeWidth={1.5} /> },
  { key: "taxConsulting", icon: <FileText size={34} strokeWidth={1.5} /> },
  { key: "internalAudit", icon: <Search size={34} strokeWidth={1.5} /> },
  { key: "forensic", icon: <Fingerprint size={34} strokeWidth={1.5} /> },
  { key: "risk-management", icon: <ShieldAlert size={34} strokeWidth={1.5} /> },
  { key: "governance", icon: <Landmark size={34} strokeWidth={1.5} /> },
  { key: "transferPricing", icon: <Globe size={34} strokeWidth={1.5} /> },
] as const;

export default function ServicesPage() {
  const t = useTranslations("servicesPage");

  return (
    <div className="services-page container">
      {/* Hero Section */}
      <section className="hero flex flex-col lg:flex-row">
        <div className="hero-decor" aria-hidden="true">
          <svg
            className="arc"
            width="420"
            height="420"
            viewBox="0 0 420 420"
            fill="none"
          >
            <path
              d="M420 210C420 93.99 326.01 0 210 0C93.99 0 0 93.99 0 210"
              stroke="rgba(201,162,39,0.22)"
              strokeWidth="1.5"
            />
            <path
              d="M390 210C390 110.59 310.41 31 211 31C111.59 31 32 110.59 32 211"
              stroke="rgba(201,162,39,0.12)"
              strokeWidth="1"
            />
          </svg>
          <div className="dots" />
        </div>

        <div className="hero-inner">
          <div className="">
            <h1 className="hero-title">
              <span className="text-white">{t("hero.titleWhite")}</span>
              <span className="text-gold">{t("hero.titleGold")}</span>
            </h1>
            <p className="hero-subtitle">{t("hero.subtitle")}</p>
          </div>
        </div>

        <div className="relative flex-[60%] lg:w-1/2 h-full sm:h-80 md:h-100 hidden md:block overflow-hidden">
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

      {/* Services Grid */}
      <section className="services">
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.key}
              href={service.key}
              icon={service.icon}
              number={t(`services.${service.key}.number`)}
              title={t(`services.${service.key}.title`)}
              desc={t(`services.${service.key}.desc`)}
              learnMoreLabel={t("learnMore")}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-bar">
          <div className="cta-icon">
            <Headset size={32} strokeWidth={1.5} />
          </div>
          <div className="cta-text">
            <h2>{t("cta.title")}</h2>
            <p>{t("cta.desc")}</p>
          </div>
          <Link
            href="/contact"
            className="btn group flex items-center gap-1.5 bg-[#BF925E] text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-[5px] hover:bg-[#A87B4A] transition-colors"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ---------- Helper Component ---------- */

function ServiceCard({
  icon,
  number,
  title,
  desc,
  learnMoreLabel,
  href,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  desc: string;
  learnMoreLabel: string;
  href: string;
}) {
  return (
    <article className="service-card">
      <span className="service-number">{number}</span>
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link href={`/our-services/services/${href}`} className="service-link ">
        {learnMoreLabel}{" "}
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </article>
  );
}
