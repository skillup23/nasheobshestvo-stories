import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const comial = localFont({
  src: "../public/fonts/Comial4448/Comial4448.ttf",
  display: "swap",
  variable: "--font-comial",
});

const cloudWorld = localFont({
  src: "../public/fonts/CloudWorld/CloudWorld.ttf",
  display: "swap",
  variable: "--font-cloudWorld",
});

export const metadata = {
  title: "Главная",
  description: "Истории Нашего Общества",
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body
        className={`${comial.variable} ${cloudWorld.variable} ${inter.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
