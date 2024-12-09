"use client"
import Image, { ImageProps } from "next/image";
import { useEffect, useRef } from "react";
interface ImageZoomProps extends ImageProps {
    zoomPlaceholder: React.ReactElement
}
export default function ImageZoom(props: ImageZoomProps) {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const lensRef = useRef<HTMLDivElement | null>(null);
    const resultRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const img = imgRef.current;
        const lens = lensRef.current;
        const result = resultRef.current;

        if (!img || !lens || !result) return;

        let cx: number, cy: number;

        const calculateZoom = () => {
            cx = result.offsetWidth / lens.offsetWidth;
            cy = result.offsetHeight / lens.offsetHeight;

            result.style.backgroundImage = `url('${img.src}')`;
            result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;
        };

        const moveLens = (e: MouseEvent | TouchEvent) => {
            e.preventDefault();
            const pos = getCursorPos(e);

            let x = pos.x - lens.offsetWidth / 2;
            let y = pos.y - lens.offsetHeight / 2;

            if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
            if (x < 0) x = 0;
            if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
            if (y < 0) y = 0;

            lens.style.left = `${x}px`;
            lens.style.top = `${y}px`;
            result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
            result.style.left = `${x + 100}px`;
        };

        const getCursorPos = (e: MouseEvent | TouchEvent) => {
            const a = img.getBoundingClientRect();
            const x = (e instanceof TouchEvent ? e.touches[0].pageX : e.pageX) - a.left - window.scrollX;
            const y = (e instanceof TouchEvent ? e.touches[0].pageY : e.pageY) - a.top - window.scrollY;
            return { x, y };
        };

        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);

        calculateZoom();

        return () => {
            lens.removeEventListener("mousemove", moveLens);
            img.removeEventListener("mousemove", moveLens);
            lens.removeEventListener("touchmove", moveLens);
            img.removeEventListener("touchmove", moveLens);
        };
    }, []);

    return (<>
        <div className="relative">
            <div
                className="absolute border-black border-solid border-2 w-6 h-6 cursor-zoom-in"
                ref={lensRef}
            ></div>
            <div
                ref={resultRef}
                className="absolute bg-no-repeat border border-solid border-gray-300 w-48 h-48"
            ></div>
            <Image {...props} ref={imgRef} />
        </div>
        {props.zoomPlaceholder}
    </>

    );
}
