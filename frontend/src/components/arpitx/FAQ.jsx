import React from "react";
import Reveal from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a project take?",
    a: "YouTube Shorts delivered in 48 hours. Long-form videos in 24–48 hours depending on length and complexity.",
  },
  {
    q: "Do you work with foreign clients?",
    a: "Yes — I work with creators worldwide. All communication in English. Payment via PayPal or Wise.",
  },
  {
    q: "What software do you use?",
    a: "Adobe Premiere Pro and After Effects for all editing and motion graphics.",
  },
  {
    q: "Is the free trial edit really free?",
    a: "Yes — completely free, no strings attached. Send your footage and I will edit one video for free so you can see the quality before paying.",
  },
  {
    q: "How many revisions are included?",
    a: "1 revision on Starter, 2 on Pro, unlimited on Bundle package.",
  },
  {
    q: "What do I need to send you?",
    a: "Raw footage via Google Drive or WeTransfer, plus any reference videos or style notes you have.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 lg:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16">
        <div className="col-span-12 lg:col-span-4">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#FF3D00]" />
              <span className="font-condensed uppercase text-xs tracking-[0.4em] text-[#FF3D00]">
                Intel · FAQ
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display uppercase text-5xl md:text-6xl lg:text-6xl leading-[0.9] tracking-tight text-white">
              Answers <br /> before <br /> <span className="text-[#FF3D00]">you ask.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-[#888888] max-w-sm">
              Still curious? Drop a message in the transmission form and I
              will reply within a day.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <AccordionItem
                  value={`item-${i}`}
                  data-testid={`faq-item-${i}`}
                  className="border-b border-[rgba(255,255,255,0.08)] data-[state=open]:border-l-2 data-[state=open]:border-l-[#FF3D00] data-[state=open]:pl-6 transition-all"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline group">
                    <span className="flex items-baseline gap-4 flex-1">
                      <span className="font-condensed text-xs tracking-[0.3em] text-[#FF3D00]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display uppercase text-lg lg:text-xl text-white leading-tight group-hover:text-[#FFB800] transition-colors">
                        {f.q}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-10 text-[#a0a0a0] text-base leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
