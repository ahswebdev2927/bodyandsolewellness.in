import React from "react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Hero } from "@/components/sections/home/hero";
import { DietPreview } from "@/components/sections/home/diet-preview";
import { Stats } from "@/components/sections/home/stats";
import { AboutPreview } from "@/components/sections/home/about-preview";
import { ServicesPreview } from "@/components/sections/home/services-preview";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { Timeline } from "@/components/sections/home/timeline";
import { EnergyExplained } from "@/components/sections/home/energy-explained";
import { FAQ } from "@/components/sections/home/faq";
import { BlogNewsletter } from "@/components/sections/home/blog-newsletter";
import { CTA } from "@/components/sections/home/cta";

export default function Home() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "Body and Soul Wellness",
            "image": "https://bodyandsoulwellness.in/logo.png",
            "@id": "https://bodyandsoulwellness.in/#business",
            "url": "https://bodyandsoulwellness.in/",
            "telephone": "+91-9573797979",
            "email": "bodyandsoulwellness3@gmail.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "addressCountry": "IN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "22:00"
            }
          })
        }}
      />
      {/* 1. Full Screen Hero Section */}
      <Hero />

      {/* 1.5 Diet Programs Preview */}
      <DietPreview />

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


      {/* 9. Accordion FAQ Section */}
      <FAQ />

      {/* 10. Blog & Instagram Gallery Section */}
      {/* <BlogNewsletter /> */}    

      {/* 11. Large CTA Banner */}
      <CTA />
    </PageWrapper>
  );
}
