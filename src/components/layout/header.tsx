"use client";

import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as React from "react";

import LocaleSwitcher from "@/components/locale-switcher";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.faq"), href: "#faq" }
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-gray-200 bg-white/80 shadow-sm backdrop-blur-md">
      {/* Main Header */}
      <div className="layout">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex h-full items-center gap-3"
          >
            <Logo
              className="h-full"
              imgClassName="h-full w-auto sm:h-full sm:w-auto"
            />
          </m.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-foreground hover:text-primary relative font-medium transition-colors",
                    "before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current",
                    "before:transition-all before:duration-300 hover:before:w-full"
                  )}
                >
                  {item.label}
                </Link>
              </m.div>
            ))}
          </nav>

          {/* CTA  */}
          <m.div
            className="hidden items-center space-x-3 lg:flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <LocaleSwitcher isTop={false} />

            <div className="flex items-center">
              <Button
                className="group me-2 rounded-full px-5 py-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl lg:inline-flex"
                asChild
              >
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("cta")}
                </a>
              </Button>
            </div>
          </m.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center"
            >
              <LocaleSwitcher className="w-auto" isTop={false} />

              <button
                className="text-foreground hover:bg-muted rounded-md p-2 transition-all duration-300 hover:scale-105"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="space-y-1.5">
                  <m.div
                    animate={
                      isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="h-0.5 w-6 bg-current"
                  />
                  <m.div
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 w-6 bg-current"
                  />
                  <m.div
                    animate={
                      isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="h-0.5 w-6 bg-current"
                  />
                </div>
              </button>
            </m.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <m.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden lg:hidden"
        >
          <nav className="space-y-4 border-t border-gray-200 py-4">
            <div className="space-y-4 px-4">
              {navItems.map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground hover:text-primary hover:bg-primary/10 focus:ring-primary block rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                </m.div>
              ))}

              {/* CTA in Mobile Menu */}
              <m.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="border-t pt-4"
              >
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full shadow-lg transition-all duration-300 hover:shadow-2xl"
                  asChild
                >
                  <a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("cta")}
                  </a>
                </Button>
              </m.div>
            </div>
          </nav>
        </m.div>
      </div>
    </header>
  );
}
