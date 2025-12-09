"use client"
import { useFadeIn } from "../hooks/useFadeIn";
import style from "./main.module.css";

export default function Main() {

    useFadeIn();
    return(
        <section className={style.content}>
            <nav className={style.txtWrapper} data-fade="up">
                <p>We provide our services in japan  <br />
                    with a spirit of omotenashi and sincere dedication. <br />
                    We strive to deliver value tailored to the needs of each individual customer <br />
                    and to ensure their satisfaction.
                </p>
            </nav>
            <nav className={style.imgWrapper} data-fade="up">
                <img src="/image/salonRoom.jpg" alt="for us" />
            </nav>
            <nav className={style.txtWrapper} data-fade="up">
                <p>We carry a range of hair care products such as shampoos and treatments.<br />
                    Feel free to ask if you need anything.     
                </p>
            </nav>
            <nav className={style.imgWrapper} data-fade="up">
                <img src="/image/salonHasami.jpg" alt="image"/>
            </nav>
        </section>
    );
}