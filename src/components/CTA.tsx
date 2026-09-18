"use client";
import { WHATSAPP_LINK, track } from "./Analytics";

export default function CTA() {
  return (
    <section className="relative bg-[#0A0A0A] py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background word */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden">
        <span className="display text-[30vw] leading-none tracking-[-0.05em] text-white/[0.03] whitespace-nowrap">STRONG</span>
      </div>

      <div className="relative mx-auto max-w-[1100px] px-4 md:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] tracking-[0.16em] font-bold uppercase text-white/60">Vagas limitadas por horário · Venha conhecer</span>
        </div>

        <h2 className="display text-[42px] md:text-[72px] lg:text-[84px] leading-[0.85] tracking-[-0.04em]">
          <span className="block text-white">O PRIMEIRO</span>
          <span className="block text-white">PASSO É</span>
          <span className="block text-[#FF3B0A]">COMEÇAR.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[560px] text-[15px] md:text-[17px] leading-7 text-white/60">
          Sem pressão, sem pegadinha. Venha conhecer a estrutura, conversar com a equipe e sentir a energia da Strong Fit de perto.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col items-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_whatsapp", { location: "cta_final" })}
            className="group inline-flex items-center gap-3 bg-[#FF3B0A] hover:bg-[#E03000] text-white rounded-full pl-8 pr-2 py-2 text-[14px] md:text-[16px] font-extrabold tracking-[0.06em] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_16px_40px_rgba(255,59,10,0.35)]"
          >
            Quero treinar na Strong Fit
            <span className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-black grid place-items-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-lg">↗</span>
          </a>
          <p className="text-xs tracking-wide text-white/40">
            Resposta rápida no WhatsApp · <a href="tel:+553136560734" className="underline underline-offset-4 hover:text-white">(31) 3656-0734</a> · Rua dos Bandolins, 232
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-3 gap-3 md:gap-4 max-w-[720px] mx-auto">
          {[
            { n: "06:00", l: "Abre cedo" },
            { n: "6", l: "Modalidades" },
            { n: "BH", l: "Califórnia" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-white/[0.04] border border-white/10 py-4">
              <p className="display text-2xl md:text-3xl text-white leading-none">{s.n}</p>
              <p className="text-[11px] tracking-[0.14em] uppercase font-bold text-white/40 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
