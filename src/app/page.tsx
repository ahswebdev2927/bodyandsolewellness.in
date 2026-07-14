import React from "react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Hero } from "@/components/sections/home/hero";
import { Stats } from "@/components/sections/home/stats";
import { AboutPreview } from "@/components/sections/home/about-preview";
import { ServicesPreview } from "@/components/sections/home/services-preview";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { Timeline } from "@/components/sections/home/timeline";
import { EnergyExplained } from "@/components/sections/home/energy-explained";
import { Testimonials } from "@/components/sections/home/testimonials";
import { FAQ } from "@/components/sections/home/faq";
import { BlogNewsletter } from "@/components/sections/home/blog-newsletter";
import { CTA } from "@/components/sections/home/cta";

export default function Home() {
  return (
    <PageWrapper>
      {/* 1. Full Screen Hero Section */}
      <Hero />

      {/* 2. Trust Stats Section */}
      <Stats />

      {/* 3. About Preview Split Section */}
      <AboutPreview />

      {/* 4. Energy Explained, Benefits of Reiki, How Healing Works, Our Philosophy */}
      <EnergyExplained />

      {/* 5. Healing Services Preview Cards & Details Modals */}
      <ServicesPreview />

      {/* 6. Why Choose Us Feature Cards */}
      <WhyChooseUs />

      {/* 7. Healing Journey Step Timeline */}
      <Timeline />

      {/* 8. Client Testimonials Slider */}
      <Testimonials />

      {/* 9. Accordion FAQ Section */}
      <FAQ />

      {/* 10. Blog & Instagram Gallery Section */}
      {/* <BlogNewsletter /> */}

      {/* 11. Large CTA Banner */}
      <CTA />
    </PageWrapper>
  );
}
