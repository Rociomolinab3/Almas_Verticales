"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { higestPoints } from "./data";

export const CardTravel = () => {
  return (
    <div className="flex flex-col items-center text-center py-8">
      <h2 className="text-3xl font-semibold mb-2">Acompáñanos en este viaje.</h2>
      <p className="text-xl mb-6">
        Somos Fiore y Lolo. Dos almas unidas por el amor y el montañismo.
        Nuestro objetivo es conectar Ushuaia con Alaska, haciendo cumbre en el
        pico más alto de cada país.
      </p>
      <div className="flex space-x-4">
        {higestPoints.map((article, index) => (
          <article key={index} className="relative flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
            <Link href={`/noticias/${article.id}`} className="motion-safe:hover:opacity-80">
              <Image
                className="object-cover w-full "
                src={article.src}
                alt={article.alt}
                width={200}
                height={250}
              />
              <div className="absolute bottom-4 left-4 right-2 bg-white bg-opacity-70 p-2 rounded flex items-center space-x-2">
                <span className="text-gray-600">Punto más alto de Ejemplo</span>
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
