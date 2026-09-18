import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-[#0A0A0A] text-white flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] tracking-[0.18em] font-bold uppercase text-white/40">Erro 404</p>
      <h1 className="display text-[64px] md:text-[88px] leading-none mt-2">
        PÁGINA <span className="text-[#FF3B0A]">NÃO</span> ENCONTRADA
      </h1>
      <p className="mt-4 max-w-[420px] text-white/60 text-sm leading-6">A página que você procurou não existe. Volte para a Strong Fit e continue sua evolução.</p>
      <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF3B0A] text-white px-6 py-3 text-sm font-bold tracking-wide uppercase">
        Voltar ao início
      </Link>
    </div>
  );
}
