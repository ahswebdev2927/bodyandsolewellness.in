"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Healing Services", href: "/services" },
    { name: "Diet Plan", href: "/diet" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact & Booking", href: "/contact" },
  ];

  const servicesLinks = [
    { name: "Reiki Distance Healing", href: "/services#reiki" },
    { name: "Karmic Reiki", href: "/services#karmic" },
    { name: "Twin Flame Healing", href: "/services#twin-flame" },
    { name: "Violet Flame Healing", href: "/services#violet-flame" },
    { name: "Cord Cutting", href: "/services#cord-cutting" },
    { name: "Melchizedek Healing", href: "/services#melchizedek" },
  ];

  return (
    <footer className="relative mt-auto border-t border-neutral-200/20 dark:border-neutral-800/30 bg-neutral-50/50 dark:bg-neutral-950/50 backdrop-blur-md overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Info (takes 5/12 width) */}
          <div className="flex flex-col gap-6 md:col-span-6 lg:col-span-5">
            <Link href="/" className="group block relative w-fit -ml-2">
              <Image
                src="/Reiki  logo.png"
                alt="Wellness & Peace Logo"
                width={135}
                height={135}
                style={{ width: "auto", height: "135px" }}
                className="object-contain dark:brightness-110 dark:contrast-120 group-hover:scale-[1.02] transition-transform duration-300"
                priority
              />
            </Link>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans max-w-sm">
              Dedicated to restoring balance, peace, and spiritual growth through professional energy healing. Aligning mind, body, and soul in harmony.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/bodyandsoulwellness_?igsh=M2wxb3lodDZxM3hn&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-800/80 flex items-center justify-center hover:bg-gold-500 dark:hover:bg-gold-400 hover:text-white dark:hover:text-neutral-950 hover:border-transparent transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1AhXTAhLFb/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-800/80 flex items-center justify-center hover:bg-gold-500 dark:hover:bg-gold-400 hover:text-white dark:hover:text-neutral-950 hover:border-transparent transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (takes 3/12 width) */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="font-serif text-lg tracking-wide mb-6 text-foreground font-semibold">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-gold-500 dark:hover:text-gold-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (takes 4/12 width) */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="font-serif text-lg tracking-wide mb-6 text-foreground font-semibold">
              Healing Services
            </h4>
            <ul className="flex flex-col gap-3.5">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-gold-500 dark:hover:text-gold-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Contact and Copyright Info */}
        <div className="border-t border-neutral-200/20 dark:border-neutral-800/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-neutral-500 dark:text-neutral-400 text-xs">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold-500" /> +91 9573797979
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-gold-500" /> bodyandsoulwellness3@gmail.com
            </span>
          </div>

          <p className="text-xs text-neutral-400 dark:text-neutral-500 font-sans tracking-wide">
            &copy; {new Date().getFullYear()} Wellness & Peace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
