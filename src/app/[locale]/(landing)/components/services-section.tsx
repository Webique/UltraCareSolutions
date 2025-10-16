"use client";

import {
  Award,
  Building,
  CheckCircle,
  FileText,
  MessageCircle,
  Package,
  Settings,
  Shield,
  Truck,
  Warehouse
} from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.ServicesSection");

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
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const services = [
    {
      icon: FileText,
      title: t("services.licenses.title"),
      description: t("services.licenses.description"),
      features: [
        t("services.licenses.features.food"),
        t("services.licenses.features.drugs"),
        t("services.licenses.features.medical"),
        t("services.licenses.features.feed")
      ],
      color: "primary",
      gradient: "from-primary to-primary/80",
      id: "licenses"
    },
    {
      icon: Package,
      title: t("services.registration.title"),
      description: t("services.registration.description"),
      features: [
        t("services.registration.features.products"),
        t("services.registration.features.factories"),
        t("services.registration.features.documentation"),
        t("services.registration.features.submission")
      ],
      color: "secondary",
      gradient: "from-secondary to-secondary/80",
      id: "registration"
    },
    {
      icon: Warehouse,
      title: t("services.storage.title"),
      description: t("services.storage.description"),
      features: [
        t("services.storage.features.sensitive"),
        t("services.storage.features.frozen"),
        t("services.storage.features.dry"),
        t("services.storage.features.compliant")
      ],
      color: "primary",
      gradient: "from-primary/80 to-primary",
      id: "storage"
    },
    {
      icon: Building,
      title: t("services.warehouses.title"),
      description: t("services.warehouses.description"),
      features: [
        t("services.warehouses.features.setup"),
        t("services.warehouses.features.civilDefense"),
        t("services.warehouses.features.municipality"),
        t("services.warehouses.features.environmental")
      ],
      color: "secondary",
      gradient: "from-secondary/80 to-secondary",
      id: "warehouses"
    },
    {
      icon: MessageCircle,
      title: t("services.consulting.title"),
      description: t("services.consulting.description"),
      features: [
        t("services.consulting.features.analysis"),
        t("services.consulting.features.solutions"),
        t("services.consulting.features.challenges"),
        t("services.consulting.features.market")
      ],
      color: "primary",
      gradient: "from-primary to-primary/60",
      id: "consulting"
    }
  ];

  return (
    <section
      id="services"
      className="from-primary/5 to-secondary/5 bg-gradient-to-b via-white py-20"
    >
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
              <span className="bg-primary/10 text-primary border-primary/20 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
                <Settings size={16} />
                {t("badge")}
              </span>
            </m.div>
            <m.h2
              variants={itemVariants}
              className="mb-6 text-3xl font-bold text-gray-900 lg:text-5xl"
            >
              {t("title")}{" "}
              <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
                {t("subtitle")}
              </span>
            </m.h2>
            <m.p
              variants={itemVariants}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600"
            >
              {t("description")}
            </m.p>
          </div>

          {/* Services Image */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mx-auto my-16 h-[320px] w-full max-w-3xl overflow-hidden rounded-3xl shadow-2xl"
          >
            <ExportedImage
              src="/images/services.jpg"
              alt="Warehouse Storage Solutions - UltraCare FDA Services"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </m.div>

          {/* Services Grid */}
          <div className="mx-auto mb-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <m.div
                id={service.id}
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <Card className="relative mx-auto h-full max-w-md overflow-hidden border-0 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:bg-white hover:shadow-2xl">
                  {/* Background Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                  />

                  {/* Icon with enhanced styling */}
                  <div className="relative mb-8">
                    <div
                      className={`bg-gradient-to-br ${service.gradient} relative flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-xl`}
                    >
                      <service.icon
                        className="text-white drop-shadow-sm"
                        size={32}
                      />
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="group-hover:text-primary mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="mb-8 leading-relaxed text-gray-600">
                      {service.description}
                    </p>

                    {/* Features with enhanced styling */}
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
                        >
                          <div className="mt-0.5 flex-shrink-0">
                            <CheckCircle
                              className="text-secondary drop-shadow-sm"
                              size={18}
                            />
                          </div>
                          <span className="font-medium leading-relaxed text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div
                    className={`absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl ${service.gradient} opacity-10 transition-opacity duration-500 group-hover:opacity-20`}
                    style={{ clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)" }}
                  />
                </Card>
              </m.div>
            ))}
          </div>

          {/* Stats */}
          <m.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-16 lg:grid-cols-4"
          >
            <div className="text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
                <Shield className="text-primary" size={32} />
              </div>
              <div className="from-primary to-secondary mb-2 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                100%
              </div>
              <p className="font-medium text-gray-600">
                {t("stats.successRate")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
                <Award className="text-secondary" size={32} />
              </div>
              <div className="from-secondary to-secondary/80 mb-2 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                24/7
              </div>
              <p className="font-medium text-gray-600">{t("stats.support")}</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
                <Truck className="text-primary" size={32} />
              </div>
              <div className="from-primary to-primary/80 mb-2 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                500+
              </div>
              <p className="font-medium text-gray-600">{t("stats.licenses")}</p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
                <Building className="text-secondary" size={32} />
              </div>
              <div className="from-secondary to-primary mb-2 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                {t("stats.speedValue")}
              </div>
              <p className="font-medium text-gray-600">{t("stats.speed")}</p>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
