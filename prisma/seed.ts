import { Item, Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const items: Prisma.ItemCreateInput[] = [
    { title: "Truck", description: "Dis a Truck", price: 10000 } as Item,
    { title: "Lowbed", description: "Dis a Lowbed", price: 20000 } as Item,
    { title: "Excavator", description: "Dis a Excavator", price: 30000 } as Item,
    { title: "Crane", description: "Dis a Crane", price: 40000 } as Item,
]
const imageURLS = ("https://utfs.io/f/PKnze6UWQBMptgrPtTZm1KMsQxy6dqBJ7jYHeFNnLgflUTcR")
items.forEach(item => item.imageURL = imageURLS)
const main = async () => {
    await prisma.item.deleteMany()
    await prisma.item.createMany({
        data: items
    })
}
main()
