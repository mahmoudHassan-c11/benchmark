"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import "@/app/globals.css";
import { useTranslations } from "next-intl";
import { motion, type Variants } from "framer-motion";

export default function FeaturesSection() {
  const t = useTranslations("servicesPage");
  const t1 = useTranslations("featuresOne");
  const t2 = useTranslations("featuresTwo");

  const container: Variants = {
    hidden: {},

    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card: Variants = {
    hidden: {
      opacity: 0,
      y: 80,
    },

    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      id: 1,
      title: t1("title"),
      description: t1("description1"),
      description2: t1("description2"),
      image: "/images/feature-1.png",
      link: "#",
      variant: "dark",
    },
    {
      id: 2,
      title: t2("title"),
      description: t2("description1"),
      description2: t2("description2"),
      image: "/images/compass-no-bg.png",
      link: "#",
      variant: "dark",
    },
  ];

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="features-section"
    >
      <div className="features-container">
        {features.map((feature) => (
          <motion.article
            key={feature.id}
            variants={card}
            className={`feature-card feature-card-${feature.variant}`}
          >
            <div className="feature-content">
              <span className="feature-number">
                {String(feature.id).padStart(2, "0")}
              </span>

              <h3 className="feature-title">{feature.title}</h3>

              <p className="feature-description">{feature.description}</p>

              <p className="feature-description">{feature.description2}</p>

              <a href={feature.link} className="feature-link">
                <ArrowLeft
                  className="feature-arrow"
                  size={18}
                  aria-hidden="true"
                />

                <span>{t("learnMore")}</span>
              </a>
            </div>

            <div className="feature-image-wrapper">
              <Image
                src={feature.image}
                alt={feature.title}
                width={300}
                height={300}
                className="feature-image"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
