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
                <h3 className="text-[#acabb1] font-semibold text-lg cursor-pointer">Home</h3>
                <h3 className="text-[#acabb1] font-semibold text-lg cursor-pointer">New</h3>
                <h3 className="text-[#acabb1] font-semibold text-lg cursor-pointer">Popular</h3>
                <h3 className="text-[#acabb1] font-semibold text-lg cursor-pointer">Trending</h3>
                <h3 className="text-[#acabb1] font-semibold text-lg cursor-pointer">Categories</h3>
            </div>

            <div className="md:hidden">
                <Image
                    src="/assets/images/icon-menu.svg"
                    alt="menu"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                    onClick={toggleMenu} />
            </div>
        </nav>
    )
}
