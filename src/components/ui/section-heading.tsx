"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left" | "right";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignmentStyles = {
    center: "text-center mx-auto items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("flex flex-col mb-16 max-w-3xl", alignmentStyles[align], className)}
    >
      {badge && (
        <span className="px-4 py-1.5 rounded-full border border-purple-500/20 dark:border-purple-400/10 bg-purple-500/5 dark:bg-purple-400/5 text-purple-600 dark:text-purple-300 text-xs font-semibold tracking-widest uppercase mb-4">
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide text-foreground leading-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
