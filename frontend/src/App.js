import React from "react";
import "@/App.css";
import ScrollProgress from "@/components/arpitx/ScrollProgress";
import MouseGlow from "@/components/arpitx/MouseGlow";
import Nav from "@/components/arpitx/Nav";
import Hero from "@/components/arpitx/Hero";
import Marquee from "@/components/arpitx/Marquee";
import Featured from "@/components/arpitx/Featured";
import ShortForm from "@/components/arpitx/ShortForm";
import Services from "@/components/arpitx/Services";
import Process from "@/components/arpitx/Process";
import Pricing from "@/components/arpitx/Pricing";
import FAQ from "@/components/arpitx/FAQ";
import Contact from "@/components/arpitx/Contact";
import Footer from "@/components/arpitx/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="film-grain min-h-screen bg-[#0a0a0a] text-[#f0f0f0] font-body relative">
      <ScrollProgress />
      <MouseGlow />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Featured />
        <ShortForm />
        <Services />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
