import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import Statistics from "../statstics";
import ServicesPage from "./services/page";

export default function Page() {
  const t = useTranslations("our-services");
  const tButtons = useTranslations("buttons");

  return (
    <div className="container our-services pb-14">
      {/* <div className="flex flex-col lg:flex-row min-h-screen justify-between relative">
        <div className="text w-full lg:w-1/2 px-6 py-10 lg:py-12 flex items-center justify-center flex-col gap-4">
          <h1 className="title-main text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center w-full sm:w-[85%] lg:w-[70%] leading-tight">
            {t("title")}
          </h1>
          <h2 className="mt-2 lg:mt-4 text-base sm:text-lg text-center text-white">
            {t("branchTitle")}
          </h2>
          <p className="mt-2 lg:mt-4 text-base sm:text-lg text-center w-full sm:w-[85%] lg:w-[80%] block text-white">
            {t("description")}
          </p>
          <div className="buttons flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 lg:mt-6">
            <Link
              className="btn group flex items-center gap-1.5 bg-[#BF925E] text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-[5px] hover:bg-[#A87B4A] transition-colors"
              href="/our-services/services"
            >
              <ArrowLeft className="arrow transition-transform duration-300 group-hover:-translate-x-2" />
              {tButtons("book")}
            </Link>

            <Link
              className="btn group flex items-center gap-1.5 bg-transparent text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-[5px] border border-white  hover:text-[#101B1D] transition-colors"
              href="/our-services/services"
            >
              <ArrowLeft className="arrow transition-transform duration-300 group-hover:-translate-x-2" />
              {tButtons("services")}
            </Link>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 h-[240px] sm:h-[320px] md:h-[400px] lg:h-auto overflow-hidden">
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
      </div> */}

      <ServicesPage />

      <Statistics />
    </div>
  );
}
