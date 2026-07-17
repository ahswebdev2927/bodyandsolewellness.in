"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="relative py-24 sm:py-16 px-6 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Premium Sanctuary Image */}
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
          <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-square rounded-[32px] border border-neutral-200/50 dark:border-neutral-800/40 glass p-3 overflow-hidden shadow-2xl group">
            <div className="relative w-full h-full rounded-[24px] overflow-hidden">
              <Image
                src="/16.jpg.jpeg"
                alt="Our Healing Sanctuary"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-w-768px) 100vw, 500px"
                priority
              />
              {/* Subtle elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
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
