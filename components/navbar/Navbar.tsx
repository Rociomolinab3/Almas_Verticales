"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/Logo_Almas _verticales.png"


const navItemsLeft = [
    { path: "/", text: "NUESTRO PROYECTO" },
    { path: "/", text: "SOBRE NOSOTROS" },
    { path: "/", text: "BLOG" },
  ];

  export const Navbar = () => {

    return (
        <header className="fixed w-full top-0 scroll__header text-white tracking-wider">
       <nav className="wrapper hidden text-xl items-center justify-between lg:flex xl:w-[70%] xl:gap-8 lg:gap-6 lg:w-[80%]">
       <Link href="/">
          <Image
            src={Logo}
            alt="Logo UPRO"
            className="max-w-[100px] py-4"
            width={100}
            height={110}
          />
        </Link>
      <div className="mx-auto flex gap-20 text-grisOscuro ">
      {navItemsLeft.map((navItem) => (
            <Link href={navItem.path} key={navItem.path} {...navItem}  >{navItem.text}</Link>
          ))}
      </div>
      <button className="bg-grisOscuro hover:bg-azulMedio text-white  py-2 px-4 rounded-full">
        EN / ES
      </button>
      </nav>
      </header>

    )
  }