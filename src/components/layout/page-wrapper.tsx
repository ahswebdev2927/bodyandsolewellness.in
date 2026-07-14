"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { BackToTop } from "@/components/ui/back-to-top";
import { ToastProvider } from "@/context/toast-context";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <ToastProvider>
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Floating background glowing orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Violet/Indigo Blob */}
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -60, 40, 0],
              scale: [1, 1.15, 0.9, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 dark:bg-purple-600/5 blur-[120px]"
          />

          {/* Warm Gold Blob */}
          <motion.div
            animate={{
              x: [0, -50, 30, 0],
              y: [0, 40, -60, 0],
              scale: [1.1, 0.9, 1.15, 1.1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold-400/5 dark:bg-gold-500/5 blur-[140px]"
          />

          {/* Sage Green / Soft Blue Blob */}
          <motion.div
            animate={{
              x: [0, 30, -40, 0],
              y: [0, 50, 30, 0],
              scale: [0.9, 1.1, 0.95, 0.9],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-5%] left-[10%] w-[450px] h-[450px] rounded-full bg-emerald-500/5 dark:bg-emerald-600/5 blur-[110px]"
          />
        </div>

        {/* Global Nav Bar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <motion.main
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 flex flex-col relative z-10 pt-20"
        >
          {children}
        </motion.main>

        {/* Global Footer */}
        <Footer />

        {/* Scroll Back to Top Button */}
        <BackToTop />
      </div>
    </ToastProvider>
  );
}
