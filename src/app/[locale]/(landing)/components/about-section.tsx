"use client";

import {
  Award,
  CheckCircle,
  Clock,
  Eye,
  Shield,
  Target,
  Users
} from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";

export default function AboutSection() {
  const t = useTranslations("IndexPage.AboutSection");

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

  return (
    <section
      id="about"
      className="via-primary/5 to-secondary/10 bg-gradient-to-b from-white py-20"
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
                <Users size={16} />
                {t("badge")}
              </span>
            </m.div>
            <m.h2
              variants={itemVariants}
              className="mb-6 text-3xl font-bold text-gray-900 lg:text-5xl"
            >
              {t("title")}
            </m.h2>
            <m.p
              variants={itemVariants}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600"
            >
              {t("description")}
            </m.p>
          </div>

          <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
            {/* Vision & Goals */}
            <m.div variants={itemVariants} className="space-y-8">
              {/* Hero Image */}
              <div className="mb-8 lg:hidden">
                <div className="from-primary/10 to-secondary/10 relative mx-auto h-64 w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br p-4 shadow-lg">
                  <ExportedImage
                    src="/images/medical-shield.svg"
                    alt="Medical Shield - UltraCare FDA Solutions"
                    width={200}
                    height={200}
                    className="mx-auto h-full w-auto object-contain"
                  />
                </div>
              </div>
              <Card className="border-l-primary bg-primary/5 border-l-4 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 shadow-sm">
                    <Eye className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {t("vision")}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {t("visionDesc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-l-secondary bg-secondary/5 border-l-4 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 rounded-lg p-3 shadow-sm">
                    <Target className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {t("goals")}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {t("goalsDesc")}
                    </p>
                  </div>
                </div>
              </Card>
            </m.div>

            {/* Achievements Grid */}
            <m.div variants={itemVariants} className="space-y-8">
              {/* Hero Image - Desktop */}
              <div className="hidden lg:block">
                <div className="from-primary/10 to-secondary/10 relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br via-white p-6 shadow-xl">
                  <ExportedImage
                    src="/images/pharmaceutical-lab.svg"
                    alt="Pharmaceutical Laboratory - UltraCare FDA Solutions"
                    width={300}
                    height={200}
                    className="mx-auto h-full w-auto object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <m.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg"
                >
                  <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg shadow-sm">
                    <Shield className="text-primary" size={24} />
                  </div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    {t("achievements.experience")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("achievements.experienceDesc")}
                  </p>
                </m.div>

                <m.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg"
                >
                  <div className="bg-secondary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg shadow-sm">
                    <Award className="text-secondary" size={24} />
                  </div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    {t("achievements.quality")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("achievements.qualityDesc")}
                  </p>
                </m.div>

                <m.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg"
                >
                  <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg shadow-sm">
                    <Users className="text-primary" size={24} />
                  </div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    {t("achievements.support")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("achievements.supportDesc")}
                  </p>
                </m.div>

                <m.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg"
                >
                  <div className="bg-secondary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg shadow-sm">
                    <Clock className="text-secondary" size={24} />
                  </div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    {t("achievements.growth")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("achievements.growthDesc")}
                  </p>
                </m.div>
              </div>
            </m.div>
          </div>

          {/* Visual Process Flow */}
          <m.div variants={itemVariants} className="mb-16">
            <div className="border-primary/10 from-primary/5 to-secondary/5 rounded-2xl border bg-gradient-to-r via-white p-8 shadow-lg">
              <h3 className="mb-8 text-center text-xl font-bold text-gray-900">
                عملية العمل المتكاملة
              </h3>
              <div className="mx-auto flex max-w-4xl items-center justify-between">
                <div className="text-center">
                  <m.div
                    whileHover={{ scale: 1.1 }}
                    className="from-primary to-primary/80 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br font-bold text-white shadow-lg"
                  >
                    1
                  </m.div>
                  <p className="text-sm font-medium text-gray-700">
                    استلام الطلب
                  </p>
                  <p className="mt-1 text-xs text-gray-500">تحليل المتطلبات</p>
                </div>
                <div className="from-primary/60 to-secondary/60 mx-4 h-1 flex-1 rounded-full bg-gradient-to-r"></div>
                <div className="text-center">
                  <m.div
                    whileHover={{ scale: 1.1 }}
                    className="from-secondary to-secondary/80 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br font-bold text-white shadow-lg"
                  >
                    2
                  </m.div>
                  <p className="text-sm font-medium text-gray-700">
                    المراجعة والتحليل
                  </p>
                  <p className="mt-1 text-xs text-gray-500">دراسة شاملة</p>
                </div>
                <div className="from-secondary/60 to-primary/60 mx-4 h-1 flex-1 rounded-full bg-gradient-to-r"></div>
                <div className="text-center">
                  <m.div
                    whileHover={{ scale: 1.1 }}
                    className="from-primary/80 to-primary mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br font-bold text-white shadow-lg"
                  >
                    3
                  </m.div>
                  <p className="text-sm font-medium text-gray-700">
                    التنفيذ والمتابعة
                  </p>
                  <p className="mt-1 text-xs text-gray-500">إنجاز المعاملات</p>
                </div>
                <div className="from-primary/60 to-secondary/60 mx-4 h-1 flex-1 rounded-full bg-gradient-to-r"></div>
                <div className="text-center">
                  <m.div
                    whileHover={{ scale: 1.1 }}
                    className="from-secondary/80 to-secondary mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br font-bold text-white shadow-lg"
                  >
                    4
                  </m.div>
                  <p className="text-sm font-medium text-gray-700">
                    التسليم النهائي
                  </p>
                  <p className="mt-1 text-xs text-gray-500">ضمان الجودة</p>
                </div>
              </div>
            </div>
          </m.div>

          {/* Key Features */}
          <m.div
            variants={itemVariants}
            className="from-primary via-secondary to-primary/80 rounded-2xl bg-gradient-to-r p-8 text-white shadow-xl"
          >
            <div className="mb-8 text-center">
              <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
                لماذا تختار ألترا كير؟
              </h3>
              <p className="mx-auto max-w-2xl text-white/90">
                نحن نعمل وفق أعلى معايير الجودة والالتزام، ونحرص على تسهيل
                المهام على عملائنا
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <CheckCircle size={32} />
                </div>
                <h4 className="mb-2 font-bold">خبرة متخصصة</h4>
                <p className="text-sm text-white/90">
                  فريق احترافي ذو خبرة عالية في جميع الإجراءات
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <Shield size={32} />
                </div>
                <h4 className="mb-2 font-bold">جودة مضمونة</h4>
                <p className="text-sm text-white/90">
                  نعمل وفق أعلى معايير الجودة والالتزام
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <Clock size={32} />
                </div>
                <h4 className="mb-2 font-bold">سرعة في الإنجاز</h4>
                <p className="text-sm text-white/90">
                  خدمات سريعة ومرنة تواكب تطورات السوق
                </p>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
