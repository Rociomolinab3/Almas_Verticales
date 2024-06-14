import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import {Navbar} from '@/components'

export const inter = Inter({ subsets: ["latin"] });
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight:['500','700']
}
)

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <head>
      </head>
      <body className={inter.className}>
      <header className="fixed w-full top-0 scroll__header text-light tracking-wider text-xl py-56 bg-slate-500" >
        <Navbar/>
        </header>
        {children}</body>
    </html>
  );
}
