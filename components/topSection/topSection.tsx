'use client'

import { useEffect, useState } from "react";
import LogoInstagram from "@/assets/logos/Instagram.svg";
import LogoWhatsapp from "@/assets/logos/Whatsapp.svg";
import LogoYoutube from "@/assets/logos/Youtube.svg";
import { Montserrat } from "next/font/google";

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

export const TopSection = () => {
  // Define las imágenes para pantallas móviles
  const imagesMobile = [
    "https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/AlmasVerticales2Mobile.webp?alt=media&token=823174e2-0a17-49b2-aa85-f587b1930f44",
    "https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/AlmasVerticales7Mobile.webp?alt=media&token=fb22854a-a32a-4cff-af5e-2213a392ebbb",
    "https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/AlmasVerticales8Mobile.webp?alt=media&token=6c6afed8-5c4d-4eb1-b227-32426d28a4ee",
  ];

  // Define las imágenes para pantallas más grandes
  const imagesDesktop = [
    "https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/principal.jpg?alt=media&token=e53651bd-5539-4bee-807a-768f9bfd5e16",
    "https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/AlmasVerticales2.webp?alt=media&token=ff0f99a6-e2c9-4e81-a18b-43f3c7333999",
    "https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/AlmasVerticales7.webp?alt=media&token=0ab1b1c2-c5a0-4ca2-94f0-c98303f11e6e",
    "https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/AlmasVerticales8.webp?alt=media&token=a4e9753c-ab9a-4582-a012-2079aedd90c7",
    "https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/AlmasVerticales5.webp?alt=media&token=95c5d144-a5c8-4516-b99c-4149fcec9fcb",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar el tamaño de la ventana al montar el componente y cuando cambie su tamaño
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Selecciona el arreglo de imágenes según si es móvil o no
  const images = isMobile ? imagesMobile : imagesDesktop;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section
      className="relative w-full flex flex-col py-[65%] items-center justify-center text-light bg-no-repeat bg-cover bg-center lg:py-[22%]"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${images[currentImageIndex]}')`,
      }}
    >
      {/* Contenido centrado, desplazado hacia arriba en mobile */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white -translate-y-10 md:translate-y-0">
        <h3 className={`${montserrat200.className} text-2xl md:text-3xl`}>
          NUESTRO PROYECTO
        </h3>
        <p className="text-lg md:text-2xl font-semibold text-turquesa">
          DESDE USHUAIA HASTA ALASKA
        </p>
        <h1 className={`${montserrat400.className} text-4xl md:text-6xl mt-8`}>
          ALMAS VERTICALES
        </h1>
        <div className="flex space-x-10 mt-6">
          <a
            className="hover:bg-turquesa rounded-3xl transition-all"
            href="https://www.instagram.com/almasverticales/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoInstagram className="h-12 w-12" />
          </a>
          <a
            href="https://www.youtube.com/@AlmasVerticales"
            aria-label="YouTube"
            className="hover:bg-turquesa rounded-3xl transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoYoutube className="h-12 w-12" />
          </a>
          <a
            href="https://w.app/ijC80v"
            aria-label="WhatsApp"
            className="hover:bg-turquesa rounded-3xl transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoWhatsapp className="h-12 w-12" />
          </a>
        </div>
      </div>

      {/* Flecha Izquierda - Oculta en mobile, visible a partir de md */}
      <button
        onClick={handlePrev}
        className="hidden md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 opacity-50 hover:opacity-100 transition-all p-2"
        aria-label="Anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Flecha Derecha - Oculta en mobile, visible a partir de md */}
      <button
        onClick={handleNext}
        className="hidden md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 opacity-50 hover:opacity-100 transition-all p-2"
        aria-label="Siguiente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};
