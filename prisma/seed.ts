import { Item, Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const items: Prisma.ItemCreateInput[] = [
    { title: "Truck", description: "Dis a Truck", price: 10000 } as Item,
    { title: "Lowbed", description: "Dis a Lowbed", price: 20000 } as Item,
    { title: "Excavator", description: "Dis a Excavator", price: 30000 } as Item,
    { title: "Crane", description: "Dis a Crane", price: 40000 } as Item,
]
const main = async () => {
    await prisma.item.createMany({
        data: items
    })
}
main()
