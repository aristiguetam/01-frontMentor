'use client';

import { useContext } from "react";

import Image from "next/image";

import { UIContext } from "@/context";

export const Navbar = () => {

    const { toggleMenu } = useContext(UIContext);
    
    return (
        <nav className="container mx-auto flex items-center mt-8 px-5">
            <div>
                <Image src="/assets/images/logo.svg" alt="logo" width={50} height={50} />
            </div>

            <div className="flex-1" />

            <div className="hidden md:flex md:gap-8">
                <div className="text-[#acabb1] font-semibold text-lg">Home</div>
                <div className="text-[#acabb1] font-semibold text-lg">New</div>
                <div className="text-[#acabb1] font-semibold text-lg">Popular</div>
                <div className="text-[#acabb1] font-semibold text-lg">Trending</div>
                <div className="text-[#acabb1] font-semibold text-lg">Categories</div>
            </div>

            <div className="md:hidden">
                <Image src="/assets/images/icon-menu.svg" alt="menu" width={30} height={30} onClick={toggleMenu} />
            </div>
        </nav>
    )
}
