"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Understanding Your Chakras: A Beginner's Guide",
    excerpt: "Discover the seven primary energy centers in your body, how blockages impact your health, and daily methods to align them.",
    date: "June 28, 2026",
    category: "Chakras",
  },
  {
    title: "The Quantum Science Behind Distance Reiki",
    excerpt: "How remote healing sessions utilize quantum entanglement and conscious intention to heal across physical space.",
    date: "June 15, 2026",
    category: "Quantum Physics",
  },
  {
    title: "5 Somatic Exercises for Releasing Chronic Stress",
    excerpt: "Incorporate these simple somatic practices to down-regulate your nervous system and release muscle tension.",
    date: "May 30, 2026",
    category: "Somatic Healing",
  },
];

export function BlogNewsletter() {
  // SVG gradient shapes to simulate peaceful aesthetic Instagram posts
  const instagramGradients = [
    "from-purple-500/10 via-pink-500/5 to-gold-400/10",
    "from-emerald-500/10 via-teal-500/5 to-blue-500/10",
    "from-amber-500/10 via-orange-500/5 to-rose-500/10",
    "from-indigo-500/10 via-violet-500/5 to-purple-500/10",
  ];

  return (
    <section className="relative py-24 sm:py-32 px-6 z-10 bg-neutral-50/10 dark:bg-neutral-950/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Blog Section */}
        <div>
          <SectionHeading
            badge="Insights"
            title="The Wellness Journal"
            subtitle="Explore our articles on energetic physics, self-healing techniques, shadow integration, and wellness practices."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                className="h-full"
              >
                <Card glowColor="violet" hoverEffect="glow" className="p-8 h-full flex flex-col justify-between group">
                  <div className="flex flex-col gap-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-serif text-foreground leading-snug group-hover:text-gold-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-neutral-200/20 dark:border-neutral-800/20 flex items-center justify-between">
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <button className="text-sm font-semibold text-foreground hover:text-gold-500 transition-colors flex items-center gap-1 cursor-pointer">
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Instagram Grid Section */}
        <div>
          <SectionHeading
            badge="Gallery"
            title="Sights of Serenity"
            subtitle="Follow our visual diary of sacred geometries, calming natural alignments, crystal layouts, and light codes."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {instagramGradients.map((gradient, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative aspect-square rounded-[24px] overflow-hidden border border-neutral-200/50 dark:border-neutral-800/40 glass shadow-md cursor-pointer"
              >
                {/* Simulated visual image */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${gradient} flex items-center justify-center p-6`}>
                  <Compass className="w-10 h-10 text-neutral-400/40 group-hover:rotate-45 group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <InstagramIcon className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
