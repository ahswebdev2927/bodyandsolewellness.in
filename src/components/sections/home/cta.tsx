"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-16 px-6 z-10 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[650px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[32px] border border-neutral-200/50 dark:border-neutral-800/40 p-8 sm:p-16 lg:p-20 overflow-hidden glass shadow-2xl"
        >
          {/* Inner alchemical glows */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-gold-400/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto gap-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-600 dark:text-gold-400">
              Align Your Energetic Path
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide text-foreground leading-tight">
              Book Your <span className="italic text-gradient-gold">Healing Journey</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans mb-6">
              Step into a sanctuary of absolute peace and spiritual rejuvenation. Reclaim your sovereignty, release old attachments, and let your vital energy flow.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4.5 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto px-8"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Book Session
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  variant="glass"
                  size="lg"
                  className="w-full sm:w-auto px-8"
                  leftIcon={<Compass className="w-4 h-4" />}
                >
                  Explore Modalities
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
