'use client';
import { useContext } from "react"
import Image from "next/image"

import { UIContext } from "@/context";

export const SideMenu = () => {

    const { OpenMenu, toggleMenu } = useContext(UIContext);


    return (
        <div className={`${OpenMenu ? 'relative ' : 'hidden' } `}>

            <div className={`flex fixed  z-[99999] top-0 h-screen w-screen`} >

                <div className="w-[35%]  bg-black/40" />

                <div className="flex flex-col w-[65%] bg-white " >

                    <div className="flex items-end justify-end mt-10 mr-4">
                        <Image
                            src="/assets/images/icon-menu-close.svg"
                            alt="logo"
                            width={34}
                            height={34}
                            onClick={toggleMenu}
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-4 ml-10 mt-32">
                        <h3 className="text-xl font-normal text-black cursor-pointer">Home</h3>
                        <h3 className="text-xl font-normal text-black cursor-pointer">New</h3>
                        <h3 className="text-xl font-normal text-black cursor-pointer">Popular</h3>
                        <h3 className="text-xl font-normal text-black cursor-pointer">Trending</h3>
                        <h3 className="text-xl font-normal text-black cursor-pointer">Categories</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
