import prisma from "@/lib/db"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const item = await prisma.item.findUnique({
        where: {
            id: (await params).id
        }
    })
    if (!item) {
        // add error logic
    }
    const { title, description, imageURL, price, quantity } = item!

    return (
        <main className="grid p-10">
            <div className="flex bg-white rounded-lg shadow-lg justify-center max-w-4xl justify-self-center">
                <Image width={600} height={600} src={imageURL} alt="carousel item" className="object-contain" />
                <div className="w-1/2 p-8">
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    <div className="space-y-4">
                        <p className="text-gray-600 text-sm">
                            {description}
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="font-semibold">Quantity: {quantity}</span>
                            <div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span className="font-bold border-b-2 border-dotted border-gray-400 cursor-help">${price}</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Prices are negotiable</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>
                    <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                        Buy Now
                    </button>
                </div>
            </div>
        </main>
    )
}
