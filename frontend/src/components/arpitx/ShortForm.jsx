import React from "react";
import Reveal from "./Reveal";

const cards = [
  {
    real: true,
    title: "3 Editing Tips",
    category: "Editing Tips",
    platform: "Instagram Reels",
    duration: ":45",
    desc: "3 professional editing tricks — J Cuts, Match Cuts, Color Consistency.",
    link: "https://www.instagram.com/reel/DaTJbjWCHAN/",
  },
  { real: false, title: "Cinematic B-Roll Cut", category: "B-Roll", duration: "—" },
  { real: false, title: "Documentary Teaser", category: "Doc Trailer", duration: "—" },
  { real: false, title: "Motion Titles Reel", category: "Motion GFX", duration: "—" },
  { real: false, title: "Color Grade Study", category: "Color", duration: "—" },
  { real: false, title: "Sound Design Cut", category: "Audio", duration: "—" },
];

function CardShell({ children, testid, real, onClickHref }) {
  const inner = (
    <div className="relative h-full">
      {children}
    </div>
  );
  if (real && onClickHref) {
    return (
      <a
        data-testid={testid}
        href={onClickHref}
        target="_blank"
        rel="noreferrer"
        className="block group"
      >
        {inner}
      </a>
    );
  }
  return (
    <div data-testid={testid} className="group cursor-not-allowed">
      {inner}
    </div>
  );
}

export default function ShortForm() {
  return (
    <section
      id="portfolio"
      data-testid="shortform-section"
      className="relative py-24 lg:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#FF3D00]" />
            <span className="font-condensed uppercase text-xs tracking-[0.4em] text-[#FF3D00]">
              Short Form Content
            </span>
          </div>
        </Reveal>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12 lg:mb-16">
          <Reveal delay={100}>
            <h2 className="font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-white">
              Reels built <br /> for <span className="text-[#FF3D00]">retention.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-[#888888] max-w-sm">
              Vertical 9:16 cuts optimised for the scroll-thumb economy —
              punchy captions, trending audio, aggressive pacing.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <CardShell
                testid={c.real ? `reel-card-real-${i}` : `reel-card-soon-${i}`}
                real={c.real}
                onClickHref={c.link}
              >
                <div
                  className={`relative aspect-[9/13] bg-[#111111] border overflow-hidden transition-all duration-500 ${
                    c.real
                      ? "border-[rgba(255,255,255,0.08)] hover:border-[#FF3D00] group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_-10px_rgba(255,61,0,0.35)]"
                      : "border-dashed border-[rgba(255,255,255,0.08)]"
                  }`}
                >
                  {/* thumbnail area */}
                  <div className="absolute inset-0">
                    {c.real ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1f0d05]">
                        <div className="absolute inset-0 opacity-30 mix-blend-overlay"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 30% 30%, rgba(255,61,0,0.6), transparent 60%)",
                          }}
                        />
                        {/* mock timeline */}
                        <div className="absolute bottom-24 left-4 right-4 flex gap-1">
                          {Array.from({ length: 22 }).map((_, k) => (
                            <div
                              key={k}
                              className="flex-1 bg-[#FF3D00]/40"
                              style={{ height: 6 + Math.abs(Math.sin(k)) * 24 }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-display text-3xl lg:text-4xl text-[#222]">
                            SOON
                          </div>
                          <div className="mt-2 font-condensed text-[10px] tracking-[0.4em] text-[#333]">
                            REEL PENDING
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* corner brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#FF3D00]" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#FF3D00]" />

                  {/* top badges */}
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                    {c.real ? (
                      <span className="bg-black/70 backdrop-blur px-2 py-1 font-condensed text-[10px] tracking-widest text-white uppercase">
                        {c.duration}
                      </span>
                    ) : (
                      <span className="bg-[#FF3D00] text-black font-condensed text-[10px] tracking-[0.2em] uppercase px-2 py-1">
                        In Production
                      </span>
                    )}
                  </div>

                  {/* footer info */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <div className="font-condensed uppercase text-[10px] tracking-[0.3em] text-[#FF3D00] mb-1">
                      {c.category}
                    </div>
                    <div className="font-display uppercase text-lg text-white leading-tight">
                      {c.title}
                    </div>
                    {c.real && (
                      <div className="mt-1 text-xs text-[#888]">{c.platform}</div>
                    )}
                  </div>

                  {/* hover play indicator for real */}
                  {c.real && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-[#FF3D00] flex items-center justify-center">
                        <svg width="16" height="18" viewBox="0 0 12 14" fill="black"><path d="M11 6.13397C11.6667 6.51887 11.6667 7.48113 11 7.86603L2 13.0622C1.33333 13.4471 0.5 12.966 0.5 12.1962V1.80385C0.5 1.03405 1.33333 0.552922 2 0.937822L11 6.13397Z"/></svg>
                      </div>
                    </div>
                  )}
                </div>
                {c.real && c.desc && (
                  <p className="mt-3 text-sm text-[#888]">{c.desc}</p>
                )}
              </CardShell>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
