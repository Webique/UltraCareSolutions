"use client";

import {
  Award,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Users,
  Zap
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";

export default function ContactSection() {
  const t = useTranslations("IndexPage.ContactSection");

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

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contactInfo.location.title"),
      value: t("contactInfo.location.value"),
      description: t("contactInfo.location.description"),
      gradient: "from-primary to-primary/80"
    },
    {
      icon: Clock,
      title: t("contactInfo.hours.title"),
      value: t("contactInfo.hours.value"),
      description: t("contactInfo.hours.description"),
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: Phone,
      title: t("contactInfo.phone.title"),
      value: t("contactInfo.phone.value"),
      description: t("contactInfo.phone.description"),
      gradient: "from-primary/80 to-primary"
    },
    {
      icon: Mail,
      title: t("contactInfo.email.title"),
      value: t("contactInfo.email.value"),
      description: t("contactInfo.email.description"),
      gradient: "from-secondary/80 to-secondary"
    }
  ];

  const features = [
    {
      icon: Award,
      title: t("features.quality.title"),
      description: t("features.quality.description")
    },
    {
      icon: Users,
      title: t("features.team.title"),
      description: t("features.team.description")
    },
    {
      icon: Zap,
      title: t("features.speed.title"),
      description: t("features.speed.description")
    }
  ];

  return (
    <section
      id="contact"
      className="from-primary/5 to-secondary/10 relative overflow-hidden bg-gradient-to-br via-white py-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(var(--primary),0.3)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <div className="mb-20 text-center">
            <m.div variants={itemVariants} className="mb-6">
              <span className="border-primary/20 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium">
                <MessageCircle size={18} />
                {t("badge")}
              </span>
            </m.div>
            <m.h2
              variants={itemVariants}
              className="mb-8 text-4xl font-bold text-gray-900 lg:text-6xl"
            >
              {t("title")}{" "}
              <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
                {t("titleHighlight")}
              </span>
            </m.h2>
            <m.p
              variants={itemVariants}
              className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600"
            >
              {t("description")}
            </m.p>
          </div>

          {/* Contact Cards Grid */}
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <m.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <Card className="relative overflow-hidden border-0 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                  <div className="text-center">
                    <div
                      className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${info.gradient} shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110`}
                    >
                      <info.icon className="text-white" size={28} />
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-gray-900">
                      {info.title}
                    </h4>
                    <p className="text-primary mb-2 text-lg font-semibold">
                      {info.value}
                    </p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>

                  {/* Decorative gradient overlay */}
                  <div className="from-primary/20 to-secondary/20 absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-gradient-to-br opacity-20 transition-all duration-300 group-hover:scale-150" />
                </Card>
              </m.div>
            ))}
          </div>

          {/* Features Section */}
          <m.div variants={itemVariants} className="mb-16">
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <m.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group text-center"
                >
                  <div className="from-primary to-secondary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Trust Indicators */}
          <m.div variants={itemVariants} className="text-center">
            <Card className="from-primary to-secondary mx-auto max-w-4xl border-0 bg-gradient-to-r p-8 text-white shadow-2xl">
              <div className="mb-6">
                <h3 className="mb-4 text-2xl font-bold">
                  {t("trustSection.title")}
                </h3>
                <p className="text-white/90">{t("trustSection.description")}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="text-white/80" size={20} />
                  <span className="font-medium">
                    {t("trustSection.indicators.response")}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="text-white/80" size={20} />
                  <span className="font-medium">
                    {t("trustSection.indicators.consultation")}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="text-white/80" size={20} />
                  <span className="font-medium">
                    {t("trustSection.indicators.security")}
                  </span>
                </div>
              </div>
            </Card>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
