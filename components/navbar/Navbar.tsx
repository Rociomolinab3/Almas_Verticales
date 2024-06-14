"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/Logo_Almas _verticales.png"


const navItemsLeft = [
    { path: "/", text: "Nosotros" },
    { path: "/", text: "Sedes" },
    { path: "/", text: "Carreras" },
  ];

  export const Navbar = () => {

    return (
        <header className="fixed w-full top-0 scroll__header text-white tracking-wider text-xl">
       <nav className="wrapper hidden items-center justify-between lg:flex xl:w-[70%] xl:gap-8 lg:gap-6 lg:w-[80%]">
       <Link href="/">
          <Image
            src={Logo}
            alt="Logo UPRO"
            className="max-w-[100px] py-4"
            width={90}
            height={90}
          />
        </Link>
      <div className="py-6 mx-auto flex gap-6 ">
      {navItemsLeft.map((navItem) => (
            <Link href={navItem.path} key={navItem.path} {...navItem}  >{navItem.text}</Link>
          ))}
      </div>
    
      </nav>
      </header>

    )
  }