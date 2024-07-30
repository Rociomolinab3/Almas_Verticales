import Logo from "@/assets/images/Logo_Almas _verticales.png";
import Image from "next/image";
import LogoInstagram from "@/assets/logos/Instagram.svg";
import LogoWhatsapp from "@/assets/logos/Whatsapp.svg";
import LogoYoutube from "@/assets/logos/Youtube.svg";

export const FooterSection = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center">
        <div id="logo" className="mb-10 md:mb-0">
          <Image
            src={Logo}
            alt="Logo UPRO"
            className="max-w-[100px] py-2"
            width={100}
            height={110}
          />
        </div>
        <div id="recursos" className="flex flex-col md:flex-row text-center md:text-left mb-10 md:mb-0">
          <div>
            <h2 className="font-semibold mb-2">Recursos</h2>
            <ul>
            <li>
                <a href="/about" className="hover:underline">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/project" className="hover:underline">
                  Nuestro Proyecto
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:underline">
                  Tienda
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="redes" className="flex flex-col items-center">
          
          <div className="flex flex-col space-y-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 px-6 py-2 bg-azulMedio bg-opacity-50 rounded-full hover:bg-azulMedio"
            >
              <LogoInstagram className="h-6 w-6" />
              <span>Instagram</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 px-6 py-2 bg-azulMedio bg-opacity-50 rounded-full hover:bg-azulMedio"
            >
              <LogoWhatsapp className="h-6 w-6" />
              <span>Whatsapp</span>
            </a>
            <a
              href="https://www.youtube.com/@AlmasVerticales/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 px-6 py-2 bg-azulMedio bg-opacity-50 rounded-full hover:bg-azulMedio"
            >
              <LogoYoutube className="h-6 w-6" />
              <span>You Tube</span>
            </a>
            <a
              href="https://www.youtube.com/@AlmasVerticales/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 px-6 py-2 bg-azulMedio bg-opacity-50 rounded-full hover:bg-azulMedio"
            >
              <LogoYoutube className="h-6 w-6" />
              <span>Tik Tok</span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-sm">
        &copy;2024 desarrollado por Rocio Molina
      </div>
    </div>
  );
};
