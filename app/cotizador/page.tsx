import Image from "next/image";
import FondoM from '@/assets/images/mountains.png';

import { Montserrat } from "next/font/google";

const montserrat300 = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: "700",
  });

  export default function Cotizador() {
    return (
      <div className="bg-grisOscuro pt-20 flex justify-center items-center min-h-screen">
         <Image
            src={FondoM}
            alt="Fondo Montaña"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg pt-1"
          />
         <section className="relative bg-cover py-24 w-full md:w-3/4 lg:w-2/3 text-center flex items-center justify-center flex-col">
          {/* <h2 className={`${montserrat300.className} text-turquesa text-4xl mb-4 uppercase`}>
            COTIZADOR
          </h2> */}
          <div className="relative w-full h-0 pb-[56.25%]"> {/* Relación de aspecto 16:9 */}
            <iframe
              src="https://back.goassistance.com/ventas/cl/cotizar.aspx?idreference=KhJjd2ipGdztQuo0Y8WmNrO%2FzhB2qnSCKhJjd2ipGdztQuo0Y8WmNjEfhcfWjFNE"
              sandbox="allow-scripts"
              loading="lazy"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              aria-hidden="false"
            ></iframe>
          </div>
        </section>
      </div>
    );
  }
  