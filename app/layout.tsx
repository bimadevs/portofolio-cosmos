import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portofolio Luar Angkasa | Eksplorasi Galaksi Digital",
  description: "Portofolio futuristik dengan tema luar angkasa yang menampilkan proyek-proyek kreatif dan inovatif",
  keywords: ["portofolio", "luar angkasa", "galaksi", "web developer", "desain", "futuristik"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <div className="stars-container fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Lapisan bintang-bintang akan ditambahkan dengan CSS */}
        </div>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
