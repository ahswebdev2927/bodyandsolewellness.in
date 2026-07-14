"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Workflow, Sparkles, HeartPulse } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function EnergyExplained() {
  const points = [
    {
      icon: Lightbulb,
      title: "Energy Healing Explained",
      desc: "Every living being possesses a biomagnetic energy field (aura) that regulates physical and cognitive processes. Physical ailments, anxiety, and trauma are often symptoms of stagnant or depleted flow in this field. Energy healing directly clears and channels light frequency to restore fluid movement.",
    },
    {
      icon: HeartPulse,
      title: "Benefits of Reiki",
      desc: "By stimulating the parasympathetic nervous system, Reiki triggers cell recovery, alleviates chronic pain, stabilizes blood pressure, and flushes emotional residues of anxiety and grief. It offers profound clarity and a physical state of deep, restorative rest.",
    },
    {
      icon: Workflow,
      title: "How Healing Works",
      desc: "Through entrainment, a practitioner's high-frequency state encourages the client's depleted frequency to rise. The therapist identifies thermal cold-spots or static density, dissolving blockages with Usui methods and restoring clean, balanced meridians.",
    },
    {
      icon: Sparkles,
      title: "Our Philosophy",
      desc: "We believe healing is a sovereign alchemical process. We don't change you; we restore your original, high-alignment blueprint. We bridge spiritual mysticism with somatic integrity, providing you the clean energy foundation to blossom.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-16 px-6 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Wisdom & Insight"
          title="The Science of Energy Healing"
          subtitle="Understanding how vital frequencies, chakra channels, and holistic Usui alignments interface with your physical body."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {points.map((point, idx) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
              >
                <Card glowColor="violet" hoverEffect="glow" className="p-8 h-full flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="p-2.5 rounded-[12px] bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-300">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl font-serif text-foreground tracking-wide">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans mt-2">
                    {point.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
