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
      className="relative bg-[#FF3D00] text-black py-4 lg:py-5 border-y border-black/10 overflow-hidden"
    >
      <div className="flex animate-marquee whitespace-nowrap gap-10">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="font-display uppercase text-2xl md:text-3xl lg:text-4xl tracking-wider inline-flex items-center gap-10"
          >
            {it}
            <span className="text-black/80 text-xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
