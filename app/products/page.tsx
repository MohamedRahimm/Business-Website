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
    slidesPerGroup: number
    carouselItems: string[]
}
function Product({ title, slidesPerGroup, carouselItems }: ProductProps) {
    return (
        <div className="flex justify-center">
            <div className="w-3/4">
                <h1 className="mb-4 block">{title}</h1>
                <Carousel opts={{ "slidesToScroll": 1 }}>
                    <CarouselContent>
                        {carouselItems.map((item, key) => (
                            <CarouselItem className={`basis-1/${slidesPerGroup} hover:scale-105" `} key={key}>
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
            <Product title="test" slidesPerGroup={3} carouselItems={carouselItems} ></Product>
            <Product title="test" slidesPerGroup={3} carouselItems={carouselItems} ></Product>
        </>

    )
}
