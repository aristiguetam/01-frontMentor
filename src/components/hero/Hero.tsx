import Image from "next/image"

export const Hero = () => {
    return (
        <div className="container flex flex-col mx-auto px-5 mt-6 md:mt-10 md:px-0 md:flex-row md:gap-6">

            <div className="md:flex md:flex-col md:w-[70%]">

                <Image src="/assets/images/image-web-3-mobile.jpg" alt="imagen Mobile" width={0} height={0} sizes="(100vw)" className="w-full object-cover object-center md:hidden" />

                <Image src="/assets/images/image-web-3-desktop.jpg" alt="imagen Desktop" width={0} height={0} sizes="(100vw)" className="w-full object-cover object-center hidden md:block" />

                <div className="flex flex-col mt-8 space-y-4 lg:flex-row lg:space-y-0 md:gap-12">
                    <div>
                        <h1 className="text-[#05011b] lg:text-[65px] text-5xl font-bold">
                            The Bright Future of Web 3.0?
                        </h1>
                    </div>

                    <div>
                        <p className="text-[#acabb1] text-ellipsis text-2xl ">
                            We dive into the next evolution of the web that
                            claims to put the power of the platforms back
                            into the hands of the people. But is it really
                            fulfilling its promise?
                        </p>
                        <button
                            className="text-white mt-12 text-center font-medium text-lg uppercase bg-[#f15d52] px-12 py-3 lg:w-[40%] w-auto h-auto lg:h-[65px] hover:bg-[#00001a] transition-all">
                            Read  more
                        </button>
                    </div>


                </div>
            </div>

            <div className="bg-[#00001a] p-5 mt-12 md:mt-0 md:w-[30%]">
                <div className="flex flex-col justify-center  space-y-10">
                    <h2 className="text-[#e6a450] font-bold text-5xl">
                        New
                    </h2>

                    <div className="flex flex-col ">
                        <span className="text-white font-medium text-3xl mb-2 mt-4">
                            Hydrogen VS Electric Cars
                        </span>
                        <p className="text-[#acabb1] text-xl">
                            Will hydrogen-fueled cars ever catch up
                            to EVs?
                        </p>
                    </div>

                    <div className="w-full h-[0.2px] bg-[#acabb1]" />

                    <div className="flex flex-col">
                        <span className="text-white font-medium text-3xl mb-2 mt-4">
                            The Downsides of A1 Artistry
                        </span>
                        <p className="text-[#acabb1] text-xl">
                            What are the possible adverse effects of
                            on-demand A1 image generation?
                        </p>
                    </div>

                    <div className="w-full h-[0.2px] bg-[#acabb1]" />

                    <div className="flex flex-col">
                        <span className="text-white font-medium text-3xl mb-2 mt-4">
                            Is VC Funding Drying Up?
                        </span>
                        <p className="text-[#acabb1] text-xl">
                            Private funding by VC firms is down 50%
                            YOY. We take a look at what that means.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
