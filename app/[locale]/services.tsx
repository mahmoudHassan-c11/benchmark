import { useTranslations } from "next-intl";
import {
  ClipboardCheck,
  Landmark,
  Users,
  TrendingUp,
  Calculator,
  Receipt,
  ArrowLeft,
} from "lucide-react";
import "@/app/globals.css";
import { Link } from "@/i18n/navigation";

export default function Services() {
  const t = useTranslations("our-services");

  const services = [
    {
      id: 1,
      title: t("1"),
      logo: ClipboardCheck,
    },
    {
      id: 2,
      title: t("2"),
      logo: Landmark,
    },
    {
      id: 3,
      title: t("3"),
      logo: Users,
    },
    {
      id: 4,
      title: t("4"),
      logo: TrendingUp,
    },
    {
      id: 5,
      title: t("5"),
      logo: Calculator,
    },
    {
      id: 6,
      title: t("6"),
      logo: Receipt,
    },
  ];

  return (
    <div className="services-container">
      {services.map((service) => (
        <div key={service.id} className="service">
          <service.logo className="icon" />

          <p>{service.title}</p>
          <Link href="/about" className="text-center">
            <ArrowLeft className="arrow transition-transform duration-300 group-hover:-translate-x-2" />
          </Link>
        </div>
      ))}
    </div>
  );
}
// import {
//   ClipboardCheck,
//   Landmark,
//   Users,
//   TrendingUp,
//   Calculator,
//   Receipt,
// } from "lucide-react";

// const services = [
//   { name: "خدمات المراجعة المالية", Icon: ClipboardCheck },
//   { name: "التمويل والمشتقات", Icon: Landmark },
//   { name: "الاستشارات الإدارية", Icon: Users },
//   { name: "الاستشارات المالية", Icon: TrendingUp },
//   { name: "المحاسبة", Icon: Calculator },
//   { name: "الخدمات الضريبية", Icon: Receipt },
// ];

// export default function ServicesSection() {
//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-6" dir="rtl">
//       {services.map(({ name, Icon }) => (
//         <div
//           key={name}
//           className="flex flex-col items-center gap-2 w-32 text-center"
//         >
//           <div className="bg-emerald-900/40 p-3 rounded-full">
//             <Icon className="w-6 h-6 text-amber-400" />
//           </div>
//           <span className="text-sm text-white">{name}</span>
//         </div>
//       ))}
//     </div>
//   );
// }
