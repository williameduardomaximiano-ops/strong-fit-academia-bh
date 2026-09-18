"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "./Analytics";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", alt: "Musculação", h: "aspect-[4/5]" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop", alt: "Treino funcional", h: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop", alt: "Equipamentos", h: "aspect-[4/3]" },
  { src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200&auto=format&fit=crop", alt: "Aula coletiva", h: "aspect-[16/10]" },
  { src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop", alt: "Boxe", h: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop", alt: "Muay Thai", h: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop", alt: "Jump", h: "aspect-[4/5]" },
  { src: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800&auto=format&fit=crop", alt: "Treino intenso", h: "aspect-[4/3]" },
];

export default function Galeria() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-[#F5F3EF] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <p className="text-[11px] tracking-[0.18em] font-bold uppercase text-black/40 mb-3">Galeria editorial · Fotos reais</p>
            <h2 className="display text-[40px] md:text-[56px] leading-[0.9] tracking-[-0.03em] text-black">
              VIVA A <span className="text-[#FF3B0A]">STRONG FIT</span>
            </h2>
          </div>
          <p className="text-sm leading-6 text-black/50 max-w-[36ch]">Estrutura, aulas e o clima de quem treina junto. Toque para ampliar.</p>
        </div>

        {/* Masonry-ish via columns on desktop, horizontal snap on mobile */}
        <div className="hidden md:block columns-2 lg:columns-3 gap-5 space-y-5">
          {IMAGES.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              onClick={() => { setActive(i); track("gallery_view", { index: i }); }}
              className={`group relative w-full overflow-hidden rounded-[20px] bg-black break-inside-avoid ${img.h} block text-left`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white text-black px-3 py-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile swipe */}
        <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-4 px-4">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); track("gallery_view", { index: i }); }}
              className="shrink-0 snap-center w-[78vw] max-w-[320px] aspect-[4/5] rounded-[20px] overflow-hidden bg-black relative"
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white text-black px-3 py-1 text-xs font-bold">{img.alt}</span>
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] tracking-wide text-black/30">Imagens ilustrativas de alta qualidade representando a estrutura real. Substitua por fotos oficiais da unidade Califórnia quando disponíveis.</p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Fechar"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-black grid place-items-center"
            >
              ✕
            </button>
            <motion.img
              key={active}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              src={IMAGES[active].src.replace("w=800", "w=1400").replace("w=1200", "w=1400")}
              alt={IMAGES[active].alt}
              className="max-w-full max-h-[84vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); setActive((v) => (v! > 0 ? v! - 1 : IMAGES.length - 1)); }}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white grid place-items-center"
                aria-label="Anterior"
              >
                ‹
              </button>
              <span className="text-white/70 text-xs font-mono px-3">{(active ?? 0) + 1} / {IMAGES.length}</span>
              <button
                onClick={(e) => { e.stopPropagation(); setActive((v) => (v! < IMAGES.length - 1 ? v! + 1 : 0)); }}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white grid place-items-center"
                aria-label="Próxima"
              >
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
