import type { Metadata } from "next";
import { Inter, Noto_Serif, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { siteContent } from "@/content/site";

const inter = Inter({
  variable: "--font-inter-variable",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteContent.brand.name} — карьерное консультирование с результатом`,
  description:
    "Карьерное консультирование и наставничество: программы, стратегии и сопровождение для ускорения карьерного роста.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${notoSerif.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
        <Analytics />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteContent.brand.consultant,
              jobTitle: "Career Coach",
              url: "https://career-stories.vercel.app",
              sameAs: siteContent.socials.map((s) => s.href),
            }),
          }}
        />
      </body>
    </html>
  );
}
