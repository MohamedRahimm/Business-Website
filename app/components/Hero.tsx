"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import { montserrat } from "@/app/fonts"
export default function Hero() {
    return (
        <div
            className="bg-cover bg-center bg-[url('/hero-img.png')] px-5 py-12 border-b-4 border-white"
        >
            <div
                className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-x-5 mb-12"
            >
                <div
                    className={`text-white ${montserrat.className} font-semibold text-lg max-w-full z-10 mb-12`}
                >
                    <div className="font-extrabold text-xl">
                        <p>Heavy Duty Machinery</p>
                        <p className="text-[#FFE169]">For Contractors</p>
                    </div>
                    <p>
                        We specialize in providing high-quality, dependable machinery
                        sourced directly from the UK. We give you the equipment to get the
                        job done.                                </p>
                </div>
                <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 2000 })]}>
                    <CarouselContent>
                        <CarouselItem>
                            <Image width={600} height={600} src={"/temp.png"} alt="carousel item" />
                        </CarouselItem>
                        <CarouselItem>
                            <Image width={600} height={600} src={"/temp.png"} alt="carousel item" />
                        </CarouselItem>
                        <CarouselItem>
                            <Image width={600} height={600} src={"/temp.png"} alt="carousel item" />
                        </CarouselItem>
                    </CarouselContent><button
                        className="bg-transparent border-2 border-[#ffe169] text-[#ffe169] px-4 py-2 font-semibold text-base rounded-md transition-all duration-200 ease-in-out w-full shadow-sm hover:bg-[#ffe169] hover:text-black"
                    >
                        View Products
                    </button>
                </Carousel>
            </div>
            <div className="flex justify-center">
                <svg className="max-w-24 w-full animate-bounce"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    id="arrows"
                    onClick={() =>
                        document.querySelector("#content-container")?.scrollIntoView({
                            behavior: "smooth",
                        })}
                >
                    <path d="m7 6 5 5 5-5" />
                    <path d="m7 13 5 5 5-5" />
                </svg>
            </div>
        </div>
    )
}
