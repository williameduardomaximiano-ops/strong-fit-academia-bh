"use client";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StrongTransition from "@/components/StrongTransition";
import Modalidades from "@/components/Modalidades";
import Estrutura from "@/components/Estrutura";
import Immersive from "@/components/Immersive";
import Galeria from "@/components/Galeria";
import Avaliacoes from "@/components/Avaliacoes";
import Localizacao from "@/components/Localizacao";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <LenisProvider>
      <Navbar />
      <main>
        <Hero />
        <StrongTransition />
        <Modalidades />
        <Estrutura />
        <Immersive />
        <Galeria />
        <Avaliacoes />
        <Localizacao />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LenisProvider>
  );
}
