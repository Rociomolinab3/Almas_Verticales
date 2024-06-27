import { Montserrat } from "next/font/google";
import Fondo1 from "@/assets/logos/fondo1.svg";

const montserrat400 = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const TextSection = () => {
  return (
    <div className="flex flex-col items-center bg-fondoLineas bg-cover text-black rounded-lg shadow-md py-[6%]">
      <div className={`${montserrat400.className} w-[65%] text-3xl flex flex-col items-center justify-center text-center`}>
        <p className=" mb-2 ">
          ¡Nos encantaría poder llegar Alaska algún día y mostrarle al mundo que
          los sueños se hacen realidad!
        </p>
        <p className=" mb-8">
          Esta pasión por el montañismo que nos unió también nos impulsó a soñar
          con conocer la diversidad de las montañas más altas de cada país de
          América, acompáñanos en esta gran aventura.
        </p>
      </div>
      <div>
        <button className="bg-azulOscuro text-white py-2 px-4 rounded-lg hover:bg-azulMedio transition duration-300">
          <a href="https://www.youtube.com/@AlmasVerticales" target="_blank">
            SEGUIR NUESTRO PROYECTO
          </a>
        </button>
      </div>
    </div>
  );
};
