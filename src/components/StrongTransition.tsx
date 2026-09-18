"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StrongTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="strong" ref={ref} className="relative bg-[#0A0A0A] overflow-clip border-y border-white/5">
      {/* Sticky text reveal */}
      <div className="relative h-[70vh] md:h-[88vh] flex items-center justify-center overflow-hidden">
        {/* Background word */}
        <motion.div style={{ scale, y, opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="display text-[32vw] md:text-[28vw] leading-none tracking-[-0.05em] text-white/[0.035] whitespace-nowrap">
            STRONG
          </span>
        </motion.div>

        <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B0A] animate-pulse" />
            <span className="text-[11px] tracking-[0.18em] font-bold uppercase text-white/60">Strong Energy · Califórnia BH</span>
          </motion.div>

          <div className="space-y-1">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="display text-[13vw] md:text-[92px] lg:text-[108px] leading-[0.85] tracking-[-0.04em]"
            >
              <span className="block text-white">STRONG</span>
              <span className="block text-white/10">FIT</span>
              <span className="block text-[#FF3B0A]">EVOLUA.</span>
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-6 md:mt-8 max-w-[620px] text-[15px] md:text-[18px] leading-7 text-white/60"
          >
            Não é só academia. É disciplina, comunidade e resultado. Uma estrutura pensada para quem decidiu <span className="text-white font-medium">ficar mais forte — por dentro e por fora.</span>
          </motion.p>

          {/* Progress line */}
          <div className="mx-auto mt-8 md:mt-10 max-w-[360px] h-px bg-white/10 overflow-hidden rounded-full">
            <motion.div style={{ width: progressWidth }} className="h-full bg-[#FF3B0A]" />
          </div>
        </div>

        {/* Decorative 3D element - CSS only */}
        <div className="pointer-events-none absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:block">
          <motion.div
            animate={{ rotateY: [ -8, 8, -8 ], rotateX: [ 4, -4, 4 ] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[160px] h-[160px] rounded-[32px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur grid place-items-center shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="display text-[64px] leading-none text-white/90">SF</span>
            <span className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-[#FF3B0A] grid place-items-center text-white text-xs">●</span>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t border-white/5 bg-[#0F0F0F]">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 grid grid-cols-3 divide-x divide-white/5">
          {[
            { k: "06:00–22:00", v: "Seg a Sex" },
            { k: "08:00–12:00", v: "Sábado" },
            { k: "Califórnia", v: "Belo Horizonte" },
          ].map((s) => (
            <div key={s.k} className="py-6 md:py-8 text-center">
              <p className="font-mono text-[12px] md:text-sm font-bold tracking-[0.08em] text-white">{s.k}</p>
              <p className="text-[11px] tracking-[0.14em] uppercase text-white/40 mt-1">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
