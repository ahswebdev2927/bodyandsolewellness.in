"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarRange, Speech, HeartPulse, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function Timeline() {
  const steps = [
    {
      num: "01",
      icon: CalendarRange,
      title: "Book Session",
      desc: "Schedule a session online or by phone. Select the healing modality that matches your requirements, or book an open evaluation.",
    },
    {
      num: "02",
      icon: Speech,
      title: "Consultation",
      desc: "We discuss your current mental, emotional, and physical states, answering questions and configuring a personalized path for your needs.",
    },
    {
      num: "03",
      icon: HeartPulse,
      title: "Energy Healing",
      desc: "Relax completely at home. The session is conducted via distance healing using your photograph as the energetic anchor, dissolving stress and clearing deep-seated blockages.",
    },
    {
      num: "04",
      icon: UserCheck,
      title: "Transformation",
      desc: "Integrate the healing codes over the following days, experiencing lighter vibrations, emotional clarity, and spiritual reawakening.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-16 px-6 bg-neutral-50/10 dark:bg-neutral-950/10 z-10 overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-400/5 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="The Path"
          title="Your Healing Journey"
          subtitle="A simple, structured progression designed to guide you from initial reservation all the way to deep inner transformation."
        />

        {/* Timeline Line Container */}
        <div className="relative mt-20">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-300/50 dark:bg-neutral-800/40 -translate-x-1/2 hidden sm:block" />

          {/* Steps */}
          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start md:items-center ${isEven ? "md:flex-row-reverse" : ""
                    } relative`}
                >
                  {/* Timeline Dot/Icon (Desktop center, mobile left) */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-x-[15px] md:-translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="w-8.5 h-8.5 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400 shadow-md"
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Card Container (Takes up half width on desktop) */}
                  <div className="w-full md:w-[45%] pl-10 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      <Card
                        glowColor="gold"
                        hoverEffect="glow"
                        className="p-8 relative"
                      >
                        {/* Corner step number */}
                        <span className="absolute top-6 right-6 text-2xl font-serif text-neutral-300 dark:text-neutral-800 font-light select-none">
                          {step.num}
                        </span>

                        <h3 className="text-xl sm:text-2xl font-serif text-foreground tracking-wide mb-3">
                          {step.title}
                        </h3>

                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                          {step.desc}
                        </p>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Empty space filler for desktop alignment */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
