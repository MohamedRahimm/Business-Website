import { open_sans } from "@/app/fonts"
import Image from "next/image"

export default function Content() {
    const checklistItems = [
        {
            title: "Affordable Prices!",
            description: "High-quality machinery that fits your budget.",
        },
        {
            title: "Unmatched Expertise!",
            description: "Industry knowledge you can rely on.",
        },
        {
            title: "Wide Selection!",
            description: "Equipment for every need, all in one place.",
        },
    ];

    return (
        <div>
            <div className={`grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 relative px-5 ${open_sans.className} mb-24`}>
                <div className="absolute bg-[#ffe400] h-1/2 w-full self-end z-0"></div>
                <div className="h-full w-full z-10">
                    <Image height={600} width={600} alt="idk" src="/temp.png" className="translate-y-[30%] flex justify-self-end"></Image>
                </div>
                <aside className="text-container content-center self-end justify-self-center min-h-[50%] w-full contain-inline-size z-10 mt-32">
                    <ul>
                        {checklistItems.map((item, index) => (
                            <li key={index} className="text-[clamp(0.9rem,3cqi,3rem)]">
                                <svg className="max-w-[5.5cqi] align-middle mr-2 inline"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5" />
                                    <path
                                        stroke="#34b93d"
                                        strokeWidth="3"
                                        d="m9 11 3 3L22 4"
                                    />
                                </svg>

                                <b>{item.title}</b> <span>{item.description}</span>
                            </li>
                        ))}
                    </ul>

                </aside>
            </div>
            <div className={`grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 relative px-5 ${open_sans.className} mb-24`}>
                <p className="self-center text-lg">{
                    `We have been selling high-quality machinery for over 20 years,
                    helping businesses tackle their toughest projects with ease. Our
                    commitment to reliability, affordability, and customer
                    satisfaction has made us a trusted partner for contractors,
                    builders, and industrial operators alike. Whether you need
                    durable equipment for heavy-duty tasks or expert advice to make
                    the right choice, we're here to power your success.`
                }
                </p>
                <div className="mt-10 grid">
                    <Image height={600} width={600} alt="idk" src="/temp2.png" className="justify-self-end"></Image>
                </div>
            </div>
        </div>
    );
}
