import Image from "next/image";

interface Props {
    image: string;
    number: string;
    title: string;
    text: string;
}
export const InfoCard = ({ image, number, text, title }: Props) => {
    return (
        <div className="flex flex-col mt-12 ">

            <div className="flex items-center justify-center gap-4 ">

                <div className="w-[28%]">
                    {/* <div className="flex justify-center items-center w-auto h-[100px] lg:w-[120px] lg:h-[150px] "> */}
                    <Image src={image} alt={title} width={0} height={0} sizes="(100vw)" className="w-full h-auto  object-cover object-center" />
                    {/* </div> */}
                </div>

                <div className="w-[72%] space-y-2">
                    <span className="text-[#c6c5ca] text-4xl font-medium">
                        {number}
                    </span>

                    <h2 className="text-[#05011b] font-bold text-lg">
                        {title}
                    </h2>

                    <p className="text-[#acabb1] text-ellipsis ">
                        {text}
                    </p>
                </div>
            </div>

        </div>
    )
}
