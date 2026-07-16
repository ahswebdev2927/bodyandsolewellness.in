"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Leaf, Compass, Globe, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyChooseUs() {
  const features = [
    {
      icon: HeartHandshake,
      title: "Personalized Healing",
      description: "Every session is uniquely tailored to address your specific physical, emotional, and energetic blueprint."
    },
    {
      icon: ShieldCheck,
      title: "Certified Practitioner",
      description: "Our sessions are led by highly trained, certified Usui Reiki Masters with years of healing clinical experience."
    },
    {
      icon: Leaf,
      title: "Holistic Approach",
      description: "We focus on the root energetic causes of imbalances, treating the whole self: mind, body, heart, and spirit."
    },
    {
      icon: Compass,
      title: "Energy Alignment",
      description: "Reestablish clean, fluid meridian streams and open up blocked chakra centers for optimal vitality."
    },
    {
      icon: Globe,
      title: "Distance Healing",
      description: "Experience the deep transmutative qualities of high-frequency distance healing from anywhere globally."
    },
    {
      icon: Sparkles,
      title: "Spiritual Guidance",
      description: "Receive deep intuitive insights and spiritual counseling to support you along your self-expansion path."
    }
  ];

  return (
    <section className="relative py-24 sm:py-16 px-6 z-10 overflow-hidden">
      {/* Soft background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] rounded-full bg-gold-400/5 dark:bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Why Choose Us"
          title="Elevating Your Energetic Frequency"
          subtitle="We bring a premium, high-integrity approach to energy healing. Our philosophy bridges ancient metaphysics and somatic recovery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
              >
                <Card
                  glowColor="violet"
                  hoverEffect="glow"
                  className="p-8 flex flex-col gap-5 h-full group"
                >
                  <div className="w-12 h-12 rounded-[16px] bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-serif text-foreground tracking-wide">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                    {feat.description}
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
