import React, { useEffect, useState } from "react";

const links = [
  { label: "WORK", href: "#featured" },
  { label: "SERVICES", href: "#services" },
  { label: "PROCESS", href: "#process" },
  { label: "PRICING", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <a
          data-testid="nav-logo"
          href="#top"
          className="font-display text-2xl lg:text-3xl tracking-widest text-white hover:text-[#3B82F6] transition-colors"
        >
          ARPIT<span className="text-[#3B82F6]">X</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              href={l.href}
              className="font-condensed uppercase text-sm tracking-[0.25em] text-[#f0f0f0]/70 hover:text-[#3B82F6] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          data-testid="nav-hire-cta"
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-[#3B82F6] text-black font-condensed uppercase text-sm font-bold tracking-widest px-5 py-2.5 hover:bg-[#60A5FA] transition-colors"
        >
          Hire Me <span>→</span>
        </a>
        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-[2px] bg-current mb-1.5" />
          <div className="w-6 h-[2px] bg-current mb-1.5" />
          <div className="w-4 h-[2px] bg-current ml-auto" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[#050505] border-t border-[rgba(255,255,255,0.08)] px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-condensed uppercase tracking-widest text-white hover:text-[#3B82F6]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-block bg-[#3B82F6] text-black font-condensed uppercase font-bold px-5 py-3"
          >
            Hire Me →
          </a>
        </div>
      )}
    </header>
  );
}
