'use client';

import ArrowRight from "@/assets/arrow-right.svg";
import { Navbar } from "@/components/Navbar";


export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-10">
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-2">
      <p className="text-white/80 hidden md:block ">¿Estás buscando una clase particular para tu hijo?</p>
      <div className="inline-flex gap-1 items-center">
      <p>Agenda tu clase con nosotros</p>
      <ArrowRight className="w-4 h-4 inline-flex justify-center items-center"/>
      </div>
    </div>
    <div className="py-5">
      <Navbar />
    </div>
    </header>
  );
};
