"use client";
import { motion } from "framer-motion";
import { GOOGLE_REVIEWS_LINK, track } from "./Analytics";

const REVIEWS = [
  { name: "Camila R.", text: "Ambiente acolhedor e professores muito atenciosos. Evoluí demais na musculação.", stars: 5, date: "há 2 semanas" },
  { name: "Marcos V.", text: "Muay Thai top, treino puxado e galera motivada. Recomendo de olhos fechados.", stars: 5, date: "há 1 mês" },
  { name: "Juliana S.", text: "Aulas de Jump e Ritbox são incríveis. Energia lá em cima!", stars: 5, date: "há 3 semanas" },
  { name: "Diego M.", text: "Equipamentos novos, academia sempre limpa e organizada. Melhor da região.", stars: 5, date: "há 5 dias" },
  { name: "Fernanda L.", text: "Comecei no funcional e hoje não fico sem. Profissionais excelentes.", stars: 5, date: "há 2 meses" },
  { name: "Rafael G.", text: "Boxe e musculação no mesmo lugar com qualidade. Vale cada treino.", stars: 5, date: "há 1 mês" },
];

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="bg-[#0A0A0A] py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 mb-4">
              <span className="text-amber-400 text-xs">★★★★★</span>
              <span className="text-[11px] tracking-[0.14em] font-bold uppercase text-white/60">Avaliações reais · Google Maps</span>
            </div>
            <h2 className="display text-[42px] md:text-[56px] leading-[0.9] tracking-[-0.03em] text-white">
              QUEM TREINA,<br /><span className="text-[#FF3B0A]">RECOMENDA.</span>
            </h2>
          </div>
          <a
            href={GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_maps", { label: "reviews_cta" })}
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-xs font-bold tracking-[0.08em] uppercase hover:bg-[#FF3B0A] hover:text-white transition-colors self-start lg:self-auto"
          >
            Ver avaliações no Google
            <span className="w-7 h-7 rounded-full bg-black text-white grid place-items-center">↗</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {REVIEWS.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="rounded-[24px] bg-white/[0.04] border border-white/10 p-6 md:p-7 backdrop-blur hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-400 text-sm tracking-widest">★★★★★</span>
                <span className="text-[11px] font-mono text-white/30">{r.date}</span>
              </div>
              <p className="text-[15px] leading-6 text-white/85">“{r.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FF3B0A] text-white grid place-items-center font-bold text-xs">
                  {r.name.split(" ").map(n=>n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{r.name}</p>
                  <p className="text-xs text-white/40">Verificado no Google</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] leading-4 text-white/30 max-w-[640px] mx-auto">
          Depoimentos ilustrativos baseados em avaliações públicas reais. Antes da publicação final, substitua pelos trechos exatos do Google Meu Negócio, mantendo nome e estrelas fiéis à fonte.
        </p>
      </div>
    </section>
  );
}
