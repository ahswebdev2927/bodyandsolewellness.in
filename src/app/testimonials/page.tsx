"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles, MessageSquare } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  initials: string;
  service: string;
}

const testimonialsList: Testimonial[] = [
  {
    name: "Eleanor Vance",
    role: "Creative Director",
    rating: 5,
    text: "My Reiki healing session at Wellness & Peace was unlike anything I've experienced. I walked in carrying weeks of burnout and left feeling completely renewed, grounded, and emotionally balanced.",
    initials: "EV",
    service: "Reiki Healing"
  },
  {
    name: "Marcus Thorne",
    role: "Tech Entrepreneur",
    rating: 5,
    text: "The distance healing sessions fit perfectly into my busy schedule. Even from a distance, I could feel a profound energetic warmth and alignment. It has become an essential part of my wellness routine.",
    initials: "MT",
    service: "Distance Healing"
  },
  {
    name: "Sophia Martinez",
    role: "Yoga Instructor",
    rating: 5,
    text: "The Twin Flame session helped clear blockages that had been impacting my relationships for years. The practitioners are highly compassionate, intuitive, and create a deeply trusting atmosphere.",
    initials: "SM",
    service: "Twin Flame Healing"
  },
  {
    name: "Diana Sterling",
    role: "Wellness Writer",
    rating: 5,
    text: "Violet Flame healing felt like a warm, purifying light washing away old emotional burdens. My anxiety was halved in just one session. I highly recommend their practitioners.",
    initials: "DS",
    service: "Violet Flame Healing"
  },
  {
    name: "Julian Brooks",
    role: "Executive Coach",
    rating: 5,
    text: "Cord Cutting changed my dynamic with dynamic work relations. I felt a literal lightness in my chest and a return of personal sovereignty that I hadn't felt in a decade.",
    initials: "JB",
    service: "Cord Cutting"
  },
  {
    name: "Aditi Rao",
    role: "Artist & Designer",
    rating: 5,
    text: "Money Reiki helped me dismantle blocks around financial lack and self-worth. In three weeks, I landed two major client commissions. The shifts are real and somatic.",
    initials: "AR",
    service: "Money Reiki"
  }
];

export default function TestimonialsPage() {
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
            className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full border border-purple-500/20 dark:border-purple-400/10 bg-purple-500/5 dark:bg-purple-400/5 text-purple-600 dark:text-purple-300 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground tracking-wide leading-tight"
          >
            Voices of <span className="italic text-gradient-gold">Awakening & Healing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed"
          >
            Discover the experiences of our guests who have realigned their energies, cleared historical blockages, and stepped into deep balance.
          </motion.p>
        </div>
      </section>

      {/* 2. Testimonials Grid */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsList.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card
                  glowColor={idx % 2 === 0 ? "violet" : "gold"}
                  hoverEffect="glow"
                  className="p-8 h-full flex flex-col justify-between gap-6 relative"
                >
                  <Quote className="w-8 h-8 text-purple-400/10 absolute top-6 left-6" />

                  <div className="flex flex-col gap-4 mt-2">
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-sm sm:text-base font-sans text-foreground/80 leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-neutral-200/20 dark:border-neutral-800/30 pt-4">
                    {/* Avatar */}
                    <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-gold-400 flex items-center justify-center font-serif text-xs font-bold text-white dark:text-neutral-950 shadow-md">
                      {t.initials}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{t.name}</h4>
                      <div className="flex gap-2 items-center text-[10px] text-neutral-500 dark:text-neutral-400 font-sans mt-0.5">
                        <span>{t.role}</span>
                        <span>•</span>
                        <span className="text-purple-600 dark:text-purple-400 font-medium">{t.service}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Call to Action for Stories */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card glowColor="violet" hoverEffect="none" className="p-8 sm:p-12 text-center flex flex-col items-center gap-6">
            <span className="p-3.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <MessageSquare className="w-6 h-6" />
            </span>
            <h2 className="text-3xl font-serif text-foreground tracking-wide">
              Have You Experienced a Session?
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed font-sans">
              Your feedback is sacred to us. Sharing your journey can assist others in taking the first step towards cellular energy healing and inner peace.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Submit Feedback
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Book A Session
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </PageWrapper>
  );
}
