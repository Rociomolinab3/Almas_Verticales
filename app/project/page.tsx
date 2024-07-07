import Mapa from '@/assets/images/MapaAmerica.webp';
import React from "react";
import Image from "next/image";

export default function Project() {
    return (
         <div className="bg-grisOscuro">
    <section className="bg-fond bg-cover h-[100%] w-[100%] py-32">
        <div>
        <Image
            src={Mapa}
            alt="Example"
            width={1400}
            height={900}
            className="rounded-lg object-cover w-full h-full"
          />
          {/* <Mapa className="w-10 h-10"/> */}
            </div>
    </section>
    </div>
    )}