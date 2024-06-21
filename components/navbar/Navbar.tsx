"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/Logo_Almas _verticales.png"


const navItemsLeft = [
    { path: "/", text: "SOBRE NOSOTROS" },
    { path: "/", text: "NUESTRO PROYECTO" },
    { path: "/", text: "BLOG" },
    { path: "/", text: "TIENDA" },
  ];

  export const Navbar = () => {

    return (
      <header className="fixed w-full top-0 scroll__header tracking-wider">
       {/* Navbar Desktop */}
        <nav className="wrapper hidden items-center justify-between lg:flex xl:w-[70%] lg:w-[80%]">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo UPRO"
              className="max-w-[100px] py-2"
              width={100}
              height={110}
            />
          </Link>
          <div className="flex flex-1 justify-evenly items-center mx-auto text-lg text-grisOscuro whitespace-nowrap">
            {navItemsLeft.map((navItem) => (
              <Link href={navItem.path} key={navItem.path} {...navItem}>
                {navItem.text}
              </Link>
            ))}
          </div>
          {/* <button className="bg-grisOscuro hover:bg-azulMedio text-white py-2 px-4 rounded-full">
            EN / ES
          </button> */}
        </nav>

        {/* Navbar Mobile */}
        <nav className="wrapper flex bg-grisClaro  items-center justify-between lg:hidden peer-checked:bg-grisClaro">
            <div id="logo">
            <Link href="/">
            <Image
              src={Logo}
              alt="Logo UPRO"
              className="max-w-[100px] py-2"
              width={80}
              height={80}
            />
          </Link>
            </div>
            <div>
          <input
            type="checkbox"
            name="menu"
            id="menu"
            className="peer hidden"
          />
          <label
            htmlFor="menu"
            className="bg-menu w-8 h-8 bg-cover bg-center cursor-pointer absolute top-10 right-10 peer-checked:bg-close transition-all z-50"
          ></label>
          <div className="fixed inset-0 bg-grisMedio translate-x-full peer-checked:translate-x-0 ">
            <ul className="absolute inset-x-0 top-24 p-12 w-[90%] mx-auto text-center text-azulOscuro font-bold uppercase grid gap-5 rounded-md">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/about">Sobre Nosotros</a>
              </li>
              <li>
                <a href="/project">Nuestro Proyecto</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/shop">Tienda</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
      </header>
    );
  }