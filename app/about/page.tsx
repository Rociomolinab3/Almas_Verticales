import React from "react";
import Image from "next/image";
import Informative from "@/assets/logos/informative.svg";
import Comunnication from "@/assets/logos/communication.svg";
import Heart from "@/assets/logos/heart.svg";

export default function About() {
  return (
    <div>
      <section className="bg-fondoAbout bg-cover pt-40 pb-10 flex justify-center items-center">
        <div className="p-8 w-[90%] flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-[60%] pr-0 lg:pr-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/about%2Faboutus2.webp?alt=media&token=2ecc4de3-4df6-43be-a004-933c9a272c21"
              alt="Example"
              width={1400}
              height={900}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-4 mt-4 lg:mt-0">
            <h2 className="text-2xl font-bold mb-4 text-naranja">
              Nuestra historia
            </h2>
            <div className="text-grisClaro">
              <p className="mb-4">
                Hola, somos Fiore y Lolo, dos personas unidas por el amor y el
                montañismo, nos encontramos a través de las redes sociales,
                conectados por la curiosidad de hacer la misma actividad, el
                montañismo. Aconcagua (la montaña más alta de América) fue el
                puntapié para soñar juntos. Lolo, oriundo de General Pico, La
                Pampa y Fio, oriunda de Villa Mercedes, San Luis.
              </p>
              <p className="mb-4">
                Los kilómetros nunca fueron un impedimento para nuestra relación
                pero ahora decidimos recorrer muchos kilómetros juntos en un
                camper para estar más cerquita.
              </p>
              <p className="mb-4">
                Uniendo nuestra experiencia en el montañismo, nuestro amor por
                viajar y nuestras profesiones (Farmacéutico y profesora de
                educación física) hemos decidido dar comienzo a esta aventura:
                Unir Ushuaia con Alaska subiéndose el punto más alto de América.
                Mostrándoles no sólo las cumbres, sino la cultura y diversidad de
                cada montaña. Queremos compartir con ustedes nuestra pasión. ¿Nos
                acompañas?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10 pb-20 flex flex-col xl:flex-row bg-grisMedioClaro gap-4">
        <div className="w-full flex flex-col items-center justify-center xl:w-[50%] p-[5%] xl:items-start">
          <button className="bg-azulOscuro xl:w-[40%] text-white py-2 px-4 rounded-lg hover:bg-azulMedio transition duration-300">
            ¡Seguí nuestro viaje!
          </button>
          <div className="text-grisOscuro font-semibold py-4 text-center w-[80%] xl:text-start xl:w-full">
            Te contamos algunos beneficios de acompañarnos en este proyecto, y de que también podamos acompañarte.
          </div>
          <div>
            <div id="informativo" className="flex flex-row justify-center pt-10 xl:justify-start">
              <div className="w-[15%]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Comunnication className="w-8 h-8" />
                </div>
              </div>
              <div className="w-[85%] lg:w-[70%] ml-2">
                <p className="text-azulOscuro text-lg">Informativos</p>
                <p className="text-grisOscuro text-md flex flex-wrap">
                  Brindamos datos seguros y específicos para que vos también seas
                  protagonista de los trekkings que realizamos
                </p>
              </div>
            </div>
            <div id="motivadores" className="flex flex-row pt-10 justify-center xl:justify-start">
              <div className="w-[15%]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Informative className="w-8 h-8" />
                </div>
              </div>
              <div className="w-[85%] lg:w-[70%] ml-2">
                <p className="text-azulOscuro text-lg">Motivadores</p>
                <p className="text-grisOscuro text-md flex flex-wrap">
                  Te ayudamos a obtener las herramientas necesarias para que logres
                  cumplir tus objetivos.
                </p>
              </div>
            </div>
            <div id="apasionados" className="flex flex-row pt-10 justify-center xl:justify-start">
              <div className="w-[15%]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
              <div className="w-[85%] lg:w-[70%] ml-2">
                <p className="text-azulOscuro text-lg">Apasionados</p>
                <p className="text-grisOscuro text-md flex flex-wrap">
                  Amamos las montañas y estamos yendo detrás de nuestro sueño. Te
                  animamos a que también lo hagas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%] flex flex-col">
          <div className="flex flex-col xl:flex-row h-auto w-full 2xl:w-[90%] items-end px-4 xl:px-2 gap-4 py-2">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/about%2Fimg1about.jpg?alt=media&token=dd853001-bb44-4800-9214-f0c70a4da7da"
              alt="Example"
              width={300}
              height={500}
              className="rounded-lg object-cover w-full xl:w-auto h-auto"
            />
            <div className="h-auto px-8 py-2 hidden xl:block x2l:px-0 xl:py-0">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/about%2Fimg2about.webp?alt=media&token=f9c8507b-7587-4838-8232-1226c1095226"
                alt="Example"
                width={230}
                height={400}
                className="rounded-xl object-cover w-full lg:w-auto h-auto hidden xl:block"
              />
            </div>
          </div>
          <div className="h-auto px-8 xl:px-16 py-4 hidden xl:block">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/about%2Fimg3about.webp?alt=media&token=38274826-bcda-4fb8-a535-2af1166dc6e3"
              alt="Example"
              width={1000}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
