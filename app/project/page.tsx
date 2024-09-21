"use client";
import Mapa from "@/assets/images/MapaAmerica.webp";
import { useState, useRef, useEffect } from "react";
import { Montserrat } from "next/font/google";
import { dataDetail } from "../project/data";
import Image from "next/image";

const montserrat200 = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

export default function Project() {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeStage !== null) {
      const stageElement = stageRefs.current[activeStage - 1];
      if (stageElement) {
        stageElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [activeStage]);

  return (
    <div>
      <div className="py-[4%] bg-grisOscuro3"></div>
    <div className="relative bg-grisOscuro2 min-h-[100vh] w-full ">
      {/* Imagen de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden hidden md:block">
        <Image
          src={Mapa}
          alt="Mapa América"
          layout="fill"
          objectFit="contain" // Cambiado a 'contain' para que la imagen se ajuste al contenedor
          objectPosition="center" // Centra la imagen en el contenedor
          className="rounded-lg "
        />
        {/* Capa semitransparente */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 p-10"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-32 px-10">
        <h2
          className={`${montserrat200.className} text-2xl text-grisClaro mb-10`}
        >
          DETALLE DE LAS ETAPAS
        </h2>
        <div className="w-full max-w-lg">
          {dataDetail.map((stage, index) => (
            <div
              key={stage.number}
              ref={(el) => {
                stageRefs.current[index] = el;
              }}
              className="mt-4 w-full"
            >
              <button
                className="text-left w-full bg-gray-800 bg-opacity-70 p-4 rounded-lg text-white hover:bg-opacity-90 transition"
                onClick={() =>
                  setActiveStage(
                    activeStage === stage.number ? null : stage.number
                  )
                }
              >
                <div className="flex items-center">
                  <div className="rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
                    {stage.number}
                  </div>
                  <h3 className="ml-2">{stage.title}</h3>
                </div>
              </button>
              {activeStage === stage.number && (
                <div className="mt-2 p-4 rounded-lg bg-gray-900 bg-opacity-80 text-white shadow max-h-60 overflow-y-auto">
                  {/* Limitar la altura máxima a 15rem (60vh) y permitir el desplazamiento */}
                  <p>
                    <strong>País:</strong> {stage.country}
                  </p>
                  <p>
                    <strong>Época:</strong> {stage.season}
                  </p>
                  <p>{stage.description}</p>

                  {stage.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="mt-4">
                      <h4 className="font-semibold">{detail.section}</h4>
                      <p>{detail.description}</p>
                      {/* Verificar si 'days' existe antes de renderizar */}
                      {detail.days && (
                        <ul className="list-disc pl-5 mt-2">
                          {detail.days.map((dia, dayIndex) => (
                            <li key={dayIndex}>
                              <strong>Día {dia.day}:</strong> {dia.trek}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
