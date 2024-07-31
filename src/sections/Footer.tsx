"use client";

import Image from "next/image";
import logo from "@/assets/FONDOTUCLASE.png";

export const Footer = () => {

  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex">
        <a href="https://wa.me/56940988254" target="_blank" rel="noopener noreferrer">
          <Image src={logo} height={100} quality={100} alt="SaaS logo" className="rounded-full" />
        </a>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
        <a className="cursor-pointer" onClick={() => handleNavigation('inicio')}>Inicio</a>
        <a className="cursor-pointer" onClick={() => handleNavigation('quienes-somos')}>¿Quiénes somos?</a>
        <a className="cursor-pointer" onClick={() => handleNavigation('que-ofrecemos')}>¿Qué ofrecemos?</a>
        <a className="cursor-pointer" onClick={() => handleNavigation('agenda')}>Agenda tu clase</a>
        <a 
        className="cursor-pointer"
        href="https://wa.me/56940988254" 
        target="_blank" 
        rel="noopener noreferrer"
        >
        Contáctanos
        </a>
        </nav>
        <p className="mt-4">&copy; 2024 Tu Clase Particular. All rights reserved.</p>
      </div>
      <div className="absolute bottom-4 left-4 text-sm">
          <span>Elaborada por: </span>
          <a href="https://github.com/tom4stapia" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Tomás
          </a>
          <span> y </span>
          <a href="https://github.com/pablobustose" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Pablo
          </a>
        </div>
    </footer>
  );
};