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
      <section className="w-full bg-fondoBlog bg-no-repeat flex flex-col py-[65%] items-center justify-center text-light bg-cover bg-center lg:py-[20%]">
        <div className="absolut inset-0 flex flex-col justify-center items-center text-center text-white">
          <h3 className={`${montserrat200.className} text-2xl md:text-3xl `}>
            RECORRÉ JUNTO A NOSOTROS ESTE CAMINO
          </h3>
          <p className="text-lg pb-12 md:text-2xl font-semibold text-turquesa">
            DESDE USUAHIA HASTA ALASKA
          </p>
        </div>
      </section>
      <section className="flex flex-row">
        <div id="izq" className="w-[60%] bg-grisClaro px-[4%] py-[3%]">
          <div className="flex flex-col">
            {dataBlog.map((article, index) => (
              <CardBlog key={index + 1} cardBlog={article} />
            ))}
          </div>
        </div>
        <div id="der" className="w-[40%] bg-grisClaro py-[4%]">
          <div className="bg-azulOscuro rounded-2xl mx-[10%] px-[4%] py-[4%] flex flex-col gap-6">
            <div className="bg-grisClaro rounded-xl p-4 ">
              <div className="flex flex-row items-center gap-2">
                <Search className="w-6 h-6" />
                <p className="text-grisOscuro font-bold">Buscar</p>
              </div>
              <input className="bg-grisMedioClaro rounded-xl w-full px-4 py-1 my-2"></input>
            </div>
            <div className="bg-grisClaro rounded-xl p-4">
              <div className="flex flex-col gap-2">
                <p className="text-grisOscuro font-bold">Destacados </p>
                <div id="dest1" className="flex bg-grisMedio rounded-xl">
                  <div className="w-[50%] m-2">
                  <Image
                      className="object-cover rounded-2xl"
                      src="https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/blog%2Fdestacada2.webp?alt=media&token=f0403f83-30a8-463d-b677-1575d0b9b2b0"
                      alt="destacada1"
                      width={250}
                      height={300}
                    />
                  </div>
                  <div className="w-[50%] p-2 flex flex-col items-center justify-center gap-1">
                   <p className="text-grisOscuro px-2 font-bold uppercase">Título del video destacado 1</p>
                   <hr className="text-turquesa bg-azulOscuro w-[80%] h-1 rounded-2xl m-4"/>
                    <div className="flex items-center gap-2">
                        <CalendarGrisMedio className="h-4 w-4"/>
                        <p className="text-grisOscuro text-sm">MAYO 05, 2024</p>
                    </div>
                   {/* <p className="pt-4 text-sm text-azulOscuro font-bold">VER</p> */}
                  </div>
                </div>
                <div id="dest2" className="flex bg-grisMedio rounded-xl">
                  <div className="w-[50%] m-2">
                  <Image
                      className="object-cover rounded-2xl"
                      src="https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/blog%2Fdestacada1.webp?alt=media&token=5d64f23a-f57b-444c-969c-2015df7d350d"
                      alt="destacada1"
                      width={250}
                      height={300}
                    />
                  </div>
                  <div className="w-[50%] p-2 flex flex-col items-center justify-center gap-1">
                   <p className="text-grisOscuro px-2 font-bold uppercase">Título del video destacado 2</p>
                   <hr className="text-turquesa bg-azulOscuro w-[80%] h-1 rounded-2xl m-4"/>
                    <div className="flex items-center gap-2">
                        <CalendarGrisMedio className="h-4 w-4"/>
                        <p className="text-grisOscuro text-sm">MAYO 22, 2024</p>
                    </div>
                   {/* <p className="pt-4 text-sm text-azulOscuro font-bold">VER</p> */}
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
