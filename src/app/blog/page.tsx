"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight, Sparkles, User, Tag, Search, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: "reiki-distance-healing",
    title: "Reiki Distance Healing: Experience Relaxation and Energy Balance from Anywhere",
    subtitle: "Discover how 45-minute remote energy sessions dissolve stress, emotional pressure, and support natural recovery without leaving home.",
    category: "Reiki & Energy Healing",
    readTime: "5 min read",
    date: "August 3, 2026",
    author: "Body & Soul Wellness",
    image: "/devine-imgs/reiki-blog-hero.png",
    featured: true,
    excerpt: "In today’s fast-paced world, stress, emotional pressure, and mental fatigue can affect overall well-being. Reiki Distance Healing offers a gentle and convenient way to experience relaxation and energetic balance without being physically present.",
    tags: ["Reiki Distance Healing", "Reiki Session", "Natural Recovery", "Emotional Pressure"],
    slug: "/blog/reiki-distance-healing",
  },
  {
    id: "karmic-reiki-guide",
    title: "Understanding Karmic Reiki: Healing Deep Energetic Patterns",
    subtitle: "A 6-week transformational journey to resolve inherited spiritual blockages.",
    category: "Karmic Healing",
    readTime: "6 min read",
    date: "July 28, 2026",
    author: "Body & Soul Wellness",
    image: "/devine-imgs/karm_v2.png",
    featured: false,
    excerpt: "Explore how daily 45-minute Karmic Reiki sessions help clear deep-rooted soul contracts and release repetitive life obstacles.",
    tags: ["Karmic Reiki", "Energy Healing", "Soul Contracts"],
    slug: "/blog/reiki-distance-healing",
  },
  {
    id: "violet-flame-transmutation",
    title: "The Power of Violet Flame Healing for Emotional Clarity",
    subtitle: "Transmuting negative frequencies into light, joy, and peace.",
    category: "Violet Flame",
    readTime: "4 min read",
    date: "July 15, 2026",
    author: "Body & Soul Wellness",
    image: "/devine-imgs/viol_v2.png",
    featured: false,
    excerpt: "Learn how the sacred Violet Flame technique transmutes stagnant emotional heaviness and restores your energetic aura.",
    tags: ["Violet Flame", "Emotional Clarity", "Aura Cleansing"],
    slug: "/blog/reiki-distance-healing",
  },
];

export default function BlogIndexPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Reiki & Energy Healing", "Karmic Healing", "Violet Flame"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 dark:bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-96 right-10 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 dark:bg-purple-400/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span>Holistic Insights & Energy Healing</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
              Divine <span className="italic font-normal text-gold-600 dark:text-gold-400">Blog & Sanctuary</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Explore insightful guides on distance healing, emotional recovery, chakra alignment, and holistic wellness practices designed to restore inner peace and vital energy.
            </p>
          </motion.div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 p-4 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/60 dark:border-neutral-800 backdrop-blur-md shadow-sm">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                    selectedCategory === cat
                      ? "bg-gold-500 text-white dark:text-neutral-950 font-semibold shadow-sm"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
              />
            </div>
          </div>

          {/* Featured Article Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-16 rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/90 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Featured Image */}
              <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-gold-500 text-white dark:text-neutral-950 text-xs font-semibold tracking-wider uppercase shadow-md">
                  Featured Article
                </div>
              </div>

              {/* Featured Content */}
              <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                    <span className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-semibold">
                      <Tag className="w-3.5 h-3.5" />
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl lg:text-3xl font-normal text-foreground group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors mb-4 leading-snug">
                    <Link href={featuredPost.slug}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm lg:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  {/* Clean Topic Pills */}
                  <div className="mb-8">
                    <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-2">
                      Key Topics:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/services#reiki" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-300 text-xs hover:bg-purple-500/20 transition-colors font-medium">
                        Reiki Distance Healing
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </Link>
                      <Link href="/services#reiki" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-300 text-xs hover:bg-purple-500/20 transition-colors font-medium">
                        Reiki Session
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </Link>
                      <Link href="/diet" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-300 text-xs hover:bg-purple-500/20 transition-colors font-medium">
                        Natural Recovery
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </Link>
                      <Link href="/services#karmic" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-300 text-xs hover:bg-purple-500/20 transition-colors font-medium">
                        Emotional Pressure
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center font-serif text-sm font-bold">
                      BW
                    </div>
                    <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
                      {featuredPost.author}
                    </span>
                  </div>

                  <Link href={featuredPost.slug}>
                    <Button variant="primary" size="md" className="group/btn flex items-center gap-2">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* All Articles Grid */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl font-light text-foreground mb-8">
              All Articles & <span className="italic text-gold-600 dark:text-gold-400">Guides</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>

                      <h4 className="font-serif text-xl font-normal text-foreground group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors mb-3 line-clamp-2">
                        <Link href={post.slug}>
                          {post.title}
                        </Link>
                      </h4>

                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800/50 mt-auto">
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      By {post.author}
                    </span>
                    <Link href={post.slug} className="text-xs font-semibold text-gold-600 dark:text-gold-400 hover:underline flex items-center gap-1">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
