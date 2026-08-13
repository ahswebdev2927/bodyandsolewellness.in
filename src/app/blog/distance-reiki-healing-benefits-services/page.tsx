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
  Globe,
  ShieldCheck,
  Heart,
  Moon,
  Compass,
  Zap,
  Briefcase,
  Activity,
  HeartHandshake,
  PawPrint,
  UserCheck,
  Flame,
  ShieldAlert,
  Wind,
  Shield,
  Sunrise,
  Scroll,
  Users,
  Coins,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpecializedService {
  name: string;
  focus: string;
  link: string;
  icon: any;
  badge?: string;
}

const specializedServices: SpecializedService[] = [
  {
    name: "Reiki Distance Healing",
    focus: "Restores overall balance, peace, and deep physical and mental relaxation.",
    link: "/services#reiki",
    icon: Heart,
    badge: "Foundation",
  },
  {
    name: "Karmic Reiki",
    focus: "A comprehensive 6-week program with daily 45-minute sessions to clear past karmic patterns.",
    link: "/services#karmic",
    icon: ShieldAlert,
    badge: "6-Week Journey",
  },
  {
    name: "Twin Flame Healing",
    focus: "Harmonizes and balances divine masculine and feminine energies within relationships and oneself.",
    link: "/services#twin-flame",
    icon: Flame,
    badge: "Soul Union",
  },
  {
    name: "Violet Flame Healing",
    focus: "Removes deep-seated energetic blockages and restores mental clarity.",
    link: "/services#violet-flame",
    icon: Sparkles,
    badge: "Transmutation",
  },
  {
    name: "Cord Cutting",
    focus: "Releases unhealthy energetic attachments to regain your personal vitality.",
    link: "/services#cord-cutting",
    icon: Zap,
    badge: "Sovereignty",
  },
  {
    name: "Karuna Reiki",
    focus: "Compassion-focused healing targeted at gently addressing deep emotional trauma and wounds.",
    link: "/services#karuna",
    icon: Wind,
    badge: "Compassion",
  },
  {
    name: "Melchizedek Healing",
    focus: "Activates light codes to elevate consciousness and spiritual awareness.",
    link: "/services#melchizedek",
    icon: Shield,
    badge: "Ascension",
  },
  {
    name: "Humkara with Haleem",
    focus: "Ancient technique to purify the aura and align all major chakras.",
    link: "/services#humkara",
    icon: Sunrise,
    badge: "Sacred Sound",
  },
  {
    name: "Soul Contract Cancellation",
    focus: "Facilitates the release and cancellation of limiting pre-birth soul agreements.",
    link: "/services#soul-contract",
    icon: Scroll,
    badge: "Liberation",
  },
  {
    name: "Ancestral Healing",
    focus: "Clears inherited family blockages and breaks toxic generational cycles.",
    link: "/services#ancestral",
    icon: Users,
    badge: "Lineage",
  },
  {
    name: "Money Reiki Healing",
    focus: "Aligns your energy field with abundance and clears financial blockages.",
    link: "/services#money-reiki",
    icon: Coins,
    badge: "Abundance",
  },
];

const keyBenefits = [
  {
    title: "Deep Stress Relief",
    description: "Calms the nervous system and relaxes tight muscle tension throughout the body.",
    icon: Heart,
    color: "from-rose-500/20 to-purple-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  },
  {
    title: "Emotional Balance & Clarity",
    description: "Helps release bottled-up feelings, mental chatter, worry, and anxious thoughts.",
    icon: Sparkles,
    color: "from-purple-500/20 to-indigo-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
  {
    title: "Improved Sleep Quality",
    description: "Encourages restorative rest, soothing overactive minds and helping you wake up feeling refreshed.",
    icon: Moon,
    color: "from-blue-500/20 to-teal-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    title: "Support During Transitions",
    description: "Provides energetic grounding during career shifts, personal loss, relationship changes, or life challenges.",
    icon: Compass,
    color: "from-gold-500/20 to-amber-500/10 text-gold-600 dark:text-gold-400 border-gold-500/20",
  },
  {
    title: "Greater Mindfulness",
    description: "Enhances self-awareness and fosters a deeper, calmer connection to your inner soul and intuition.",
    icon: Zap,
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
];

const whoCanBenefit = [
  {
    title: "Busy Professionals & Travelers",
    desc: "Individuals with demanding schedules who find it difficult to commute to an in-person clinic.",
    icon: Briefcase,
  },
  {
    title: "People Dealing with Stress or Burnout",
    desc: "Anyone suffering from chronic work fatigue, mental exhaustion, or anxiety.",
    icon: Activity,
  },
  {
    title: "Individuals Recovering from Illness or Surgery",
    desc: "Patients seeking a gentle, non-touch complementary session to support traditional medical recovery.",
    icon: HeartHandshake,
  },
  {
    title: "Parents & Caregivers",
    desc: "Children and seniors often respond well to remote energy work, especially if sitting still for long periods is challenging.",
    icon: Users,
  },
  {
    title: "Pets & Animals",
    desc: "Animals are highly sensitive to energy, making distance Reiki ideal for nervous, injured, or aging pets without causing them stress.",
    icon: PawPrint,
  },
  {
    title: "Anyone Seeking Personal Growth",
    desc: "Individuals looking to clear energetic blockages and enhance their overall well-being.",
    icon: UserCheck,
  },
];

export default function DistanceReikiBenefitsServicesPage() {
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
        {/* Ambient Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-purple-600/10 dark:bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[700px] right-10 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[1500px] left-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

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
                Distance Reiki & Healing
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Clock className="w-3.5 h-3.5" /> 6 min read
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Calendar className="w-3.5 h-3.5" /> August 13, 2026
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight mb-4">
              Distance Reiki Healing: <span className="italic font-normal text-gold-600 dark:text-gold-400">Benefits, Services Offered</span>
            </h1>

            <p className="font-serif text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 italic mb-8 leading-relaxed">
              Experience deep relaxation and energetic harmony right from the comfort of your home.
            </p>

            {/* Author & Share Bar */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center font-serif text-base font-bold border border-gold-500/30">
                  BW
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Body &amp; Soul Wellness</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Certified Energy &amp; Reiki Sanctuary</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs font-medium transition-colors cursor-pointer"
                  title="Share article link"
                >
                  <Share2 className="w-3.5 h-3.5 text-gold-500" />
                  <span>{copied ? "Link Copied!" : "Share"}</span>
                </button>
              </div>
            </div>
          </motion.header>

          {/* Hero Banner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-72 sm:h-[420px] rounded-3xl overflow-hidden mb-12 shadow-2xl border border-neutral-200/80 dark:border-neutral-800"
          >
            <Image
              src="/devine-imgs/reik_v2.png"
              alt="Distance Reiki Healing Session"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs sm:text-sm font-light italic bg-neutral-950/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-gold-400 shrink-0" />
              <span>
                Universal life force energy connects beyond physical boundaries — restoring balance wherever you are.
              </span>
            </div>
          </motion.div>

          {/* Article Body */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12 text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans"
          >
            {/* Introduction */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-neutral-800 backdrop-blur-sm shadow-sm">
              <p className="text-base sm:text-lg leading-relaxed mb-0">
                In our fast-paced daily life, stress, emotional burnout, and physical exhaustion have become all too common. To restore balance, many people are turning to holistic wellness. <strong className="text-purple-600 dark:text-purple-400 font-semibold">Distance Reiki Healing</strong> has emerged as a flexible, gentle practice that allows you to experience deep relaxation and energetic harmony right from the comfort of your home.
              </p>
            </div>

            {/* Section 1: What is Distance Reiki Healing? */}
            <section className="pt-8 border-t border-neutral-200/60 dark:border-neutral-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-600 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Foundations</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-4">
                What is Distance Reiki Healing?
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Distance Reiki is a remote energy practice where a trained practitioner sends universal life force energy to a recipient, regardless of physical location.
              </p>
              <p className="text-base leading-relaxed">
                Practitioners use focused intention and sacred energetic frequencies to bridge physical distance, helping recipients align their mind, body, and spirit without needing to travel or be physically present.
              </p>
            </section>

            {/* Section 2: Key Benefits of Distance Reiki */}
            <section className="pt-8 border-t border-neutral-200/60 dark:border-neutral-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Heart className="w-3.5 h-3.5" />
                <span>Transformation</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-3">
                Key Benefits of Distance Reiki
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8">
                While individual experiences vary, regular recipients often highlight the following advantages:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {keyBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className={`p-6 rounded-2xl bg-white dark:bg-neutral-900 border ${
                        index === 4 ? "md:col-span-2" : ""
                      } shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 border-neutral-200/80 dark:border-neutral-800`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border bg-gradient-to-br ${benefit.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-medium text-foreground mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 3: Who Can Benefit from Distance Reiki? */}
            <section className="pt-8 border-t border-neutral-200/60 dark:border-neutral-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-600 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>Accessibility</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-3">
                Who Can Benefit from Distance Reiki?
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8">
                Distance Reiki is non-invasive and safe for everyone. You can approach and benefit from distance healing if you are:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {whoCanBenefit.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 shadow-sm hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 4: Specialized Distance Reiki Healing Services Offered */}
            <section className="pt-8 border-t border-neutral-200/60 dark:border-neutral-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Modalities</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-3">
                Specialized Distance Reiki Healing Services Offered
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8">
                Explore our full spectrum of specialized remote modalities tailored to resolve specific energetic, emotional, and spiritual needs.
              </p>

              {/* Interactive Service Table & Cards */}
              <div className="hidden sm:block overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-100/70 dark:bg-neutral-800/60 border-b border-neutral-200 dark:border-neutral-800 text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      <th className="py-4 px-6 font-semibold">Service</th>
                      <th className="py-4 px-6 font-semibold">Focus &amp; Description</th>
                      <th className="py-4 px-6 font-semibold text-right">Explore</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/60 text-sm">
                    {specializedServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <tr
                          key={service.name}
                          className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors group"
                        >
                          <td className="py-4 px-6 font-medium text-foreground whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="font-serif text-base font-semibold group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                                {service.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            {service.focus}
                          </td>
                          <td className="py-4 px-6 text-right whitespace-nowrap">
                            <Link
                              href={service.link}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-gold-600 dark:text-gold-400 hover:underline group/link"
                            >
                              <span>View</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile View Service Cards */}
              <div className="sm:hidden space-y-4 mb-8">
                {specializedServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.name}
                      className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h4 className="font-serif text-base font-semibold text-foreground">
                            {service.name}
                          </h4>
                        </div>
                        {service.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-3 leading-relaxed">
                        {service.focus}
                      </p>
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-gold-600 dark:text-gold-400 hover:underline"
                      >
                        <span>Learn more about {service.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 5: Connect With Body & Soul Wellness */}
            <div className="mt-16 relative rounded-3xl border border-gold-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-purple-950/70 p-8 sm:p-12 shadow-2xl overflow-hidden group">
              {/* Ambient Glows */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-gold-500/15 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-8 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span>Begin Your Healing Journey</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
                    Connect With Body &amp; Soul Wellness
                  </h3>

                  <p className="text-sm text-neutral-300 mt-3 max-w-2xl leading-relaxed">
                    Take the first step toward greater relaxation, inner peace, and holistic wellness with a professional Reiki Distance Healing session from Body &amp; Soul Wellness. Confidential and compassionate care is guaranteed.
                  </p>
                </div>

                {/* 4 Info Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* Website */}
                  <a
                    href="https://bodyandsoulwellness.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-gold-500/40 hover:bg-neutral-900 transition-all duration-300 group/card"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 group-hover/card:scale-110 group-hover/card:bg-gold-500/20 group-hover/card:text-gold-400 transition-all">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-semibold">Website</span>
                      <span className="text-sm font-medium text-neutral-200 group-hover/card:text-gold-400 transition-colors">
                        bodyandsoulwellness.in
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+919573797979"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-gold-500/40 hover:bg-neutral-900 transition-all duration-300 group/card"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 group-hover/card:scale-110 group-hover/card:bg-gold-500/20 group-hover/card:text-gold-400 transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-semibold">Phone</span>
                      <span className="text-sm font-medium text-neutral-200 group-hover/card:text-gold-400 transition-colors">
                        +91 95737 97979
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919573797979?text=Hello%20Himabindu,%20I%20would%20like%20to%20inquire%20about%20Distance%20Reiki%20Healing%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-gold-500/40 hover:bg-neutral-900 transition-all duration-300 group/card"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover/card:scale-110 group-hover/card:bg-emerald-500/20 transition-all">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-semibold">WhatsApp</span>
                      <span className="text-sm font-medium text-neutral-200 group-hover/card:text-emerald-400 transition-colors">
                        +91 95737 97979
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:bodyandsoulwellness3@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-gold-500/40 hover:bg-neutral-900 transition-all duration-300 group/card"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 group-hover/card:scale-110 group-hover/card:bg-gold-500/20 group-hover/card:text-gold-400 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-semibold">Email</span>
                      <span className="text-sm font-medium text-neutral-200 group-hover/card:text-gold-400 transition-colors truncate max-w-[180px] sm:max-w-none block">
                        bodyandsoulwellness3@gmail.com
                      </span>
                    </div>
                  </a>
                </div>

                {/* Call-to-action Action Buttons */}
                <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <ShieldCheck className="w-4 h-4 text-gold-400" />
                    <span>Confidential &amp; Compassionate Care Guaranteed</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://wa.me/919573797979?text=Hello%20Himabindu,%20I%20would%20like%20to%20book%20a%20Distance%20Reiki%20Healing%20session."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary" size="lg" className="flex items-center gap-2 shadow-lg shadow-gold-500/10">
                        <MessageCircle className="w-5 h-5" />
                        <span>Book Distance Session</span>
                      </Button>
                    </a>

                    <Link href="/contact">
                      <Button variant="outline" size="lg" className="border-neutral-700 text-neutral-200 hover:border-gold-400 hover:text-gold-400">
                        <span>Visit Contact Page</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
