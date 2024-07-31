'use client';

import { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.webp";
import MenuIcon from "@/assets/menu.svg";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
                <Image src={Logo} alt="Logo" height={40} width={40} />
                <MenuIcon className="h-5 w-5 md:hidden cursor-pointer" onClick={toggleMenu} />
                <nav className="hidden md:flex gap-6 text-black/80 items-center">
                    <a href="#">Inicio</a>
                    <a href="#">¿Quiénes somos?</a>
                    <a href="#">¿Qué ofrecemos?</a>
                    <a href="#">Agenda tu clase</a>
                    <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                        Contáctanos
                    </button>
                </nav>
            </div>
            {isOpen && (
                <div className="md:hidden mt-6">
                    <nav className="flex flex-col gap-2 text-black/80 items-start">
                        <a href="#" className="block py-2">Inicio</a>
                        <a href="#" className="block py-2">¿Quiénes somos?</a>
                        <a href="#" className="block py-2">¿Qué ofrecemos?</a>
                        <a href="#" className="block py-2">Agenda tu clase</a>
                        <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight w-full">
                            Contáctanos
                        </button>
                    </nav>
                </div>
            )}
        </div>
    );
};

