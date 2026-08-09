"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Phone,
  ChevronDown,
  ArrowLeft,
  MapPin,
  Navigation,
  Gem,
  Headphones,
  Handshake,
  Shield,
  Award,
  MessageCircle,
  Calendar,
} from "lucide-react";
import "@/app/globals.css";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const t = useTranslations("contactPage");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message");

      reset();
      alert(t("contactSection.form.successMessage"));
    } catch (error) {
      console.error(error);
      alert(t("contactSection.form.errorMessage"));
    }
  };

  return (
    <div className="contactUs-page">
      {/* Hero Section */}
      <section className="hero ">
        <div className="video w-full overflow-hidden">
          <video
            src="/images/branch.mp4"
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
        <div className=" absolute hero-content relative flex flex-col lg:flex-row gap-10">
          <div className="hero-left">
            <div className="hero-label">{t("hero.label")}</div>
            <h1
              className="hero-title text-5xl font-bold"
              dangerouslySetInnerHTML={{ __html: t.raw("hero.title") }}
            />
            <p className="hero-desc mt-4">{t("hero.description")}</p>

            <div className="rating-card mt-6">
              <div className="label">{t("hero.rating.label")}</div>
              <div className="rating-value flex items-center gap-2">
                <span className="num">{t("hero.rating.value")}</span>
                <span className="stars">★★★★★</span>
              </div>
              <div className="count">{t("hero.rating.count")}</div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-logo"></div>

            <div className="contact-quick mt-6">
              <h3>{t("hero.quickContact.title")}</h3>
              <p className="sub">{t("hero.quickContact.sub")}</p>
              <div className="contact-methods grid grid-cols-2 gap-4 mt-4">
                <ContactMethod
                  icon={<MessageCircle size={22} />}
                  label={t("hero.quickContact.methods.chat")}
                />
                <ContactMethod
                  icon={<Calendar size={22} />}
                  label={t("hero.quickContact.methods.schedule")}
                />
                <ContactMethod
                  icon={<Mail size={22} />}
                  label={t("hero.quickContact.methods.email")}
                />
                <ContactMethod
                  icon={<Phone size={22} />}
                  label={t("hero.quickContact.methods.call")}
                />
                <ContactMethod
                  icon={<MessageCircle size={22} />}
                  label={t("hero.quickContact.methods.whatsapp")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-grid grid lg:grid-cols-2 gap-10">
          {/* Info Side */}
          <div className="info-side">
            <h2>{t("contactSection.info.title")}</h2>
            <p
              className="sub"
              dangerouslySetInnerHTML={{
                __html: t.raw("contactSection.info.sub"),
              }}
            />

            <InfoItem
              icon={<Mail size={20} />}
              label={t("contactSection.info.email.label")}
              value={t("contactSection.info.email.value")}
            />
            <InfoItem
              icon={<Phone size={20} />}
              label={t("contactSection.info.phone.label")}
              value={t("contactSection.info.phone.value")}
            />
            <InfoItem
              icon={<MessageCircle size={20} />}
              label={t("contactSection.info.whatsapp.label")}
              value={t("contactSection.info.whatsapp.value")}
            />
            <InfoItem
              icon={<MapPin size={20} />}
              label={t("contactSection.info.address.label")}
              value={t.raw("contactSection.info.address.value")}
              isHtml
            />

            <div className="map-container relative mt-6">
              <Image
                src="/images/map.jpg"
                alt="Map"
                fill
                className="object-cover"
              />
              <div className="map-pin flex items-center gap-1">
                <MapPin size={16} />
                <span>{t("contactSection.info.map.pin")}</span>
              </div>
              <button className="btn-map flex items-center gap-1.5">
                <Navigation size={16} />
                {t("contactSection.info.map.directions")}
              </button>
            </div>
          </div>

          {/* Form Side */}
          <div className="form-side">
            <h2>{t("contactSection.form.title")}</h2>
            <p className="sub">{t("contactSection.form.sub")}</p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-group relative">
                <input
                  type="text"
                  placeholder={t("contactSection.form.fields.name")}
                  {...register("name", { required: true })}
                />
                <User size={18} className="icon-right" />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {t("contactSection.form.errors.name")}
                  </span>
                )}
              </div>

              <div className="form-group relative">
                <input
                  type="email"
                  placeholder={t("contactSection.form.fields.email")}
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                />
                <Mail size={18} className="icon-right" />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {t("contactSection.form.errors.email")}
                  </span>
                )}
              </div>

              <div className="form-group relative">
                <input
                  type="tel"
                  placeholder={t("contactSection.form.fields.phone")}
                  {...register("phone", { required: true })}
                />
                <Phone size={18} className="icon-right" />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    {t("contactSection.form.errors.phone")}
                  </span>
                )}
              </div>

              <div className="form-group relative">
                <select
                  defaultValue=""
                  {...register("subject", { required: true })}
                >
                  <option value="" disabled>
                    {t("contactSection.form.fields.subject")}
                  </option>
                  <option value="consultation">
                    {t("contactSection.form.subjectOptions.consultation")}
                  </option>
                  <option value="support">
                    {t("contactSection.form.subjectOptions.support")}
                  </option>
                  <option value="partnership">
                    {t("contactSection.form.subjectOptions.partnership")}
                  </option>
                  <option value="other">
                    {t("contactSection.form.subjectOptions.other")}
                  </option>
                </select>
                <ChevronDown
                  size={18}
                  className="icon-right pointer-events-none"
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm">
                    {t("contactSection.form.errors.subject")}
                  </span>
                )}
              </div>

              <div className="form-group">
                <textarea
                  placeholder={t("contactSection.form.fields.message")}
                  {...register("message", { required: true, minLength: 10 })}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {t("contactSection.form.errors.message")}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn-submit group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  t("contactSection.form.sending")
                ) : (
                  <>
                    <ArrowLeft
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-x-2"
                    />
                    {t("contactSection.form.submit")}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section">
        <h2>{t("why.title")}</h2>
        <p className="sub">{t("why.sub")}</p>

        <div className="features-grid grid gap-6">
          <FeatureCard
            icon={<Gem size={28} />}
            title={t("why.features.instant.title")}
            desc={t.raw("why.features.instant.desc")}
          />
          <FeatureCard
            icon={<Headphones size={28} />}
            title={t("why.features.support.title")}
            desc={t.raw("why.features.support.desc")}
          />
          <FeatureCard
            icon={<Handshake size={28} />}
            title={t("why.features.consultation.title")}
            desc={t.raw("why.features.consultation.desc")}
          />
          <FeatureCard
            icon={<Shield size={28} />}
            title={t("why.features.confidential.title")}
            desc={t.raw("why.features.confidential.desc")}
          />
          <FeatureCard
            icon={<Award size={28} />}
            title={t("why.features.custom.title")}
            desc={t.raw("why.features.custom.desc")}
          />
        </div>

        <div className="partners flex items-center gap-6 mt-10">
          <span>{t("why.partnersLabel")}</span>
          <div className="partner-logo">
            <Image src="/images/ifrs.png" alt="IFRS" width={80} height={40} />
          </div>
          <div className="partner-logo">
            <Image src="/images/iaasb.png" alt="IAASB" width={80} height={40} />
          </div>
          <div className="partner-logo">
            <Image src="/images/oecd.png" alt="OECD" width={80} height={40} />
          </div>
          <div className="partner-logo">
            <Image src="/images/fatf.png" alt="FATF" width={80} height={40} />
          </div>
        </div>
      </section>
    </div>
  );
}

/* Helper components */
function ContactMethod({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="contact-method flex flex-col items-center gap-2">
      <div className="icon">{icon}</div>
      <div className="name">{label}</div>
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
  isHtml = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isHtml?: boolean;
}) {
  return (
    <div className="info-item flex items-center justify-between">
      <div className="text">
        <div className="label">{label}</div>
        {isHtml ? (
          <div className="value" dangerouslySetInnerHTML={{ __html: value }} />
        ) : (
          <div className="value">{value}</div>
        )}
      </div>
      <div className="icon-box">{icon}</div>
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
      <div className="icon-wrap">{icon}</div>
      <h4>{title}</h4>
      <p dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}
