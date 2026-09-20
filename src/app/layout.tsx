import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Oswald } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Academia Top Fit | Almirante Tamandaré",
  description: "Academia Top Fit em Almirante Tamandaré. Musculação, aulas em grupo, dança e artes marciais em uma estrutura completa.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Academia Top Fit | Almirante Tamandaré",
    description: "Treino, energia e evolução em um só lugar. Conheça a Academia Top Fit.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: "Academia Top Fit",
    telephone: "+55 41 99722-1792",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Emílio Johnson, 466 - Vila Santa Terezinha",
      addressLocality: "Almirante Tamandaré",
      addressRegion: "PR",
      addressCountry: "BR"
    },
    sameAs: ["https://instagram.com/top_fit2012"]
  };
  return (
    <html lang="pt-BR" className={`${geist.variable} ${oswald.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0c" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
