"use client";
import { motion } from "framer-motion";
import { track, WHATSAPP_LINK } from "./Analytics";

const MODALIDADES = [
  {
    name: "Musculação",
    tag: "Força & Hipertrofia",
    desc: "Estrutura completa, pesos livres e máquinas para evoluir com segurança e acompanhamento.",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    span: "lg:col-span-7",
    accent: true,
  },
  {
    name: "Funcional",
    tag: "Condicionamento",
    desc: "Treino dinâmico que melhora força, agilidade e resistência.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    span: "lg:col-span-5",
  },
  {
    name: "Muay Thai",
    tag: "Luta & Disciplina",
    desc: "Técnica, foco e condicionamento em uma das lutas mais completas.",
    img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop",
    span: "lg:col-span-5",
  },
  {
    name: "Boxe",
    tag: "Explosão & Ritmo",
    desc: "Coordenação, cardio e força em treinos intensos e envolventes.",
    img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop",
    span: "lg:col-span-7",
    accent: true,
  },
  {
    name: "Jump",
    tag: "Cardio & Leveza",
    desc: "Aulas energéticas que queimam calorias com muita música e diversão.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    span: "lg:col-span-4",
  },
  {
    name: "Ritbox",
    tag: "Dança & Performance",
    desc: "Ritmo, coreografia e condicionamento em uma experiência contagiante.",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800&auto=format&fit=crop",
    span: "lg:col-span-8",
  },
];

export default function Modalidades() {
  return (
    <section id="modalidades" className="bg-[#F5F3EF] text-[#0A0A0A] py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF3B0A]" />
              <span className="text-[11px] tracking-[0.16em] font-bold uppercase text-black/60">Modalidades validadas</span>
            </div>
            <h2 className="display text-[42px] md:text-[64px] lg:text-[72px] leading-[0.85] tracking-[-0.04em]">
              <span className="block text-black">ENCONTRE</span>
              <span className="block text-[#FF3B0A]">SEU TREINO.</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] leading-6 text-black/60">
            Seis experiências diferentes, uma mesma energia. Escolha o que move você — ou combine todas.
            <span className="block mt-3 text-xs font-mono text-black/40">*Confirme horários e disponibilidade diretamente na academia.</span>
          </p>
        </div>

        {/* Asymmetrical bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          {MODALIDADES.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className={`group relative overflow-hidden rounded-[28px] md:rounded-[32px] bg-[#0A0A0A] min-h-[360px] md:min-h-[420px] flex flex-col justify-end p-6 md:p-8 ${m.span} ${m.accent ? "ring-1 ring-[#FF3B0A]/20" : ""}`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-[1.04] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF3B0A]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Top tag */}
              <div className="absolute top-5 left-6 right-6 flex items-start justify-between">
                <span className="rounded-full bg-white text-black px-3 py-1.5 text-[11px] font-bold tracking-[0.08em] uppercase">
                  {m.tag}
                </span>
                <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur border border-white/15 text-white grid place-items-center group-hover:bg-[#FF3B0A] group-hover:border-[#FF3B0A] group-hover:rotate-45 transition-all duration-500">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>

              {/* Bottom content */}
              <div className="relative">
                <h3 className="display text-[32px] md:text-[36px] leading-none tracking-[-0.02em] text-white">{m.name}</h3>
                <p className="mt-2 max-w-[36ch] text-[13.5px] leading-5 text-white/70">{m.desc}</p>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("click_modalidade", { modalidade: m.name })}
                    className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-xs font-bold tracking-[0.08em] uppercase hover:bg-[#FF3B0A] hover:text-white transition-colors"
                  >
                    Quero treinar
                  </a>
                  <span className="hidden md:inline text-xs tracking-[0.08em] uppercase font-bold text-white/50">0{i + 1} — 06</span>
                </div>
              </div>

              {/* Number watermark */}
              <span className="pointer-events-none absolute bottom-2 right-4 display text-[88px] leading-none text-white/[0.06] group-hover:text-white/[0.09] transition-colors">
                0{i + 1}
              </span>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-black/50">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-4 py-2 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Todas as modalidades com orientação profissional
          </span>
          <span className="hidden md:inline text-black/30">•</span>
          <span>Consulte disponibilidade e horários na recepção.</span>
        </div>
      </div>
    </section>
  );
}
