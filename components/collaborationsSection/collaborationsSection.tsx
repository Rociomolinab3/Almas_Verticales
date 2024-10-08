"use client";


import React, { useState } from "react";
import Image from "next/image";
import ExampleImage from "@/assets/images/imagenAlmas.jpg"; // Asegúrate de que la ruta sea correcta
import LogoListCheck from '@/assets/logos/check.svg';
import LogoItem from '@/assets/logos/items.svg';
import LogoHands from '@/assets/logos/handshake.svg';
import LogoChat from '@/assets/logos/chat.svg';
import LogoCart from '@/assets/logos/cart.svg';
import LogoArrow from '@/assets/logos/arrow.svg';
import LogoGoA from'@/assets/logos/travelGo.svg';
import LogoViajero from '@/assets/logos/viajero.svg';
import LogoHolaFly from '@/assets/logos/Holafly-logo.svg';
import LogoAssistance from '@/assets/logos/goassistance.svg';


export const Collaborations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("RUTINAS");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg text-white ">
      <section className="flex items-center flex-col gap-5">
        <div className="flex flex-col w-[70%] mb-4 items-center gap-4">
          <span className="bg-orange-500 bg-opacity-30 py-1 px-4 rounded-xl">
           <p className="text-naranja uppercase">Colaboraciones</p> 
          </span>
        <h2 className="text-center text-xl mb-6">
          Te animamos a colaborar con nuestro proyecto, ya sea como sponsor o entrenando en base a tus objetivos con nuestras rutinas, y así poder alcanzar este sueño juntos.
        </h2>
        </div>
        <div className="flex flex-col w-full sm:flex-row gap-10 md:gap-6 justify-center lg:w-[70%]">
        <div id="cuadrado1" 
        className="bg-grisClaro text-black rounded-lg p-4 flex-shrink-0 w-full sm:w-4/12">
          <button
            onClick={() => handleTabClick("RUTINAS")}
            className={`w-full py-4 mb-2 rounded ${
              activeTab === "RUTINAS"
                ? "bg-orange-500 text-white"
                : "bg-grisMedioClaro"
            }`}
          >
            RUTINAS
          </button>
          <button
            onClick={() => handleTabClick("GOASSISTANCE")}
            className={`w-full py-4 mb-2 rounded ${
              activeTab === "GOASSISTANCE"
                ? "bg-orange-500 text-white"
                : "bg-grisMedioClaro"
            }`}
          >
            GO ASSISTANCE
          </button>
          <button
            onClick={() => handleTabClick("HOLAFLY")}
            className={`w-full py-4 mb-2 rounded ${
              activeTab === "HOLAFLY"
                ? "bg-orange-500 text-white"
                : "bg-grisMedioClaro"
            }`}
          >
            HOLA FLY
          </button>
          <button
            onClick={() => handleTabClick("SPONSORS")}
            className={`w-full py-4 mb-2 rounded ${
              activeTab === "SPONSORS"
                ? "bg-orange-500 text-white"
                : "bg-grisMedioClaro"
            }`}
          >
            SPONSORS
          </button>
          <button
            onClick={() => handleTabClick("TIENDA")}
            className={`w-full py-4 rounded ${
              activeTab === "TIENDA"
                ? "bg-orange-500 text-white"
                : "bg-grisMedioClaro"
            }`}
          >
            TIENDA ONLINE
          </button>
        </div>
        <div id="cuadrado2" className="py-2 w-full sm:w-4/12">
          {activeTab === "RUTINAS" && (
            <div className="flex flex-col gap-4">
              <LogoListCheck className="h-12 w-12"/>
              <h3 className="text-lg font-bold">
                Preparamos tu rutina y la adaptamos a tus necesidades
              </h3>
              <p className="pb-2">
                Contamos con diferentes planes dependiendo de tus objetivos
                físicos y deportivos.
              </p>
              <ul className="list-none flex flex-col gap-2">
                <li className="flex gap-2 items-center">
                <LogoItem className="h-6 w-6"/>
                  <span className="font-bold">PLAN PERSONALIZADO</span>
                </li>
              </ul>
            </div>
          )}
          {activeTab === "SPONSORS" && (
            <div className="flex flex-col gap-6">
              <LogoHands className="h-12 w-12"/>
              <h3 className="text-xl font-bold">Sponsors</h3>
              <p className="">
                Los invitamos a ser parte de nuestro proyecto, sumándose como
                sponsor de nuestro proyecto de viaje desde Usuahia hasta Alaska. 
              </p>
              <div className="flex gap-2 items-center">
              <LogoChat className="h-6 w-6"/>
               <a href="https://wa.me/542657521495" target="_blank" className="font-bold uppercase">
              Contáctanos
              </a>
              </div>
            </div>
          )}
            {activeTab === "GOASSISTANCE" && (
            <div className="flex flex-col gap-4">
              {/* <LogoViajero className="h-6 w-6" /> */}
              <LogoAssistance className="h-44 w-44"/>
              {/* <h3 className="text-xl font-bold">Go Assistance</h3> */}
              <p className="">
                 Viajá sin preocupaciones, contratá tu seguro de asistencia al viajero con GO! Assistance y además aprovechá un 5% DE DESCUENTO EXCLUSIVO para la comunidad de Almas Verticales!!
              </p>
              <div className="flex gap-2 items-center">
              <LogoGoA className="h-6 w-6"/>
               <a href="/cotizador" target="_blank" className="font-bold uppercase">
              Cotiza en este link!
              </a>
              </div>
            </div>
          )}
           {activeTab === "HOLAFLY" && (
            <div className="flex flex-col gap-6">
              <LogoHolaFly className="h-36 w-36"/>
              {/* <h3 className="text-xl font-bold">HOLA FLY</h3> */}
              <p className="">
              Conéctate a alta velocidad durante tu viaje con la eSIM de Holafly y olvídate de costosas facturas de roaming.
              </p>
              <p className="">
              ¡ Ingresá el código "ALMASVERTICALES" y obtené un importante descuento !
              </p>
              <div className="flex gap-2 items-center">
              <LogoGoA className="h-6 w-6"/>
               <a href="https://esim.holafly.com/es/?ref=zteymwz&discount=ALMASVERTICALES&utm_source=almasverticales&utm_medium=affiliation" target="_blank" className="font-bold uppercase">
               Usar Descuento!
              </a>
              </div>
            </div>
          )}
          {activeTab === "TIENDA" && (
            <div className="flex flex-col gap-6">
              <LogoCart className="h-12 w-12"/>
              <h3 className="text-xl font-bold ">Nuestra Tienda</h3>
              <p className="">
                Próximamente podrás comprar los proudctos de Almas Verticales
                en nuestra Tienda Online,  y así colaborar al crecimiento de
                este hermoso proyecto.
              </p>
              <div className="flex gap-2 items-center">
              <LogoArrow className="h-6 w-6"/>
              <a href="/shop" className="font-bold uppercase">
              Ir a la tienda
              </a>
              </div>
            </div>
          )}
        </div>
        <div id="cuadrado3" className="flex-shrink-0 hidden w-4/12 md:block">
          <Image
            src={ExampleImage}
            alt="Example"
            width={300}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
      </section>
    </div>
  );
};
