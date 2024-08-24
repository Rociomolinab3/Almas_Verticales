import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar, FooterSection } from '@/components'


export const inter = Inter({ subsets: ["latin"] });
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight:['500','700']
}
)

export const metadata: Metadata = {
  title: "Almas Verticales",
  description: "Desarrollado por Rocío Molina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/Almas%20verticales2-01%20(1).png?alt=media&token=d5c5bb87-c2f1-40b6-9391-2cd37f9eefb5" />
      </head>
      <body className={montserrat.className}>
      <header className="fixed w-full top-0 scroll__header text-light text-white text-xl py-12 lg:py-12 bg-azulMedi" >
        <Navbar/>
        </header>
        {children}
        <FooterSection/>
        </body>
    </html>
  );
}
