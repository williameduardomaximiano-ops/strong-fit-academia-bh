"use client";
import { MAPS_LINK, MAPS_EMBED, track } from "./Analytics";

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-[#F5F3EF] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.16em] font-bold uppercase text-black/40 mb-3">Localização · Califórnia</p>
            <h2 className="display text-[44px] md:text-[56px] leading-[0.9] tracking-[-0.04em] text-black">
              TREINE<br /><span className="text-[#FF3B0A]">COM A GENTE</span>
            </h2>

            <div className="mt-6 rounded-[24px] bg-white border border-black/5 p-6 md:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <p className="text-[11px] tracking-[0.14em] font-bold uppercase text-black/40">Strong Fit Academia</p>
              <p className="mt-2 text-[15px] leading-6 text-black">
                Rua dos Bandolins, 232<br />
                Califórnia<br />
                Belo Horizonte — MG<br />
                <span className="font-mono text-sm">CEP 30850-470</span>
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-black text-white p-4">
                  <p className="text-[11px] tracking-[0.12em] font-bold uppercase opacity-60">Seg a Sex</p>
                  <p className="font-mono font-bold mt-1">06:00 – 22:00</p>
                </div>
                <div className="rounded-2xl bg-[#FF3B0A] text-white p-4">
                  <p className="text-[11px] tracking-[0.12em] font-bold uppercase opacity-80">Sábado</p>
                  <p className="font-mono font-bold mt-1">08:00 – 12:00</p>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-black/40">*Confirme horários na ficha oficial antes da visita.</p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("click_maps", { location: "localizacao" })}
                  className="inline-flex items-center justify-between bg-[#FF3B0A] hover:bg-[#E03000] text-white rounded-full pl-6 pr-1.5 py-1.5 text-sm font-bold tracking-[0.06em] uppercase transition-colors"
                >
                  Traçar rota no Maps
                  <span className="w-9 h-9 rounded-full bg-white text-black grid place-items-center">↗</span>
                </a>
                <a href="tel:+553136560734" onClick={() => track("click_whatsapp", { location: "localizacao_tel" })} className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold tracking-wide hover:bg-black hover:text-white transition-colors">
                  (31) 3656-0734
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[28px] overflow-hidden bg-white border border-black/5 p-1.5 shadow-[0_16px_48px_rgba(0,0,0,0.08)] h-[420px] md:h-[560px]">
              <div className="rounded-[20px] overflow-hidden w-full h-full bg-[#E8E8E8] relative">
                <iframe
                  title="Mapa Strong Fit - Rua dos Bandolins 232"
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white border border-black/10 px-3 py-1.5 font-medium">Fácil acesso na Califórnia</span>
              <span className="rounded-full bg-white border border-black/10 px-3 py-1.5 font-medium">Próximo a comércio local</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
