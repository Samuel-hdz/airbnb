import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import Footer from "./components/Footer";

LoginModal
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HavenStay",
  description: "Descripcion de HavenStay",
  keywords: ["alojamiento", "viajes", "vacaciones", "DjanoBnb", "reservas"],
  icons: {
    icon: "/logo2.jpeg", // Ruta relativa al archivo de favicon en la carpeta public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const content = (
    <p>Yo</p>
  )

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className="pt-32">
          {children}
        </div>
        <LoginModal />
        <SignupModal />
        <Footer />
      </body>
    </html>
  );
}
