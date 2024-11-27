import { host_grotesk } from "@/app/fonts"
import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return (
        <header className={`flex bg-black justify-between py-3 px-5 border-b-4 border-white ${host_grotesk.className}`}>
            <Link href="/">
                <Image src={"/logo.png"} alt={"image of logo"} width={"120"} height={"60"} className="w-[6rem] "></Image>
            </Link>
            <nav className="content-center font-H font-normal">
                <ul className="list-none flex m-0 p-0 text-white space-x-2">
                    <li className=""><Link href="/products">Products</Link></li>
                    <li className=""><Link href="">Careers</Link></li>
                    <li className=""><Link href="">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
