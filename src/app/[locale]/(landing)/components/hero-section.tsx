"use client";

import { Award, ChevronDown, Clock, Shield, Users } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const t = useTranslations("IndexPage.HeroSection");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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

  return (
    <section
      id="home"
      className="from-primary/10 to-secondary/10 relative min-h-screen w-full overflow-hidden bg-gradient-to-br via-white"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23oklch(0.45 0.15 220)' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Medical Icons Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 animate-pulse">
          <div className="from-primary/20 to-primary/30 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg">
            <Shield className="text-primary" size={28} />
          </div>
        </div>
        <div className="absolute right-20 top-32 animate-pulse delay-1000">
          <div className="from-secondary/20 to-secondary/30 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br shadow-lg">
            <Award className="text-secondary" size={24} />
          </div>
        </div>
        <div className="delay-2000 absolute bottom-32 left-20 animate-pulse">
          <div className="from-primary/20 to-primary/30 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br shadow-lg">
            <Users className="text-primary" size={20} />
          </div>
        </div>
        <div className="absolute right-10 top-1/2 animate-pulse delay-500">
          <div className="from-secondary/20 to-secondary/30 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br shadow-lg">
            <Clock className="text-secondary" size={18} />
          </div>
        </div>
      </div>

      <div className="layout py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-start"
          >
            <m.div variants={itemVariants} className="mb-6">
              <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                <Shield size={16} />
                {t("subtitle")}
              </span>
            </m.div>

            <m.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl"
            >
              <span className="from-primary via-secondary to-primary/80 bg-gradient-to-r bg-clip-text text-transparent">
                {t("title")}
              </span>
            </m.h1>

            <m.p
              variants={itemVariants}
              className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-xl"
            >
              {t("description")}
            </m.p>

            <m.div
              variants={itemVariants}
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                size="lg"
                className="from-primary to-secondary rounded-xl bg-gradient-to-r px-8 py-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {t("contactCta")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:border-primary hover:bg-primary/5 rounded-xl border-2 px-8 py-4 transition-all duration-300 hover:scale-105"
              >
                {t("learnMore")}
              </Button>
            </m.div>

            {/* Stats */}
            <m.div
              variants={itemVariants}
              className="border-primary/20 mt-12 grid grid-cols-2 gap-6 border-t pt-8 lg:grid-cols-4"
            >
              <div className="text-center lg:text-start">
                <div className="mb-2 flex items-center justify-center gap-2 lg:justify-start">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Shield className="text-primary" size={20} />
                  </div>
                  <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                    100%
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-600">جودة الخدمة</p>
              </div>
              <div className="text-center lg:text-start">
                <div className="mb-2 flex items-center justify-center gap-2 lg:justify-start">
                  <div className="bg-secondary/10 rounded-full p-2">
                    <Award className="text-secondary" size={20} />
                  </div>
                  <span className="from-secondary to-secondary/80 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                    24/7
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-600">دعم متواصل</p>
              </div>
              <div className="text-center lg:text-start">
                <div className="mb-2 flex items-center justify-center gap-2 lg:justify-start">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Users className="text-primary" size={20} />
                  </div>
                  <span className="from-primary to-primary/80 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                    500+
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-600">عميل راضي</p>
              </div>
              <div className="text-center lg:text-start">
                <div className="mb-2 flex items-center justify-center gap-2 lg:justify-start">
                  <div className="bg-secondary/10 rounded-full p-2">
                    <Clock className="text-secondary" size={20} />
                  </div>
                  <span className="from-secondary to-primary bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                    سريع
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-600">
                  إنجاز المعاملات
                </p>
              </div>
            </m.div>
          </m.div>

          {/* Image/Visual */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative">
              {/* Background Glow */}
              <div className="from-primary/20 via-secondary/20 to-primary/20 absolute -inset-4 rounded-3xl bg-gradient-to-r blur-xl"></div>

              {/* Main Card */}
              <div className="via-primary/5 to-secondary/5 relative rounded-3xl border border-white/50 bg-gradient-to-br from-white p-8 shadow-2xl backdrop-blur-sm">
                {/* Header Section */}
                <div className="mb-6 text-center">
                  <div className="from-primary to-secondary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    ألترا كير
                  </h3>
                  <p className="text-sm text-gray-600">
                    حلول هيئة الغذاء والدواء
                  </p>
                </div>

                {/* Services Grid */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <m.div
                    whileHover={{ scale: 1.05 }}
                    className="border-primary/20 from-primary/10 to-primary/20 rounded-xl border bg-gradient-to-br p-4 text-center shadow-sm"
                  >
                    <div className="bg-primary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full shadow-md">
                      <Shield className="text-white" size={20} />
                    </div>
                    <p className="text-primary text-sm font-semibold">
                      تراخيص SFDA
                    </p>
                    <p className="text-primary/80 mt-1 text-xs">جميع الفروع</p>
                  </m.div>

                  <m.div
                    whileHover={{ scale: 1.05 }}
                    className="border-secondary/20 from-secondary/10 to-secondary/20 rounded-xl border bg-gradient-to-br p-4 text-center shadow-sm"
                  >
                    <div className="bg-secondary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full shadow-md">
                      <Award className="text-white" size={20} />
                    </div>
                    <p className="text-secondary text-sm font-semibold">
                      جودة معتمدة
                    </p>
                    <p className="text-secondary/80 mt-1 text-xs">
                      معايير عالية
                    </p>
                  </m.div>
                </div>

                {/* Main CTA Section */}
                <div className="from-primary via-secondary to-primary/80 rounded-xl bg-gradient-to-r p-6 text-center text-white shadow-lg">
                  <h3 className="mb-2 text-lg font-bold">حلول متكاملة</h3>
                  <p className="mb-4 text-sm opacity-90">
                    لجميع متطلبات هيئة الغذاء والدواء السعودية
                  </p>
                  <div className="flex justify-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-white/60"></div>
                    <div className="h-2 w-2 animate-pulse rounded-full bg-white/60 delay-100"></div>
                    <div className="h-2 w-2 animate-pulse rounded-full bg-white/60 delay-200"></div>
                  </div>
                </div>

                {/* Service Categories */}
                <div className="mt-6 grid grid-cols-4 gap-3">
                  <m.div
                    whileHover={{ y: -2 }}
                    className="rounded-lg border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-3 text-center shadow-sm"
                  >
                    <div className="from-primary to-primary/80 mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    <p className="text-xs font-medium text-gray-700">الأغذية</p>
                  </m.div>

                  <m.div
                    whileHover={{ y: -2 }}
                    className="rounded-lg border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-3 text-center shadow-sm"
                  >
                    <div className="from-secondary to-secondary/80 mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    <p className="text-xs font-medium text-gray-700">الأدوية</p>
                  </m.div>

                  <m.div
                    whileHover={{ y: -2 }}
                    className="rounded-lg border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-3 text-center shadow-sm"
                  >
                    <div className="from-primary/80 to-primary mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    <p className="text-xs font-medium text-gray-700">الأجهزة</p>
                  </m.div>

                  <m.div
                    whileHover={{ y: -2 }}
                    className="rounded-lg border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-3 text-center shadow-sm"
                  >
                    <div className="from-secondary/80 to-secondary mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    <p className="text-xs font-medium text-gray-700">التخزين</p>
                  </m.div>
                </div>

                {/* Floating Elements */}
                <m.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="from-primary to-primary/80 absolute -right-4 -top-4 h-8 w-8 rounded-full bg-gradient-to-br opacity-80"
                />
                <m.div
                  animate={{ rotate: [360, 0] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="from-secondary to-secondary/80 absolute -bottom-2 -left-2 h-6 w-6 rounded-full bg-gradient-to-br opacity-70"
                />
              </div>
            </div>
          </m.div>
        </div>

        {/* Scroll Indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        >
          <m.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="mb-2 text-sm">{t("scrollText")}</span>
            <ChevronDown size={20} />
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
