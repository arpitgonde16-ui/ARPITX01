import React from "react";

const cols = [
  {
    title: "Navigate",
    links: [
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Pricing", href: "#pricing" },
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/raw_arpitx", external: true },
      { label: "YouTube", href: "https://youtu.be/UULJ3cp1pfo", external: true },
      { label: "Fiverr", href: "http://www.fiverr.com/s/DB850QQ", external: true },
      { label: "Upwork", href: "https://www.upwork.com/freelancers/~011c3b6c989518fbd4", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative bg-[#030303] border-t border-[rgba(255,255,255,0.08)] overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59, 130, 246,0.20) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-24 pb-8 relative z-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-6">
            <div className="font-display uppercase text-6xl md:text-7xl lg:text-8xl text-white leading-none">
              ARPIT<span className="text-[#3B82F6]">X</span>
            </div>
            <div className="mt-4 font-condensed uppercase text-sm tracking-[0.3em] text-[#888]">
              Documentary Style Video Editing
            </div>
            <p className="mt-8 max-w-md text-[#666] leading-relaxed">
              18 years old. Self-taught. Just getting started. Available for
              creators worldwide — English communication, PayPal & Wise
              accepted.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="col-span-6 lg:col-span-3">
              <div className="font-condensed uppercase text-xs tracking-[0.4em] text-[#3B82F6] mb-6">
                {c.title}
              </div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      data-testid={`footer-link-${l.label.toLowerCase()}`}
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noreferrer" : undefined}
                      className="font-display uppercase text-lg text-white hover:text-[#3B82F6] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Massive text */}
        <div className="mt-20 lg:mt-28 overflow-hidden">
          <div className="font-display uppercase text-[22vw] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none pointer-events-none whitespace-nowrap">
            ARPITX
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-condensed uppercase text-[11px] tracking-[0.3em] text-[#666]">
            © 2026 ARPITX. All rights reserved.
          </div>
          <div className="font-condensed uppercase text-[11px] tracking-[0.3em] text-[#666]">
            18 years old · Self-taught · Just getting started
          </div>
        </div>
      </div>
    </footer>
  );
}
