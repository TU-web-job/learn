"use client"

import Image from "next/image";
import style from "./header.module.css";

export default function Header() {
    return(
        <header className={style.header}>
            <section className={style.container}>
                <Image src="/image/cafetop.jpg"fill alt="header-img" className={style.header_img} />
                <nav className={style.textContainer}>
                    <h1>Sample Coffee Shop</h1>
                    <p>~ I made this Portfolio ~</p>
                </nav>
            </section>
        </header>
    );
}