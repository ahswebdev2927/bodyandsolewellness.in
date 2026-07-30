"use client";

import React from "react";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQ() {
  const faqItems = [
    {
      id: "q1",
      title: "What is Reiki and how does it heal the body?",
      content: "Reiki is a Japanese energy healing technique. The word comes from 'Rei' (universal) and 'Ki' (life energy). Practitioners act as conduits, channeling this high-frequency light energy into your body. This replenishes your natural field, dissolves stress, releases toxic blocks, and activates the nervous system's parasympathetic self-repair mechanisms.",
    },
    {
      id: "q2",
      title: "What does a typical energy healing session feel like?",
      content: "Experiences vary but are universally deeply peaceful. Most clients feel a warm, comforting radiance, a light tingling sensation, or gentle waves of energy rippling through the body. Many describe entering a dreamlike state of deep relaxation. You may also experience emotional releases like sighs, tears, or a sudden sense of deep relief.",
    },
    {
      id: "q3",
      title: "Are all sessions conducted as distance healing, and are they effective?",
      content: "Yes, absolutely. All our services are conducted via distance healing. In quantum mechanics and energy fields, space and time are not boundaries. We use specialized Reiki symbols and a recent photograph (your image) to connect with your unique energy grid. The healing energy is directed with intention and behaves identically to an in-person session, yielding deep, transformative results.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-16 px-6 bg-neutral-50/10 dark:bg-neutral-950/10 z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="Inquiries"
          title="Common Questions"
          subtitle="Clear your doubts and learn more about how energy healing works, session preparations, and what to expect."
        />

        <div className="mt-10">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
