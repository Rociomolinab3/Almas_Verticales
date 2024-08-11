'use client'
import Mapa from '@/assets/images/MapaAmerica.webp';
import React, { useState } from "react";
import Image from "next/image";

export default function Project() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const stages = [
    { id: 1, title: "ETAPA 1", days: "10 días", description: "Chile - Argentina", 
      position: "bottom-[5%] left-[35%]",
      responsivePosition: "md:bottom-[5%] md:left-[50%] lg:bottom-[10%] lg:left-[35%]"
    },
    { id: 2, title: "ETAPA 2", days: "25 días", description: "Uruguay", 
      position: "bottom-[8%] right-[0%]",
      responsivePosition: "md:bottom-[9%] md:right-[0%] lg:bottom-[13%] lg:right-[1%]"
    },
    { id: 3, title: "ETAPA 3", days: "10 días", description: "Paraguay", 
      position: "bottom-[25%] right-[2%]",
      responsivePosition: "md:bottom-[25%] md:right-[5%] lg:bottom-[25%] lg:right-[3%]"
    },
    { id: 4, title: "ETAPA 4", days: "40 días", description: "Bolivia", 
      position: "bottom-[22%] left-[48%]",
      responsivePosition: "md:bottom-[22%] md:left-[47%] lg:bottom-[22%] lg:left-[52%]"
    },
    { id: 5, title: "ETAPA 5", days: "60 días", description: "Perú", 
      position: "bottom-[32%] left-[65%]",
      responsivePosition: "md:bottom-[32%] md:left-[64%] lg:bottom-[31%] lg:left-[66%]"
    },
    { id: 6, title: "ETAPA 6", days: "35 días", description: "Ecuador", 
      position: "bottom-[35%] left-[41%]",
      responsivePosition: "md:bottom-[35%] md:left-[42%] lg:bottom-[35%] lg:left-[44%]"
    },
    { id: 7, title: "ETAPA 7", days: "120 días", description: "Colombia, Venezuela, Brasil, Guyana", 
      position: "bottom-[44%] right-[2%]",
      responsivePosition: "md:bottom-[39%] md:right-[3%] lg:bottom-[40%] lg:right-[2%]"
    },
    { id: 8, title: "ETAPA 8", days: "85 días", description: "América Central", 
      position: "bottom-[53%] right-[19%]",
      responsivePosition: "md:bottom-[52%] md:right-[19%] lg:bottom-[50%] lg:right-[15%]"
    },
    { id: 9, title: "ETAPA 9", days: "80 días", description: "América del Norte", 
      position: "top-[35%] left-[10%]",
      responsivePosition: "md:top-[35%] md:left-[9%] lg:top-[35%] lg:left-[10%]"
    },
  ];

  const toggleStage = (id: number) => {
    setActiveStage(activeStage === id ? null : id);
  };

  return (
    <div className="bg-grisOscuro px-10">
      <section className="relative bg-cover h-[100%] w-[100%] py-32">
        <div className="relative">
          <Image
            src={Mapa}
            alt="Mapa América"
            width={1400}
            height={900}
            className="rounded-lg object-cover w-full h-full"
          />
          {stages.map((stage) => (
            <div
              key={stage.id}
              className={`absolute ${stage.position} ${stage.responsivePosition} bg-azulMedio w-[15%] text-white p-2 rounded-xl`}
            >
              <div className="flex flex-col  justify-between items-center ">
                <h3 className="text-sm md:text-lg text-azulOscuro font-bold">{stage.title}</h3>
                <button onClick={() => toggleStage(stage.id)} className="text-sm bg-grisMedio rounded-lg px-2 font-bold text-azulOscuro">
                  {activeStage === stage.id ? "ver menos" : "ver más"}
                </button>
              </div>
              {activeStage === stage.id && (
                <div className='bg-grisMedio rounded-xl px-2 pb-2 pt-1 mt-1'>
                  <p className="mt-2 text-xs">{stage.description}</p>
                  <p className="text-sm mt-2">{stage.days}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
