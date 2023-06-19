import Image from "next/image"

export const Hero = () => {
    return (
        <div className="container flex flex-col mx-auto px-5 mt-6 md:mt-10 md:px-0 md:flex-row md:gap-6">

            <div className="md:flex md:flex-col md:w-[70%]">

                <Image src="/assets/images/image-web-3-mobile.jpg" alt="imagen Mobile" width={0} height={0} sizes="(100vw)" className="w-full object-cover object-center md:hidden" />

                <Image src="/assets/images/image-web-3-desktop.jpg" alt="imagen Desktop" width={0} height={0} sizes="(100vw)" className="w-full object-cover object-center hidden md:block" />

                <div className="flex flex-col mt-8 space-y-4 lg:flex-row lg:space-y-0 md:gap-4">
                    <div>
                        <h1 className="text-[#05011b] text-5xl font-bold">
                            The Bright Future of Web 3.0?
                        </h1>
                    </div>

                    <div>
                        <p className="text-[#acabb1] text-ellipsis ">
                            We dive into the next evolution of the web that
                            claims to put the power of the platforms back
                            into the hands of the people. But is it really
                            fulfilling its promise?
                        </p>

                        <button className="text-white mt-6 text-center font-medium uppercase bg-[#f15d52] px-12 py-3">
                            Read more
                        </button>

                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center  bg-[#00001a] p-5 mt-12 md:mt-0 space-y-8  md:w-[30%]">
                <h2 className="text-[#e6a450] font-bold text-4xl">
                    New
                </h2>

                <div className="flex flex-col ">
                    <span className="text-white font-medium text-xl mb-2">
                        Hydrogen VS Electric Cars
                    </span>
                    <p className="text-[#acabb1]">
                        Will hydrogen-fueled cars ever catch up
                        to EVs?
                    </p>
                </div>

                <div className="w-full h-[0.2px] bg-[#acabb1]" />

                <div className="flex flex-col">
                    <span className="text-white font-medium text-xl mb-2">
                        The Downsides of A1 Artistry
                    </span>
                    <p className="text-[#acabb1]">
                        What are the possible adverse effects of
                        on-demand A1 image generation?
                    </p>
                </div>

                <div className="w-full h-[0.2px] bg-[#acabb1]" />

                <div className="flex flex-col">
                    <span className="text-white font-medium text-xl mb-2">
                        Is VC Funding Drying Up?
                    </span>
                    <p className="text-[#acabb1]">
                        Private funding by VC firms is down 50%
                        YOY. We take a look at what that means.
                    </p>
                </div>
            </div>

        </div>
    )
}
