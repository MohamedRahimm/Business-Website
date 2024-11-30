import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"
import Image from "next/image"
import prisma from "@/lib/db"
import Link from "next/link"
import type { Item } from "@prisma/client"
interface ProductProps {
    items: Pick<Item, "id" | "imageURL">[]
}
function Product({ items }: ProductProps) {
    return (
        <div className="flex justify-center">
            <div className="w-3/4">
                <h1 className="mb-4 block">{"test titel"}</h1>
                <Carousel opts={{ align: "start" }} className="max-w-full">
                    <CarouselContent>
                        {items.map((item, key) => (
                            <CarouselItem className={`hover:scale-105 flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3`} key={key}>
                                <Link href={`/products/${item.id}`}>
                                    <Image width={600} height={600} src={item.imageURL} alt="carousel item" />
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious></CarouselPrevious>
                    <CarouselNext></CarouselNext>
                </Carousel>
            </div>
        </div>)
}
export default async function Products() {
    const items = await prisma.item.findMany({
        select: {
            id: true,
            imageURL: true
        }
    })
    return (
        <>
            <Product items={items}></Product>
        </>

    )
}
