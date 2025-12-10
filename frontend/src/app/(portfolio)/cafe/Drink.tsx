"use client"

import style from "./drink.module.css";
import { useEffect, useRef } from "react";

type drinkMenu = {
    drink: string;
    img: string;
    price:string;
    size:string;
    temp: string;
}

const menuList: drinkMenu[] = [
    {drink: "Espresso", img: "/image/cafeespresso.jpg", price: "350 / 400 Yen", size: "normal / double", temp:""},
    {drink: "Americano", img:"/image/cafeamericano.jpg", price: "400 / 450 / 500 Yen", size: "small / medium / large", temp: "Ice / Hot"},
    {drink: "Cafe Latte", img: "/image/cafelatte.jpg", price: " 500 / 550 / 600 Yen", size: "small / medium / large", temp: " Ice / Hot"},
    {drink: "Caramel Machiato", img: "/image/caramelmachi.jpg", price: " 550 / 600 / 650 Yen", size: "small / medium / large", temp: " Ice / Hot"},
    {drink: "GreenTea Latte", img: "/image/mattcha.png", price: " 500 / 550 / 600 Yen", size: "small / medium / large", temp: " Ice / Hot"},
    {drink: "ChaiTea Latte", img: "/image/chaitealatte.png", price: " 450 / 500 / 550 Yen", size: "small / medium / large", temp: " Ice / Hot"},
]
export default function Drink() {
    const gridRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const root = gridRef.current;
        if(!root) return () => {};

        const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        const targets = Array.from(root.querySelectorAll<HTMLElement>(`.${style.reveal}`));

        if(prefersReduced || typeof IntersectionObserver === "undefined") {
            targets.forEach((el) => el.classList.add(style.in));
            return;
        }

        const option = {
            once: false,
            resetOnExit: true,
            stagger: 100,
            rootMargin: "0px 0px -10% 0px",
            threshold: 0.15,
        };

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const el = entry.target as HTMLElement;
                    const idx = targets.indexOf(el);

                    if(entry.isIntersecting) {
                        el.style.transitionDelay = `${idx * option.stagger}ms`;
                        el.classList.add(style.in);
                        if(option.once) io.unobserve(el);
                    } else {
                        if(!option.once && option.resetOnExit) {
                            el.classList.remove(style.in);
                            el.style.transitionDelay = "0ms";
                        }
                    }
                });
            },
            {root: null, rootMargin: option.rootMargin, threshold: option.threshold }
        );

        targets.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return( 
        <>
        <section className={style.wrapper}>
            <h2>Drink Menu</h2>
            <nav className={style.menuWrapper} ref={gridRef}>
            {menuList.map((menu) => (
                <div className={`${style.menuContainer} ${style.reveal} ${style.animate}`} key={menu.drink}>
                    <div className={style.imgWrapper}>
                        <img src={menu.img} alt={menu.drink} className={style.drinkImg}/>
                    </div>
                    <h3>{menu.drink}</h3>
                    <p><span>Price</span> : {menu.price}</p>
                    <p><span>Size</span> : {menu.size}</p>
                    <p>{menu.temp}</p>
                </div>
            ))}
            </nav>
        </section>
        </>
    );
}