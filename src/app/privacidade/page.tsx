import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Strong Fit Academia — LGPD.",
};

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#0A0A0A]">
      <div className="mx-auto max-w-[800px] px-6 py-12 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-xs font-bold tracking-wide uppercase mb-8">
          ← Voltar ao site
        </Link>
        <h1 className="display text-[36px] md:text-[48px] leading-none tracking-[-0.02em]">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-black/50">Última atualização: 18 de setembro de 2026 · Strong Fit Academia · Califórnia — BH</p>

        <div className="mt-10 space-y-8 text-[14.5px] leading-7 text-black/70">
          <section>
            <h2 className="font-bold text-black text-lg">1. Dados coletados</h2>
            <p className="mt-2">Coletamos apenas dados fornecidos voluntariamente via WhatsApp (nome, telefone e mensagem). Não armazenamos dados sensíveis sem consentimento.</p>
          </section>
          <section>
            <h2 className="font-bold text-black text-lg">2. Finalidade</h2>
            <p className="mt-2">Responder solicitações, agendar visitas e informar sobre planos e modalidades. Base legal: execução de contrato e legítimo interesse (art. 7º LGPD).</p>
          </section>
          <section>
            <h2 className="font-bold text-black text-lg">3. Compartilhamento</h2>
            <p className="mt-2">Não vendemos dados. Compartilhamento apenas com provedores essenciais (hospedagem, analytics com IP anonimizado) e quando exigido por lei.</p>
          </section>
          <section>
            <h2 className="font-bold text-black text-lg">4. Cookies e analytics</h2>
            <p className="mt-2">Utilizamos cookies essenciais e, mediante consentimento, cookies de analytics (GA4) e pixels para medir eventos como click_whatsapp e click_maps. Você pode gerenciar preferências no banner de consentimento.</p>
          </section>
          <section>
            <h2 className="font-bold text-black text-lg">5. Direitos do titular</h2>
            <p className="mt-2">Você pode solicitar acesso, correção, exclusão e revogação de consentimento pelo WhatsApp (31) 3656-0734 ou presencialmente na Rua dos Bandolins, 232.</p>
          </section>
          <section>
            <h2 className="font-bold text-black text-lg">6. Retenção e segurança</h2>
            <p className="mt-2">Mantemos dados pelo tempo necessário ao atendimento e obrigações legais, com medidas técnicas de segurança, HTTPS e headers de proteção.</p>
          </section>
          <section>
            <h2 className="font-bold text-black text-lg">7. Contato do controlador</h2>
            <p className="mt-2">Strong Fit Academia — Rua dos Bandolins, 232, Califórnia, Belo Horizonte/MG, CEP 30850-470 — Tel: (31) 3656-0734</p>
          </section>
        </div>
      </div>
    </div>
  );
}
