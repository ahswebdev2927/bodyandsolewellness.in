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
  ExternalLink,
  Coins,
  TrendingUp,
  BrainCircuit,
  HeartHandshake,
  CheckCircle2,
  Briefcase,
  HelpCircle,
  ChevronDown,
  Globe,
  Sun,
  ShieldCheck,
  Zap,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefitsList = [
  {
    title: "Release Negative Money Beliefs",
    desc: "Work toward letting go of deep-rooted fears, subconscious conditioning, and limiting thoughts about money.",
    icon: BrainCircuit,
    color: "from-amber-500/20 to-gold-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  {
    title: "Clear Energetic Money Blocks",
    desc: "Focus on releasing negative energy and past financial karma associated with wealth, abundance, and success.",
    icon: Zap,
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    title: "Develop an Abundance Mindset",
    desc: "Encourage positive thinking, openness, and magnetic alignment toward fresh financial opportunities and prosperity.",
    icon: TrendingUp,
    color: "from-gold-500/20 to-yellow-500/10 text-gold-600 dark:text-gold-400 border-gold-500/20",
  },
  {
    title: "Improve Your Relationship with Money",
    desc: "Build a healthier, more confident, grounded, and balanced attitude toward earning, managing, and retaining wealth.",
    icon: HeartHandshake,
    color: "from-purple-500/20 to-indigo-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20",
  },
];

const whoShouldChoose = [
  {
    title: "Experiencing Financial Stress",
    desc: "Individuals carrying chronic worries, anxiety, or emotional pressure regarding money and expenses.",
    icon: HelpCircle,
  },
  {
    title: "Stuck in Career or Financial Growth",
    desc: "Professionals and entrepreneurs facing stagnation, revenue ceilings, or repeated financial roadblocks.",
    icon: Briefcase,
  },
  {
    title: "Negative Conditioning About Wealth",
    desc: "Those struggling with beliefs like 'money is difficult to earn' or feeling guilty about wanting prosperity.",
    icon: Target,
  },
  {
    title: "Aspiring for a Wealth Mindset",
    desc: "Anyone seeking to replace scarcity fear with calm, grateful, and expansive wealth consciousness.",
    icon: Sun,
  },
  {
    title: "Holistic Spiritual Seekers",
    desc: "People looking to combine spiritual energy healing with practical goals of abundance and personal growth.",
    icon: Sparkles,
  },
];

const whyChoosePoints = [
  "Distance healing convenience: Receive 45-minute sessions in peaceful comfort right at home.",
  "Spiritual energy approach: Works on subtle karmic layers and subconscious energetic imprints.",
  "Compassionate & confidential: Non-judgmental, caring support tailored to your unique journey.",
  "Integrated holistic care: Complements mindset practices, mindfulness, and personal financial planning.",
];

export default function MoneyReikiHealingBlogPage() {
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
              "headline": "Money Reiki Healing: Release Money Blocks & Cultivate Abundance",
              "description": "Discover how Money Reiki Healing at Body & Soul Wellness helps clear financial karma, dissolve scarcity beliefs, and foster an abundance mindset through remote sessions.",
              "image": "https://bodyandsoulwellness.in/devine-imgs/money_v2.png",
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
              "datePublished": "2026-10-26",
              "dateModified": "2026-10-26",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://bodyandsoulwellness.in/blog/money-reiki-healing-guide"
              }
            })
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-amber-500/10 dark:bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />
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
              <span className="px-3.5 py-1.5 rounded-full bg-gold-500/10 dark:bg-gold-400/10 text-gold-600 dark:text-gold-300 text-xs font-semibold uppercase tracking-wider border border-gold-500/20">
                Wealth Consciousness & Abundance
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Clock className="w-3.5 h-3.5" /> 5 min read
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Calendar className="w-3.5 h-3.5" /> October 26, 2026
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight mb-6">
              Money Reiki Healing at Body & Soul Wellness: Release Blocks & Welcome Abundance
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans mb-8">
              Are you experiencing financial stress, struggling with money blocks, or feeling stuck in your career? Sometimes, negative beliefs and fears about money can affect your confidence and relationship with wealth.
            </p>

            {/* Author / Share Bar */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center font-serif text-base font-bold border border-gold-500/30">
                  BW
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Body & Soul Wellness</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Abundance & Energy Healing Sanctuary</p>
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
              src="/devine-imgs/money_v2.png"
              alt="Money Reiki Healing and Abundance Consciousness"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/20 to-transparent flex items-end p-8">
              <div className="text-white max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/20 backdrop-blur-md text-xs font-medium mb-3">
                  <Coins className="w-3.5 h-3.5 text-gold-400" /> Spiritual Energy of Money
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-light">
                  Align Your Vibration with Divine Prosperity & Financial Harmony
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Article Main Body */}
          <article className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
            {/* Introductory Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm mb-10">
              <p className="text-base sm:text-lg leading-relaxed m-0">
                At Body & Soul Wellness, we offer{" "}
                <Link
                  href="/services#money-reiki"
                  className="text-gold-600 dark:text-gold-400 font-semibold hover:underline inline-flex items-center gap-1 group"
                >
                  Money Reiki Healing
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                , a spiritual energy healing service designed to help you release limiting money beliefs, develop an abundance mindset, and build a positive, flourishing relationship with wealth.
              </p>
            </div>

            {/* Section 1: What Is Money Reiki Healing? */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                What Is Money Reiki Healing?
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Money Reiki Healing is a specialized spiritual practice that focuses specifically on the <strong>Spiritual Energy of Money</strong>. It aims to clear financial karma, lingering negative energy, and scarcity-related beliefs that may be holding you back from receiving and multiplying abundance.
              </p>
              <p className="text-base leading-relaxed">
                At Body & Soul Wellness, our Money Reiki Healing sessions focus on helping you shift gracefully from a scarcity mindset toward a more positive, empowered, and balanced approach to financial well-being.
              </p>
            </section>

            {/* Section 2: Benefits of Money Reiki Healing */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-6">
                Benefits of Money Reiki Healing
              </h2>
              <p className="text-base leading-relaxed mb-6">
                Our personalized Money Reiki Healing sessions focus on delivering meaningful energetic and mindset shifts:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                {benefitsList.map((benefit, idx) => {
                  const IconComp = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${benefit.color} border flex items-center justify-center mb-4`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 3: Who Should Choose Money Reiki Healing? */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-6">
                Who Should Choose Money Reiki Healing?
              </h2>
              <p className="text-base leading-relaxed mb-6">
                At Body & Soul Wellness, our Money Reiki Healing service is ideal for individuals who:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-6">
                {whoShouldChoose.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 flex items-start gap-4"
                    >
                      <div className="p-2.5 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 4: Why Choose Body & Soul Wellness? */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                Why Choose Body & Soul Wellness for Money Reiki Healing?
              </h2>
              <p className="text-base leading-relaxed mb-6">
                At Body & Soul Wellness, we believe that spiritual well-being and an expansive, positive mindset are fundamental pillars of holistic personal growth and financial freedom.
              </p>

              <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm space-y-3 not-prose mb-6">
                {whyChoosePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs font-semibold text-gold-700 dark:text-gold-300">
                <Clock className="w-4 h-4 text-gold-500" />
                <span>Session Duration: 45 Minutes (Remote Distance Healing)</span>
              </div>
            </section>

            {/* Section 5: Book Your Session Today CTA */}
            <section className="text-center p-10 rounded-3xl bg-neutral-900 text-white dark:bg-neutral-900 border border-neutral-800 shadow-2xl relative overflow-hidden not-prose">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold-500/20 rounded-full blur-3xl pointer-events-none" />

              <h2 className="font-serif text-2xl sm:text-4xl font-light mb-4 relative z-10">
                Book Your Money Reiki Healing Session Today!
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto mb-4 leading-relaxed relative z-10">
                Are you ready to release limiting money beliefs and welcome a positive abundance mindset? Begin your spiritual wellness journey with Body & Soul Wellness.
              </p>
              <p className="text-xs text-gold-400 uppercase tracking-widest font-semibold mb-8 relative z-10">
                Session Duration: 45 Minutes • Confidential & Compassionate Care
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 mb-8">
                <a
                  href="https://wa.me/919573797979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-neutral-950 font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Call / WhatsApp (+91 95737 97979)</span>
                </a>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="md"
                    className="border-neutral-700 text-white hover:bg-neutral-800"
                  >
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
                  <Clock className="w-3.5 h-3.5 text-gold-400" /> 45 Minutes Remote Session
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
