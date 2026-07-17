"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, Clock, Send, HelpCircle } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/context/toast-context";
import { servicesData } from "@/lib/services-data";

function ContactForm() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      // Find matching service
      const match = servicesData.find(
        (s) => s.name.toLowerCase() === serviceParam.toLowerCase()
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.name }));
      }
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) {
      toast("Please fill in all required fields.", "error");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast(`Thank you, ${formData.name}! Your booking request for ${formData.service} has been received.`, "success");
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Eleanor Vance"
          className="px-4 py-3 rounded-[16px] border border-neutral-300 dark:border-neutral-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. eleanor@example.com"
          className="px-4 py-3 rounded-[16px] border border-neutral-300 dark:border-neutral-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
          Select Modality *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="px-4 py-3 rounded-[16px] border border-neutral-300 dark:border-neutral-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-foreground"
        >
          <option value="" disabled className="dark:bg-neutral-900">Choose a service</option>
          {servicesData.map((srv) => (
            <option key={srv.id} value={srv.name} className="dark:bg-neutral-900">
              {srv.name} ({srv.duration.split("/")[0].trim()})
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
          Your Intentions / Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe any specific alignments or intentions you have for this session..."
          className="px-4 py-3 rounded-[16px] border border-neutral-300 dark:border-neutral-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 resize-none"
        />
      </div>

      <div className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-500/[0.03] dark:bg-white/[0.02] border border-neutral-200/40 dark:border-neutral-800/40 p-4 rounded-2xl flex flex-col gap-1.5 font-sans leading-relaxed">
        <span className="font-semibold text-gold-600 dark:text-gold-400 font-serif text-sm">Distance Healing Notice</span>
        <span>All sessions are conducted via distance healing. Once your booking request is received, we will reach out to request a recent photograph (your image), full name, and birth date to establish the visual and energetic connection.</span>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full py-4 mt-2"
        rightIcon={<Send className="w-4 h-4" />}
      >
        Request Healing Session
      </Button>
    </form>
  );
}

export default function ContactPage() {
  const contactDetails = [
    { icon: Mail, label: "Email Correspondence", value: "contact@wellnessandpeace.com" },
    { icon: Phone, label: "Phone Contact", value: "+1 (555) 777-8888" },
  ];

  const workingHours = [
    { days: "All Days Available", hours: "10:00 AM – 10:00 PM" },
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
            <span>Connect</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground tracking-wide leading-tight"
          >
            Initiate Your <span className="italic text-gradient-gold">Healing Journey</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed"
          >
            All our energy healing services are conducted via distance healing. Select your modality, and we will establish connection using your photograph. We look forward to facilitating your transformation.
          </motion.p>
        </div>
      </section>

      {/* Contact Page Notice Callout */}
      <section className="px-6 relative z-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-[24px] border border-gold-500/20 bg-gold-500/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden glass shadow-lg"
          >
            {/* Inner aesthetic lights */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="flex items-start gap-4.5 z-10">
              <span className="p-3.5 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 shrink-0">
                <HelpCircle className="w-6 h-6" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl tracking-wide text-foreground font-semibold">
                  Clarity Call
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans max-w-3xl">
                  If you have any questions or need clarification about any of our services, you can contact us for a one-on-one session.
                  Please note that this is <strong className="text-foreground font-semibold">not a consultation service</strong>. It is only for answering your questions and clearing doubts related to our services.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-1 shrink-0 z-10 border-t md:border-t-0 border-neutral-200/20 dark:border-neutral-800/20 pt-4 md:pt-0 w-full md:w-auto">
              <span className="text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold">
                Session Fee
              </span>
              <span className="text-3xl font-serif text-gradient-gold font-bold">
                ₹500
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                Per 30 Minutes
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Split Content Layout */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Contacts, Hours */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-full flex flex-col"
            >
              <Card glowColor="violet" hoverEffect="none" className="p-8 flex flex-col justify-between h-full gap-8">
                <div className="flex flex-col gap-6">
                  <h3 className="text-2xl font-serif text-foreground tracking-wide border-b border-neutral-200/20 dark:border-neutral-800/20 pb-4">
                    Information
                  </h3>

                  {/* Direct Contacts */}
                  <div className="flex flex-col gap-5">
                    {contactDetails.map((detail, idx) => {
                      const IconComponent = detail.icon;
                      return (
                        <div key={idx} className="flex gap-4 items-start">
                          <span className="p-2.5 rounded-[12px] bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-300 shrink-0">
                            <IconComponent className="w-5 h-5" />
                          </span>
                          <div>
                            <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                              {detail.label}
                            </h5>
                            <p className="text-sm font-medium text-foreground mt-1 leading-relaxed">
                              {detail.value}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Working Hours */}
                  <div className="flex flex-col gap-4 pt-6 border-t border-neutral-200/20 dark:border-neutral-800/20">
                    <h4 className="font-serif text-lg text-foreground flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gold-500" /> Working Hours
                    </h4>
                    <div className="flex flex-col gap-2">
                      {workingHours.map((hr, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-neutral-500 dark:text-neutral-400">{hr.days}</span>
                          <span className="font-medium text-foreground">{hr.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Socials */}
                  <div className="flex items-center gap-3 pt-6 border-t border-neutral-200/20 dark:border-neutral-800/20">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mr-2">
                      Follow Us
                    </span>
                    <a
                      href="https://www.instagram.com/bodyandsoulwellness_?igsh=M2wxb3lodDZxM3hn&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-800 flex items-center justify-center hover:bg-gold-500 dark:hover:bg-gold-400 hover:text-white dark:hover:text-neutral-950 transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1AhXTAhLFb/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-800 flex items-center justify-center hover:bg-gold-500 dark:hover:bg-gold-400 hover:text-white dark:hover:text-neutral-950 transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Column: Modern Form */}
          <div className="lg:col-span-7 w-full h-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-full flex flex-col"
            >
              <Card glowColor="gold" hoverEffect="none" className="p-8 sm:p-10 h-full flex flex-col justify-between">
                <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-neutral-400">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </Card>
            </motion.div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
