import React from "react";
import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "You Send Footage",
    desc: "Send raw clips via Google Drive or WeTransfer with style notes.",
  },
  {
    num: "02",
    title: "I Edit It",
    desc: "Cinematic cut, color grade, motion graphics, music, SFX within 24–48 hours.",
  },
  {
    num: "03",
    title: "You Review",
    desc: "First draft delivered fast. Up to 2 free revisions included.",
  },
  {
    num: "04",
    title: "Upload & Go",
    desc: "Final export ready to upload directly to YouTube or Instagram.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="relative py-24 lg:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#FF3D00]" />
            <span className="font-condensed uppercase text-xs tracking-[0.4em] text-[#FF3D00]">
              The Protocol
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-white max-w-4xl">
            How it <span className="text-[#FF3D00]">works.</span>
          </h2>
        </Reveal>

        <div className="mt-12 lg:mt-20 relative">
          {/* Animated connecting line (desktop) */}
          <div className="hidden lg:block absolute left-0 right-0 top-[46px] h-[2px] bg-gradient-to-r from-[#FF3D00] via-[#FF3D00]/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 120}>
                <div data-testid={`process-step-${i}`} className="relative pt-8">
                  {/* badge */}
                  <div className="relative flex items-center gap-4 mb-8 lg:mb-10">
                    <div className="w-[92px] h-[92px] flex items-center justify-center bg-[#FF3D00] text-black font-display text-4xl relative z-10">
                      {s.num}
                      <div className="absolute inset-0 border-2 border-[#FF3D00] translate-x-2 translate-y-2 -z-0" />
                    </div>
                    <div className="hidden lg:block flex-1 h-[1px] border-t border-dashed border-[#FF3D00]/40" />
                  </div>
                  <h3 className="font-display uppercase text-2xl lg:text-3xl text-white leading-tight mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[#888888] leading-relaxed max-w-xs">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
