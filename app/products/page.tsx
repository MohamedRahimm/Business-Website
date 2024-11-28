import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"
import Image from "next/image"
interface ProductProps {
    title: string
    carouselItems: string[]
}
function Product({ title, carouselItems }: ProductProps) {
    return (
        <div className="flex justify-center">
            <div className="w-3/4">
                <h1 className="mb-4 block">{title}</h1>
                <Carousel opts={{ align: "start" }} className="max-w-full">
                    <CarouselContent>
                        {carouselItems.map((item, key) => (
                            <CarouselItem className={`hover:scale-105 flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3`} key={key}>
                                <Image width={600} height={600} src={item} alt="carousel item" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious></CarouselPrevious>
                    <CarouselNext></CarouselNext>
                </Carousel>
            </div>
        </div>)
}
export default function Products() {
    const carouselItems = new Array(10).fill("/temp.png")
    return (
        <>
            <Product title="test" carouselItems={carouselItems} ></Product>
            <Product title="test" carouselItems={carouselItems} ></Product>
        </>

    )
}
