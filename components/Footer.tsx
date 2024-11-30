import Image from "next/image"
import Link from "next/link";
export default function Footer() {
    const navItems = [
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Products", href: "/products" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" }
    ]
    return (
        <>
            <footer className="bg-black text-white text-sm flex items-center content-center flex-col border-t-4 border-white pb-3">
                <div className="flex flex-col items-center mb-3">
                    <Link href="/" className="max-w-16">
                        <Image src={"/logo.png"} alt={"image of logo"} width={"120"} height={"60"} className="w-[6rem] "></Image>
                    </Link>
                    <p>
                        Copyright © Mohamed Rahim and Son Inc
                    </p>
                </div>
                <nav className="w-full">
                    <ul className="list-none flex justify-center sm:flex-auto">
                        {
                            navItems.map((item, idx) => (
                                <li
                                    className={`text-white px-5`}
                                    key={idx}
                                >
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </footer>
        </>
    );
}
