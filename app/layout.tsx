import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar, FooterSection } from '@/components';
import Script from 'next/script'; // Importa el componente Script

export const inter = Inter({ subsets: ["latin"] });
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500','700']
});

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
        <link 
          rel="icon" 
          href="https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/Almas%20verticales2-01%20(1).png?alt=media&token=d5c5bb87-c2f1-40b6-9391-2cd37f9eefb5" 
        />
        {/* Script Externo */}
        <Script 
          src="https://back.goassistance.com/cotizador/js/cotizador2024.js" 
          strategy="beforeInteractive" 
        />
        {/* Script Inline */}
        <Script 
          id="cotizador-init" 
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              createlanding("KhJjd2ipGdztQuo0Y8WmNrO%2FzhB2qnSCKhJjd2ipGdztQuo0Y8WmNjEfhcfWjFNE", 
              ["origen", "destino", "fechas", "edades", "email", "telefono"], 
              32, "es-ES", 0, "GO");
            `,
          }}
        />
      </head>
      <body className={montserrat.className}>
        <header className="fixed w-full top-0 scroll__header text-light text-white text-xl py-12 lg:py-12 bg-azulMedi">
          <Navbar/>
        </header>
        {children}
        <FooterSection/>
      </body>
    </html>
  );
}
