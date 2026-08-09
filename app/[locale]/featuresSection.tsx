"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import "@/app/globals.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const t1 = useTranslations("featuresOne");
  const t2 = useTranslations("featuresTow");

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };
  const card = {
    hidden: { opacity: 0, y: 500 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const features = [
    {
      id: 1,
      title: t1(`title`),
      description: t1(`description1`),
      description2: t1(`description2`),
      image: "/images/feature-1.png", // صورة الدرع مع رقم 18
      link: "#",
      animation: -100,
    },

    {
      id: 2,
      title: t2(`title`),
      description: t2(`description1`),
      description2: t2(`description2`),
      image: "/images/compass-no-bg.png", // صورة البوصلة
      link: "#",
      animation: 100,
    },
  ];
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="features-container"
    >
      {features.map((feature) => (
          <motion.div variants={card}
              key={feature.id} className="feature-card">
          <div className="feature-content">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <p className="feature-description">{feature.description2}</p>
            <a href={feature.link} className="feature-link">
              <ArrowLeft className="feature-arrow arrow" />
              تعرف على المزيد
            </a>
          </div>
          <Image
            src={feature.image}
            alt={feature.title}
            className="feature-image"
            width={300}
            height={300}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
