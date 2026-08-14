import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowLeft, Calculator, FileText, Fingerprint, Globe, Landmark, Search, ShieldAlert } from "lucide-react";
import Services from "./services";
import FeaturesSection from "./featuresSection";

const services = [
  { key: "bookkeeping", icon: <Calculator size={34} strokeWidth={1.5} /> },
  { key: "taxConsulting", icon: <FileText size={34} strokeWidth={1.5} /> },
  { key: "internalAudit", icon: <Search size={34} strokeWidth={1.5} /> },
  { key: "forensic", icon: <Fingerprint size={34} strokeWidth={1.5} /> },
  { key: "risk-management", icon: <ShieldAlert size={34} strokeWidth={1.5} /> },
  { key: "governance", icon: <Landmark size={34} strokeWidth={1.5} /> },
  { key: "transferPricing", icon: <Globe size={34} strokeWidth={1.5} /> },
] as const;

export default function Home() {
  const t = useTranslations("mainPage");
  const tButtons = useTranslations("buttons");
  const spanText = useTranslations("span");
  const tServices = useTranslations("servicesPage");
  return (
    <div className="container">
      <div className="flex flex-col-reverse lg:flex-row min-h-screen justify-between relative">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-6 py-10 lg:py-12 flex items-center justify-center flex-col gap-4 text-center">
          <h1 className="title-main text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center w-full sm:w-[90%] lg:w-[80%] leading-tight">
            {t("title")}
          </h1>
          <p className="mt-2 lg:mt-4 text-base sm:text-lg text-center text-white">
            {t("description")}
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
        <div className="relative w-full lg:w-1/2 h-[240px] sm:h-[320px] md:h-[400px] lg:h-auto overflow-hidden">
          <video
            src="/images/main.mp4"
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

      <Services />

      <FeaturesSection />

      <span className="text-center text-l text-[#888] mb-4 block">
        {spanText("text")}
      </span>
    </div>
  );
}
