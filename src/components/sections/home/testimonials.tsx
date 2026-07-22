"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Eeshwari Reddy",
    role: "Creative Director",
    rating: 5,
    text: "My Reiki healing session at Wellness & Peace was unlike anything I've experienced. I walked in carrying weeks of burnout and left feeling completely renewed, grounded, and emotionally balanced.",
    initials: "ER",
  },
  {
    name: "Mahesh Kumar",
    role: "Tech Entrepreneur",
    rating: 5,
    text: "The distance healing sessions fit perfectly into my busy schedule. Even from a distance, I could feel a profound energetic warmth and alignment. It has become an essential part of my wellness routine.",
    initials: "MK",
  },
  {
    name: "Sowmya Rao",
    role: "Yoga Instructor",
    rating: 5,
    text: "The Twin Flame session helped clear blockages that had been impacting my relationships for years. The practitioners are highly compassionate, intuitive, and create a deeply trusting atmosphere.",
    initials: "SR",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 sm:py-16 px-6 z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <SectionHeading
          badge="Testimonials"
          title="Echoes of Transformation"
          subtitle="Read honest reviews from our guests who have experienced energy rebalancing and cellular recovery at our sanctuary."
        />

        {/* Carousel Container */}
        <div className="relative w-full mt-10 min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <Card
                glowColor="violet"
                hoverEffect="none"
                className="p-8 sm:p-12 relative flex flex-col gap-6 items-center text-center"
              >
                {/* Large quotation mark */}
                <Quote className="w-12 h-12 text-purple-400/20 absolute top-8 left-8" />

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-lg sm:text-xl font-serif text-foreground/90 italic leading-relaxed max-w-2xl">
                  "{testimonials[index].text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 mt-4">
                  {/* Initials Avatar */}
                  <span className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-gold-400 flex items-center justify-center font-serif text-sm font-bold text-white dark:text-neutral-950 shadow-md">
                    {testimonials[index].initials}
                  </span>
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-foreground">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-0.5">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons (Desktop only overlay, or styled underneath) */}
          <div className="flex gap-4 mt-8 sm:mt-0 sm:absolute sm:inset-y-0 sm:-left-20 sm:-right-20 sm:justify-between items-center z-20 pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-neutral-300 dark:border-neutral-800 glass hover:bg-neutral-100 dark:hover:bg-neutral-900/50 hover:text-gold-500 text-foreground transition-all cursor-pointer pointer-events-auto shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-neutral-300 dark:border-neutral-800 glass hover:bg-neutral-100 dark:hover:bg-neutral-900/50 hover:text-gold-500 text-foreground transition-all cursor-pointer pointer-events-auto shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots Indicators */}
        <div className="flex gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === index ? "w-6 bg-gold-500" : "bg-neutral-300 dark:bg-neutral-800"
                }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
