"use client";

export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", event, params);
  }
  // console for QA
  if (process.env.NODE_ENV !== "production") console.log("[analytics]", event, params);
}

export const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Conheci a Strong Fit pelo site e gostaria de saber mais sobre a academia e os planos."
);
export const WHATSAPP_LINK = `https://wa.me/553136560734?text=${WHATSAPP_MSG}`;
export const MAPS_LINK = "https://www.google.com/maps/dir/?api=1&destination=Rua+dos+Bandolins+232+Califórnia+Belo+Horizonte+MG+30850-470";
export const MAPS_EMBED = "https://www.google.com/maps?q=Rua+dos+Bandolins+232+Califórnia+Belo+Horizonte+MG&z=16&output=embed";
export const GOOGLE_REVIEWS_LINK = "https://www.google.com/maps/search/Strong+Fit+Academia+Rua+dos+Bandolins+232+Belo+Horizonte";
