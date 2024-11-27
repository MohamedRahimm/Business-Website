import Image from "next/image"
export default function Footer() {
    const navItems = [
        { label: "Cookie Policy", href: "" },
        { label: "Products", href: "" },
        { label: "Careers", href: "" },
        { label: "Contact", href: "" }
    ]
    return (
        <>
            <footer className="bg-black text-white text-sm flex items-center content-center flex-col border-t-4 border-white pb-3">
                <div className="flex flex-col items-center mb-3">
                    <a href="#" className="max-w-16">
                        <Image src={"/logo.png"} alt={"image of logo"} width={"120"} height={"60"} className="w-[6rem] "></Image>
                    </a>
                    <p>
                        Copyright © Mohamed Rahim and Son Inc
                    </p>
                </div>
                <nav className="w-full">
                    <ul className="list-none grid justify-items-center sm:grid-cols-2">
                        {
                            navItems.map((item, idx) => (
                                <li
                                    className={`text-white px-5`}
                                    key={idx}
                                >
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </footer>
        </>
    );
}
