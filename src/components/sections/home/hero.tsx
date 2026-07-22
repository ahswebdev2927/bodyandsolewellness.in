"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  // Generate random particles for aura effect
  const particles = Array.from({ length: 15 });

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Light Rays & Cosmic background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft lighting center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] rounded-full bg-purple-500/10 dark:bg-purple-600/5 blur-[130px] z-0" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-gold-400/5 dark:bg-gold-500/5 blur-[110px] z-0" />

        {/* Aura floating particles */}
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold-200/20 dark:bg-purple-400/10"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Top welcome chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full border border-gold-400/30 dark:border-gold-500/10 bg-gold-400/5 dark:bg-gold-500/5 text-gold-700 dark:text-gold-300 text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Divine Healing Sanctuary</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide text-foreground leading-[1.1] mb-8"
        >
          A Journey into <br />
          <span className="italic text-gradient-gold">Wellness</span> & Peace
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-neutral-500 dark:text-neutral-400 text-base sm:text-lg md:text-xl leading-relaxed font-light mb-12"
        >
          Incorporate Reiki into your daily life. Healing supports you in every task of life. Heal health ailments, balance body energy, and clear deep-rooted emotions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4.5"
        >
          <a
            href="https://wa.me/919573797979?text=Hello%20Himabindu%2C%20I%20would%20like%20to%20book%20a%20healing%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Book Your Session
            </Button>
          </a>
          <Link href="/services">
            <Button
              variant="glass"
              size="lg"
              className="w-full sm:w-auto"
              leftIcon={<Compass className="w-4 h-4" />}
            >
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Hero Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500"
      >
        <span className="tracking-widest uppercase">Scroll to align</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8.5 rounded-full border border-neutral-300 dark:border-neutral-800 flex justify-center pt-1.5"
        >
          <span className="w-1 h-1.5 rounded-full bg-gold-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
