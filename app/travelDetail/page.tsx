'use client';
import { useState, useRef, useEffect } from 'react';
import { Montserrat } from "next/font/google";
import { dataDetail } from './data';

const montserrat200 = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function TravelDetail() {
  // Ajusta el tipo de activeStage para que acepte 'number' o 'null'
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeStage !== null) {
      const stageElement = stageRefs.current[activeStage - 1];
      if (stageElement) {
        stageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [activeStage]);

  return (
    <div className="py-64 bg-grisMedioOscuro flex items-center flex-col">
      <h2 className={`${montserrat200.className} text-2xl text-slate-200`}>DETALLE DE LAS ETAPAS</h2>
      {dataDetail.map((stage, index) => (
        <div
          key={stage.number}
          ref={el => {
            stageRefs.current[index] = el; // Maneja las referencias de los divs
          }}
          className="mt-4 w-full max-w-lg mx-auto"
        >
          <button
            className="text-left w-full"
            onClick={() => setActiveStage(activeStage === stage.number ? null : stage.number)}
          >
            <div className="flex items-center justify-center">
              <div className="rounded-full w-8 h-8 flex items-center justify-center border-2 border-black">
                {stage.number}
              </div>
              <h3 className="ml-2">{stage.title}</h3>
            </div>
          </button>
          {activeStage === stage.number && (
            <div className="mt-2 p-4 rounded shadow bg-white">
              <p><strong>País:</strong> {stage.country}</p>
              <p><strong>Época:</strong> {stage.season}</p>
              <p>{stage.description}</p>

              {/* Renderización de los detalles de la etapa */}
              {stage.details?.map((section, secIndex) => (
                <div key={secIndex} className="mt-4">
                  <h4 className="font-bold">{section.section}</h4>
                  <p>{section.description}</p>

                  {/* Asegúrate de que 'days' existe antes de mapear */}
                  <ul className="mt-2 list-disc list-inside">
                    {section.days?.map((day, dayIndex) => (
                      <li key={dayIndex}>
                        <strong>Día {day.day}:</strong> {day.trek}
                      </li>
                    )) || <li>No hay días disponibles.</li>}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
