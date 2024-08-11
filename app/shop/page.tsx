import Image from "next/image";
import shop from '@/assets/images/shop.png';
import { Montserrat } from "next/font/google";

const montserrat300 = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: "300",
  });

export default function Shop() {
  return (
    <div className="bg-grisOscuro px-10 flex justify-center items-center min-h-screen">
      <section className="relative bg-cover py-32 w-[60%] text-center flex items-center justify-center flex-col">
        <h2 className={`${montserrat300.className} text-white text-4xl mb-4 uppercase`}>
          Próximamente
        </h2>
        <h2 className={`${montserrat300.className} w-[80%]  text-turquesa text-2xl mb-4 uppercase`}>
          podrás adquirir los productos de Almas Verticales en nuestra tienda online
        </h2>
        <div className="relative flex justify-center">
          <Image
            src={shop}
            alt="Mapa América"
            width={650}
            height={450}
            className="rounded-lg object-cover w-full max-w-lg h-auto"
          />
        </div>
      </section>
    </div>
  );
}
