"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Compass, Award, Star, ShieldCheck, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PARTICLES = [
  { width: 8, height: 8, left: "12%", top: "25%", duration: 18, delay: 0 },
  { width: 6, height: 6, left: "85%", top: "15%", duration: 22, delay: 1 },
  { width: 10, height: 10, left: "45%", top: "70%", duration: 16, delay: 2 },
  { width: 5, height: 5, left: "70%", top: "40%", duration: 25, delay: 0.5 },
  { width: 7, height: 7, left: "25%", top: "80%", duration: 20, delay: 3 },
  { width: 9, height: 9, left: "60%", top: "20%", duration: 19, delay: 1.5 },
  { width: 4, height: 4, left: "15%", top: "65%", duration: 24, delay: 2.5 },
  { width: 8, height: 8, left: "90%", top: "75%", duration: 17, delay: 0.8 },
  { width: 6, height: 6, left: "35%", top: "30%", duration: 21, delay: 1.2 },
  { width: 11, height: 11, left: "78%", top: "85%", duration: 15, delay: 3.5 },
  { width: 5, height: 5, left: "50%", top: "10%", duration: 23, delay: 0.2 },
  { width: 7, height: 7, left: "5%", top: "45%", duration: 20, delay: 2.1 },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Light Rays & Cosmic background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft lighting glows */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[650px] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[130px] z-0" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/3 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-gold-400/15 dark:bg-gold-500/10 blur-[120px] z-0" />

        {/* Aura floating particles */}
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold-400/25 dark:bg-purple-400/20"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.15, 0.75, 0.15],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Text & Hero Info */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Top welcome chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 dark:border-gold-500/20 bg-gold-400/10 dark:bg-gold-500/10 text-gold-700 dark:text-gold-300 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Divine Healing Sanctuary</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide text-foreground leading-[1.1] mb-6"
          >
            A Journey into <br />
            <span className="italic text-gradient-gold font-normal">Wellness & Peace</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed font-light mb-8"
          >
            Incorporate Reiki into your daily life. Sacred energy healing supports you in every aspect of life — clearing health ailments, balancing chakras, and transforming deep-rooted emotional stress under grandmaster guidance.
          </motion.p>

          {/* Key tags */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-medium border border-purple-500/20">
              <Award className="w-3.5 h-3.5 text-purple-500" /> 20+ Yrs Reiki Mastery
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-medium border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Distance Healing
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
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
                className="w-full sm:w-auto shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Book Your Session
              </Button>
            </a>
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                variant="glass"
                size="lg"
                className="w-full sm:w-auto"
                leftIcon={<Compass className="w-4 h-4 text-gold-500" />}
              >
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust rating badge below CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400"
          >
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="font-medium text-foreground">5.0 Star Rated</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>5,000+ Souls Aligned Worldwide</span>
          </motion.div>
        </div>

        {/* Right Column: Healing Master Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0"
        >
          {/* Animated decorative spinning aura ring */}
          <div className="absolute w-[110%] h-[110%] rounded-full border border-gold-400/20 dark:border-gold-500/10 animate-[spin_30s_linear_infinite] pointer-events-none" />
          <div className="absolute w-[125%] h-[125%] rounded-full border border-purple-500/10 dark:border-purple-500/10 animate-[spin_45s_linear_infinite_reverse] pointer-events-none" />

          {/* Soft back glowing aura blobs */}
          <div className="absolute w-72 h-72 rounded-full bg-gold-400/20 dark:bg-gold-500/15 blur-[70px] pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 w-60 h-60 rounded-full bg-purple-500/20 dark:bg-purple-600/15 blur-[60px] pointer-events-none" />

          {/* Main Master Photo Container */}
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[36px] p-3 border border-white/40 dark:border-white/10 glass shadow-2xl group">
            <div className="relative w-full h-full rounded-[28px] overflow-hidden shadow-inner">
              <Image
                src="/devine-imgs/profile-pic.jpeg"
                alt="Reiki Grand Master Himabindu"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 420px"
                priority
              />

              {/* Gradient lighting overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* FLOATING TAG: Top 20+ Yrs Energy Practice Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -top-4 -left-4 sm:-left-6 glass border border-amber-400/30 dark:border-amber-400/20 bg-white/85 dark:bg-neutral-900/85 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
            >
              <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-500 to-gold-400 text-white shadow-md">
                <Award className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                </span>
                <span className="text-xs font-bold text-foreground">
                  20+ Yrs Energy Practice
                </span>
              </div>
            </motion.div>

            {/* FLOATING CARD 3: Master Profile Overlay Card at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 left-4 right-4 glass border border-white/30 dark:border-white/10 bg-white/90 dark:bg-neutral-900/90 p-4 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center text-gold-600 dark:text-gold-400 border border-gold-400/30 shrink-0">
                  <Heart className="w-5 h-5 fill-gold-400/30" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-foreground leading-snug">
                    Master Himabindu
                  </h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans">
                    Reiki Grand Master Facilitator
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/919573797979?text=Hello%20Himabindu%2C%20I%20would%20like%20to%20book%20a%20healing%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-600 dark:text-gold-400 hover:underline">
                  Connect <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Hero Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500 pointer-events-none"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll to align</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border border-neutral-300 dark:border-neutral-800 flex justify-center pt-1"
        >
          <span className="w-1 h-1.5 rounded-full bg-gold-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

