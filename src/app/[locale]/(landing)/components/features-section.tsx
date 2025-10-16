"use client";

import {
  Award,
  CheckCircle,
  Clock,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";

export default function FeaturesSection() {
  const t = useTranslations("IndexPage.FeaturesSection");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const features = [
    {
      icon: Zap,
      title: t("features.speed.title"),
      description: t("features.speed.description"),
      color: "primary",
      gradient: "from-primary to-primary/80"
    },
    {
      icon: Shield,
      title: t("features.security.title"),
      description: t("features.security.description"),
      color: "secondary",
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: Users,
      title: t("features.team.title"),
      description: t("features.team.description"),
      color: "primary",
      gradient: "from-primary/80 to-primary"
    },
    {
      icon: Clock,
      title: t("features.availability.title"),
      description: t("features.availability.description"),
      color: "secondary",
      gradient: "from-secondary/80 to-secondary"
    },
    {
      icon: Award,
      title: t("features.quality.title"),
      description: t("features.quality.description"),
      color: "primary",
      gradient: "from-primary to-primary/60"
    },
    {
      icon: TrendingUp,
      title: t("features.growth.title"),
      description: t("features.growth.description"),
      color: "secondary",
      gradient: "from-secondary to-secondary/60"
    }
  ];

  return (
    <section className="from-primary/5 bg-gradient-to-b to-white py-20">
      <div className="layout">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <div className="mb-16 text-center">
            <m.div variants={itemVariants} className="mb-4">
              <span className="from-primary/10 to-secondary/10 text-primary inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-2 text-sm font-medium">
                <Star size={16} />
                {t("badge")}
              </span>
            </m.div>
            <m.h2
              variants={itemVariants}
              className="mb-6 text-3xl font-bold text-gray-900 lg:text-5xl"
            >
              {t("title")}{" "}
              <span className="text-primary">{t("titleHighlight")}</span>؟
            </m.h2>
            <m.p
              variants={itemVariants}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600"
            >
              {t("description")}
            </m.p>
          </div>

          {/* Features Grid */}
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <m.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <Card className="relative h-full overflow-hidden border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-xl">
                  {/* Background Pattern */}
                  <div className="absolute right-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-50" />

                  <div
                    className={`bg-gradient-to-r ${feature.gradient} relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
                  >
                    <feature.icon className="text-white" size={28} />
                  </div>

                  <h3 className="group-hover:text-primary mb-3 text-xl font-bold text-gray-900 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-gray-600">
                    {feature.description}
                  </p>

                  <div className="text-secondary mt-4 flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span className="text-sm font-medium">
                      {t("availableNow")}
                    </span>
                  </div>
                </Card>
              </m.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <m.div
            variants={itemVariants}
            className="from-primary to-secondary rounded-2xl bg-gradient-to-r p-8 text-center text-white lg:p-12"
          >
            <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
              {t("cta.title")}
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-white/90">
              {t("cta.description")}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>{t("cta.features.fast")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>{t("cta.features.guaranteed")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>{t("cta.features.support")}</span>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
