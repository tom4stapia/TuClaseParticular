'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/assets/FONDOTUCLASE.png";
import MenuIcon from "@/assets/menu.svg";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (id: string) => {
        setIsOpen(false);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 250);
    };

    return (
        <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
                <a href="https://wa.me/56940988254" 
                    target="_blank" className="text-2xl text-[#010D3E] font-medium tracking-tight">Tu Clase Particular</a>
                <MenuIcon className="h-5 w-5 md:hidden cursor-pointer" onClick={toggleMenu} />
                <nav className="hidden md:flex gap-6 text-black items-center">
                    <a className="cursor-pointer" onClick={() => handleNavigation('inicio')}>Inicio</a>
                    <a className="cursor-pointer" onClick={() => handleNavigation('quienes-somos')}>¿Quiénes somos?</a>
                    <a className="cursor-pointer" onClick={() => handleNavigation('que-ofrecemos')}>¿Qué ofrecemos?</a>
                    <a className="cursor-pointer" onClick={() => handleNavigation('agenda')}>Agenda tu clase</a>
                    <a 
                    className="btn btn-primary"
                    href="https://wa.me/56940988254" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    Contáctanos
                    </a>
                </nav>
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden md:hidden"
            >
                <nav className="flex flex-col gap-2 text-black/80 items-start">
                    <a className="block py-2 cursor-pointer mt-3" onClick={() => handleNavigation('inicio')}>Inicio</a>
                    <a className="block py-2 cursor-pointer" onClick={() => handleNavigation('quienes-somos')}>¿Quiénes somos?</a>
                    <a className="block py-2 cursor-pointer" onClick={() => handleNavigation('que-ofrecemos')}>¿Qué ofrecemos?</a>
                    <a className="block py-2 cursor-pointer" onClick={() => handleNavigation('agenda')}>Agenda tu clase</a>
                    <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight w-full">
                        Contáctanos
                    </button>
                </nav>
            </motion.div>
        </div>
    );
};
