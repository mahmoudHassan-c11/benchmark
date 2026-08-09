"use client";
import { useTranslations } from "next-intl";
import {
  Image as ImageIcon,
  Lock,
  Target,
  Users,
  ShieldCheck,
  Star,
  Globe,
  BarChart3,
  FileText,
  Settings2,
  Layers,
  Clock,
  Handshake,
  ArrowLeft,
} from "lucide-react";
import "@/app/globals.css";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

function ImagePlaceholder({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  return (
    <div className={`img-placeholder ${className ?? ""}`}>
      <ImageIcon size={48} strokeWidth={1.5} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function HighlightItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="highlight-item">
      <div className="highlight-icon">{icon}</div>
      <div className="highlight-text">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function GlobalCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="global-card">
      <div className="global-card-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

export default function AboutPage() {
  const t = useTranslations("aboutPage");
  const tButtons = useTranslations("buttons");
  return (
    <div className="apoutPage container">
      <div className="flex flex-col-reverse lg:flex-row min-h-screen justify-between relative">
        {/* Text Section */}
        <div className="w-full lg:w-[45%] px-6 py-10 lg:py-12 flex items-center justify-center flex-col gap-4 text-center">
          <h1 className="hero-title w-[100%] title-main text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center w-full sm:w-[90%] lg:w-[80%] leading-tight">
            <span className=" w-[100%]">{t("hero.titleLine1")}</span>
            <span className="w-[100%] block">{t("hero.titleLine2")}</span>
          </h1>
          <div className="title-line" />
          <p className="hero-description mt-2 lg:mt-4 text-base sm:text-lg text-center text-white">
            {t("hero.description")}
          </p>

          <div className="buttons flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 lg:mt-6">
            <Link
              className="btn group flex items-center gap-1.5 bg-[#BF925E] text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-[5px] hover:bg-[#A87B4A] transition-colors"
              href="/our-services"
            >
              <ArrowLeft className="arrow transition-transform duration-300 group-hover:-translate-x-2" />
              {tButtons("book")}
            </Link>

            <Link
              className="btn group flex items-center gap-1.5 bg-transparent text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-[5px] border border-white hover:bg-white hover:text-[#101B1D] transition-colors"
              href="/our-services"
            >
              <ArrowLeft className="arrow transition-transform duration-300 group-hover:-translate-x-2" />
              {tButtons("services")}
            </Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-full lg:w-[55%] h-[240px] sm:h-[320px] md:h-[400px] lg:h-auto overflow-hidden">
          <video
            src="/images/branch.mp4"
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
      </div>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <FeatureCard
              icon={<Lock size={32} />}
              title={t("features.confidential.title")}
              desc={t("features.confidential.desc")}
            />
            <FeatureCard
              icon={<Target size={32} />}
              title={t("features.excellence.title")}
              desc={t("features.excellence.desc")}
            />
            <FeatureCard
              icon={<Users size={32} />}
              title={t("features.clientFirst.title")}
              desc={t("features.clientFirst.desc")}
            />
            <FeatureCard
              icon={<ShieldCheck size={32} />}
              title={t("features.transparency.title")}
              desc={t("features.transparency.desc")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about w-full">
        <div className="about-label">{t("about.label")}</div>
        <h2 className="section-title">{t("about.title")}</h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-[5%] w-full gap-y-10">
          <div className=" w-full lg:w-[55%] ">
            <p className="about-text">{t("about.text")}</p>
            <div className="about-highlights">
              <HighlightItem
                icon={<Star size={28} />}
                title={t("about.highlights.quality.title")}
                desc={t("about.highlights.quality.desc")}
              />
              <HighlightItem
                icon={<Users size={28} />}
                title={t("about.highlights.team.title")}
                desc={t("about.highlights.team.desc")}
              />
              <HighlightItem
                icon={<Globe size={28} />}
                title={t("about.highlights.global.title")}
                desc={t("about.highlights.global.desc")}
              />
              <HighlightItem
                icon={<BarChart3 size={28} />}
                title={t("about.highlights.solutions.title")}
                desc={t("about.highlights.solutions.desc")}
              />
            </div>
          </div>

          <div className="about-visual hidden lg:w-[40%] lg:block rounded-2xl">
            <Image
              className="about-img w-[100%] h-[80%]"
              src="/images/about.jpeg"
              width={400}
              height={400}
              alt="bla "
            />
            <blockquote className="about-quote">
              <span className="quote-mark">&quot;</span>
              <p>{t("about.quote")}</p>
              <div className="quote-line" />
            </blockquote>
          </div>
        </div>
      </section>

      {/* Global Team Section */}
      <section className="global">
        <div className="container">
          <div className="global-label">{t("global.label")}</div>
          <h2 className="section-title">{t("global.title")}</h2>

          <div className="global-grid">
            <div className="global-content flex-1/2">
              <p className="global-text">{t("global.text")}</p>
            </div>

            {/* Video Section */}
            <div className="relative w-full lg:w-full h-[100%] sm:h-[320px] md:h-[400px] overflow-hidden">
              <video
                src="/images/branch2.mp4"
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
          </div>

          <div className="global-cards">
            <GlobalCard
              icon={<FileText size={28} />}
              title={t("global.cards.methodology.title")}
              desc={t("global.cards.methodology.desc")}
            />
            <GlobalCard
              icon={<Settings2 size={28} />}
              title={t("global.cards.technology.title")}
              desc={t("global.cards.technology.desc")}
            />
            <GlobalCard
              icon={<Layers size={28} />}
              title={t("global.cards.market.title")}
              desc={t("global.cards.market.desc")}
            />
            <GlobalCard
              icon={<Clock size={28} />}
              title={t("global.cards.responsive.title")}
              desc={t("global.cards.responsive.desc")}
            />
            <GlobalCard
              icon={<Handshake size={28} />}
              title={t("global.cards.partnership.title")}
              desc={t("global.cards.partnership.desc")}
            />
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="accreditations">
        <div className="container">
          <p className="accreditations-title">{t("accreditations.title")}</p>
          <div className="accreditations-logos">
            {t.raw("accreditations.logos").map((logo: string) => (
              <div className="logo-placeholder" key={logo}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
