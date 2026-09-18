"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Immersive() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const opacity1 = useTransform(scrollYProgress, [0, 0.22, 0.33], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.28, 0.4, 0.55], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.62, 1], [0, 1, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.33], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0.28, 0.6], [40, -40]);
  const y3 = useTransform(scrollYProgress, [0.5, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-[280vh] bg-black">
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1920&auto=format&fit=crop"
            alt="Treino intenso"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <p className="text-[11px] tracking-[0.22em] font-bold uppercase text-white/60 mb-4">Momento Strong · 01/03</p>
            <h2 className="display text-[18vw] md:text-[140px] leading-[0.85] tracking-[-0.04em] text-white">NÃO PARE.</h2>
            <p className="mt-4 text-white/60 text-sm max-w-[40ch]">Quando a mente quer parar, o corpo ainda tem mais uma repetição.</p>
          </motion.div>

          <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <p className="text-[11px] tracking-[0.22em] font-bold uppercase text-[#FF3B0A] mb-4">Momento Strong · 02/03</p>
            <h2 className="display text-[18vw] md:text-[140px] leading-[0.85] tracking-[-0.04em] text-white">EVOLUA.</h2>
            <p className="mt-4 text-white/60 text-sm max-w-[40ch]">Cada treino te deixa mais perto de quem você decidiu ser.</p>
          </motion.div>

          <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <p className="text-[11px] tracking-[0.22em] font-bold uppercase text-white/60 mb-4">Momento Strong · 03/03</p>
            <h2 className="display text-[14vw] md:text-[120px] leading-[0.85] tracking-[-0.05em]">
              <span className="text-white">FIQUE</span> <span className="text-[#FF3B0A]">STRONG.</span>
            </h2>
            <div className="mt-6 flex flex-col items-center gap-3">
              <p className="text-white/70 text-sm">Rua dos Bandolins, 232 — Califórnia, BH</p>
              <span className="w-px h-10 bg-white/20" />
              <span className="text-[11px] tracking-[0.18em] font-bold uppercase text-white/40">Role para continuar</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
          <span className="w-8 h-1 rounded-full bg-[#FF3B0A]" />
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="w-1 h-1 rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  );
}
