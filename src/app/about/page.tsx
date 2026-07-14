"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Eye, ShieldAlert, Award, Compass, Heart, Calendar } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      desc: "We hold a non-judgmental, warm sanctuary space for all clients, meeting you exactly where you are on your healing path."
    },
    {
      icon: ShieldAlert,
      title: "Energetic Integrity",
      desc: "Our practitioners operate under strict spiritual ethics, ensuring sessions are safe, secure, and respectful of your boundaries."
    },
    {
      icon: Compass,
      title: "Sovereign Empowerment",
      desc: "We don't fix you; we give you the tools and aligned vibration to remember your own body's power to self-heal and bloom."
    }
  ];

  const milestones = [
    {
      year: "2014",
      title: "Sanctuary Founded",
      desc: "Began as a simple, traditional Usui Reiki practice, dedicating ourselves to local somatic wellness."
    },
    {
      year: "2018",
      title: "Integrating Karuna Reiki",
      desc: "Expanded into deep child-hood trauma and cell-memory clearing by incorporating Karuna and Violet Flame modalities."
    },
    {
      year: "2022",
      title: "Global Distance Net",
      desc: "Created our quantum remote network, offering high-potency healing services to clients worldwide."
    },
    {
      year: "2026",
      title: "Modern Sanctuary",
      desc: "Redesigned our physical and online platforms to bridge ancient metaphysics with premium modern interfaces."
    }
  ];

  const achievements = [
    "Certified Usui Reiki Grand Master Practitioner",
    "Certified Karuna Reiki Master & Aura Alignment Specialist",
    "Humkara with Haleem Certified Toning Teacher",
    "Over 12 Years of Clinical Healing Experience",
    "Trusted by 5,000+ Clients Worldwide"
  ];

  // Colors for placeholder gallery
  const galleryGradients = [
    "from-purple-500/10 to-violet-500/5",
    "from-gold-400/10 to-amber-500/5",
    "from-emerald-500/10 to-teal-500/5",
    "from-indigo-500/10 to-blue-500/5"
  ];

  return (
    <PageWrapper>
      {/* 1. Header Hero */}
      <section className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full border border-gold-400/20 bg-gold-400/5 text-gold-700 dark:text-gold-300 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Heritage</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground tracking-wide leading-tight"
          >
            Sanctuary of <span className="italic text-gradient-gold">Divine Presence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed"
          >
            Discover our founding story, core values, achievements, and the master practitioners who hold the space for your transformation.
          </motion.p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-16 sm:py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card glowColor="gold" hoverEffect="none" className="p-8 sm:p-10 h-full flex flex-col gap-5">
              <span className="p-3 rounded-[16px] bg-gold-500/10 text-gold-600 dark:text-gold-400 self-start">
                <Sparkles className="w-6 h-6" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-foreground tracking-wide">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                Our mission is to offer premium, high-frequency energy healing therapies that dissolve physical stress, release deep-rooted trauma, and balance the nervous system. We aim to empower every individual to become active participants in their self-healing journey, cultivating absolute alignment.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card glowColor="violet" hoverEffect="none" className="p-8 sm:p-10 h-full flex flex-col gap-5">
              <span className="p-3 rounded-[16px] bg-purple-500/10 text-purple-600 dark:text-purple-400 self-start">
                <Eye className="w-6 h-6" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-foreground tracking-wide">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                We envision a world where energy medicine, somatic awareness, and spiritual alignment are woven naturally into modern daily routines. Wellness & Peace serves as a global beacon of energetic integrity, holding high standards for practitioner certification and holistic care.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 3. Historical Timeline */}
      <section className="py-16 sm:py-16 px-6 bg-neutral-50/10 dark:bg-neutral-950/10 relative z-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            badge="The Timeline"
            title="Our History & Growth"
            subtitle="Follow the step-by-step evolution of Wellness & Peace from a small local healing room to a multi-modality sanctuary."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {milestones.map((mile, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card glowColor="violet" hoverEffect="glow" className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-serif text-gold-600 dark:text-gold-400 font-light mb-4 block">
                      {mile.year}
                    </span>
                    <h3 className="text-lg font-serif font-semibold text-foreground tracking-wide mb-2">
                      {mile.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {mile.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Practitioner Section */}
      <section className="py-16 sm:py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Graphic Artwork placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden border border-neutral-200/50 dark:border-neutral-800/40 glass flex items-center justify-center p-6 shadow-2xl">
              {/* Sacred geometry lines */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-gold-400/15 pointer-events-none" />
              <Compass className="w-16 h-16 text-gold-500/40 animate-spin-slow" />
            </div>
          </motion.div>

          {/* Right bio details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-600 dark:text-purple-300 text-xs font-semibold tracking-widest uppercase self-start">
              Practitioner Profile
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground tracking-wide">
              Meet Our Founder & <br />
              <span className="italic text-gradient-gold">Reiki Grand Master</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
              Welcome, I am the lead facilitator at Wellness & Peace. Over the past 12 years, I have dedicated myself to mastering Usui Reiki, Karuna Reiki, and various sonic-vibration alignments. My path is centered on holding an immaculate space where you can release static attachments and realign with your divine flow.
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
              Every session integrates my intuitive training with high-vibrational alignments to release core blockages and elevate your bodily frequency. I look forward to walking this path of transformation together.
            </p>

            {/* Achievements bullets */}
            <div className="mt-4 flex flex-col gap-3">
              <h4 className="font-serif text-lg tracking-wide text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-500" /> Professional Credentials
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                {achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-16 sm:py-16 px-6 bg-neutral-50/10 dark:bg-neutral-950/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Alignment"
            title="Core Values We Hold"
            subtitle="These foundational principles guide our therapists, energy alignments, client intake, and remote structures."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card glowColor="gold" hoverEffect="glow" className="p-8 h-full flex flex-col gap-4">
                    <span className="p-2.5 rounded-[12px] bg-gold-500/10 text-gold-600 dark:text-gold-400 self-start">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl font-serif text-foreground tracking-wide">
                      {val.title}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Image Gallery */}
      <section className="py-16 sm:py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="The Space"
            title="Sanctuary Visual Diary"
            subtitle="Look inside our tranquil physical therapy chambers and meditative spaces designed for deep cellular healing."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {galleryGradients.map((grad, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-neutral-200/50 dark:border-neutral-800/40 glass shadow-md"
              >
                {/* Visual placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${grad} flex items-center justify-center p-4`}>
                  <Sparkles className="w-8 h-8 text-neutral-400/35" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-16 sm:py-16 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground tracking-wide">
            Ready to Begin Your <span className="italic text-gradient-gold">Alignment?</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
            Book a personalized Usui Reiki session or distance alignment to clear old attachments, release chronic fatigue, and balance your chakra grids.
          </p>
          <div className="mt-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Book Your Alignment Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
