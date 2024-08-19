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
  return (
    <section className="w-full bg-main bg-no-repeat flex flex-col py-[55%] items-center justify-center text-light bg-cover bg-center lg:py-[15%]">
      <div className="absolut inset-0 flex flex-col justify-center items-center text-center text-white">
        <h3 className={`${montserrat200.className} text-2xl md:text-3xl`}>
          NUESTRO PROYECTO
        </h3>
        <p className="text-lg md:text-2xl font-semibold text-turquesa">
          DESDE USUAHIA HASTA ALASKA
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
          >
            <LogoInstagram className="h-12 w-12" />
          </a>
          <a
            href="https://www.youtube.com/@AlmasVerticales"
            aria-label="YouTube"
            className="hover:bg-turquesa rounded-3xl transition-all"
            target="_blank"
          >
            <LogoYoutube className="h-12 w-12" />
          </a>
          <a
            href="https://w.app/ijC80v"
            aria-label="WhatsApp"
            className="hover:bg-turquesa rounded-3xl transition-all"
            target="_blank"
          >
            <LogoWhatsapp className="h-12 w-12" />
          </a>
        </div>
      </div>
    </section>
  );
};

// <div className="relative">

// <Image
//     src="/src/assets/images/paginaWeb/home/imagenPrincipal.webp"
//     alt="Background"
//     className="w-full h-screen object-cover"
//     width={300}
//     height={500} />

// <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
//     <h2 className="text-2xl md:text-4xl font-bold">NUESTRO PROYECTO</h2>
//     <p className="text-lg md:text-2xl font-semibold text-green-300">DESDE USUAHIA HASTA ALASKA</p>
//     <h1 className="text-4xl md:text-6xl font-bold mt-4">ALMAS VERTICALES</h1>
//     <div className="flex space-x-4 mt-6">
//         <a href="https://www.instagram.com/tu-instagram" aria-label="Instagram">
//             <LogoInstagram className="h-8 w-8" />
//         </a>
//         <a href="https://www.youtube.com/tu-youtube" aria-label="YouTube">
//             <LogoYoutube className="h-8 w-8" />
//         </a>
//         <a href="https://wa.link/tu-whatsapp" aria-label="WhatsApp">
//             <LogoWhatsapp className="h-8 w-8" />
//         </a>
//     </div>
// </div>
// </div>

// <div className="bg-blue-800 py-4">
// <div className="container mx-auto flex justify-around text-white text-center">
//     <div>
//         <img src="/src/assets/icons/itinerarios.png" alt="Itinerarios" className="mx-auto h-8 w-8" />
//         <p className="mt-2">ITINERARIOS</p>
//     </div>
//     <div>
//         <img src="/src/assets/icons/rutinas.png" alt="Rutinas" className="mx-auto h-8 w-8" />
//         <p className="mt-2">RUTINAS</p>
//     </div>
//     <div>
//         <img src="/src/assets/icons/sponsors.png" alt="Sponsors" className="mx-auto h-8 w-8" />
//         <p className="mt-2">SPONSORS</p>
//     </div>
//     <div>
//         <img src="/src/assets/icons/nuestro_proyecto.png" alt="Nuestro Proyecto" className="mx-auto h-8 w-8" />
//         <p className="mt-2">NUESTRO PROYECTO</p>
//     </div>
//     <div>
//         <img src="/src/assets/icons/videos.png" alt="Videos" className="mx-auto h-8 w-8" />
//         <p className="mt-2">VIDEOS</p>
//     </div>
//     <div>
//         <img src="/src/assets/icons/puntos_mas_altos.png" alt="Puntos más Altos" className="mx-auto h-8 w-8" />
//         <p className="mt-2">PUNTOS MÁS ALTOS</p>
//     </div>
// </div>
// </div>
