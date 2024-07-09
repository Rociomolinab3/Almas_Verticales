"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CalendarGrisMedio from "@/assets/logos/calendarGray.svg";
import { Montserrat } from "next/font/google";
import PlayBlue from "@/assets/logos/play_blue.svg";

const montserrat200 = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});
const montserrat400 = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
  });

interface Card {
  id: string;
  srcPrincipal: any;
  alt: string;
  title: string;
  subtitulo: string;
  fecha: string;
  href: string;
}

interface Props {
  cardBlog: Card;
}

function CardBlog({ cardBlog }: Props) {
  return (
    <div className="bg-grisMedioClaro rounded-2xl flex flex-row m-4">
      <div className="py-4 pl-4 w-[40%]">
        <Image
          className="object-cover rounded-2xl"
          src={cardBlog.srcPrincipal}
          alt={cardBlog.alt}
          width={350}
          height={500}
        />
      </div>
      <div className="flex flex-col px-6 py-2 w-[60%] justify-evenly">
        <div
          className={`${montserrat400.className} text-grisOscuro flex items-center gap-2`}
        >
          <CalendarGrisMedio className="w-6 h-6" />
          <p className="">{cardBlog.fecha}</p>
        </div>
        <div>
          <p className="text-gray-950 text-2xl ">{cardBlog.title}</p>
          <p className={`${montserrat200.className} text-grisOscuro text-md`}>{cardBlog.subtitulo}</p>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-grisMedio hover:bg-azulMedio items-center gap-2 justify-center rounded-full opacity-90 border-2 py-2 border-azulOscuro w-[60%] px-2  flex">
            <p className="text-azulOscuro font-bold">VER VIDEO</p>
            <PlayBlue className="h-10 w-10"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;
