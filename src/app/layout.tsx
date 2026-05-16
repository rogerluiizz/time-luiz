import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Time Luiz | Currículos Profissionais e LinkedIn Estratégico",
  description:
    "Criação e reestruturação de currículos profissionais e LinkedIn estratégico para estágio, primeiro emprego, recolocação e área administrativa.",
  keywords: [
    "currículo profissional",
    "currículo para vaga",
    "linkedin profissional",
    "linkedin estratégico",
    "currículo primeiro emprego",
    "currículo online",
    "currículo moderno",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
