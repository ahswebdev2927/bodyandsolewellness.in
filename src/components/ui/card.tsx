"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "style"> {
  children: React.ReactNode;
  glowColor?: "violet" | "gold" | "sage" | "none";
  hoverEffect?: "glow" | "lift" | "scale" | "none";
  glass?: boolean;
}

export function Card({
  children,
  className,
  glowColor = "violet",
  hoverEffect = "glow",
  glass = true,
  ...props
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse coordinates relative to card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth mouse movement using springs
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || hoverEffect !== "glow") return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Set coordinates within boundaries
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Return light/glow to center or disappear (coordinate -500 hides it)
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  // Radial gradient colors based on prop
  const glowColors = {
    violet: "rgba(139, 92, 246, 0.15)",
    gold: "rgba(229, 147, 42, 0.12)",
    sage: "rgba(16, 185, 129, 0.12)",
    none: "rgba(0, 0, 0, 0)",
  };

  const background = useMotionTemplate`
    radial-gradient(
      350px circle at ${smoothX}px ${smoothY}px,
      ${glowColors[glowColor]} 0%,
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={hoverEffect === "lift" ? { y: -6 } : hoverEffect === "scale" ? { scale: 1.02 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-[24px] border transition-all duration-500",
        glass ? "glass" : "bg-neutral-50 dark:bg-neutral-900",
        "border-neutral-200/50 dark:border-neutral-800/40",
        hoverEffect === "glow" ? "hover:border-neutral-300 dark:hover:border-neutral-700/60" : "",
        className
      )}
      {...props}
    >
      {/* Glow Overlay */}
      {hoverEffect === "glow" && glowColor !== "none" && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{ background }}
        />
      )}
      
      {children}
    </motion.div>
  );
}
