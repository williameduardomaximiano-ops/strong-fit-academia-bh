import type { Metadata } from "next";
import { Geist, Anton, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = JetBrains_Mono({ variable: "--font-geist-mono", subsets: ["latin"], weight: ["400","500"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: ["400"] });
const bebas = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: ["400"] });

const SITE_URL = "https://strongfitbh.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Strong Fit Academia — Mais Forte a Cada Treino | Califórnia BH",
    template: "%s | Strong Fit Academia BH",
  },
  description:
    "Strong Fit Academia na Rua dos Bandolins, 232 — Califórnia, BH. Musculação, Funcional, Jump, Muay Thai, Ritbox e Boxe. Estrutura completa para quem quer evoluir. Venha treinar com a gente.",
  keywords: [
    "Strong Fit Academia",
    "Strong Fit BH",
    "academia Califórnia BH",
    "academia Belo Horizonte",
    "musculação Califórnia BH",
    "Muay Thai Califórnia BH",
    "funcional Belo Horizonte",
    "academia Rua dos Bandolins",
  ],
  authors: [{ name: "Strong Fit Academia" }],
  creator: "Strong Fit Academia",
  publisher: "Strong Fit Academia",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Strong Fit Academia",
    title: "Strong Fit Academia — Mais Forte a Cada Treino",
    description:
      "A academia da Califórnia BH feita para quem quer evoluir. Musculação, lutas e aulas coletivas. Rua dos Bandolins, 232.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Strong Fit Academia - Belo Horizonte" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strong Fit Academia — Mais Forte a Cada Treino",
    description: "Musculação, Muay Thai, Boxe, Jump, Funcional e Ritbox. Califórnia — BH.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: { google: "" },
  category: "fitness",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "Gym", "LocalBusiness"],
    name: "Strong Fit Academia",
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    telephone: "+553136560734",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua dos Bandolins, 232",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      postalCode: "30850-470",
      addressCountry: "BR",
      addressNeighborhood: "Califórnia",
    },
    geo: { "@type": "GeoCoordinates", latitude: -19.907, longitude: -44.02 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "06:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
    ],
    priceRange: "$$",
    description: "Academia completa no bairro Califórnia, BH. Musculação, Funcional, Jump, Muay Thai, Ritbox e Boxe.",
    sameAs: [],
  };

  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${bebas.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#F5F3EF] noise selection:bg-[#FF3B0A] selection:text-white">
        {children}
      </body>
    </html>
  );
}
