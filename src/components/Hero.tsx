"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_LINK, track } from "./Analytics";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative h-[100dvh] min-h-[640px] overflow-clip bg-[#050505]">
      {/* Background image with cinematic zoom */}
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="Strong Fit Academia - treino de musculação"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-[#FF3B0A]/[0.06] mix-blend-overlay" />
      </motion.div>

      {/* Grain handled by global */}

      {/* Content */}
      <motion.div style={{ opacity, y: textY }} className="relative z-10 h-full flex flex-col justify-end">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-10 pb-8 md:pb-10">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-3 mb-6 md:mb-8"
          >
            <span className="w-8 h-px bg-[#FF3B0A]" />
            <span className="text-[11px] tracking-[0.22em] font-bold text-white/80 uppercase">Rua dos Bandolins, 232 — Califórnia · BH</span>
            <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] tracking-[0.14em] font-bold text-white uppercase">Aberta hoje · 06:00–22:00</span>
            </span>
          </motion.div>

          {/* Massive headline */}
          <div className="relative">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.32, 0.72, 0, 1] }}
              className="display text-[15vw] md:text-[11vw] lg:text-[128px] xl:text-[148px] leading-[0.82] tracking-[-0.04em]"
            >
              <span className="block text-white">MAIS</span>
              <span className="block text-white flex items-center gap-3 md:gap-6">
                FORTE
                <span className="hidden md:inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#FF3B0A] text-white text-[18px] -rotate-12">
                  SF
                </span>
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                A CADA
              </span>
              <span className="block text-[#FF3B0A]">TREINO.</span>
            </motion.h1>

            {/* Floating stats card - desktop only, positioned absolute */}
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: 1 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="hidden xl:flex absolute right-0 top-[18%] flex-col gap-4 w-[300px]"
            >
              <div className="rounded-[24px] bg-white text-black p-6 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
                <p className="text-[11px] tracking-[0.16em] font-bold text-black/40 uppercase mb-3">Modalidades</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Musculação","Funcional","Jump","Muay Thai","Ritbox","Boxe"].map(m => (
                    <span key={m} className="px-2.5 py-1 rounded-full bg-black text-white text-[11px] font-bold tracking-wide">{m}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-black/60">
                  <span className="w-6 h-px bg-black/15" /> Estrutura completa para evoluir
                </div>
              </div>
              <div className="rounded-[20px] bg-[#FF3B0A] text-white p-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] tracking-[0.14em] font-bold opacity-80 uppercase">WhatsApp</p>
                  <p className="font-mono text-sm font-bold">(31) 3656-0734</p>
                </div>
                <span className="w-10 h-10 rounded-full bg-white text-[#FF3B0A] grid place-items-center">↗</span>
              </div>
            </motion.div>
          </div>

          {/* Sub + CTAs */}
          <div className="mt-6 md:mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="max-w-[560px] text-[15px] md:text-[17px] leading-7 text-white/70"
            >
              A academia da Califórnia feita para quem leva o treino a sério.
              <span className="text-white font-medium"> Estrutura, energia e comunidade</span> para você evoluir todos os dias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("click_whatsapp", { location: "hero_primary" })}
                className="group inline-flex items-center justify-between gap-4 bg-[#FF3B0A] hover:bg-[#E03000] text-white rounded-full pl-7 pr-1.5 py-1.5 text-[13px] font-extrabold tracking-[0.08em] uppercase transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]"
              >
                Quero conhecer a Strong Fit
                <span className="w-10 h-10 rounded-full bg-white text-black grid place-items-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3L10.5 8L5 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </a>
              <button
                onClick={() => {
                  track("click_cta", { label: "ver_modalidades" });
                  const el = document.querySelector("#modalidades");
                  const lenis = (window as unknown as { lenis?: { scrollTo: (t: string) => void } }).lenis;
                  if (lenis) lenis.scrollTo("#modalidades");
                  else el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/15 hover:bg-white hover:text-black text-white px-7 py-3.5 text-[13px] font-bold tracking-[0.08em] uppercase transition-all duration-300"
              >
                Ver modalidades
              </button>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 md:mt-10 flex items-center justify-between border-t border-white/10 pt-4 md:pt-5 gap-4"
          >
            <div className="flex items-center gap-4 md:gap-8 text-[11px] tracking-[0.14em] font-bold uppercase text-white/50">
              <span className="hidden md:inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF3B0A]" /> Musculação</span>
              <span className="hidden md:inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF3B0A]" /> Lutas</span>
              <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF3B0A]" /> Aulas coletivas</span>
              <span className="hidden sm:inline">• Seg a Sex 06:00–22:00 • Sáb 08:00–12:00</span>
            </div>
            <a href="#strong" className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.14em] font-bold uppercase text-white/60 hover:text-white transition-colors">
              Role para explorar
              <span className="w-8 h-8 rounded-full border border-white/15 grid place-items-center">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
