import React from "react";

const items = [
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Cinematic Color Grading",
  "Motion Graphics",
  "Sound Design",
  "Documentary Style",
  "YouTube Editing",
  "Voiceover Editing",
  "Foreign Clients Welcome",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <section
      data-testid="marquee-section"
      aria-label="Skills marquee"
      className="relative bg-[#080808] text-white py-6 lg:py-7 border-y border-[rgba(255,255,255,0.06)] overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#080808] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#080808] to-transparent"
      />
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl lg:text-4xl tracking-tight inline-flex items-center gap-12 text-white/85"
          >
            {it}
            <span className="text-[#3B82F6] text-xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
