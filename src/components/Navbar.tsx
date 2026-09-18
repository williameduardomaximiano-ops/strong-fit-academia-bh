"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_LINK, MAPS_LINK, track } from "./Analytics";

const LINKS = [
  { label: "Modalidades", href: "#modalidades" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Galeria", href: "#galeria" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  const scrollTo = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      const lenis = (window as unknown as { lenis?: { scrollTo: (t: string | number, o?: unknown) => void } }).lenis;
      if (lenis && el) lenis.scrollTo(href, { offset: -80 });
      else el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      {/* Top bar desktop - floating island */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 inset-x-0 z-40 flex justify-center pointer-events-none px-4"
      >
        <div
          className={`pointer-events-auto mt-4 md:mt-6 flex items-center gap-2 md:gap-6 rounded-full border px-2 py-2 md:px-3 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? "bg-[#0A0A0A]/80 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]"
              : "bg-white/[0.04] backdrop-blur-xl border-white/10"
          }`}
        >
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2 pl-3 pr-2">
            <span className="display text-[18px] md:text-[20px] tracking-[-0.02em] leading-none">
              <span className="text-white">STRONG</span>
              <span className="text-[#FF3B0A]"> FIT</span>
            </span>
            <span className="hidden md:inline-flex ml-2 text-[10px] tracking-[0.18em] text-white/50 font-medium border-l border-white/15 pl-3 py-1">CALIFÓRNIA · BH</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="px-3.5 py-2 rounded-full text-[12.5px] tracking-[0.08em] font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors uppercase"
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_whatsapp", { location: "navbar" })}
            className="hidden md:inline-flex items-center gap-2 bg-[#FF3B0A] hover:bg-[#E03000] text-white rounded-full pl-5 pr-1.5 py-1.5 text-[12px] font-bold tracking-[0.08em] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
          >
            Quero conhecer
            <span className="w-7 h-7 rounded-full bg-white text-[#FF3B0A] grid place-items-center group-hover:translate-x-0.5 transition-transform duration-300">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="w-10 h-10 rounded-full bg-white text-black grid place-items-center lg:hidden shrink-0"
          >
            <span className="relative w-4 h-3.5 block">
              <span className={`absolute left-0 w-4 h-[1.8px] bg-black rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? "top-[6px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[6px] w-4 h-[1.8px] bg-black rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : "opacity-100"}`} />
              <span className={`absolute left-0 w-4 h-[1.8px] bg-black rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? "top-[6px] -rotate-45" : "top-[12px]"}`} />
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 bg-[#050505]/90 backdrop-blur-[20px] lg:hidden"
          >
            <div className="min-h-[100dvh] flex flex-col px-6 pt-24 pb-8">
              <div className="flex-1 flex flex-col justify-center gap-2">
                {LINKS.map((l, i) => (
                  <motion.button
                    key={l.href}
                    initial={{ y: 32, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 16, opacity: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    onClick={() => scrollTo(l.href)}
                    className="text-left display text-[44px] leading-[0.9] text-white/90 hover:text-[#FF3B0A] transition-colors"
                  >
                    <span className="text-white/20 text-[12px] font-mono tracking-[0.2em] align-super mr-3">0{i + 1}</span>
                    {l.label}
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("click_whatsapp", { location: "menu_mobile" })}
                  className="flex items-center justify-between bg-[#FF3B0A] text-white rounded-full px-6 py-4 font-bold tracking-[0.08em] uppercase text-sm"
                >
                  Quero conhecer a Strong Fit
                  <span className="w-9 h-9 rounded-full bg-white text-[#FF3B0A] grid place-items-center">↗</span>
                </a>
                <div className="flex gap-3 text-xs text-white/50 font-mono">
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Traçar rota</a>
                  <span>•</span>
                  <a href="tel:+553136560734" className="underline underline-offset-4">(31) 3656-0734</a>
                </div>
                <p className="text-[11px] tracking-[0.14em] uppercase text-white/30">Rua dos Bandolins, 232 — Califórnia · BH</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
