"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { higestPoints } from "./data";
import { Montserrat } from "next/font/google";
import LogoArrow from '@/assets/logos/arrow.svg'

const montserrat400 = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const CardTravel = () => {
  return (
    <div className={`${montserrat400.className} flex flex-col items-center text-center py-8`}>
      <h2 className="text-3xl mb-2">Acompáñanos en este viaje</h2>
      <p className={`w-[60%] text-xl mb-6`}>
        Somos Fiore y Lolo. Dos almas unidas por el amor y el montañismo.
        Nuestro objetivo es conectar Ushuaia con Alaska, subiendo en el
        pico más alto de cada país.
      </p>
      <div className="flex gap-8 flex-col md:flex-row">
        {higestPoints.map((article, index) => (
          <article key={index} className="relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden">
            <Link href={`/higest/${article.id}`} className="motion-safe:hover:opacity-80">
              <Image
                className="object-cover w-full "
                src={article.src}
                alt={article.alt}
                width={350}
                height={270}
              />
              <div id="cuadrado" className="absolute bottom-2 left-4 right-4 bg-slate-100 rounded-lg px-2 pb-2 flex flex-col">
              <hr className="text-turquesa bg-azulOscuro w-[30%] h-1 rounded-2xl my-4 ml-0"/>
                <div className="flex flex-row items-center gap-4">
                <span className="text-grisOscuro text-sm text-start font-semibold">{article.title}</span>
                <button className="bg-azulOscuro rounded-2xl p-1">
                  <LogoArrow className="w-6 h-6"/>
                {/* <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg> */}
                </button> 
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
