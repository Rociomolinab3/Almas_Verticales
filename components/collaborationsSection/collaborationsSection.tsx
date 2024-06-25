'use client'

import React, { useState } from "react";
import Image from "next/image";
import ExampleImage from '@/assets/images/imagenAlmas.jpg'; // Asegúrate de que la ruta sea correcta

export const Collaborations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("RUTINAS");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg text-white ">
        <section className="flex items-center flex-col gap-5 ">
        <div className="mb-4 text-right">
        <span className="bg-orange-500 text-white py-1 px-3 rounded-full">
          Colaboraciones
        </span>
      </div>
      <h2 className="text-center text-xl mb-6">
        Texto descriptivo de persuasión a las personas, empresas u sponsors a colaborar.
      </h2>
      <div className="flex gap-10 w-[60%]">
        <div className="bg-white text-black rounded-lg p-4 flex-shrink-0">
          <button
            onClick={() => handleTabClick("RUTINAS")}
            className={`w-full py-4 mb-2 rounded ${
              activeTab === "RUTINAS" ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            RUTINAS
          </button>
          <button
            onClick={() => handleTabClick("SPONSORS")}
            className={`w-full py-4 mb-2 rounded ${
              activeTab === "SPONSORS" ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            SPONSORS
          </button>
          <button
            onClick={() => handleTabClick("TIENDA")}
            className={`w-full py-4 rounded ${
              activeTab === "TIENDA" ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            TIENDA ONLINE
          </button>
        </div>
        <div className="flex-1 py-4">
          {activeTab === "RUTINAS" && (
            <div>
              <h3 className="text-xl font-bold mb-4">Preparamos tu rutina & la adaptamos a tus necesidades</h3>
              <p className="mb-4">
                Contamos con diferentes planes dependiendo de tus objetivos físicos y deportivos.
              </p>
              <ul className="list-none">
                <li className="mb-2">
                  <span className="font-bold">PLAN BÁSICO INICIAL</span> 
                </li>
                <li>
                  <span className="font-bold">PLAN PERSONALIZADO</span> 
                </li>
              </ul>
            </div>
          )}
          {activeTab === "SPONSORS" && (
            <div>
              <h3 className="text-xl font-bold mb-4">Sponsors</h3>
              <p className="mb-4">Los invitamos a ser parte de nuestro proyecto, sumandote como sponsor o entrenando en base a tus objetivos, junto a nosotros para poder cumplir este sueño.</p>
            </div>
          )}
          {activeTab === "TIENDA" && (
            <div>
              <h3 className="text-xl font-bold mb-4">Nuestra Tienda</h3>
              <p className="mb-4">Próximamente podrás comprar los proudctos de Almas Verticales en nuestra Tienda Online, y así colaborar al crecimiento de este hermoso proyecto.</p>
            </div>
          )}
        </div>
        <div className="flex-shrink-0">
          <Image src={ExampleImage} alt="Example" width={300} height={400} className="rounded-lg" />
        </div>
      </div>
        </section>
      
    </div>
  );
};
