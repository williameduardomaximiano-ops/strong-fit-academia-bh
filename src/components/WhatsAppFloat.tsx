"use client";
import { motion } from "framer-motion";
import { WHATSAPP_LINK, track } from "./Analytics";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("click_whatsapp", { location: "floating" })}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 group flex items-center gap-3"
    >
      <span className="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2.5 text-xs font-bold tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-black/5 group-hover:bg-[#FF3B0A] group-hover:text-white group-hover:border-[#FF3B0A] transition-colors">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Fale no WhatsApp
      </span>
      <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] group-hover:scale-105 transition-transform">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.05 4.94A9.82 9.82 0 0 0 12.04 2C6.58 2 2.14 6.45 2.14 10.91c0 1.57.41 3.1 1.19 4.45L2 22l6.82-1.79a9.82 9.82 0 0 0 4.69 1.19h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.64-1.03-5.13-2.89-6.99l.02.02ZM12.04 19.6h-.01a8 8 0 0 1-4.08-1.12l-.29-.17-4.05 1.06 1.08-3.95-.19-.4a8.08 8.08 0 0 1-1.24-4.11c0-4.5 3.66-8.16 8.17-8.16a8.13 8.13 0 0 1 5.77 2.39 8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.66 8.16-8.16 8.16l.61-.47ZM16.49 13.5c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94-.28.18-.52.06a6.56 6.56 0 0 1-1.93-1.19 7.29 7.29 0 0 1-1.34-1.67c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.41-.54-.42l-.46-.01c-.16 0-.42.06-.64.3s-.84.82-.84 2 .86 2.32.98 2.48.69 1.06 1.68 1.48c.24.1.43.16.58.21.24.08.46.07.63.04.19-.03.58-.24.66-.47.08-.23.08-.43.06-.47-.02-.04-.18-.06-.42-.18Z"/></svg>
      </span>
    </motion.a>
  );
}
