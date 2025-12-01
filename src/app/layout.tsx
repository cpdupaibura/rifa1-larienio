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

export const metadata: Metadata = {
  title: "Rifa do Casamento",
  description: "Acompanhe os números disponíveis e comprados da rifa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-[#faf4ef]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#faf4ef]`}
      >
        {/* Conteúdo principal */}
        <main className="flex-1">{children}</main>

        {/* Rodapé PIX */}
        <footer className="w-full text-center py-6 bg-white border-t shadow-inner mt-8">
          <p className="text-xl font-semibold text-pink-700">
            💝 Deseja colaborar com o casamento?
          </p>

          <p className="text-md mt-1 text-gray-700">
            Chave PIX:
            <span className="text-pink-600 font-bold ml-2">
              batalhaenio@gmail.com
            </span>
          </p>
        </footer>
      </body>
    </html>
  );
}
