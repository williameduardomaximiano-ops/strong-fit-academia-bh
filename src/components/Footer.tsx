"use client";
import { WHATSAPP_LINK, MAPS_LINK, track } from "./Analytics";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-10 md:py-14">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <p className="display text-[28px] leading-none tracking-[-0.02em]">
              <span className="text-white">STRONG</span> <span className="text-[#FF3B0A]">FIT</span>
            </p>
            <p className="mt-3 text-sm leading-6 text-white/50 max-w-[38ch]">
              Academia completa no Califórnia, BH. Musculação, Funcional, Jump, Muay Thai, Ritbox e Boxe. Feita para quem quer evoluir.
            </p>
            <div className="mt-5 flex gap-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => track("click_whatsapp", { location: "footer" })} className="rounded-full bg-[#FF3B0A] text-white px-4 py-2 text-xs font-bold tracking-wide uppercase">WhatsApp</a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" onClick={() => track("click_maps", { location: "footer" })} className="rounded-full bg-white/10 border border-white/10 text-white px-4 py-2 text-xs font-bold tracking-wide uppercase hover:bg-white hover:text-black transition-colors">Maps</a>
              <a href="#" onClick={(e) => { e.preventDefault(); track("click_instagram", {}); }} className="rounded-full bg-white/10 border border-white/10 text-white px-4 py-2 text-xs font-bold tracking-wide uppercase hover:bg-white hover:text-black transition-colors">Instagram</a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.16em] font-bold uppercase text-white/40">Endereço</p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Rua dos Bandolins, 232<br />Califórnia<br />Belo Horizonte — MG<br />CEP 30850-470
            </p>
            <a href="tel:+553136560734" className="mt-3 inline-block text-sm font-mono font-bold text-white hover:text-[#FF3B0A] transition-colors">(31) 3656-0734</a>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.16em] font-bold uppercase text-white/40">Horários</p>
            <div className="mt-3 space-y-2 text-sm text-white/70">
              <p><span className="text-white font-medium">Seg–Sex</span><br />06:00 – 22:00</p>
              <p><span className="text-white font-medium">Sábado</span><br />08:00 – 12:00</p>
              <p className="text-xs text-white/30">Domingo fechado</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.16em] font-bold uppercase text-white/40">Navegação</p>
            <nav className="mt-3 flex flex-col gap-2 text-sm text-white/60">
              <a href="#modalidades" className="hover:text-white transition-colors">Modalidades</a>
              <a href="#estrutura" className="hover:text-white transition-colors">Estrutura</a>
              <a href="#galeria" className="hover:text-white transition-colors">Galeria</a>
              <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações</a>
              <a href="/privacidade" className="hover:text-white transition-colors">Privacidade</a>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-t border-white/5 pt-6">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Strong Fit Academia — Califórnia, Belo Horizonte/MG. Todos os direitos reservados.</p>
          <p className="text-xs text-white/20">CNPJ sob consulta · Informações validadas em fontes públicas em set/2026. Confirme dados antes da contratação.</p>
        </div>
      </div>
    </footer>
  );
}
