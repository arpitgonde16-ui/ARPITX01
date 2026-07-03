import React from "react";
import Reveal from "./Reveal";

const services = [
  {
    icon: "🎬",
    title: "Documentary Style Editing",
    desc: "Dramatic pacing, voiceover-driven storytelling, archival feel.",
  },
  {
    icon: "🎥",
    title: "YouTube Long-Form Editing",
    desc: "Full videos with color grade, captions, music, effects.",
  },
  {
    icon: "⚡",
    title: "YouTube Shorts & Reels",
    desc: "Vertical 9:16, fast cuts, punchy captions, trending audio.",
  },
  {
    icon: "🎨",
    title: "Motion Graphics",
    desc: "After Effects animations, titles, lower thirds, intros.",
  },
  {
    icon: "🌈",
    title: "Cinematic Color Grading",
    desc: "Consistent tone across all clips, LUT-based professional grade.",
  },
  {
    icon: "🔊",
    title: "Sound Design & SFX",
    desc: "Background music, whoosh effects, tension risers, audio mixing.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 lg:py-32 bg-[#030303]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#3B82F6]" />
            <span className="font-condensed uppercase text-xs tracking-[0.4em] text-[#3B82F6]">
              Services
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-white max-w-5xl">
            What I can <br /> <span className="text-[#3B82F6]">do</span> for you.
          </h2>
        </Reveal>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <div
                data-testid={`service-card-${i}`}
                className="group relative h-full bg-[#0d0d0d]/80 backdrop-blur border border-[rgba(255,255,255,0.08)] p-8 lg:p-10 transition-all duration-500 hover:border-[#3B82F6]/60 hover:-translate-y-1 hover:shadow-[0_20px_60px_-10px_rgba(59, 130, 246,0.35)] cursor-default overflow-hidden"
              >
                {/* index label */}
                <div className="absolute top-6 right-6 font-condensed text-[10px] tracking-[0.3em] text-[#333] group-hover:text-[#3B82F6] transition-colors">
                  {String(i + 1).padStart(2, "0")} / 06
                </div>

                <div className="text-4xl lg:text-5xl mb-8 inline-block transition-transform duration-500 group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="font-display uppercase text-xl lg:text-2xl text-white leading-tight mb-3 group-hover:text-[#60A5FA] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm lg:text-base text-[#888888] leading-relaxed">
                  {s.desc}
                </p>

                {/* bottom line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#3B82F6] transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
