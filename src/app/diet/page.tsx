"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Heart, 
  Droplets, 
  Activity, 
  Flame, 
  Scale, 
  Zap, 
  TrendingUp, 
  TrendingDown, 
  Baby 
} from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DietProgram {
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  glowColor: "violet" | "gold" | "sage";
}

const dietPrograms: DietProgram[] = [
  {
    title: "Weight Loss",
    desc: "Tailored to boost your metabolism, optimize calories, and align portion sizing for sustainable fat loss while maintaining high energy.",
    icon: TrendingDown,
    glowColor: "violet"
  },
  {
    title: "Weight Gain",
    desc: "Focuses on clean, nutrient-dense whole foods, muscle-building proteins, and healthy fats to support healthy weight gain and vitality.",
    icon: TrendingUp,
    glowColor: "gold"
  },
  {
    title: "Cardiovascular Diseases",
    desc: "Heart-healthy nutrition plans rich in omega-3 fatty acids, leafy greens, and antioxidants to support circulation, blood pressure, and cardiovascular strength.",
    icon: Heart,
    glowColor: "sage"
  },
  {
    title: "Hypothyroidism",
    desc: "Designed to support thyroid health, featuring selenium, iodine-rich foods, and clean minerals to optimize hormone synthesis and endocrine wellness.",
    icon: Zap,
    glowColor: "violet"
  },
  {
    title: "Pre-natal",
    desc: "Nourishing, nutrient-dense meal plans packed with essential vitamins like folic acid and iron to support a healthy pregnancy and baby development.",
    icon: Baby,
    glowColor: "gold"
  },
  {
    title: "Post-natal",
    desc: "Supports quick cellular recovery, maternal tissue repair, and hormonal stabilization for new mothers during the postpartum phase.",
    icon: Activity,
    glowColor: "sage"
  },
  {
    title: "Lactation",
    desc: "Hydrating, galactagogue-rich diets containing natural nutrients to support, increase, and enrich healthy milk production for nursing mothers.",
    icon: Droplets,
    glowColor: "violet"
  },
  {
    title: "Sports Nutrition",
    desc: "Engineered for athletes, focusing on clean energy loading, optimal protein synthesis, hydration, and cellular recovery to maximize physical stamina.",
    icon: Flame,
    glowColor: "gold"
  },
  {
    title: "Diabetes",
    desc: "Glycemic-balanced meal schedules featuring complex carbohydrates and high fiber to manage blood glucose levels and improve insulin sensitivity.",
    icon: Scale,
    glowColor: "sage"
  },
  {
    title: "PMOS",
    desc: "Endocrine-supportive diets focusing on blood sugar stabilization, reducing internal inflammation, and balancing reproductive hormones.",
    icon: Sparkles,
    glowColor: "violet"
  }
];

export default function DietPage() {
  return (
    <PageWrapper>
      {/* 1. Hero Section */}
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
            <span>Nutritional Therapy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground tracking-wide leading-tight"
          >
            Cosmic Diet & <span className="italic text-gradient-gold">Nutritional Programs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed"
          >
            Nourish your physical body with specialized, high-vibrational diet plans tailored to your specific clinical, maternal, athletic, and metabolic needs.
          </motion.p>
        </div>
      </section>

      {/* 2. Diet Programs Section */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Our Programs"
            title="Targeted Dietary Consultations"
            subtitle="We design customized, nutrient-dense nutrition plans to target your specific physiological conditions, wellness goals, and energetic harmony."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dietPrograms.map((program, idx) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                >
                  <Card 
                    hoverEffect="lift" 
                    glowColor={program.glowColor} 
                    className="p-8 h-full flex flex-col justify-between gap-6"
                  >
                    <div className="flex flex-col gap-4">
                      <span className="p-3.5 rounded-[20px] bg-purple-500/10 text-purple-600 dark:text-purple-300 self-start">
                        <Icon className="w-6 h-6" />
                      </span>
                      <h3 className="text-xl font-serif font-semibold text-foreground tracking-wide mt-2">
                        {program.title}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans mt-1">
                        {program.desc}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Call to Action */}
      <section className="py-16 px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground tracking-wide">
            Ready to Align Your Energy and Nutrition?
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
            Our master practitioners offer energy scans and personalized wellness consultations to structure your ideal diet.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Book Nutritional Scan
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
