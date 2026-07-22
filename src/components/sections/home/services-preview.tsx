"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/services-data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesPreview() {

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } as const;

  return (
    <section className="relative py-24 sm:py-16 px-6 bg-neutral-50/10 dark:bg-neutral-950/10 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Healing Modalities"
          title="Restore Your Spiritual Harmony"
          subtitle="Explore our comprehensive range of high-frequency energy healing services, designed to dissolve blockages and align your mind, body, and soul."
        />

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.id} variants={cardVariants} className="h-full">
                <Card
                  glowColor={
                    service.id === "reiki" || service.id === "twin-flame"
                      ? "gold"
                      : "violet"
                  }
                  hoverEffect="glow"
                  className="h-full flex flex-col justify-between group overflow-hidden"
                >
                  <div className="flex flex-col">
                    {/* Image Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={service.id === "reiki"}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-50/50 dark:from-neutral-950/50 to-transparent pointer-events-none" />
                    </div>

                    <div className="p-8 pb-0 flex flex-col gap-5">
                      {/* Icon & Title Row */}
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-[12px] bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-serif text-foreground tracking-wide leading-tight">
                          {service.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-8 pb-8">
                    <div className="mt-8 pt-6 border-t border-neutral-200/20 dark:border-neutral-800/20 flex items-center justify-between">
                      <Link
                        href={`/services#${service.id}`}
                        className="text-sm font-medium text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <span className="text-xs text-neutral-400 dark:text-neutral-500 tracking-wider">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}
