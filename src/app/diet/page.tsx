"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Apple, Droplets, Heart, Leaf } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DietPage() {
  const principles = [
    {
      icon: Leaf,
      title: "Sattvic & Pure",
      desc: "Fresh, organic, and plant-based foods that are easy to digest, promote mental clarity, and elevate your energetic frequency."
    },
    {
      icon: Droplets,
      title: "Mindful Hydration",
      desc: "Structuring water intake with lemon, herbs, or crystals to flush physical toxins and elevate cellular conductivity."
    },
    {
      icon: Apple,
      title: "Vibrant Color Alchemy",
      desc: "Consuming a rich spectrum of natural colors, reflecting different phytonutrients and aligning with various chakra centers."
    },
    {
      icon: Heart,
      title: "Conscious Presence",
      desc: "Approaching meals with gratitude and slow chewing to maximize nutrient absorption and somatic satisfaction."
    }
  ];

  const chakraFoods = [
    {
      chakra: "Root (Muladhara)",
      color: "Red / Earthy",
      focus: "Grounding & Safety",
      foods: "Beetroot, carrots, ginger, sweet potatoes, and protein-rich seeds.",
      glowColor: "gold"
    },
    {
      chakra: "Sacral (Svadhisthana)",
      color: "Orange / Fluid",
      focus: "Creativity & Flow",
      foods: "Oranges, melons, pumpkin, carrots, almonds, and pure spring water.",
      glowColor: "violet"
    },
    {
      chakra: "Solar Plexus (Manipura)",
      color: "Yellow / Fire",
      focus: "Vitality & Willpower",
      foods: "Lemons, bananas, oats, ginger, turmeric, and organic grains.",
      glowColor: "gold"
    },
    {
      chakra: "Heart (Anahata)",
      color: "Green / Love",
      focus: "Compassion & Healing",
      foods: "Kale, spinach, broccoli, green apples, avocados, and fresh green herbs.",
      glowColor: "sage"
    },
    {
      chakra: "Throat (Vishuddha)",
      color: "Blue / Sound",
      focus: "Expression & Truth",
      foods: "Blueberries, blackberries, kelp, herbal teas, and raw honey.",
      glowColor: "violet"
    },
    {
      chakra: "Third Eye & Crown (Ajna & Sahasrara)",
      color: "Indigo & Violet",
      focus: "Intuition & Spirit",
      foods: "Purple grapes, plums, cacao, lavender tea, and periods of mindful fasting.",
      glowColor: "violet"
    }
  ];

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
            <span>High-Vibrational Nourishment</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground tracking-wide leading-tight"
          >
            Cosmic Diet & <span className="italic text-gradient-gold">Nutritional Harmony</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed"
          >
            Nourish your physical body to sustain high energetic frequencies. Explore our guide to conscious eating, cellular hydration, and aligning your meals with your chakra centers.
          </motion.p>
        </div>
      </section>

      {/* 2. Core Principles */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="The Foundation"
            title="Conscious Eating Principles"
            subtitle="Conscious eating isn't just about what you eat, but how you eat and the energetic footprint of your food."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((prp, idx) => {
              const Icon = prp.icon;
              return (
                <motion.div
                  key={prp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card hoverEffect="glow" glowColor="violet" className="p-8 h-full flex flex-col gap-4">
                    <span className="p-3 rounded-[16px] bg-purple-500/10 text-purple-600 dark:text-purple-400 self-start">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl font-serif text-foreground tracking-wide font-medium">
                      {prp.title}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                      {prp.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Chakra Food Alignment */}
      <section className="py-16 px-6 bg-neutral-50/5 dark:bg-neutral-950/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Energetic Alignment"
            title="Nourishing the Seven Chakras"
            subtitle="Every ingredient carries a unique vibrational frequency that corresponds directly to the energy centers of the body."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chakraFoods.map((chk, idx) => (
              <motion.div
                key={chk.chakra}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card hoverEffect="lift" glowColor={chk.glowColor as any} className="p-8 h-full flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-neutral-200/20 dark:border-neutral-800/30 pb-3">
                      <span className="text-sm font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase">
                        {chk.chakra}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 font-medium">
                        {chk.color}
                      </span>
                    </div>
                    <div className="mt-2">
                      <h4 className="text-lg font-serif font-semibold text-foreground">
                        Focus: {chk.focus}
                      </h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mt-2 font-sans">
                        {chk.foods}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. High-Vibrational Diet Guide / Routine */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card glowColor="gold" hoverEffect="none" className="p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col gap-8">
              <div className="text-center md:text-left">
                <span className="px-4 py-1.5 rounded-full border border-gold-400/20 bg-gold-400/5 text-gold-700 dark:text-gold-300 text-xs font-semibold tracking-widest uppercase mb-4 inline-block">
                  Daily Ritual
                </span>
                <h3 className="text-3xl font-serif text-foreground tracking-wide mt-2">
                  High-Vibrational Daily Routine
                </h3>
                <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mt-2 font-sans">
                  Incorporate these simple dietary adjustments into your day to maintain a clear channel for healing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="flex flex-col gap-3 p-6 rounded-[20px] bg-neutral-100/5 border border-neutral-200/10">
                  <span className="w-8 h-8 rounded-full bg-gold-400/10 text-gold-700 dark:text-gold-300 flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-foreground">Morning Cleansing</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
                    Begin the day with warm lemon water and a pinch of Celtic sea salt to alkaline the body and kickstart cellular hydration.
                  </p>
                </div>
                <div className="flex flex-col gap-3 p-6 rounded-[20px] bg-neutral-100/5 border border-neutral-200/10">
                  <span className="w-8 h-8 rounded-full bg-purple-400/10 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-foreground">Mid-Day Solar Feast</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
                    Enjoy your largest meal of the day when the sun (and your internal digestive fire) is at its peak. Prioritize fresh colors.
                  </p>
                </div>
                <div className="flex flex-col gap-3 p-6 rounded-[20px] bg-neutral-100/5 border border-neutral-200/10">
                  <span className="w-8 h-8 rounded-full bg-emerald-400/10 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-foreground">Evening Wind-Down</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
                    Eat a light soup or steamed greens before sunset. Drink soothing lavender or chamomile tea to support restful, restorative sleep.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 5. Call to Action */}
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
