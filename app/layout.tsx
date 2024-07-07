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
      <body className={montserrat.className}>
      <header className="fixed w-full top-0 scroll__header text-light  text-xl py-12 lg:py-12 bg-grisMedioClaro" >
        <Navbar/>
        </header>
        {children}
        <FooterSection/>
        </body>
    </html>
  );
}
