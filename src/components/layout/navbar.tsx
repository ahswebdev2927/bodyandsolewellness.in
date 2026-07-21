"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown, Sparkles, Heart, Zap, Flame, ShieldAlert, Wind, Sunrise, Shield, Activity, Scroll, Users, Coins } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Reiki Distance Healing", href: "/services#reiki", desc: "Restore balance, peace, and deep relaxation.", icon: Heart },
  { name: "Karmic Reiki", href: "/services#karmic", desc: "6 weeks healing everyday for 45 mins", icon: ShieldAlert },
  { name: "Twin Flame Healing", href: "/services#twin-flame", desc: "Harmonize divine masculine & feminine energies.", icon: Flame },
  { name: "Violet Flame Healing", href: "/services#violet-flame", desc: "Transform negative energy into clarity & peace.", icon: Sparkles },
  { name: "Cord Cutting", href: "/services#cord-cutting", desc: "Release unhealthy attachments and regain energy.", icon: Zap },
  { name: "Karuna Reiki", href: "/services#karuna", desc: "Compassion-based healing for deep trauma.", icon: Wind },
  { name: "Melchizedek Healing", href: "/services#melchizedek", desc: "Activate light codes for higher consciousness.", icon: Shield },
  { name: "Humkara with Haleem", href: "/services#humkara", desc: "Purify the aura and align major chakras.", icon: Sunrise },
  { name: "Soul Contract Cancellation", href: "/services#soul-contract", desc: "Release and cancel limiting pre-birth soul agreements.", icon: Scroll },
  { name: "Ancestral Healing", href: "/services#ancestral", desc: "Clear inherited blockages and family cycles.", icon: Users },
  { name: "Money Reiki Healing", href: "/services#money-reiki", desc: "Align with abundance and clear financial blocks.", icon: Coins },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setMegaOpen(false);
    setScrolled(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Diet", href: "/diet" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200/20 dark:border-neutral-800/30 ${scrolled ? "py-3 shadow-sm" : "py-6"
        }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-gold-400 to-purple-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group block relative -ml-1">
          <Image
            src="/Reiki  logo.png"
            alt="Wellness & Peace Logo"
            width={5550}
            height={150}
            style={{ width: "auto", height: "85px" }}
            className="object-contain dark:brightness-110 dark:contrast-120 group-hover:scale-[1.02] transition-transform duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm tracking-wider uppercase font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer py-2 ${isActive || pathname.startsWith("/services")
                      ? "text-gold-500 dark:text-gold-400 font-semibold"
                      : "text-foreground/80"
                      }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[600px] pointer-events-auto z-50"
                      >
                        <div className="rounded-[28px] border border-neutral-200/50 dark:border-neutral-800/40 bg-white/98 dark:bg-neutral-950/98 backdrop-blur-md p-6 shadow-2xl grid grid-cols-2 gap-4">
                          {services.map((srv) => {
                            const IconComponent = srv.icon;
                            return (
                              <Link
                                key={srv.name}
                                href={srv.href}
                                className="group/item flex items-start gap-3 p-3 rounded-[16px] hover:bg-neutral-100/50 dark:hover:bg-white/5 transition-all duration-300"
                              >
                                <span className="p-2 rounded-[12px] bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-300 group-hover/item:scale-110 transition-transform">
                                  <IconComponent className="w-4 h-4" />
                                </span>
                                <div>
                                  <h4 className="text-sm font-semibold text-foreground group-hover/item:text-gold-600 dark:group-hover/item:text-gold-400 transition-colors">
                                    {srv.name}
                                  </h4>
                                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1">
                                    {srv.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wider uppercase font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors py-2 ${isActive
                  ? "text-gold-500 dark:text-gold-400 font-semibold"
                  : "text-foreground/80"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full text-foreground/80 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-900/50 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button> */}

          <a
            href="https://wa.me/919573797979?text=Hello%20Himabindu,%20I%20would%20like%20to%20book%20a%20healing%20session."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="md">
              Book Session
            </Button>
          </a>
        </div>

        {/* Mobile Actions (Menu Button) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-full text-foreground/80 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-900/50 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="fixed inset-x-0 top-0 z-40 bg-neutral-50 dark:bg-neutral-950 overflow-y-auto md:hidden pt-28 px-8 pb-12 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col gap-3">
                      <span className="text-sm font-semibold tracking-wider text-neutral-400 dark:text-neutral-600 uppercase">
                        {link.name}
                      </span>
                      <div className="pl-4 flex flex-col gap-4 border-l border-neutral-200 dark:border-neutral-800">
                        {services.map((srv) => (
                          <Link
                            key={srv.name}
                            href={srv.href}
                            className="text-lg font-serif text-foreground/90 hover:text-gold-500"
                            onClick={() => setIsOpen(false)}
                          >
                            {srv.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-serif text-foreground/90 hover:text-gold-500 transition-colors ${isActive ? "text-gold-500 font-semibold" : ""
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="https://wa.me/919573797979?text=Hello%20Himabindu,%20I%20would%20like%20to%20book%20a%20healing%20session."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                <Button variant="primary" size="lg" className="w-full">
                  Book Session
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
