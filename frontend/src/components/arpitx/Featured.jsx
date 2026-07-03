import React, { useState } from "react";
import Reveal from "./Reveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Featured() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="featured"
      data-testid="featured-section"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#3B82F6]" />
            <span className="font-condensed uppercase text-xs tracking-[0.4em] text-[#3B82F6]">
              Featured Documentary
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-white max-w-4xl">
            The debut <br />
            <span className="text-[#3B82F6]">feature.</span>
          </h2>
        </Reveal>

        <div className="mt-12 lg:mt-16 grid grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Video card */}
          <div className="col-span-12 lg:col-span-8">
            <Reveal delay={150}>
              <button
                data-testid="featured-play-btn"
                onClick={() => setOpen(true)}
                className="group relative w-full aspect-video bg-black corner-frame border border-[rgba(255,255,255,0.08)] hover:border-[#3B82F6]/70 transition-all duration-500 overflow-hidden"
                aria-label="Play featured documentary"
              >
                <img
                  src="https://img.youtube.com/vi/UULJ3cp1pfo/maxresdefault.jpg"
                  alt="Why America Loves War"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 pointer-events-none" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#3B82F6] blur-xl opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-[#3B82F6] flex items-center justify-center shadow-[0_0_60px_-5px_rgba(59, 130, 246,0.6)] group-hover:scale-110 transition-transform">
                      <svg width="26" height="30" viewBox="0 0 12 14" fill="none" className="lg:w-8 lg:h-9 ml-1">
                        <path d="M11 6.13397C11.6667 6.51887 11.6667 7.48113 11 7.86603L2 13.0622C1.33333 13.4471 0.5 12.966 0.5 12.1962V1.80385C0.5 1.03405 1.33333 0.552922 2 0.937822L11 6.13397Z" fill="black"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom title bar */}
                <div className="absolute bottom-0 inset-x-0 p-5 lg:p-8 pointer-events-none">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="font-display uppercase text-2xl lg:text-4xl text-white leading-none">
                        Why America Loves War
                      </div>
                      <div className="mt-3 flex items-center gap-3 font-condensed uppercase text-[10px] lg:text-xs tracking-[0.3em] text-white/70">
                        <span className="text-[#3B82F6]">● DOC</span>
                        <span>·</span>
                        <span>Feature</span>
                        <span>·</span>
                        <span>Self-Edited</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          </div>

          {/* Meta */}
          <div className="col-span-12 lg:col-span-4">
            <Reveal delay={250}>
              <div className="border-l-2 border-[#3B82F6] pl-6 py-2">
                <div className="font-condensed uppercase text-xs tracking-[0.3em] text-[#3B82F6] mb-3">
                  Featured · 01
                </div>
                <h3 className="font-display uppercase text-2xl lg:text-3xl text-white leading-tight mb-4">
                  Why America Loves War
                </h3>
                <p className="text-[#888888] leading-relaxed">
                  A full documentary exploring America&apos;s 250-year history
                  of wars and the military industrial complex. Self-researched.
                  Self-edited. Motion graphics. Color grade. Sound design.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 text-xs font-condensed uppercase tracking-[0.2em]">
                  {[
                    ["Role", "Editor · Motion · Color"],
                    ["Software", "Premiere · After Effects"],
                    ["Runtime", "Feature"],
                    ["Year", "2026"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div className="text-[#666]">{k}</div>
                      <div className="text-white mt-1">{v}</div>
                    </div>
                  ))}
                </div>

                <a
                  data-testid="featured-external"
                  href="https://youtu.be/UULJ3cp1pfo"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-condensed uppercase text-xs tracking-[0.3em] text-white hover:text-[#3B82F6] transition-colors"
                >
                  Watch on YouTube →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          data-testid="featured-lightbox"
          className="max-w-5xl w-[95vw] p-0 bg-black border border-[#3B82F6]/40"
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
