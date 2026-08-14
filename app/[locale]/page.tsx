import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  Calculator,
  FileText,
  Fingerprint,
  Globe,
  Landmark,
  Search,
  ShieldAlert,
} from "lucide-react";
import Services from "./services";
import FeaturesSection from "./featuresSection";



export default function Home() {
  const t = useTranslations("mainPage");
  const tButtons = useTranslations("buttons");
  const spanText = useTranslations("span");

  return (
    <div className="container pb-[100px]">
      {/* Video Section */}
      <section className="min-h-[120vh]">
        <div className="video w-full overflow-hidden h-screen lg:min-h-full">
          <video
            src="/images/main.mp4"
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
        <div className="absolute top-50 container flex  ">
          <div className="w-[50%] px-6 py-10 lg:py-12 flex items-center justify-center flex-col gap-4 text-center">
            <h1 className="title-main w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center w-full sm:w-[90%] lg:w-[80%] leading-tight">
              {t("title")}
            </h1>
            <p className="mt-2 lg:mt-4 w-full text-base sm:text-lg text-center text-white">
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
          {/* Stats */}
          <div className="absolute bottom-10 right-0 home-hero-stats">
            <div className="hero-stat">
              <strong>15+</strong>
              <span>عامًا من الخبرة</span>
            </div>

            <div className="hero-stat">
              <strong>250+</strong>
              <span>عميلًا ناجحًا</span>
            </div>

            <div className="hero-stat">
              <strong>100%</strong>
              <span>التزام وموثوقية</span>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <FeaturesSection />

      <section className="standards-section pb-10">
        <div className="container">
          <p className="standards-title">{spanText("text")}</p>

          <div className="standards-list">
            <div className="standard-item">
              <strong>IFRS</strong>
             
            </div>

            <div className="standard-item">
              <strong>IAASB</strong>
              
            </div>

            <div className="standard-item">
              <strong>OECD</strong>
              
            </div>

            <div className="standard-item">
              <strong>ISO</strong>
              
            </div>

            <div className="standard-item">
              <strong>SOCPA</strong>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
