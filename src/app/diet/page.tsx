"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Heart, 
  Droplets, 
  Activity, 
  Flame, 
  Scale, 
  Zap, 
  TrendingUp, 
  TrendingDown, 
  Baby,
  CheckCircle 
} from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Accordion } from "@/components/ui/accordion";

interface DietProgram {
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  glowColor: "violet" | "gold" | "sage";
  image: string;
}

const dietFaqs = [
  {
    id: "diff",
    title: "What is the difference between a nutritionist and a dietitian?",
    content: "Dietitians usually have clinical training, while nutritionists focus on overall diet and wellness guidance."
  },
  {
    id: "cost",
    title: "How much does a nutritionist consultation cost in Hyderabad?",
    content: "Consultation charges vary depending on experience, specialization, and program duration."
  },
  {
    id: "time",
    title: "How long does it take to see results?",
    content: "Results depend on consistency, lifestyle, and health condition, but noticeable changes are often seen within a few weeks."
  }
];

const dietPrograms: DietProgram[] = [
  {
    title: "Weight Loss",
    desc: "Tailored to boost your metabolism, optimize calories, and align portion sizing for sustainable fat loss while maintaining high energy.",
    icon: TrendingDown,
    glowColor: "violet",
    image: "/devine-imgs/diet/diet_weight_loss.png"
  },
  {
    title: "Weight Gain",
    desc: "Focuses on clean, nutrient-dense whole foods, muscle-building proteins, and healthy fats to support healthy weight gain and vitality.",
    icon: TrendingUp,
    glowColor: "gold",
    image: "/devine-imgs/diet/diet_weight_gain.png"
  },
  {
    title: "Cardiovascular Diseases",
    desc: "Heart-healthy nutrition plans rich in omega-3 fatty acids, leafy greens, and antioxidants to support circulation, blood pressure, and cardiovascular strength.",
    icon: Heart,
    glowColor: "sage",
    image: "/devine-imgs/diet/diet_cardio.png"
  },
  {
    title: "Hypothyroidism",
    desc: "Designed to support thyroid health, featuring selenium, iodine-rich foods, and clean minerals to optimize hormone synthesis and endocrine wellness.",
    icon: Zap,
    glowColor: "violet",
    image: "/devine-imgs/diet/diet_hypothyroid.png"
  },
  {
    title: "Pre-natal",
    desc: "Nourishing, nutrient-dense meal plans packed with essential vitamins like folic acid and iron to support a healthy pregnancy and baby development.",
    icon: Baby,
    glowColor: "gold",
    image: "/devine-imgs/diet/diet_prenatal.png"
  },
  {
    title: "Post-natal",
    desc: "Supports quick cellular recovery, maternal tissue repair, and hormonal stabilization for new mothers during the postpartum phase.",
    icon: Activity,
    glowColor: "sage",
    image: "/devine-imgs/diet/diet_postnatal.png"
  },
  {
    title: "Lactation",
    desc: "Hydrating, galactagogue-rich diets containing natural nutrients to support, increase, and enrich healthy milk production for nursing mothers.",
    icon: Droplets,
    glowColor: "violet",
    image: "/devine-imgs/diet/diet_lactation.png"
  },
  {
    title: "Sports Nutrition",
    desc: "Engineered for athletes, focusing on clean energy loading, optimal protein synthesis, hydration, and cellular recovery to maximize physical stamina.",
    icon: Flame,
    glowColor: "gold",
    image: "/devine-imgs/diet/diet_sports.png"
  },
  {
    title: "Diabetes",
    desc: "Glycemic-balanced meal schedules featuring complex carbohydrates and high fiber to manage blood glucose levels and improve insulin sensitivity.",
    icon: Scale,
    glowColor: "sage",
    image: "/devine-imgs/diet/diet_diabetes.png"
  },
  {
    title: "PCOS",
    desc: "Endocrine-supportive diets focusing on blood sugar stabilization, reducing internal inflammation, and balancing reproductive hormones.",
    icon: Sparkles,
    glowColor: "violet",
    image: "/devine-imgs/diet/diet_pcos_v2.png"
  }
];

export default function DietPage() {
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
            className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full border border-gold-400/20 bg-gold-400/5 text-gold-700 dark:text-gold-300 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nutritional Therapy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground tracking-wide leading-tight"
          >
            Cosmic Diet & <span className="italic text-gradient-gold">Nutritional Programs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed"
          >
            Nourish your physical body with specialized, high-vibrational diet plans tailored to your specific clinical, maternal, athletic, and metabolic needs.
          </motion.p>
        </div>
      </section>

      {/* 2. Diet Programs Section */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Our Programs"
            title="Targeted Dietary Consultations"
            subtitle="We design customized, nutrient-dense nutrition plans to target your specific physiological conditions, wellness goals, and energetic harmony."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dietPrograms.map((program, idx) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                >
                  <Card 
                    hoverEffect="lift" 
                    glowColor={program.glowColor} 
                    className="h-[450px] flex flex-col group overflow-hidden p-0"
                  >
                    {/* Image Header */}
                    <div className="relative w-full h-[60%] shrink-0 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        unoptimized
                        className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      />
                      {/* Subtle dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col gap-3 h-[40%]">
                      <span className="p-2.5 rounded-[16px] bg-purple-500/10 text-purple-600 dark:text-purple-300 self-start">
                        <Icon className="w-5 h-5" />
                      </span>
                      <h3 className="text-lg font-serif font-semibold text-foreground tracking-wide mt-1">
                        {program.title}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-snug font-sans line-clamp-3">
                        {program.desc}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SEO Content: About Nutritionists & Benefits */}
      <section className="py-16 px-6 relative z-10 bg-neutral-50/5 dark:bg-neutral-950/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-widest uppercase self-start">
              Best Nutritionist in Hyderabad
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground tracking-wide leading-tight">
              Nutrition and <br />
              <span className="italic text-emerald-600 dark:text-emerald-400">Weight Management</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
              A nutritionist is a health professional who specializes in understanding how food and nutrients affect the body and overall well-being. They assess individual dietary needs, medical conditions, and lifestyle habits to create personalized nutrition plans that promote better health, manage weight, prevent diseases, and improve energy levels.
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
              In addition to creating meal plans, nutritionists educate individuals and groups about healthy eating habits, food preparation, and nutritional balance. Their ultimate aim is to empower people to build a sustainable relationship with food and make choices that lead to long-term health and vitality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <Card glowColor="sage" hoverEffect="none" className="p-8">
              <h3 className="text-xl font-serif font-semibold text-foreground tracking-wide mb-6">
                Why Consult a Certified Nutritionist?
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "Personalized Diet Planning", desc: "Custom plans based on age, metabolism, medical history, and goals." },
                  { title: "Safe & Sustainable Weight Loss", desc: "Balanced meal plans that promote healthy, long-term weight management." },
                  { title: "Medical Nutrition Therapy", desc: "Crucial for managing conditions like diabetes, PCOS, thyroid imbalance, and cholesterol." },
                  { title: "Improved Energy & Immunity", desc: "The right combination of nutrients boosts immunity and enhances digestion." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 4. FAQs Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <SectionHeading
            badge="Common Questions"
            title="Frequently Asked Questions"
            subtitle="Learn more about consulting a nutritionist in Hyderabad and how our expert dietitians can help you."
          />
          <div className="w-full mt-10">
            <Accordion items={dietFaqs} allowMultiple />
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-16 px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground tracking-wide">
            Ready to Align Your Energy and Nutrition?
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
            Our master practitioners offer energy scans and personalized wellness consultations to structure your ideal diet.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://wa.me/919573797979?text=Hello%20Himabindu%2C%20I%20would%20like%20to%20book%20a%20Nutritional%20Scan%20%2F%20Diet%20Consultation."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                Book Nutritional Scan
              </Button>
            </a>
            <Link href="/services">
              <Button variant="outline" size="lg">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
