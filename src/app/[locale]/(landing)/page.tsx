import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import FAQSection from "./components/faq-section";
import FeaturesSection from "./components/features-section";
import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
