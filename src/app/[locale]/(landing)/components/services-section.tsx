"use client";

import {
  ArrowRight,
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

import { Button } from "@/components/ui/button";
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
      gradient: "from-primary to-primary/80"
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
      gradient: "from-secondary to-secondary/80"
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
      gradient: "from-primary/80 to-primary"
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
      gradient: "from-secondary/80 to-secondary"
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
      gradient: "from-primary to-primary/60"
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
          <m.div variants={itemVariants} className="mb-16">
            <div className="from-primary/10 to-secondary/10 relative mx-auto h-64 max-w-2xl overflow-hidden rounded-2xl bg-gradient-to-br p-6 shadow-lg">
              <ExportedImage
                src="/images/warehouse-storage.svg"
                alt="Warehouse Storage Solutions - UltraCare FDA Services"
                width={300}
                height={200}
                className="mx-auto h-full w-auto object-contain"
              />
            </div>
          </m.div>

          {/* Services Grid */}
          <div className="mb-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <m.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <Card className="h-full border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-xl">
                  <div
                    className={`bg-gradient-to-r ${service.gradient} mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
                  >
                    <service.icon className="text-white" size={28} />
                  </div>

                  <h3 className="group-hover:text-primary mb-3 text-xl font-bold text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  <div className="mb-6 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle
                          className="text-secondary flex-shrink-0"
                          size={16}
                        />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary w-full transition-all duration-300"
                  >
                    اعرف المزيد
                    <ArrowRight
                      size={16}
                      className="mr-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Button>
                </Card>
              </m.div>
            ))}
          </div>

          {/* CTA Section */}
          <m.div
            variants={itemVariants}
            className="from-primary via-secondary to-primary/80 rounded-2xl bg-gradient-to-r p-8 text-center text-white shadow-xl lg:p-12"
          >
            <div className="mx-auto max-w-3xl">
              <h3 className="mb-4 text-2xl font-bold lg:text-4xl">
                هل أنت مستعد للبدء؟
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-white/90">
                تواصل معنا اليوم لمناقشة احتياجاتك واكتشف كيف يمكن لخدماتنا
                المتخصصة أن تساعدك في تحقيق أهدافك
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="text-primary rounded-xl bg-white px-8 py-4 font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
                >
                  احجز استشارة مجانية
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:text-primary rounded-xl border-2 border-white px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-white"
                >
                  ابدأ الآن
                </Button>
              </div>
            </div>
          </m.div>

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
              <p className="font-medium text-gray-600">معدل نجاح الخدمات</p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
                <Award className="text-secondary" size={32} />
              </div>
              <div className="from-secondary to-secondary/80 mb-2 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                24/7
              </div>
              <p className="font-medium text-gray-600">دعم متواصل</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
                <Truck className="text-primary" size={32} />
              </div>
              <div className="from-primary to-primary/80 mb-2 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                500+
              </div>
              <p className="font-medium text-gray-600">ترخيص مكتمل</p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
                <Building className="text-secondary" size={32} />
              </div>
              <div className="from-secondary to-primary mb-2 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                سريع
              </div>
              <p className="font-medium text-gray-600">إنجاز المعاملات</p>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
