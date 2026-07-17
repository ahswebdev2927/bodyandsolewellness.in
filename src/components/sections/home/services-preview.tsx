"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { servicesData, ServiceDetail } from "@/lib/services-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesPreview() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

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
                      <button
                        onClick={() => setSelectedService(service)}
                        className="text-sm font-medium text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
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

      {/* Service Details Modal */}
      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.name}
      >
        {selectedService && (
          <div className="flex flex-col gap-6 mt-4">
            <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
              {selectedService.longDesc}
            </p>

            {/* Quick Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 my-2 border-y border-neutral-200/20 dark:border-neutral-800/20">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Duration</h5>
                  <p className="text-sm font-medium text-foreground">{selectedService.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <User className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Ideal For</h5>
                  <p className="text-sm font-medium text-foreground" title={selectedService.whoItIsFor}>
                    {selectedService.whoItIsFor}
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h4 className="font-serif text-lg text-foreground tracking-wide mb-3">Key Benefits</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-500 dark:text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Action */}
            <div className="mt-4 flex gap-4">
              <a
                href={`https://wa.me/919573797979?text=${encodeURIComponent(`Hello Himabindu, I would like to book a session for ${selectedService.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="primary" className="w-full py-3" onClick={() => setSelectedService(null)}>
                  Book {selectedService.name} Session
                </Button>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
