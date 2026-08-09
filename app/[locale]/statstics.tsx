import { div } from "framer-motion/client";
import { Users } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Globe } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Statistics() {
  const t = useTranslations("staticis");
  const statistics = [
    {
      id: 1,
      title: t("Exp"),
      Icon: Users,
    },
    {
      id: 2,
      title: t("Q"),
      Icon: ShieldCheck,
    },
    {
      id: 3,
      title: t("Ser"),
      Icon: Globe,
    },
    {
      id: 4,
      title: t("Clients"),
      Icon: ChartNoAxesCombined,
    },
  ];
  return (
    <div className="stat-container">
      {statistics.map((stat) => (
        <div className="stat-card" key={stat.id}>
          <stat.Icon  className="icon"/>
          <h1>{stat.title}</h1>
        </div>
      ))}
    </div>
  );
}
