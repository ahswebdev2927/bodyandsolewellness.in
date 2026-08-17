"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Sparkles, MessageSquare, MapPin } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  initials: string;
  category: "Twin Flame" | "Melchizedek" | "Reiki" | "Diet";
  service: string;
  location?: string;
}

const testimonialsList: Testimonial[] = [
  {
    name: "Rajesh Varma",
    role: "Client",
    rating: 5.0,
    text: "Our journey was full of ego clashes and misunderstandings. Twin Flame Healing helped us release past-life karma and emotional baggage. The divine masculine energy softened, and communication improved beautifully. We are now engaged and preparing for marriage. Forever grateful.",
    initials: "RV",
    category: "Twin Flame",
    service: "Twin Flame Healing"
  },
  {
    name: "Lavanya & Sreenivas",
    role: "Client Couple",
    rating: 4.9,
    text: "Twin Flame Healing helped us understand why we kept repeating the same conflicts. The sessions brought emotional balance, forgiveness, and spiritual growth for both of us. Instead of reacting from old triggers, we now communicate with awareness and love. Reuniting and restarting our marriage journey feels like destiny aligned at the right time.",
    initials: "LS",
    category: "Twin Flame",
    service: "Twin Flame Healing"
  },
  {
    name: "Jyothi Reddy",
    role: "Client",
    rating: 5.0,
    text: "I learned that union starts within. The healing shifted my vibration completely. I stopped chasing and started trusting. My twin flame returned with clarity and commitment. We are now planning our future together.",
    initials: "JR",
    category: "Twin Flame",
    service: "Twin Flame Connection"
  },
  {
    name: "Sunitha Rao",
    role: "Client",
    rating: 4.8,
    text: "After just a few Twin Flame Reiki sessions, I noticed a huge shift in my energy. The anxiety and constant overthinking about my twin flame reduced, and I felt stronger emotionally. It helped me focus on my own growth rather than chasing the connection.",
    initials: "SR",
    category: "Twin Flame",
    service: "Twin Flame Reiki"
  },
  {
    name: "Ananya Rao",
    role: "Client",
    rating: 4.9,
    text: "Twin Flame Reiki helped clear energetic blocks I didn't even know I had. The heaviness in my heart chakra felt lighter, and communication with my twin flame improved naturally. The healing felt gentle but very powerful.",
    initials: "AR",
    category: "Twin Flame",
    service: "Twin Flame Reiki"
  },
  {
    name: "Srija Chowdary",
    role: "Client",
    rating: 5.0,
    text: "I was feeling heartbroken and spiritually drained. These sessions restored my inner strength and self-love. Instead of feeling dependent on the relationship, I now feel whole on my own — and that changed everything in my twin flame journey.",
    initials: "SC",
    category: "Twin Flame",
    service: "Twin Flame Healing"
  },
  {
    name: "Aditya Varma",
    role: "Client",
    rating: 5.0,
    text: "The Melchizedek Method felt like a soul-level activation. During the session, I experienced a deep sense of divine connection and clarity about my life purpose. It was not just healing — it felt like a spiritual upgrade.",
    initials: "AV",
    category: "Melchizedek",
    service: "Melchizedek Method"
  },
  {
    name: "Sneha Latha",
    role: "Client",
    rating: 4.9,
    text: "I had tried many healing modalities before, but this was different. The Melchizedek Method helped me release karmic patterns and old energetic imprints I had carried for years. I feel lighter, more aligned, and spiritually protected.",
    initials: "SL",
    category: "Melchizedek",
    service: "Melchizedek Method"
  },
  {
    name: "Ramesh Raju",
    role: "Client",
    rating: 4.8,
    text: "This healing opened my heart and higher chakras in a way I can't explain. My intuition has become stronger, my meditations deeper, and I feel guided and supported by higher realms. It truly felt like sacred light work.",
    initials: "RR",
    category: "Melchizedek",
    service: "Melchizedek Activation"
  },
  {
    name: "Ramakrishna Naidu",
    role: "Client",
    rating: 5.0,
    text: "After my Melchizedek session, I felt a powerful shift in my consciousness. Old fears dissolved, and I now feel more connected to divine wisdom and inner peace. It helped me step into my spiritual path with confidence.",
    initials: "RN",
    category: "Melchizedek",
    service: "Melchizedek Method"
  },
  {
    name: "Bhavani Chowdary",
    role: "Client",
    rating: 4.9,
    text: "The Weight Loss diet plan helped me lose 8 kgs in 3 months sustainably without feeling starved or exhausted. Optimizing my metabolism and portion sizing gave me lasting energy all day long!",
    initials: "BC",
    category: "Diet",
    service: "Weight Loss",
    location: "Hyderabad, Telangana"
  },
  {
    name: "Chaitanya Varma",
    role: "Client",
    rating: 4.8,
    text: "Struggled with being underweight and fatigued for years. The Weight Gain program focused on clean whole foods, proteins, and healthy fats, helping me gain 6 kgs of healthy muscle mass with renewed strength.",
    initials: "CV",
    category: "Diet",
    service: "Weight Gain",
    location: "Secunderabad, Telangana"
  },
  {
    name: "Satyanarayana Raju",
    role: "Client",
    rating: 4.9,
    text: "Following my heart health checkup, the Cardiovascular Diseases nutrition plan rich in omega-3s and antioxidants helped normalize my blood pressure and cholesterol. My physician was deeply impressed.",
    initials: "SR",
    category: "Diet",
    service: "Cardiovascular Diseases",
    location: "Vijayawada, Andhra Pradesh"
  },
  {
    name: "Padmaja Reddy",
    role: "Client",
    rating: 4.8,
    text: "Living with hypothyroidism left me with constant brain fog and a sluggish metabolism. The selenium and mineral-rich dietary protocol restored my thyroid balance and vitality within weeks.",
    initials: "PR",
    category: "Diet",
    service: "Hypothyroidism",
    location: "Hyderabad, Telangana"
  },
  {
    name: "Swathi Kilaru",
    role: "Expecting Mother",
    rating: 5.0,
    text: "The Pre-natal diet plan ensured optimal nourishment for both me and my baby. The folic acid and nutrient-dense meal guidance kept my energy steady and eased my pregnancy journey completely.",
    initials: "SK",
    category: "Diet",
    service: "Pre-natal",
    location: "Guntur, Andhra Pradesh"
  },
  {
    name: "Mounika Reddy",
    role: "New Mother",
    rating: 4.9,
    text: "Postpartum recovery felt overwhelming until I started the Post-natal meal plan. It accelerated my tissue repair, balanced my hormones, and gave me the vital strength needed to care for my newborn.",
    initials: "MR",
    category: "Diet",
    service: "Post-natal",
    location: "Tirupati, Andhra Pradesh"
  },
  {
    name: "Divya Tejaswini",
    role: "Nursing Mother",
    rating: 5.0,
    text: "The galactagogue-rich Lactation diet increased my breast milk supply naturally within days while keeping me well-hydrated and energized. A true blessing for nursing mothers.",
    initials: "DT",
    category: "Diet",
    service: "Lactation",
    location: "Warangal, Telangana"
  },
  {
    name: "Arjun Reddy",
    role: "Marathon Runner",
    rating: 5.0,
    text: "The Sports Nutrition protocol elevated my athletic stamina and accelerated muscle recovery after long training runs. Clean energy loading and nutrient timing made a measurable difference in my marathon times.",
    initials: "AR",
    category: "Diet",
    service: "Sports Nutrition",
    location: "Hyderabad, Telangana"
  },
  {
    name: "Venkateswara Rao",
    role: "Client",
    rating: 4.9,
    text: "My HbA1c dropped from 8.2 to 6.4 following the customized glycemic-balanced Diabetes meal schedule. The dietitians taught me smart carbohydrate balancing without eliminating traditional foods.",
    initials: "VR",
    category: "Diet",
    service: "Diabetes",
    location: "Visakhapatnam, Andhra Pradesh"
  },
  {
    name: "Kavya Sri Chowdary",
    role: "Client",
    rating: 4.8,
    text: "Managing PMOS and hormonal imbalance was difficult with irregular cycles and stubborn weight. The endocrine-supportive diet regulated my cycles naturally in 4 months and significantly reduced internal inflammation.",
    initials: "KC",
    category: "Diet",
    service: "PMOS",
    location: "Rajahmundry, Andhra Pradesh"
  },
  {
    name: "Ravi Teja E",
    role: "Software Engineer",
    rating: 5.0,
    text: "I got to know about Ms. Himabindu through a family friend at a point of my life where I was trying to get a well-paid job in software and at the same time, my family was pressurizing me to get married. As I did not have a proper job and with family pressure, I was in a very bad stage of depression and suicidal tendencies. When Himabindu heard about all these, she suggested me to take Karmic reiki healing. After taking Karmic reiki I got a job in HCL with a good package, and I was happily married. But then a new problem raised in my professional life; I didn't have a proper knowledge of the technology I was working on and created a lot of issues and I was on the brink of losing my job. I sought Himabindu again, and she suggested relationship reiki with my boss and teammates. After a few days, my issues started resolving gradually and my rapport with my boss and teammates became so good that they were willing to help me with any work issues I had.",
    initials: "RT",
    category: "Reiki",
    service: "Karmic & Relationship Reiki",
    location: "Bangalore, Karnataka, India"
  }
];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Twin Flame" | "Melchizedek" | "Reiki" | "Diet">("All");

  const filteredTestimonials = testimonialsList.filter((t) => {
    if (activeCategory === "All") return true;
    return t.category === activeCategory;
  });

  const categories: { value: typeof activeCategory; label: string }[] = [
    { value: "All", label: "All Stories" },
    { value: "Twin Flame", label: "Twin Flame Healing" },
    { value: "Melchizedek", label: "Melchizedek Method" },
    { value: "Reiki", label: "Reiki Healing" },
    { value: "Diet", label: "Diet & Nutrition" }
  ];

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
            <span>Echoes of Transformation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground tracking-wide leading-tight"
          >
            Real Stories of <span className="italic text-gradient-gold">Awakening & Recovery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed"
          >
            Explore real testimonials from guests who have experienced profound emotional recovery, spiritual upgrades, and chakra realignment at our sanctuary.
          </motion.p>
        </div>
      </section>

      {/* 2. Category Filter Tabs */}
      <section className="py-4 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex flex-wrap gap-2.5 bg-neutral-100/5 dark:bg-neutral-900/40 p-1.5 rounded-[20px] border border-neutral-200/10 backdrop-blur-md justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-[16px] text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer relative ${
                  activeCategory === cat.value
                    ? "text-neutral-950 dark:text-neutral-950 font-semibold"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-foreground"
                }`}
              >
                {activeCategory === cat.value && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-400 rounded-[16px]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials Grid */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredTestimonials.map((t) => {
                const isRaviTeja = t.name === "Ravi Teja E";
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={t.name}
                    className={isRaviTeja ? "md:col-span-2 lg:col-span-3" : ""}
                  >
                    <Card
                      glowColor={
                        t.category === "Twin Flame"
                          ? "violet"
                          : t.category === "Melchizedek"
                          ? "gold"
                          : t.category === "Diet"
                          ? "sage"
                          : "sage"
                      }
                      hoverEffect="glow"
                      className={`p-8 h-full flex flex-col justify-between gap-6 relative overflow-hidden`}
                    >
                      <Quote className="w-8 h-8 text-purple-400/10 absolute top-6 left-6" />

                      <div className="flex flex-col gap-4 mt-2">
                        {/* Stars & Rating */}
                        <div className="flex items-center gap-1.5">
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= Math.round(t.rating)
                                    ? "fill-gold-500 text-gold-500"
                                    : "text-neutral-300 dark:text-neutral-700"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-semibold text-gold-600 dark:text-gold-400">
                            {t.rating.toFixed(1)}
                          </span>
                        </div>

                        {/* Review text */}
                        <p className={`text-sm sm:text-base font-sans text-foreground/80 leading-relaxed italic ${isRaviTeja ? "not-italic text-foreground/90 font-light" : ""}`}>
                          "{t.text}"
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200/20 dark:border-neutral-800/30 pt-4 mt-auto">
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <span className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-xs font-bold shadow-md flex-shrink-0 ${
                            t.category === "Diet"
                              ? "bg-gradient-to-tr from-emerald-500 to-teal-400 text-white"
                              : "bg-gradient-to-tr from-purple-500 to-gold-400 text-white dark:text-neutral-950"
                          }`}>
                            {t.initials}
                          </span>
                          <div>
                            <h4 className="text-sm font-semibold text-foreground">{t.name}</h4>
                            <div className="flex gap-2 items-center text-[10px] text-neutral-500 dark:text-neutral-400 font-sans mt-0.5">
                              <span>{t.role}</span>
                              <span>•</span>
                              <span className={`font-medium ${
                                t.category === "Twin Flame"
                                  ? "text-purple-600 dark:text-purple-400"
                                  : t.category === "Melchizedek"
                                  ? "text-gold-600 dark:text-gold-400"
                                  : t.category === "Diet"
                                  ? "text-emerald-600 dark:text-emerald-400"
                                  : "text-purple-600 dark:text-purple-400"
                              }`}>
                                {t.service}
                              </span>
                            </div>
                          </div>
                        </div>

                        {t.location && (
                          <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 dark:text-neutral-400 bg-neutral-100/5 px-2.5 py-1 rounded-full border border-neutral-200/10">
                            <MapPin className="w-3 h-3 text-gold-500" />
                            <span>{t.location}</span>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. Call to Action for Stories */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card glowColor="violet" hoverEffect="none" className="p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-6">
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
              <a
                href="https://wa.me/919573797979?text=Hello%20Himabindu%2C%20I%20would%20like%20to%20book%20a%20healing%20session."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg">
                  Book A Session
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </PageWrapper>
  );
}
