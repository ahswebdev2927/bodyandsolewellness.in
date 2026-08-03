"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { 
  Clock, Calendar, ArrowLeft, Sparkles, User, Tag, Share2, Bookmark, 
  CheckCircle2, ExternalLink, HelpCircle, Phone, Mail, MessageCircle, Heart, ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticleDetailPage() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-purple-600/10 dark:bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[600px] right-10 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-gold-600 dark:hover:text-gold-400 uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>
          </motion.div>

          {/* Article Header / Title */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider border border-purple-500/20">
                Reiki & Energy Healing
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Clock className="w-3.5 h-3.5" /> 5 min read
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Calendar className="w-3.5 h-3.5" /> August 3, 2026
              </span>
            </div>

            {/* Document Header Title & Highlight Bar */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight mb-6">
              <Link href="/services#reiki" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                Reiki Distance Healing
              </Link>
              <span className="text-neutral-400 font-sans mx-2">|</span>
              <Link href="/services#reiki" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                Reiki Session
              </Link>
              <span className="text-neutral-400 font-sans mx-2">|</span>
              <span className="relative group inline-block">
                <a
                  href="#natural-recovery"
                  className="underline underline-offset-4 decoration-amber-500/60 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                  title="Placeholder: Page for Natural Recovery does not currently exist"
                >
                  Natural Recovery
                </a>
                <span className="inline-block ml-1 text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 font-sans font-normal" title="Placeholder Link Note">
                  (Placeholder)
                </span>
              </span>
              <span className="text-neutral-400 font-sans mx-2">|</span>
              <span className="relative group inline-block">
                <a
                  href="#emotional-pressure"
                  className="underline underline-offset-4 decoration-amber-500/60 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                  title="Placeholder: Page for Emotional Pressure does not currently exist"
                >
                  Emotional Pressure
                </a>
                <span className="inline-block ml-1 text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 font-sans font-normal" title="Placeholder Link Note">
                  (Placeholder)
                </span>
              </span>
            </h1>

            <h2 className="font-serif text-xl sm:text-2xl italic font-normal text-gold-600 dark:text-gold-400 mb-8 leading-relaxed">
              Experience Relaxation and Energy Balance from Anywhere
            </h2>

            {/* Author / Social Bar */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center font-serif text-base font-bold border border-gold-500/30">
                  BW
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Body & Soul Wellness</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Certified Energy & Reiki Sanctuary</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs font-medium transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-gold-500" />
                  <span>{copied ? "Link Copied!" : "Share"}</span>
                </button>
              </div>
            </div>
          </motion.header>

          {/* Hero Article Banner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-64 sm:h-96 rounded-3xl overflow-hidden mb-12 shadow-xl border border-neutral-200/60 dark:border-neutral-800"
          >
            <Image
              src="/devine-imgs/img5.jpg"
              alt="Reiki Distance Healing Session"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs sm:text-sm font-light italic">
              "Energy flows where intention goes — Distance Reiki restores your natural frequency wherever you are."
            </div>
          </motion.div>

          {/* Internal Link Guide Box */}
          <div className="mb-10 p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
            <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold block mb-0.5">Interactive Article Navigation:</span>
              Bold terms throughout this article are clickable. Terms with <span className="text-purple-600 dark:text-purple-300 font-semibold">purple links</span> navigate to active pages on our site. Terms with <span className="text-amber-600 dark:text-amber-400 font-semibold underline">amber tags</span> are placeholder links for topics without dedicated pages yet.
            </div>
          </div>

          {/* Article Body Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans"
          >
            {/* Introduction */}
            <p className="text-base sm:text-lg leading-relaxed">
              In today’s fast-paced world, stress,{" "}
              <span className="relative inline-block group">
                <a
                  href="#emotional-pressure"
                  className="font-bold text-amber-700 dark:text-amber-300 hover:text-gold-500 underline decoration-amber-500/50"
                  title="Placeholder Link: Dedicated page for Emotional Pressure does not exist yet"
                >
                  emotional pressure
                </a>
                <span className="inline-block ml-1 text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1 py-0.2 rounded border border-amber-500/20 font-normal">
                  (Note: Placeholder)
                </span>
              </span>
              , and mental fatigue can affect overall well-being.{" "}
              <Link
                href="/services#reiki"
                className="font-bold text-purple-600 dark:text-purple-400 hover:text-gold-500 underline decoration-purple-400/50 inline-flex items-center gap-0.5"
              >
                Reiki Distance Healing
                <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-70" />
              </Link>{" "}
              offers a gentle and convenient way to experience relaxation and energetic balance without being physically present with a practitioner.
            </p>

            {/* Section 1: What Is Reiki Distance Healing */}
            <div className="pt-6 border-t border-neutral-200/60 dark:border-neutral-800">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground mb-4">
                What Is Reiki Distance Healing?
              </h3>
              <p className="mb-4">
                Traditional Usui Reiki is a Japanese energetic practice where the practitioner channels life force energy (Qi/Ki) into the client's energy field. It helps break up energetic stagnation, relieves stress, and supports the body's natural self-healing capabilities.
              </p>
              <p>
                Distance Reiki follows the same principles as an in-person{" "}
                <Link
                  href="/services#reiki"
                  className="font-bold text-purple-600 dark:text-purple-400 hover:text-gold-500 underline decoration-purple-400/50 inline-flex items-center gap-0.5"
                >
                  Reiki session
                  <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-70" />
                </Link>
                , allowing energy to be shared remotely while you relax in the comfort of your own space.
              </p>
            </div>

            {/* Section 2: Reiki Session Duration */}
            <div className="pt-6 border-t border-neutral-200/60 dark:border-neutral-800">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground mb-4">
                Reiki Session Duration
              </h3>

              {/* 45 Minutes Highlight Badge */}
              <div className="my-6 p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-gold-500/10 to-purple-900/10 dark:from-purple-950/40 dark:to-neutral-900 border border-gold-500/30 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center font-serif text-2xl font-bold border border-gold-500/40 shrink-0">
                  45m
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-semibold text-foreground">
                    45 Minutes
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    Standard duration for a comprehensive remote energy recalibration & chakra balancing session.
                  </p>
                </div>
              </div>

              <p>
                Each{" "}
                <Link
                  href="/services#reiki"
                  className="font-bold text-purple-600 dark:text-purple-400 hover:text-gold-500 underline decoration-purple-400/50 inline-flex items-center gap-0.5"
                >
                  Reiki session
                  <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-70" />
                </Link>{" "}
                is designed to provide a calming and restorative experience, helping you feel more balanced, refreshed, and peaceful.
              </p>
            </div>

            {/* Section 3: Who Can Benefit */}
            <div className="pt-6 border-t border-neutral-200/60 dark:border-neutral-800">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground mb-6">
                Who Can Benefit?
              </h3>
              <p className="mb-4">
                <Link
                  href="/services#reiki"
                  className="font-bold text-purple-600 dark:text-purple-400 hover:text-gold-500 underline decoration-purple-400/50 inline-flex items-center gap-0.5"
                >
                  Reiki Distance Healing
                  <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-70" />
                </Link>{" "}
                is ideal for:
              </p>

              <ul className="space-y-3 pl-0 list-none my-6">
                <li className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                  <span>Anyone seeking stress relief</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                  <span>
                    Individuals looking for{" "}
                    <span className="relative inline-block group">
                      <a
                        href="#natural-recovery"
                        className="font-bold text-amber-700 dark:text-amber-300 hover:text-gold-500 underline decoration-amber-500/50"
                        title="Placeholder Link: Dedicated page for Natural Recovery does not exist yet"
                      >
                        Natural Recovery
                      </a>
                      <span className="inline-block ml-1 text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1 py-0.2 rounded border border-amber-500/20 font-normal">
                        (Note: Placeholder)
                      </span>
                    </span>{" "}
                    support
                  </span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                  <span>People wanting greater mental clarity</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                  <span>Those seeking a deep sense of peaceful grounding</span>
                </li>
              </ul>
            </div>

            {/* Section 4: Key Benefits */}
            <div className="pt-6 border-t border-neutral-200/60 dark:border-neutral-800">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground mb-6">
                Key Benefits of Reiki Distance Healing
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                {/* Benefit 1 */}
                <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
                  <h4 className="font-serif text-xl font-semibold text-gold-600 dark:text-gold-400 mb-2">
                    Dissolves Stress and Mental Fatigue
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Reiki promotes deep relaxation, helping release stress, mental exhaustion, and accumulated tension from daily life.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
                  <h4 className="font-serif text-xl font-semibold text-gold-600 dark:text-gold-400 mb-2">
                    Supports{" "}
                    <span className="relative inline-block group">
                      <a
                        href="#natural-recovery"
                        className="font-bold text-amber-700 dark:text-amber-300 hover:text-gold-500 underline decoration-amber-500/50"
                        title="Placeholder Link: Dedicated page for Natural Recovery does not exist yet"
                      >
                        Natural Recovery
                      </a>
                      <span className="inline-block ml-1 text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1 py-0.2 rounded border border-amber-500/20 font-normal">
                        (Note: Placeholder)
                      </span>
                    </span>
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    By encouraging the body's natural healing processes, Reiki may support{" "}
                    <span className="font-bold text-amber-700 dark:text-amber-300">Natural Recovery</span> and overall well-being.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
                  <h4 className="font-serif text-xl font-semibold text-gold-600 dark:text-gold-400 mb-2">
                    Restores Emotional Balance
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Reiki helps clear stagnant emotions such as grief, worry,{" "}
                    <span className="relative inline-block group">
                      <a
                        href="#emotional-pressure"
                        className="font-bold text-amber-700 dark:text-amber-300 hover:text-gold-500 underline decoration-amber-500/50"
                        title="Placeholder Link: Dedicated page for Emotional Pressure does not exist yet"
                      >
                        emotional pressure
                      </a>
                      <span className="inline-block ml-1 text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1 py-0.2 rounded border border-amber-500/20 font-normal">
                        (Note: Placeholder)
                      </span>
                    </span>
                    , and emotional heaviness, promoting a calmer state of mind.
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
                  <h4 className="font-serif text-xl font-semibold text-gold-600 dark:text-gold-400 mb-2">
                    Improves Sleep and Wellness
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Many people experience better sleep quality and a stronger sense of relaxation, which can contribute to overall wellness and immune support.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Experience Calm Wherever You Are */}
            <div className="pt-6 border-t border-neutral-200/60 dark:border-neutral-800">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground mb-4">
                Experience Calm Wherever You Are
              </h3>
              <p>
                One of the greatest advantages of{" "}
                <Link
                  href="/services#reiki"
                  className="font-bold text-purple-600 dark:text-purple-400 hover:text-gold-500 underline decoration-purple-400/50 inline-flex items-center gap-0.5"
                >
                  Reiki Distance Healing
                  <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-70" />
                </Link>{" "}
                is that you can receive a{" "}
                <Link
                  href="/services#reiki"
                  className="font-bold text-purple-600 dark:text-purple-400 hover:text-gold-500 underline decoration-purple-400/50 inline-flex items-center gap-0.5"
                >
                  Reiki session
                  <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-70" />
                </Link>{" "}
                from wherever you feel most comfortable. Simply relax in a quiet space while the practitioner channels Reiki energy to support your physical, emotional, and energetic well-being.
              </p>
            </div>

            {/* Section 6: Conclusion */}
            <div className="pt-6 border-t border-neutral-200/60 dark:border-neutral-800">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground mb-4">
                Conclusion
              </h3>
              <p>
                <Link
                  href="/services#reiki"
                  className="font-bold text-purple-600 dark:text-purple-400 hover:text-gold-500 underline decoration-purple-400/50 inline-flex items-center gap-0.5"
                >
                  Reiki Distance Healing
                  <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-70" />
                </Link>{" "}
                is a gentle wellness practice that encourages relaxation, emotional balance, and inner peace. Whether you're seeking stress relief,{" "}
                <span className="relative inline-block group">
                  <a
                    href="#natural-recovery"
                    className="font-bold text-amber-700 dark:text-amber-300 hover:text-gold-500 underline decoration-amber-500/50"
                    title="Placeholder Link: Dedicated page for Natural Recovery does not exist yet"
                  >
                    Natural Recovery
                  </a>
                  <span className="inline-block ml-1 text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1 py-0.2 rounded border border-amber-500/20 font-normal">
                    (Note: Placeholder)
                  </span>
                </span>
                , improved mental clarity, or relief from{" "}
                <span className="relative inline-block group">
                  <a
                    href="#emotional-pressure"
                    className="font-bold text-amber-700 dark:text-amber-300 hover:text-gold-500 underline decoration-amber-500/50"
                    title="Placeholder Link: Dedicated page for Emotional Pressure does not exist yet"
                  >
                    emotional pressure
                  </a>
                  <span className="inline-block ml-1 text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1 py-0.2 rounded border border-amber-500/20 font-normal">
                    (Note: Placeholder)
                  </span>
                </span>
                , a 45-minute{" "}
                <Link
                  href="/services#reiki"
                  className="font-bold text-purple-600 dark:text-purple-400 hover:text-gold-500 underline decoration-purple-400/50 inline-flex items-center gap-0.5"
                >
                  Reiki session
                  <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-70" />
                </Link>{" "}
                can help you reconnect with a calmer, more balanced state.
              </p>
            </div>

            {/* Section 7: Contact Us */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-b from-purple-900/10 via-neutral-900/50 to-neutral-950 border border-purple-500/20 dark:border-purple-500/30">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Link href="/contact" className="hover:text-gold-500 transition-colors">
                  Contact Us
                </Link>
                <ExternalLink className="w-5 h-5 text-gold-500 inline" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-4 h-4 text-gold-500 shrink-0" />
                  <span><strong>Website:</strong> <a href="https://bodyandsoulwellness.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">bodyandsoulwellness.in</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                  <span><strong>Phone:</strong> <a href="tel:+919573797979" className="hover:text-gold-500">+91 95737 97979</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-gold-500 shrink-0" />
                  <span><strong>WhatsApp:</strong> <a href="https://wa.me/919573797979" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500">+91 95737 97979</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                  <span><strong>Email:</strong> <a href="mailto:bodyandsoulwellness3@gmail.com" className="hover:text-gold-500">bodyandsoulwellness3@gmail.com</a></span>
                </div>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                Take the first step toward greater relaxation, inner peace, and holistic wellness with a professional{" "}
                <Link
                  href="/services#reiki"
                  className="font-bold text-purple-600 dark:text-purple-400 hover:text-gold-500 underline"
                >
                  Reiki Distance Healing
                </Link>{" "}
                <Link
                  href="/services#reiki"
                  className="font-bold text-purple-600 dark:text-purple-400 hover:text-gold-500 underline"
                >
                  Reiki session
                </Link>{" "}
                from Body &amp; Soul Wellness.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919573797979?text=Hello%20Himabindu,%20I%20would%20like%20to%20book%20a%20Reiki%20Distance%20Healing%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Book 45-Min Session via WhatsApp</span>
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-gold-500/40 hover:bg-gold-500/10">
                    Contact Us Page
                  </Button>
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
