import Image from "next/image"
import { InfoCard } from './InfoCard';

export const HeroInfo = () => {
    return (
        <div className="container mx-auto px-5 md:px-0 flex flex-col md:flex-row items-center  gap-5 mb-5">

            <InfoCard
                image={"/assets/images/image-retro-pcs.jpg"}
                number={"01"}
                title={"Reviving Retro PCs"}
                text={"What happens when Old PC sare given modern upgrades?"} />

            <InfoCard
                image={"/assets/images/image-top-laptops.jpg"}
                number={"02"} title={"Top 10 Laptops of 2022"}
                text={"Our best picks for various needs and budgets"} />

            <InfoCard
                image={"/assets/images/image-gaming-growth.jpg"}
                number={"03"} title={"The Growth of Gaming"}
                text={"How the pandemic has sparked fresh opportunities"} />
        </div>
    )
}
