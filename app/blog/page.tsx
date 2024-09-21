import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { dataBlog } from "./data";
import CardBlog from "@/components/cardBlog/cardBlog";
import Search from "@/assets/logos/searchGrisOscuro.svg";
import CalendarGrisMedio from "@/assets/logos/calendarGray.svg";

const montserrat200 = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "200",
});

const montserrat400 = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Project() {
  return (
    <div className="bg-grisOscuro">
      <section className="w-full bg-fondoBlog bg-no-repeat flex flex-col py-[65%] md:py-[40%] items-center justify-center text-light bg-cover bg-center lg:py-[22%]">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h3
            className={`${montserrat200.className} text-2xl md:text-3xl font-semibold`}
          >
            RECORRÉ JUNTO A NOSOTROS ESTE CAMINO
          </h3>
          <p className="text-lg pb-12 md:text-2xl font-semibold text-turquesa">
            DESDE USUAHIA HASTA ALASKA
          </p>
        </div>
      </section>
      <section className="flex flex-col-reverse xl:flex-row">
        <div
          id="izq"
          className="w-full xl:w-[60%] bg-grisMedio px-[4%] py-[3%]"
        >
          <div className="flex flex-col">
            {dataBlog.map((article, index) => (
              <CardBlog key={index + 1} cardBlog={article} />
            ))}
          </div>
        </div>
        <div id="der" className="w-full xl:w-[40%] bg-grisMedio py-[4%]">
          <div className="bg-azulOscuro rounded-2xl mx-[5%] xl:mx-[10%] px-[4%] py-[4%] flex flex-col gap-6">
            {/* <div className="bg-grisClaro rounded-xl p-4">
              <div className="flex flex-row items-center gap-2">
                <Search className="w-6 h-6" />
                <p className="text-grisOscuro font-bold">Buscar</p>
              </div>
              <input className="bg-grisMedioClaro rounded-xl w-full px-4 py-1 my-2" />
            </div> */}
            <div className="bg-grisClaro rounded-xl p-4">
              <p className="text-grisOscuro py-2 font-bold">Destacados</p>
              <div className="flex flex-row xl:flex-col gap-2">
                <div
                  id="dest1"
                  className="flex flex-col md:flex-row bg-celeste shadow-cyan-800 shadow-sm rounded-xl"
                >
                  <div className="w-ful lg:w-[50%] m-2">
                    <a
                      href="https://www.youtube.com/watch?v=JZgVKuWBfHY"
                      target="_blank"
                    >
                      <Image
                        className="object-cover rounded-2xl"
                        src="https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/blog%2FCircuitoO-parte1.webp?alt=media&token=20cfd793-eea5-4d38-abf5-73e6ed4d9588"
                        alt="destacada1"
                        width={250}
                        height={300}
                      />
                    </a>
                  </div>
                  <div className="w-full lg:w-[50%] p-2 flex flex-col items-center justify-center gap-1">
                    <p className="text-grisOscuro px-2 font-bold uppercase">
                      Circuito O en Torres del Paine
                    </p>
                    <hr className="text-turquesa bg-azulOscuro w-[80%] h-1 rounded-2xl m-4" />
                    <div className="flex items-center gap-2">
                      <CalendarGrisMedio className="h-4 w-4" />
                      <p className="text-grisOscuro text-sm">ENERO 13, 2024</p>
                    </div>
                  </div>
                </div>
                <div
                  id="dest2"
                  className="flex flex-col md:flex-row bg-celeste shadow-cyan-800 shadow-sm rounded-xl"
                >
                  <div className="w-ful lg:w-[50%] m-2">
                    <a href="https://www.youtube.com/watch?v=R_GFrY8rZic" target="_blank">
                      <Image
                        className="object-cover rounded-2xl"
                        src="https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/blog%2Flagos%20del%20carbon.webp?alt=media&token=b936444c-4000-4b49-bcd7-6d9fba87cc81"
                        alt="destacada1"
                        width={250}
                        height={300}
                      />
                    </a>
                  </div>
                  <div className="w-full lg:w-[50%] p-2 flex flex-col items-center justify-center gap-1">
                    <p className="text-grisOscuro px-2 font-bold uppercase">
                      CAMINAMOS BAJO EL NIVEL DEL MAR
                    </p>
                    <hr className="text-turquesa bg-azulOscuro w-[80%] h-1 rounded-2xl m-4" />
                    <div className="flex items-center gap-2">
                      <CalendarGrisMedio className="h-4 w-4" />
                      <p className="text-grisOscuro text-sm">NOV 23, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
