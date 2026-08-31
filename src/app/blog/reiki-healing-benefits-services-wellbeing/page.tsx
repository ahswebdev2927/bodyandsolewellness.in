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
  UserCheck,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Sun,
  Smile,
  Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";

const reikiBenefits = [
  {
    title: "Stress Relief",
    description: "Helps create a calm and relaxing experience, making it easier to take a break from daily stress and tension.",
    icon: Moon,
    color: "from-purple-500/20 to-indigo-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20",
  },
  {
    title: "Emotional Balance",
    description: "A peaceful session may help you feel more relaxed, grounded, and emotionally settled.",
    icon: Heart,
    color: "from-pink-500/20 to-rose-500/10 text-pink-600 dark:text-pink-300 border-pink-500/20",
  },
  {
    title: "Better Relaxation & Sleep",
    description: "Ideal as part of your nightly or weekly relaxation routine, especially when switching off after a busy day feels challenging.",
    icon: Leaf,
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    title: "Mental Clarity",
    description: "Quiet time allows you to slow down, declutter your mind, and focus gently on your thoughts and feelings.",
    icon: Zap,
    color: "from-gold-500/20 to-amber-500/10 text-gold-600 dark:text-gold-400 border-gold-500/20",
  },
  {
    title: "Inner Peace",
    description: "Supports mindfulness, helping you nurture a deeper, more loving connection with your authentic self.",
    icon: Sun,
    color: "from-blue-500/20 to-cyan-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
];

const whoCanConsider = [
  {
    title: "Busy Professionals",
    desc: "Individuals with demanding schedules who want to relax and dedicate mindful time to themselves.",
    icon: Briefcase,
  },
  {
    title: "People Experiencing Stress",
    desc: "If daily routines feel overwhelming, a calming session helps create space for relaxation.",
    icon: Activity,
  },
  {
    title: "Emotional Wellness Seekers",
    desc: "A complementary practice for anyone looking to focus on emotional balance and self-care.",
    icon: HeartHandshake,
  },
  {
    title: "Personal Growth Enthusiasts",
    desc: "Those interested in mindfulness, meditation, spirituality, and holistic living.",
    icon: UserCheck,
  },
];

const reikiServicesList = [
  {
    name: "Reiki Distance Healing",
    desc: "A remote session focused on relaxation, balance, and overall well-being.",
    link: "/services#reiki",
    tag: "Remote Healing",
  },
  {
    name: "Emotional Healing",
    desc: "A wellness-focused session designed to support relaxation and emotional calm.",
    link: "/services#karuna",
    tag: "Compassionate Care",
  },
  {
    name: "Chakra Balancing",
    desc: "A holistic practice focused on creating harmony within the body's energy system.",
    link: "/services#humkara",
    tag: "Energy Alignment",
  },
  {
    name: "Stress Relief Healing",
    desc: "A calming session designed to reduce daily tension and restore peace.",
    link: "/services#violet-flame",
    tag: "Deep Relaxation",
  },
  {
    name: "Spiritual Wellness",
    desc: "Sessions focusing on mindfulness, self-awareness, inner peace, and personal growth.",
    link: "/services#melchizedek",
    tag: "Mindfulness",
  },
];

export default function ReikiHealingBenefitsPage() {
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
              "headline": "Reiki Healing: Benefits, Services and How It Can Support Your Well-Being",
              "description": "Discover how gentle Reiki energy sessions nurture relaxation, emotional harmony, and inner peace—whether in person or remotely.",
              "image": "https://bodyandsoulwellness.in/devine-imgs/reiki-distance-healing_blog_Aug_31.webp",
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
              "datePublished": "2026-08-31",
              "dateModified": "2026-08-31",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://bodyandsoulwellness.in/blog/reiki-healing-benefits-services-wellbeing"
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
                Reiki & Holistic Wellness
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Clock className="w-3.5 h-3.5" /> 5 min read
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Calendar className="w-3.5 h-3.5" /> August 31, 2026
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight mb-6">
              Reiki Healing: Benefits, Services and How It Can Support Your Well-Being
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans mb-8">
              Explore how gentle energy sessions nurture relaxation, emotional harmony, and inner peace—whether experienced in person or remotely.
            </p>

            {/* Author / Social Bar */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center font-serif text-base font-bold border border-gold-500/30">
                  BW
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Body & Soul Wellness</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Holistic Energy & Wellness Sanctuary</p>
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
              src="/devine-imgs/reiki-distance-healing_blog_Aug_31.webp"
              alt="Reiki Healing Benefits and Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent flex items-end p-8">
              <div className="text-white max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/20 backdrop-blur-md text-xs font-medium mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Gentle Energy Practice
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-light">Restore Harmony & Daily Vitality</h3>
              </div>
            </div>
          </motion.div>

          {/* Article Main Body */}
          <article className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
            {/* Introduction with Backlink 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm mb-10">
              <p className="text-base sm:text-lg leading-relaxed m-0">
                {" "}
                <Link
                  href="/services#reiki"
                  className="text-gold-600 dark:text-gold-400 font-semibold hover:underline inline-flex items-center gap-1 group"
                >
                  Reiki healing
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>{" "}
                is a gentle wellness practice that focuses on relaxation, emotional balance, and inner peace. It can be experienced in person or through distance sessions from the comfort of your home.
              </p>
            </div>

            {/* Section 1: What is Reiki Healing? */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                What is Reiki Healing?
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Reiki is a holistic energy healing practice that uses focused intention and gentle techniques to promote relaxation and a sense of balance.
              </p>
              <p className="text-base leading-relaxed">
                Many people choose Reiki when they are experiencing stress, emotional tiredness, difficulty relaxing, or simply want to spend time focusing on their overall well-being.
              </p>
            </section>

            {/* Section 2: Benefits of Reiki Healing (with Backlink 2) */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-6">
                Benefits of Reiki Healing
              </h2>

              <p className="text-base leading-relaxed mb-8">
                Regular wellness practices like{" "}
                <Link
                  href="/services#reiki"
                  className="text-gold-600 dark:text-gold-400 font-semibold hover:underline inline-flex items-center gap-1 group"
                >
                  Reiki sessions
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>{" "}
                can help create a calm and relaxing experience, making it easier to take a break from daily stress.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                {reikiBenefits.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center mb-4`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif text-lg font-medium text-foreground mb-2">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 rounded-xl bg-purple-500/5 dark:bg-purple-400/5 border border-purple-500/20 text-sm leading-relaxed">
                <strong className="text-purple-600 dark:text-purple-300 font-semibold">Mindfulness & Rest:</strong> Taking quiet time during a Reiki session can help you slow down, relax, and focus on your thoughts and feelings, fostering a deeper connection with yourself.
              </div>
            </section>

            {/* Section 3: Who Can Consider Reiki Healing? */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-6">
                Who Can Consider Reiki Healing?
              </h2>
              <p className="text-base leading-relaxed mb-6">
                Reiki may be suitable for anyone who wants to include relaxation and holistic wellness practices in their daily lifestyle:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                {whoCanConsider.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-1">{item.title}</h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 4: Distance Reiki Healing */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                Distance Reiki Healing
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Distance Reiki allows a session to be conducted remotely without the client having to visit a physical location.
              </p>
              <p className="text-base leading-relaxed">
                This can be convenient for people who live in different cities, have busy schedules, or prefer receiving wellness sessions from home.
              </p>
            </section>

            {/* Section 5: Reiki Healing Services (with Backlink 3) */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                Reiki Healing Services
              </h2>
              <p className="text-base leading-relaxed mb-6">
                Depending on your{" "}
                <Link
                  href="/services"
                  className="text-gold-600 dark:text-gold-400 font-semibold hover:underline inline-flex items-center gap-1 group"
                >
                  wellness
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>{" "}
                needs, different types of Reiki and energy healing sessions may be available:
              </p>

              <div className="space-y-4 not-prose">
                {reikiServicesList.map((srv, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gold-500/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2.5 py-0.5 rounded-md bg-gold-500/10 text-gold-600 dark:text-gold-400 font-medium">
                          {srv.tag}
                        </span>
                        <h3 className="font-serif text-base font-semibold text-foreground">{srv.name}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">{srv.desc}</p>
                    </div>

                    <Link href={srv.link} className="shrink-0">
                      <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs flex items-center gap-1.5">
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Why Choose Distance Reiki? (with Backlink 4) */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                Why Choose Distance Reiki?
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Distance Reiki can be a convenient option when you want a{" "}
                <Link
                  href="/services#reiki"
                  className="text-gold-600 dark:text-gold-400 font-semibold hover:underline inline-flex items-center gap-1 group"
                >
                  wellness session
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>{" "}
                without travelling.
              </p>
              <p className="text-base leading-relaxed">
                You can relax in a comfortable and quiet place at home while participating in the session remotely.
              </p>
            </section>

            {/* Section 7: Begin Your Reiki Wellness Journey (with Backlink 5) */}
            <section className="mb-14 p-8 rounded-3xl bg-gradient-to-br from-purple-900/10 via-gold-500/5 to-purple-900/10 border border-purple-500/20">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-4">
                Begin Your Reiki Wellness Journey
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Taking time for yourself is an important part of overall well-being. Reiki can be included as a complementary wellness practice to support relaxation, mindfulness, and inner peace.
              </p>
              <p className="text-base leading-relaxed m-0">
                If you are interested in Reiki healing or{" "}
                <Link
                  href="/services#reiki"
                  className="text-gold-600 dark:text-gold-400 font-semibold hover:underline inline-flex items-center gap-1 group"
                >
                  distance Reiki sessions
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                , connect with a professional practitioner to learn more about the available services.
              </p>
            </section>

            {/* Section 8: Book a Reiki Healing Session Today CTA */}
            <section className="text-center p-10 rounded-3xl bg-neutral-900 text-white dark:bg-neutral-900 border border-neutral-800 shadow-2xl relative overflow-hidden not-prose">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold-500/20 rounded-full blur-3xl pointer-events-none" />
              
              <h2 className="font-serif text-2xl sm:text-4xl font-light mb-4 relative z-10">
                Book a Reiki Healing Session Today
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed relative z-10">
                Take the first step toward greater relaxation, balance, and inner peace. Confidential and compassionate care is guaranteed.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
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
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
