import React, { useState } from "react";
import Reveal from "./Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const projectTypes = [
  "Documentary Style Video",
  "YouTube Long-Form",
  "YouTube Shorts / Reels",
  "Motion Graphics",
  "Free Trial Edit",
];

const budgets = [
  "$15 Starter",
  "$35 Pro",
  "$90/month Bundle",
  "Let's discuss",
];

const contactLinks = [
  {
    label: "Email",
    value: "arpitgonde16@gmail.com",
    href: "mailto:arpitgonde16@gmail.com",
    icon: "✉",
  },
  {
    label: "Instagram",
    value: "@raw_arpitx",
    href: "https://www.instagram.com/raw_arpitx",
    icon: "◎",
  },
  {
    label: "Fiverr",
    value: "fiverr.com/s/DB850QQ",
    href: "http://www.fiverr.com/s/DB850QQ",
    icon: "★",
  },
  {
    label: "Upwork",
    value: "upwork.com/freelancers",
    href: "https://www.upwork.com/freelancers/~011c3b6c989518fbd4",
    icon: "◆",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    channel: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(
      `New Project Inquiry — ${form.projectType || "General"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}
YouTube Channel: ${form.channel || "—"}
Project Type: ${form.projectType || "—"}
Budget: ${form.budget || "—"}

Message:
${form.message}
`
    );
    window.location.href = `mailto:arpitgonde16@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success("Directive sent — your email client is opening.");
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,61,0,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left: heading + contact links */}
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-[#FF3D00]" />
                <span className="font-condensed uppercase text-xs tracking-[0.4em] text-[#FF3D00]">
                  Initiate Transmission
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-white">
                Let&apos;s create <br /> something <br />
                <span className="text-[#FF3D00]">great.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-[#888888] leading-relaxed max-w-md">
                Ready to level up your YouTube channel? Get a free trial edit
                — no strings attached.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-12 space-y-4">
                {contactLinks.map((c) => (
                  <a
                    key={c.label}
                    data-testid={`contact-link-${c.label.toLowerCase()}`}
                    href={c.href}
                    target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-center gap-5 border-b border-[rgba(255,255,255,0.08)] py-4 hover:border-[#FF3D00] transition-colors"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-[#FF3D00]/40 text-[#FF3D00] group-hover:bg-[#FF3D00] group-hover:text-black transition-colors">
                      {c.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-condensed uppercase text-[10px] tracking-[0.3em] text-[#666]">
                        {c.label}
                      </div>
                      <div className="font-display text-lg text-white group-hover:text-[#FF3D00] transition-colors">
                        {c.value}
                      </div>
                    </div>
                    <span className="text-[#FF3D00] opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={200}>
              <form
                data-testid="contact-form"
                onSubmit={onSubmit}
                className="relative bg-[#111111]/60 backdrop-blur border border-[rgba(255,255,255,0.08)] p-6 lg:p-10 corner-frame"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="font-condensed uppercase text-[11px] tracking-[0.3em] text-[#888]">
                      Name
                    </label>
                    <Input
                      data-testid="input-name"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      className="bg-transparent border-0 border-b border-[rgba(255,255,255,0.15)] rounded-none focus-visible:ring-0 focus-visible:border-[#FF3D00] px-0 h-11 text-white font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-condensed uppercase text-[11px] tracking-[0.3em] text-[#888]">
                      Email
                    </label>
                    <Input
                      data-testid="input-email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@channel.com"
                      className="bg-transparent border-0 border-b border-[rgba(255,255,255,0.15)] rounded-none focus-visible:ring-0 focus-visible:border-[#FF3D00] px-0 h-11 text-white font-body"
                    />
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <label className="font-condensed uppercase text-[11px] tracking-[0.3em] text-[#888]">
                    YouTube Channel Link
                  </label>
                  <Input
                    data-testid="input-channel"
                    value={form.channel}
                    onChange={update("channel")}
                    placeholder="https://youtube.com/@yourchannel"
                    className="bg-transparent border-0 border-b border-[rgba(255,255,255,0.15)] rounded-none focus-visible:ring-0 focus-visible:border-[#FF3D00] px-0 h-11 text-white font-body"
                  />
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="font-condensed uppercase text-[11px] tracking-[0.3em] text-[#888]">
                      Project Type
                    </label>
                    <Select
                      value={form.projectType}
                      onValueChange={(v) => setForm((f) => ({ ...f, projectType: v }))}
                    >
                      <SelectTrigger
                        data-testid="select-project"
                        className="bg-transparent border-0 border-b border-[rgba(255,255,255,0.15)] rounded-none focus:ring-0 px-0 h-11 text-white font-body"
                      >
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a0a0a] border-[rgba(255,255,255,0.15)] text-white">
                        {projectTypes.map((p) => (
                          <SelectItem key={p} value={p} className="font-condensed uppercase text-sm tracking-wider focus:bg-[#FF3D00] focus:text-black">
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-condensed uppercase text-[11px] tracking-[0.3em] text-[#888]">
                      Budget
                    </label>
                    <Select
                      value={form.budget}
                      onValueChange={(v) => setForm((f) => ({ ...f, budget: v }))}
                    >
                      <SelectTrigger
                        data-testid="select-budget"
                        className="bg-transparent border-0 border-b border-[rgba(255,255,255,0.15)] rounded-none focus:ring-0 px-0 h-11 text-white font-body"
                      >
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a0a0a] border-[rgba(255,255,255,0.15)] text-white">
                        {budgets.map((b) => (
                          <SelectItem key={b} value={b} className="font-condensed uppercase text-sm tracking-wider focus:bg-[#FF3D00] focus:text-black">
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <label className="font-condensed uppercase text-[11px] tracking-[0.3em] text-[#888]">
                    Message
                  </label>
                  <Textarea
                    data-testid="input-message"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell me about your channel, footage, references..."
                    rows={5}
                    className="bg-transparent border border-[rgba(255,255,255,0.15)] rounded-none focus-visible:ring-0 focus-visible:border-[#FF3D00] px-4 py-3 text-white font-body resize-none"
                  />
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                  <div className="text-xs font-condensed uppercase tracking-[0.3em] text-[#666]">
                    Opens your email client · Direct to Arpit
                  </div>
                  <button
                    data-testid="contact-submit"
                    type="submit"
                    disabled={sent}
                    className="btn-magnetic relative overflow-hidden bg-[#FF3D00] text-black font-condensed uppercase font-bold tracking-widest px-8 py-4 hover:bg-[#FFB800] transition-colors disabled:opacity-80 disabled:cursor-default flex items-center gap-3"
                  >
                    {sent ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10.5L8 14.5L16 6" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Sent
                      </>
                    ) : (
                      <>
                        Start Your Project <span>→</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
