"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="relative py-24 sm:py-16 px-6 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Premium Sacred Geometry Mandala Artwork */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 relative flex items-center justify-center"
        >
          {/* Background glowing circle */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-purple-500/10 to-gold-400/10 blur-[60px]" />

          {/* Framed Canvas Container */}
          <div className="relative w-full max-w-[450px] aspect-square rounded-[32px] border border-neutral-200/50 dark:border-neutral-800/40 glass flex items-center justify-center p-8 overflow-hidden shadow-2xl">
            {/* Pulsing light */}
            <div className="absolute w-[40%] h-[40%] rounded-full bg-gold-400/10 dark:bg-gold-500/10 blur-xl animate-pulse-slow" />

            {/* Spinning Mandala SVG */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              viewBox="0 0 200 200"
              className="w-[90%] h-[90%] text-gold-600/40 dark:text-gold-400/35"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              {/* Concentric circles */}
              <circle cx="100" cy="100" r="90" />
              <circle cx="100" cy="100" r="70" />
              <circle cx="100" cy="100" r="50" />
              <circle cx="100" cy="100" r="30" />

              {/* Geometric rays / flower of life pattern */}
              {Array.from({ length: 12 }).map((_, idx) => {
                const angle = (idx * 30 * Math.PI) / 180;
                const x2 = 100 + 90 * Math.cos(angle);
                const y2 = 100 + 90 * Math.sin(angle);
                return (
                  <g key={idx}>
                    <line x1="100" y1="100" x2={x2} y2={y2} />
                    <circle cx={100 + 50 * Math.cos(angle)} cy={100 + 50 * Math.sin(angle)} r="40" />
                  </g>
                );
              })}
            </motion.svg>

            {/* Glowing Lotus Core */}
            <div className="absolute flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full border border-gold-500/30 bg-neutral-50/80 dark:bg-neutral-900/80 flex items-center justify-center shadow-lg text-gold-600 dark:text-gold-400"
              >
                <Star className="w-5 h-5 fill-current" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Text & Context */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-gold-400/20 bg-gold-400/5 text-gold-700 dark:text-gold-300 text-xs font-semibold tracking-widest uppercase self-start">
            Our Sanctuary
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide text-foreground leading-tight">
            Harmonizing Mind, Body, <br />
            <span className="italic text-gradient-gold">and Divine Spirit</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            At Wellness & Peace, we provide a premium sanctuary for spiritual purification and energy healing. Led by certified practitioners, we combine ancient traditions like traditional Usui Reiki with modern holistic energy alignment protocols.
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            Our techniques help clear subconscious energetic blockages, alleviate physical pain, stabilize emotional states, and support deep transformations that let your highest self bloom.
          </p>

          <div className="mt-4">
            <Link href="/about">
              <Button
                variant="outline"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="group border-neutral-300 hover:border-gold-500 dark:border-neutral-800 dark:hover:border-gold-400 transition-colors"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
