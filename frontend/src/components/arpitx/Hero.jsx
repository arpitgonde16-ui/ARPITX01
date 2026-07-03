import React, { useState } from "react";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const stats = [
  { type: "num", value: 1, suffix: "", label: "Documentary Published" },
  { type: "num", value: 18, suffix: "", label: "Years Old" },
  { type: "text", value: "100%", label: "Self-Taught" },
  { type: "text", value: "Ae · Pr", label: "Premiere + After Effects" },
];

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen pt-28 lg:pt-32 pb-16 overflow-hidden"
    >
      {/* Ambient orange glow */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,61,0,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,184,0,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Overline */}
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#FF3D00] rounded-full animate-pulse" />
            <span
              data-testid="hero-status"
              className="font-condensed uppercase text-[11px] lg:text-xs tracking-[0.4em] text-[#FF3D00]"
            >
              Available for Global Clients · Reel Editor 001
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left: Headline */}
          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={100}>
              <h1
                data-testid="hero-headline"
                className="font-display uppercase text-[13vw] sm:text-[10vw] lg:text-[7.5vw] leading-[0.9] tracking-tight text-white"
              >
                I turn <br />
                raw footage <br />
                into <span className="text-[#FF3D00]">cinematic</span> <br />
                stories.
              </h1>
            </Reveal>

            <Reveal delay={250}>
              <p
                data-testid="hero-sub"
                className="mt-6 lg:mt-8 max-w-xl text-[#888888] text-base lg:text-lg leading-relaxed"
              >
                Documentary-style editing, YouTube videos, motion graphics,
                color grading, and storytelling that stops the scroll.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-8 lg:mt-10 flex flex-wrap gap-4">
                <MagneticButton
                  data-testid="hero-cta-portfolio"
                  href="#featured"
                  className="bg-[#FF3D00] text-black font-condensed uppercase font-bold tracking-widest px-7 py-4 hover:bg-[#FFB800] transition-colors"
                >
                  View Portfolio <span>→</span>
                </MagneticButton>
                <MagneticButton
                  data-testid="hero-cta-trial"
                  href="#contact"
                  className="border border-[#FF3D00] text-[#FF3D00] font-condensed uppercase font-bold tracking-widest px-7 py-4 hover:bg-[#FF3D00] hover:text-black transition-colors"
                >
                  Get a Free Trial Edit
                </MagneticButton>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={600}>
              <div
                data-testid="hero-stats"
                className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border-t border-[rgba(255,255,255,0.08)] pt-8"
              >
                {stats.map((s, i) => (
                  <div key={i} data-testid={`stat-${i}`} className="relative">
                    <div className="font-display text-4xl lg:text-5xl text-white">
                      {s.type === "num" ? (
                        <CountUp to={s.value} suffix={s.suffix} />
                      ) : (
                        <span>{s.value}</span>
                      )}
                    </div>
                    <div className="mt-2 font-condensed uppercase text-[11px] lg:text-xs tracking-[0.25em] text-[#888888]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Video Frame */}
          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={200}>
              <button
                data-testid="hero-video-wrap"
                onClick={() => setOpen(true)}
                aria-label="Play featured documentary"
                className="group relative w-full corner-frame border border-[rgba(255,255,255,0.08)] aspect-[9/12] lg:aspect-[9/13] bg-black overflow-hidden transition-all duration-500 hover:border-[#FF3D00]/60 animate-glow cursor-pointer"
              >
                {/* Tape label */}
                <div className="absolute -top-3 left-6 z-20">
                  <span className="tape-label text-xs">FT-001</span>
                </div>
                {/* Meta strip */}
                <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1 pointer-events-none">
                  <span className="font-condensed text-[10px] tracking-[0.3em] text-white/60 uppercase">
                    ● REC · 4K
                  </span>
                  <span className="font-condensed text-[10px] tracking-[0.3em] text-[#FF3D00]/80 uppercase">
                    ARPITX-CUT
                  </span>
                </div>

                {/* Poster image */}
                <img
                  src="https://img.youtube.com/vi/UULJ3cp1pfo/maxresdefault.jpg"
                  alt="Why America Loves War"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#FF3D00] blur-2xl opacity-50 group-hover:opacity-90 transition-opacity" />
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#FF3D00] flex items-center justify-center shadow-[0_0_50px_-5px_rgba(255,61,0,0.7)] group-hover:scale-110 transition-transform">
                      <svg width="18" height="22" viewBox="0 0 12 14" fill="none" className="ml-1">
                        <path d="M11 6.13397C11.6667 6.51887 11.6667 7.48113 11 7.86603L2 13.0622C1.33333 13.4471 0.5 12.966 0.5 12.1962V1.80385C0.5 1.03405 1.33333 0.552922 2 0.937822L11 6.13397Z" fill="black"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Scan line overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    background:
                      "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,61,0,0.05) 4px, transparent 5px)",
                  }}
                />

                {/* Bottom info strip */}
                <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black via-black/70 to-transparent p-4 pt-10">
                  <div className="flex items-end justify-between">
                    <div className="text-left">
                      <div className="font-display text-lg text-white leading-none">
                        WHY AMERICA <br /> LOVES WAR
                      </div>
                      <div className="mt-2 font-condensed text-[10px] tracking-[0.3em] text-[#FF3D00] uppercase">
                        Documentary · Feature
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
            <Reveal delay={350}>
              <div className="mt-4 flex items-center justify-between text-[11px] font-condensed uppercase tracking-[0.3em] text-[#888888]">
                <span>SIGNAL LOCK</span>
                <span>SC / 001</span>
                <span className="text-[#FF3D00]">◉ LIVE</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Video lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          data-testid="hero-video-lightbox"
          className="max-w-5xl w-[95vw] p-0 bg-black border border-[#FF3D00]/40"
        >
          <DialogTitle className="sr-only">Why America Loves War</DialogTitle>
          <div className="aspect-video w-full">
            {open && (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/UULJ3cp1pfo?autoplay=1&rel=0"
                title="Why America Loves War"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
