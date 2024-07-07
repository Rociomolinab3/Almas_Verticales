import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat200 = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weight: '200'
  })

  const montserrat400 = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
  })

export default function Project() {
    return (
         <div className="bg-grisOscuro">
   <section className="w-full bg-fondoBlog bg-no-repeat flex flex-col py-[65%] items-center justify-center text-light bg-cover bg-center lg:py-[20%]">
      <div className="absolut inset-0 flex flex-col justify-center items-center text-center text-white">
        <h3 className={`${montserrat200.className} text-2xl md:text-3xl `}>RECORRÉ JUNTO A NOSOTROS ESTE CAMINO</h3>
        <p className="text-lg pb-12 md:text-2xl font-semibold text-turquesa">
          DESDE USUAHIA HASTA ALASKA
        </p>
      </div>
    </section>
    <section>
        <div id="izq" className="w-[60%] bg-blue-500">

        </div>
        <div id="der" className="w-[40%]">

        </div>
    </section>
    </div>
    )}