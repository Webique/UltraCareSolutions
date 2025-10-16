"use client";

import { CheckCircle, Clock, Shield, Users } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

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

          {/* Vision Section */}
          <div className="mb-16 grid items-center gap-16 lg:grid-cols-2">
            <m.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:mb-6 lg:text-start">
                {t("visionTitle")}
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                {t("visionDescription")}
              </p>
            </m.div>
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-xl"
            >
              <ExportedImage
                src="/images/about-vision.jpg"
                alt={t("visionTitle")}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </m.div>
          </div>

          {/* Goals Section */}
          <div className="mb-16 grid items-center gap-16 text-center lg:grid-cols-2 lg:text-start">
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-xl"
            >
              <ExportedImage
                src="/images/about-goals.jpg"
                alt={t("goalsTitle")}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </m.div>
            <m.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:mb-6 lg:text-start">
                {t("goalsTitle")}
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                {t("goalsList.facilitation")}
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                {t("goalsList.support")}
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                {t("goalsList.storage")}
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                {t("goalsList.acceleration")}
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                {t("goalsList.supervision")}
              </p>
            </m.div>
          </div>

          {/* Visual Process Flow */}
          <m.div variants={itemVariants} className="mb-16">
            <div className="border-primary/10 from-primary/5 to-secondary/5 rounded-2xl border bg-gradient-to-r via-white p-8 shadow-lg">
              <h3 className="mb-8 text-center text-xl font-bold text-gray-900">
                {t("processFlow.title")}
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
                    {t("processFlow.steps.receive.title")}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {t("processFlow.steps.receive.subtitle")}
                  </p>
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
                    {t("processFlow.steps.review.title")}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {t("processFlow.steps.review.subtitle")}
                  </p>
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
                    {t("processFlow.steps.execute.title")}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {t("processFlow.steps.execute.subtitle")}
                  </p>
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
                    {t("processFlow.steps.deliver.title")}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {t("processFlow.steps.deliver.subtitle")}
                  </p>
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
                {t("whyChooseUs.title")}
              </h3>
              <p className="mx-auto max-w-2xl text-white/90">
                {t("whyChooseUs.description")}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <CheckCircle size={32} />
                </div>
                <h4 className="mb-2 font-bold">
                  {t("whyChooseUs.features.expertise.title")}
                </h4>
                <p className="text-sm text-white/90">
                  {t("whyChooseUs.features.expertise.description")}
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <Shield size={32} />
                </div>
                <h4 className="mb-2 font-bold">
                  {t("whyChooseUs.features.quality.title")}
                </h4>
                <p className="text-sm text-white/90">
                  {t("whyChooseUs.features.quality.description")}
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <Clock size={32} />
                </div>
                <h4 className="mb-2 font-bold">
                  {t("whyChooseUs.features.speed.title")}
                </h4>
                <p className="text-sm text-white/90">
                  {t("whyChooseUs.features.speed.description")}
                </p>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
