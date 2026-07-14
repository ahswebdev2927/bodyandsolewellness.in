"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Clock, User, CheckCircle2, Compass } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/services-data";
import Link from "next/link";

export default function ServicesPage() {
  // SVG gradients for alternating visual blocks
  const gradients = [
    "from-purple-500/10 to-indigo-500/5",
    "from-gold-400/10 to-amber-500/5",
    "from-emerald-500/10 to-teal-500/5",
    "from-indigo-500/10 to-blue-500/5",
    "from-rose-500/10 to-pink-500/5",
    "from-amber-500/10 to-orange-500/5",
    "from-purple-500/10 to-pink-500/5",
    "from-emerald-500/10 to-blue-500/5",
    "from-indigo-500/10 to-purple-500/5",
  ];

  return (
    <PageWrapper>
      {/* 1. Header Hero */}
      <section className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full border border-gold-400/20 bg-gold-400/5 text-gold-700 dark:text-gold-300 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Healing Chambers</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground tracking-wide leading-tight"
          >
            Our Alchemical <span className="italic text-gradient-gold">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed"
          >
            Explore our professional energy healing modalities. We combine traditional Usui methods with advanced multi-dimensional cosmic frequencies to balance your biological grids.
          </motion.p>
        </div>
      </section>

      {/* 2. Alternating Services Detailed Layout */}
      <section className="py-12 px-6 relative z-10 flex flex-col gap-24 sm:gap-32">
        {servicesData.map((service, idx) => {
          const IconComponent = service.icon;
          const isEven = idx % 2 === 0;
          const gradient = gradients[idx % gradients.length];

          return (
            <div
              key={service.id}
              id={service.id}
              className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
            >
              {/* Graphic/Visual Block (Alternating) */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`lg:col-span-5 flex justify-center ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative w-full max-w-[400px] aspect-square rounded-[32px] overflow-hidden border border-neutral-200/50 dark:border-neutral-800/40 glass shadow-2xl group">
                  {/* Image */}
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority={idx === 0}
                  />
                  {/* Subtle aura lighting overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${gradient} opacity-20 pointer-events-none mix-blend-color-dodge`} />
                </div>
              </motion.div>

              {/* Description Block */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`lg:col-span-7 flex flex-col gap-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl sm:text-4xl font-serif text-foreground tracking-wide">
                    {service.name}
                  </h2>
                </div>
                
                <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                  {service.longDesc}
                </p>

                {/* Grid stats */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-neutral-200/20 dark:border-neutral-800/20">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gold-500 shrink-0" />
                    <div>
                      <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Duration</h5>
                      <p className="text-sm font-medium text-foreground">{service.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-gold-500 shrink-0" />
                    <div>
                      <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Ideal For</h5>
                      <p className="text-sm font-medium text-foreground truncate max-w-[200px]" title={service.whoItIsFor}>
                        {service.whoItIsFor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-serif text-lg text-foreground tracking-wide mb-3">Key Benefits</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How It Works */}
                <div>
                  <h4 className="font-serif text-base text-foreground font-semibold tracking-wide mb-1.5">How It Works</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {service.howItWorks}
                  </p>
                </div>

                <div className="mt-4 flex gap-4">
                  <Link href={`/contact?service=${encodeURIComponent(service.name)}`}>
                    <Button variant="primary" className="px-8">
                      Book {service.name}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>


    </PageWrapper>
  );
}
