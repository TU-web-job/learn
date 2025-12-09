"use client"
import style from "./food.module.css";
import { useRef, useEffect } from "react";

type foodList = {
    food: string;
    setFood: string;
    img: string;
    price: string;
    setPrice: string;
    flg:boolean;
}

const foodMenu:foodList[] = [
    {food: "Hamburder", setFood: "Hamburger + Drink", img: "/image/foodhamburger.jpg", price: "550 Yen", setPrice: "900 Yen", flg:true },
    {food: "Pasta", setFood: "Pasta + Drink", img: "/image/foodpasta.jpg", price: "500 Yen", setPrice: "850 Yen", flg: true},
    {food: "Sandwitch", setFood: "Pasta + Drink", img: "/image/foodsandwitch.jpg", price: "500 Yen", setPrice: "850 Yen", flg: true},
    {food: "Cake", setFood: "Pasta + Drink", img: "/image/foodcake.jpg", price: "500 Yen", setPrice: "850 Yen", flg: true},
    {food: "Donuts", setFood: "Pasta + Drink", img: "/image/fooddounuts.jpg", price: "500 Yen", setPrice: "850 Yen", flg: false},
    {food: "Macaron", setFood: "Pasta + Drink", img: "/image/foodmacaron.png", price: "500 Yen", setPrice: "850 Yen", flg: false},
]

export default function Food() {
    const gridRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const root = gridRef.current;
        if(!root) return () => {};

        const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        const targets = Array.from(root.querySelectorAll<HTMLElement>(`.${style.reveal}`));

        if(prefersReduced || typeof IntersectionObserver === "undefined"){
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
                        if(!option.once &&  option.resetOnExit) {
                            el.classList.remove(style.in);
                            el.style.transitionDelay = "0ms";
                        }
                    }
                });
            },
            {root: null, rootMargin: option.rootMargin, threshold: option.threshold}
        );

        targets.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return(
        <section className={style.wrapper}>
            <h2>Food Menu</h2>
            <nav className={style.container} ref={gridRef}>
                {foodMenu.map((menu) => {
                    const show = menu.flg === true;
                    return(
                    <div key={menu.food} className={`${style.reveal} ${style.animate} ${style.foodContents}`}>
                        <div className={style.imgWrapper}>
                            <img src={menu.img} alt={menu.food} className={style.foodImg} />
                        </div>
                        <h3>{menu.food}</h3>
                        <p><span>Price</span> : {menu.price}</p>
                        {show ? (
                            <>
                            <p><span>SetFood</span> : {menu.setFood}</p>
                            <p><span>SetPrice</span> : {menu.setPrice}</p>
                            </>
                        ) : (
                            <p><span>SetFood</span> : No Offers </p>
                        )}
                    </div>
                    );
                })}
            </nav>
        </section>
    );
}