import React from "react";
import Reveal from "./Reveal";

const tiers = [
  {
    id: "starter",
    name: "Starter",
    price: "$15",
    period: "/ video",
    features: [
      "YouTube Short up to 60 seconds",
      "Basic cuts and transitions",
      "Captions included",
      "1 revision",
      "48hr delivery",
    ],
    cta: "Start with Starter",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$35",
    period: "/ video",
    highlight: true,
    features: [
      "YouTube video up to 20 minutes",
      "Full cinematic color grade",
      "Motion graphics and titles",
      "Music and SFX",
      "2 revisions",
      "24hr delivery",
    ],
    cta: "Go Pro",
  },
  {
    id: "bundle",
    name: "Bundle",
    price: "$90",
    period: "/ month",
    features: [
      "4 videos per month",
      "Priority turnaround",
      "Dedicated communication",
      "Unlimited revisions",
      "Custom motion graphics",
    ],
    cta: "Book the Bundle",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-24 lg:py-32 bg-[#030303]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#3B82F6]" />
            <span className="font-condensed uppercase text-xs tracking-[0.4em] text-[#3B82F6]">
              Engagement
            </span>
          </div>
        </Reveal>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12 lg:mb-16">
          <Reveal delay={100}>
            <h2 className="font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-white">
              Simple <br /> <span className="text-[#3B82F6]">pricing.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-sm text-[#888888]">
              Flat rates. No agency markup. Foreign clients pay via PayPal or
              Wise.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}>
              <div
                data-testid={`pricing-card-${t.id}`}
                className={`relative h-full p-8 lg:p-10 flex flex-col transition-all duration-500 ${
                  t.highlight
                    ? "bg-[#050505] border-2 border-[#3B82F6] shadow-[0_0_80px_-10px_rgba(59, 130, 246,0.6)] lg:scale-[1.02] z-10"
                    : "bg-[#0d0d0d]/80 border border-[rgba(255,255,255,0.08)] hover:border-[#3B82F6]/50"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-8 bg-[#3B82F6] text-black font-condensed uppercase text-[10px] font-bold tracking-[0.3em] px-3 py-1">
                    Most Popular
                  </div>
                )}
                <div className="font-condensed uppercase text-xs tracking-[0.4em] text-[#3B82F6]">
                  {t.name}
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <div className="font-display text-6xl lg:text-7xl text-white leading-none">
                    {t.price}
                  </div>
                  <div className="font-condensed uppercase text-sm tracking-widest text-[#888]">
                    {t.period}
                  </div>
                </div>

                <div className="mt-8 h-px bg-[rgba(255,255,255,0.08)]" />

                <ul className="mt-8 space-y-4 flex-1">
                  {t.features.map((f, k) => (
                    <li key={k} className="flex items-start gap-3 text-sm lg:text-base">
                      <span className="mt-1 w-4 h-4 bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="black" strokeWidth="2" />
                        </svg>
                      </span>
                      <span className="text-[#e0e0e0] leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  data-testid={`pricing-cta-${t.id}`}
                  href="#contact"
                  className={`mt-10 inline-flex items-center justify-center gap-2 font-condensed uppercase font-bold tracking-widest px-6 py-4 transition-colors ${
                    t.highlight
                      ? "bg-[#3B82F6] text-black hover:bg-[#60A5FA]"
                      : "border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-black"
                  }`}
                >
                  {t.cta} <span>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
