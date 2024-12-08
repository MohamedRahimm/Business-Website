import prisma from "@/lib/db"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const product = await prisma.item.findUnique({
        where: {
            id: (await params).id
        }
    })
    return (
        <>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
        </>
    )
}
