"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function DietPreview() {
  return (
    <section className="relative py-24 sm:py-16 px-6 bg-neutral-50/10 dark:bg-neutral-950/10 z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionHeading
          badge="Nutritional Therapy"
          title="Nourish Your Body & Soul"
          subtitle="Discover our specialized, high-vibrational diet plans tailored to your physiological and metabolic needs."
        />

        <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Main Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-full min-h-[400px] relative rounded-[32px] overflow-hidden border border-neutral-200/50 dark:border-neutral-800/40 shadow-2xl group"
          >
            <Image
              src="/devine-imgs/diet/diet_weight_loss.png"
              alt="Diet Programs"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-serif text-white tracking-wide mb-2">
                Personalized Wellness
              </h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                From weight management to hormone balance, our clinical nutritionists design science-backed plans for true vitality.
              </p>
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-full flex"
          >
            <Card glowColor="sage" hoverEffect="glow" className="flex-1 p-10 flex flex-col justify-center">
              <span className="p-3 rounded-[16px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 self-start mb-6">
                <Leaf className="w-6 h-6" />
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-foreground tracking-wide mb-4 leading-tight">
                Align Your Energy <br/> Through <span className="italic text-emerald-600 dark:text-emerald-400">Nutrition</span>
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans mb-8">
                We provide targeted dietary consultations for conditions like PMOS, Diabetes, Heart Disease, and pre/post-natal care, ensuring you operate at your highest frequency.
              </p>

              <div className="flex flex-col gap-4 mt-auto">
                <ul className="space-y-3 mb-4">
                  {[
                    "Weight Management & Sports Nutrition",
                    "Medical Nutrition Therapy",
                    "Hormonal Balance (PMOS, Thyroid)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/diet" className="self-start mt-4">
                  <Button variant="primary" size="lg" className="group">
                    Explore Diet Programs
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
