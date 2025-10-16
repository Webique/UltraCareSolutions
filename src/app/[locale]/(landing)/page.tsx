import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import FeaturesSection from "@/app/[locale]/(landing)/components/features-section";

import ContactSection from "./components/contact-section";
import FAQSection from "./components/faq-section";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      {/* <HeroSection /> */}
      {/* <AboutSection /> */}
      {/* <ServicesSection /> */}
      <FeaturesSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
