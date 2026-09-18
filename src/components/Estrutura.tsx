"use client";
import { motion } from "framer-motion";

export default function Estrutura() {
  return (
    <section id="estrutura" className="bg-[#0A0A0A] py-16 md:py-24 lg:py-32 overflow-clip">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left sticky editorial */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF3B0A]" />
              <span className="text-[11px] tracking-[0.16em] font-bold uppercase text-white/60">Estrutura Strong Fit</span>
            </div>
            <h2 className="display text-[44px] md:text-[64px] leading-[0.85] tracking-[-0.04em]">
              <span className="block text-white">FEITA PARA</span>
              <span className="block text-white/20">QUEM QUER</span>
              <span className="block text-[#FF3B0A]">EVOLUIR.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-white/60 max-w-[44ch]">
              Ambiente sério, sem firula. Equipamentos bem cuidados, áreas bem divididas e energia de quem veio para fazer acontecer.
              <span className="text-white font-medium"> Fotos reais da unidade Califórnia.</span>
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { k: "AMBIENTE", v: "Climatizado e organizado" },
                { k: "EQUIPES", v: "Orientação presente" },
                { k: "HORÁRIO", v: "06:00 – 22:00 (seg-sex)" },
                { k: "LOCAL", v: "Califórnia — BH" },
              ].map((f) => (
                <div key={f.k} className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                  <p className="text-[11px] tracking-[0.14em] font-bold uppercase text-[#FF3B0A]">{f.k}</p>
                  <p className="text-sm font-medium text-white mt-1">{f.v}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[11px] leading-4 text-white/30">
              *Comodidades citadas em fontes públicas foram omitidas até confirmação presencial. Tudo aqui é o que você realmente encontra na visita.
            </p>
          </div>

          {/* Right editorial masonry - asymmetrical */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 md:gap-5">
            {/* Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="col-span-12 rounded-[28px] overflow-hidden bg-[#141414] border border-white/5 p-1.5"
            >
              <div className="rounded-[20px] overflow-hidden relative aspect-[16/10]">
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop" alt="Área de musculação Strong Fit" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-white font-bold tracking-[0.08em] uppercase text-xs">Musculação</p>
                    <p className="text-white/70 text-xs">Pesos livres • máquinas • circuito</p>
                  </div>
                  <span className="rounded-full bg-white text-black px-3 py-1.5 text-xs font-bold">01</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.7 }}
              className="col-span-7 rounded-[24px] overflow-hidden bg-[#141414] border border-white/5 p-1.5"
            >
              <div className="rounded-[18px] overflow-hidden aspect-[4/5] relative">
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop" alt="Área de treino funcional" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-wide">FUNCIONAL</p>
              </div>
            </motion.div>

            <div className="col-span-5 flex flex-col gap-4 md:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12, duration: 0.7 }}
                className="rounded-[24px] overflow-hidden bg-[#FF3B0A] p-6 text-white flex-1 flex flex-col justify-between min-h-[180px]"
              >
                <p className="display text-[28px] leading-none">SEM<br/>DESCULPA.</p>
                <p className="text-sm leading-5 opacity-90">Abre 6h da manhã. Fecha 22h. Seu horário existe.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16, duration: 0.7 }}
                className="rounded-[24px] overflow-hidden bg-[#141414] border border-white/5 p-1.5"
              >
                <div className="rounded-[18px] overflow-hidden aspect-square relative">
                  <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop" alt="Aula coletiva Strong Fit" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-white text-xs font-bold">AULAS COLETIVAS</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.7 }}
              className="col-span-12 rounded-[24px] bg-white text-black p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <p className="text-[11px] tracking-[0.16em] font-bold uppercase text-black/40">Compromisso Strong</p>
                <p className="display text-[28px] md:text-[32px] leading-none mt-1">TREINO SÉRIO.<br/>CLIMA LEVE.</p>
              </div>
              <p className="max-w-[32ch] text-sm leading-6 text-black/60">Gente real, evolução real. Sem espelho para selfie vazia — espelho para ajustar execução.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
