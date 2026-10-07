"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  ArrowLeft,
  Sparkles,
  Share2,
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  Compass,
  Zap,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Sun,
  Flame,
  HeartHandshake,
  Heart,
  ShieldAlert,
  UserCheck,
  Globe,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";

const commonChallenges = [
  "Intense emotional highs and lows",
  "Periods of separation from your Twin Flame",
  "The distressing Runner and Chaser dynamic",
  "Emotional pain, doubt, and mental confusion",
  "Repeating negative relationship cycles",
  "Unresolved past-life karmic blockages",
];

const benefitsList = [
  {
    title: "Emotional Healing",
    desc: "Helps release deep-rooted emotional pain, fears, anxiety, and past relationship hurts.",
    icon: Heart,
  },
  {
    title: "Karmic Cleansing",
    desc: "Supports clearing past-life karmic baggage creating obstacles on your connection path.",
    icon: ShieldAlert,
  },
  {
    title: "Inner Growth",
    desc: "Encourages profound self-love, heightened self-awareness, and personal transformation.",
    icon: Sun,
  },
  {
    title: "Spiritual Alignment",
    desc: "Promotes inner peace, balance, and a stronger connection with your soul's higher purpose.",
    icon: Flame,
  },
  {
    title: "Support Toward Union",
    desc: "Creates positive energetic shifts that nurture harmony and the journey toward sacred union.",
    icon: HeartHandshake,
  },
];

export default function TwinFlameHealingBlogPage() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Schema.org BlogPosting Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Twin Flame Healing: Spiritual Support for Emotional Balance & Union",
              "description": "Discover how Twin Flame Healing helps release emotional blocks, karmic baggage, and runner-chaser dynamics to foster self-love and harmony toward union.",
              "image": "https://bodyandsoulwellness.in/devine-imgs/twin_v2.png",
              "author": {
                "@type": "Organization",
                "name": "Body & Soul Wellness",
                "url": "https://bodyandsoulwellness.in"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Body & Soul Wellness",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://bodyandsoulwellness.in/Reikifav.png"
                }
              },
              "datePublished": "2026-10-07",
              "dateModified": "2026-10-07",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://bodyandsoulwellness.in/blog/twin-flame-healing-guide"
              }
            })
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-rose-600/10 dark:bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[700px] right-10 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back Navigation */}
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

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-rose-500/10 dark:bg-rose-400/10 text-rose-600 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider border border-rose-500/20">
                Soul Connections & Union
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Clock className="w-3.5 h-3.5" /> 5 min read
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Calendar className="w-3.5 h-3.5" /> October 7, 2026
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight mb-6">
              Twin Flame Healing: Spiritual Support for Emotional Balance & Union
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans mb-8">
              Many people experience a deep spiritual and romantic connection with someone they believe is their Twin Flame—two halves of the same soul, connected across lifetimes and drawn together for mutual growth and union.
            </p>

            {/* Author / Share Bar */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center font-serif text-base font-bold border border-gold-500/30">
                  BW
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Body & Soul Wellness</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Soul Union & Energy Healing Sanctuary</p>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs font-medium transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-gold-500" />
                <span>{copied ? "Link Copied!" : "Share"}</span>
              </button>
            </div>
          </motion.header>

          {/* Hero Banner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[320px] sm:h-[450px] w-full rounded-3xl overflow-hidden mb-14 shadow-xl border border-neutral-200/60 dark:border-neutral-800"
          >
            <Image
              src="/devine-imgs/twin_v2.png"
              alt="Twin Flame Healing and Divine Union"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent flex items-end p-8">
              <div className="text-white max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/20 backdrop-blur-md text-xs font-medium mb-3">
                  <Flame className="w-3.5 h-3.5 text-gold-400" /> Sacred Soul Alignment
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-light">Harmonize Divine Masculine & Feminine Energies</h3>
              </div>
            </div>
          </motion.div>

          {/* Article Main Body */}
          <article className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
            {/* Introductory Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm mb-10">
              <p className="text-base sm:text-lg leading-relaxed m-0">
                At Body & Soul Wellness,{" "}
                <Link
                  href="/services#twin-flame"
                  className="text-gold-600 dark:text-gold-400 font-semibold hover:underline inline-flex items-center gap-1 group"
                >
                  Twin Flame Healing
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>{" "}
                is designed for individuals who are already aware of their Twin Flame connection. We do not identify or confirm Twin Flames. Our healing sessions focus on supporting emotional healing, spiritual growth, and the journey toward union.
              </p>
            </div>

            {/* Section 1: What Is Twin Flame Healing? */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                What Is Twin Flame Healing?
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Twin Flame Healing is a spiritual healing practice that helps release emotional blocks, past-life karmic baggage, negative energy, and limiting patterns that may affect the Twin Flame journey.
              </p>
              <p className="text-base leading-relaxed">
                The purpose of healing is to create inner balance, emotional clarity, and spiritual alignment within yourself, which naturally reflects outward into your soul connection.
              </p>
            </section>

            {/* Section 2: Common Challenges in a Twin Flame Journey */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-6">
                Common Challenges in a Twin Flame Journey
              </h2>
              <p className="text-base leading-relaxed mb-6">
                The intense nature of the Twin Flame mirror often surface unhealed wounds. People on a Twin Flame path frequently experience:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-6">
                {commonChallenges.map((challenge, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                    <span className="text-sm font-medium text-foreground">{challenge}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Benefits of Twin Flame Healing */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-6">
                Benefits of Twin Flame Healing
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                {benefitsList.map((benefit, idx) => {
                  const IconComp = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif text-lg font-medium text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-5 rounded-2xl bg-purple-500/5 dark:bg-purple-400/5 border border-purple-500/20 text-sm leading-relaxed">
                <strong className="text-purple-600 dark:text-purple-300 font-semibold">Note on Timelines:</strong> Healing can help create positive changes that support the Twin Flame journey and potential union. However, every journey is unique and timelines vary from person to person.
              </div>
            </section>

            {/* Section 4: How We Help */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                How We Help
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Our specialized healing sessions combine remote energy healing, spiritual guidance, guided meditation, and chakra balancing to support your emotional and spiritual well-being.
              </p>
              <p className="text-base leading-relaxed">
                We assist individuals who already know who their Twin Flame is and are seeking compassionate, experienced support on their journey toward healing and union.
              </p>
            </section>

            {/* Section 5: Why Choose Body & Soul Wellness? */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                Why Choose Body & Soul Wellness?
              </h2>
              <p className="text-base leading-relaxed mb-4">
                At Body & Soul Wellness, we offer personalized healing sessions in a safe, confidential, and supportive environment. Our goal is to help you release heavy emotional burdens, improve spiritual alignment, and move forward with greater clarity, peace, and confidence.
              </p>
            </section>

            {/* Section 6: Connect With Body & Soul Wellness CTA */}
            <section className="text-center p-10 rounded-3xl bg-neutral-900 text-white dark:bg-neutral-900 border border-neutral-800 shadow-2xl relative overflow-hidden not-prose">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold-500/20 rounded-full blur-3xl pointer-events-none" />

              <h2 className="font-serif text-2xl sm:text-4xl font-light mb-4 relative z-10">
                Begin Your Twin Flame Healing Journey
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed relative z-10">
                If you are looking for emotional healing, spiritual growth, and guidance on your Twin Flame path, Body & Soul Wellness is here to support you.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 mb-8">
                <a
                  href="https://wa.me/919573797979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-neutral-950 font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Practitioner</span>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="md" className="border-neutral-700 text-white hover:bg-neutral-800">
                    <Mail className="w-4 h-4 mr-2 text-gold-400" />
                    <span>Contact Us</span>
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 pt-6 border-t border-neutral-800 relative z-10">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-gold-400" /> bodyandsoulwellness.in
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold-400" /> +91 95737 97979
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-gold-400" /> bodyandsoulwellness3@gmail.com
                </span>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
