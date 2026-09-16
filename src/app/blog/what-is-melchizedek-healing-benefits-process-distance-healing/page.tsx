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
  Shield,
  HelpCircle,
  ChevronDown,
  Globe,
  Star,
  Layers,
  Hexagon
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefitsList = [
  {
    title: "Spiritual Self-Exploration",
    desc: "Provides a structured energy space for deep introspection and soul searching.",
    icon: Compass,
  },
  {
    title: "Inner Awareness & Mindfulness",
    desc: "Enhances presence and mindfulness by quieting the mind's daily noise.",
    icon: Sun,
  },
  {
    title: "Personal Reflection",
    desc: "Facilitates calm contemplation to gain insight into life purpose and direction.",
    icon: Star,
  },
  {
    title: "Energetic Balance",
    desc: "Helps harmonize subtle energy fields, promoting overall peace and equilibrium.",
    icon: Zap,
  },
  {
    title: "Exploring Sacred Geometry",
    desc: "Connects with sacred patterns like the Merkaba and cosmic grids for elevated consciousness.",
    icon: Hexagon,
  },
  {
    title: "Supporting Spiritual Journey",
    desc: "Serves as an intentional foundation for seekers on their personal path of growth.",
    icon: Layers,
  },
];

const whoIsItForList = [
  "Energy healing practitioners & seekers",
  "Meditation & mindfulness enthusiasts",
  "Spiritual development explorers",
  "Consciousness & esoteric researchers",
  "Sacred geometry & Merkaba practitioners",
  "Individuals dedicated to holistic wellness",
];

const faqList = [
  {
    q: "What is Melchizedek Healing?",
    a: "It is a spiritual energy-healing practice associated with the Order of Melchizedek, incorporating sacred geometry, the Merkaba, cosmic grids, and elevated energetic awareness.",
  },
  {
    q: "How long is a session?",
    a: "At Body & Soul Wellness, a Melchizedek Healing distance session is typically conducted over 45 minutes.",
  },
  {
    q: "Is it available remotely?",
    a: "Yes. Melchizedek Healing is offered as a remote distance-healing service, allowing you to participate comfortably from home.",
  },
  {
    q: "Is it medical treatment?",
    a: "No. Melchizedek Healing is a complementary spiritual wellness practice designed for inner awareness and should not replace professional medical care.",
  },
];

export default function MelchizedekHealingBlogPage() {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
              "headline": "What Is Melchizedek Healing? Benefits, Process & Distance Healing",
              "description": "Melchizedek Healing is a spiritual and energy-based wellness practice incorporating sacred geometry, Merkaba, and cosmic grids for inner awareness and spiritual growth.",
              "image": "https://bodyandsoulwellness.in/devine-imgs/melc_v2.png",
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
              "datePublished": "2026-09-16",
              "dateModified": "2026-09-16",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://bodyandsoulwellness.in/blog/what-is-melchizedek-healing-benefits-process-distance-healing"
              }
            })
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-purple-600/10 dark:bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
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
              <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider border border-purple-500/20">
                Ascension & Sacred Geometry
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Clock className="w-3.5 h-3.5" /> 5 min read
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Calendar className="w-3.5 h-3.5" /> September 16, 2026
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight mb-6">
              What Is Melchizedek Healing? Benefits, Process & Distance Healing
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans mb-8">
              Melchizedek Healing is a spiritual and energy-based wellness practice for people interested in inner awareness, spiritual growth, and holistic well-being.
            </p>

            {/* Author / Share Bar */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center font-serif text-base font-bold border border-gold-500/30">
                  BW
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Body & Soul Wellness</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Sacred Geometry & Energy Sanctuary</p>
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

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[320px] sm:h-[450px] w-full rounded-3xl overflow-hidden mb-14 shadow-xl border border-neutral-200/60 dark:border-neutral-800"
          >
            <Image
              src="/devine-imgs/melc_v2.png"
              alt="Melchizedek Healing Sacred Geometry"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent flex items-end p-8">
              <div className="text-white max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/20 backdrop-blur-md text-xs font-medium mb-3">
                  <Shield className="w-3.5 h-3.5 text-gold-400" /> Order of Melchizedek
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-light">Light Code Activation & Cosmic Awareness</h3>
              </div>
            </div>
          </motion.div>

          {/* Main Content Body */}
          <article className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
            {/* Introductory Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm mb-10">
              <p className="text-base sm:text-lg leading-relaxed m-0">
                At Body & Soul Wellness,{" "}
                <Link
                  href="/services#melchizedek"
                  className="text-gold-600 dark:text-gold-400 font-semibold hover:underline inline-flex items-center gap-1 group"
                >
                  Melchizedek Healing
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>{" "}
                is offered as a distance-healing service associated with the Order of Melchizedek. The practice incorporates spiritual concepts such as sacred geometry, Merkaba, cosmic grids, and energetic awareness.
              </p>
            </div>

            {/* Section 1: What Is Melchizedek Healing? */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                What Is Melchizedek Healing?
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Melchizedek Healing is a spiritual practice focused on energy work, self-exploration, and expanded awareness. It is particularly suited to experienced spiritual seekers interested in exploring deeper spiritual practices.
              </p>
            </section>

            {/* Section 2: Benefits of Melchizedek Healing */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                Benefits of Melchizedek Healing
              </h2>
              <p className="text-base leading-relaxed mb-8">
                Seekers may explore this transformative modality for several spiritual and personal growth perspectives:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                {benefitsList.map((benefit, idx) => {
                  const IconComp = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center mb-4">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-medium text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-purple-500/5 dark:bg-purple-400/5 border border-purple-500/20 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 italic">
                * Note: These are spiritual and holistic wellness perspectives rather than established medical outcomes.
              </div>
            </section>

            {/* Section 3: How Does Distance Melchizedek Healing Work? */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                How Does Distance Melchizedek Healing Work?
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Body & Soul Wellness provides Melchizedek Healing remotely. The service page lists a 45-minute session and describes the practice as using spiritual and energetic concepts including sacred geometry and the Merkaba.
              </p>
              <p className="text-base leading-relaxed">
                Clients can participate from a quiet and comfortable space at home, receiving gentle remote energetic alignment.
              </p>
            </section>

            {/* Section 4: Who Is It For? */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-6">
                Who Is It For?
              </h2>
              <p className="text-base leading-relaxed mb-6">
                Melchizedek Healing may be suitable for individuals who are already interested in or practicing:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                {whoIsItForList.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Melchizedek Healing at Body & Soul Wellness */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                Melchizedek Healing at Body & Soul Wellness
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Body & Soul Wellness offers Melchizedek Healing as part of its{" "}
                <Link
                  href="/services"
                  className="text-gold-600 dark:text-gold-400 font-semibold hover:underline inline-flex items-center gap-1 group"
                >
                  distance-healing services
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                , alongside other energy and spiritual wellness practices.
              </p>
              <p className="text-base leading-relaxed">
                If you are interested in exploring Melchizedek Healing, you can contact Body & Soul Wellness to understand the session details and decide whether it matches your personal spiritual wellness goals.
              </p>
            </section>

            {/* Section 6: Frequently Asked Questions */}
            <section className="mb-14 not-prose">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="w-6 h-6 text-gold-500" />
                <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal m-0">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 overflow-hidden shadow-sm transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <span className="font-serif text-base sm:text-lg font-medium text-foreground">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gold-500 transition-transform duration-300 shrink-0 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/50 mt-1 pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 7: Connect With Body & Soul Wellness CTA */}
            <section className="text-center p-10 rounded-3xl bg-neutral-900 text-white dark:bg-neutral-900 border border-neutral-800 shadow-2xl relative overflow-hidden not-prose">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold-500/20 rounded-full blur-3xl pointer-events-none" />

              <h2 className="font-serif text-2xl sm:text-4xl font-light mb-4 relative z-10">
                Connect With Body & Soul Wellness
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed relative z-10">
                Take the first step toward greater relaxation, inner peace, and holistic wellness with a professional Melchizedek Healing session.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 mb-8">
                <a
                  href="https://wa.me/919573797979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-neutral-950 font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp (+91 95737 97979)</span>
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
