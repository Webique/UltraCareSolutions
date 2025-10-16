"use client";

import { Award, Clock, MapPin, Shield, Users } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import Logo from "@/components/ui/logo";
import { Link } from "@/i18n/navigation.public";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "#home" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("contact"), href: "#contact" }
  ];

  const services = [
    { label: t("licenses"), href: "#licenses" },
    { label: t("registration"), href: "#registration" },
    { label: t("storage"), href: "#storage" },
    { label: t("consulting"), href: "#consulting" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="layout px-4 py-12 sm:pt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Logo
              src="/images/logo-sm.jpeg"
              titleClassName="text-secondary-foreground"
              desClassName="text-secondary-foreground"
            />
            <p className="text-sm leading-relaxed opacity-90">
              {t("companyDescription")}
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-primary/50 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Shield size={20} />
                </div>
                <p className="text-xs text-gray-300">{t("trusted")}</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/50 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Award size={20} />
                </div>
                <p className="text-xs text-gray-300">{t("certified")}</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/50 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Users size={20} />
                </div>
                <p className="text-xs text-gray-300">{t("specialized")}</p>
              </div>
            </div>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <m.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm opacity-90 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* Services */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">{t("services")}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <m.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={service.href}
                    className="text-sm opacity-90 transition-opacity hover:opacity-100"
                  >
                    {service.label}
                  </Link>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* Contact Information */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-6 text-lg font-bold">{t("contactUs")}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/50 flex h-10 w-10 items-center justify-center rounded-lg">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-300">{t("ourLocation")}</p>
                  <p className="font-medium text-white">{t("saudiArabia")}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/50 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-300">{t("workingHours")}</p>
                  <p className="font-medium text-white">{t("available24_7")}</p>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Copyright */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-primary-foreground/20 mt-6 border-t pt-6 text-center"
        >
          <p className="text-sm opacity-75">
            {t("copyright", { year: currentYear })}
          </p>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
