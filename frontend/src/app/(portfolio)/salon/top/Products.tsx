"use client"

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import style from "./products.module.css";
import { useFadeIn } from "../hooks/useFadeIn";

type productsType = {
    text: string;
    img: string;
}

const productList: productsType[] = [
    {text: "Shampoo-01", img: "/image/salonShampo1.jpeg"},
    {text: "Shampoo-02", img: "/image/salonShampo2.jpg"},
    {text: "Treatment-01", img: "/image/salonTreatment1.jpg"},
    {text: "Treatment-02", img: "/image/salonTreatment2.jpg"},
    {text: "HairOil-01", img: "/image/salonHairOil1.jpg"},
    {text: "HairOil-02", img: "/image/salonHairOil2.jpg"},
    {text: "Set-01", img: "/image/salonSet1.jpg"},
]

export default function products(){
    const [list, setList] = useState<productsType[]>(productList);
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLElement | null>(null);
    const stepPx = useRef<number>(0);
    const intervalRef = useRef<number | null>(null);

    const getClos = () => (
        window.matchMedia("(max-width: 640px)").matches ? 1 : 3);

    const recalcStep = () => {
        const viewport = viewportRef.current;
        const track = trackRef.current;
        if(!viewport || !track) return;
        const styles = getComputedStyle(track);
        const gap = parseFloat(styles.getPropertyValue("--gap")) || 16;
        const cols = getClos();
        const gapsInside = Math.max(0, cols -1);
        const cardWidth = (viewport.clientWidth - gap * gapsInside) / cols;
        stepPx.current = cardWidth + (cols > 1 ? gap : 0);
    };

    useLayoutEffect(() => {
        recalcStep();
        const ro = new ResizeObserver(() => recalcStep());
        if(viewportRef.current) ro.observe(viewportRef.current);

        const mql = window.matchMedia("(max-width: 640px)");
        const onChange = () => recalcStep();
        mql.addEventListener("change", onChange);

        intervalRef.current = window.setInterval(() => {
            const track = trackRef.current;
            const dx = stepPx.current;
            if(!track || dx <= 0) return;
            gsap.to(track, {
                x: -dx,
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    const first = track.children[0];
                    if(first) track.appendChild(first);
                    gsap.set(track, {x: 0});
                },
            });
        }, 3000);

        return () => {
            ro.disconnect();
            mql.removeEventListener("change", onChange);
            if(intervalRef.current) window.clearInterval(intervalRef.current);
            gsap.killTweensOf(trackRef.current);
        };
    }, []);

    useFadeIn();
    return (
        <section className={style.products}>
                <h2 data-fade="up">Products List</h2>
                <div className={style.viewport} ref={viewportRef}>
                    <section className={style.product} ref={trackRef} style={{ transform: "translateX(0)" }}>
                        {list.map((item) => (
                            <nav key={item.img} className={style.content} data-fade="up">
                                <div className={style.imgWrapper}>
                                    <img src={item.img} alt="product"/>
                                </div>
                                <div className={style.txtWrapper}>
                                    <p>{item.text}</p>
                                </div>
                            </nav>
                        ))}
                    </section>
                </div>
        </section>
    );
}