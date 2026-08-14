import { useTranslations } from "next-intl";
import {
  ClipboardCheck,
  Landmark,
  Users,
  TrendingUp,
  Calculator,
  Receipt,
  ArrowLeft,
  FileText,
  Search,
  Fingerprint,
  ShieldAlert,
  Globe,
} from "lucide-react";
import "@/app/globals.css";
import { Link } from "@/i18n/navigation";

function ServiceCard({
  icon,

  title,
  href,
}: {
  icon: React.ReactNode;

  title: string;
  href: string;
}) {
  return (
    <article className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <Link
        href={`/our-services/services/${href}`}
        className="service-link arrow"
      >
        →
      </Link>
    </article>
  );
}

const services = [
  { key: "bookkeeping", icon: <Calculator size={44} strokeWidth={1.5} /> },
  { key: "taxConsulting", icon: <FileText size={44} strokeWidth={1.5} /> },
  { key: "internalAudit", icon: <Search size={44} strokeWidth={1.5} /> },
  { key: "forensic", icon: <Fingerprint size={44} strokeWidth={1.5} /> },
  { key: "risk-management", icon: <ShieldAlert size={44} strokeWidth={1.5} /> },
  { key: "governance", icon: <Landmark size={44} strokeWidth={1.5} /> },
  { key: "transferPricing", icon: <Globe size={44} strokeWidth={1.5} /> },
] as const;

export default function Services() {
  const tServices = useTranslations("servicesPage");

  return (
    <section className="services services-section-container">
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.key}
            href={service.key}
            icon={service.icon}
            title={tServices(`services.${service.key}.title`)}
          />
        ))}
      </div>
    </section>
  );
}
