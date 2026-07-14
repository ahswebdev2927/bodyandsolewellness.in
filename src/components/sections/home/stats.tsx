"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
}

function StatCounter({ value, suffix = "", label }: StatItemProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 45, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      // Set to final value when visible
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-6 text-center border-r last:border-r-0 border-neutral-200/20 dark:border-neutral-800/30 col-span-1"
    >
      <span
        ref={ref}
        className="text-4xl sm:text-5xl font-serif font-light text-gold-600 dark:text-gold-400 mb-2"
      >
        0{suffix}
      </span>
      <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-sans font-medium">
        {label}
      </span>
    </motion.div>
  );
}

export function Stats() {
  const stats = [
    { value: 20, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "+", label: "Happy Clients" },
    { value: 5000, suffix: "+", label: "Healing Sessions" },
    { value: 15, suffix: "+", label: "Countries Served" },
  ];

  return (
    <section className="relative py-12 border-y border-neutral-200/50 dark:border-neutral-800/40 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
