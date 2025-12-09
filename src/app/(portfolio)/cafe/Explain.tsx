"use client"

import { IoCafe } from "react-icons/io5";
import { FaReact,FaClock } from "react-icons/fa";
import style from "./explain.module.css";

export default function Explain(){
    return (
        <>
            <section className={style.wrapper}>
                <h2>What's This Page</h2>
                <div className={style.contentsWrapper} >
                    <nav className={style.container}>
                        <h3>Coffee <IoCafe /></h3>
                        <p>This Page Is Fake CoffeeShop</p>
                    </nav>
                    <nav className={style.container}>
                        <h3>React <FaReact /></h3>
                        <p>This Application Made by React/Next.js</p>
                    </nav>
                    <nav className={style.container}>
                        <h3>Making Time <FaClock /></h3>
                        <p>I made at night after work and weekend</p>
                    </nav>
                </div>
            </section>
        </>
    );
}