"use client"
import style from "./access.module.css";
import { useFadeIn } from "../hooks/useFadeIn";

export default function Access() {

    useFadeIn();
    return(
        <section className={style.access}>
            <nav className={style.txtWrapper}>
                <h2 data-fade="up">Salon Access</h2>
                <p data-fade="up">
                    PostCode : XXX - XXXX <br />
                    Address : Tokyo Chiyoda 1-1-1 1F <br /> 
                    Tel : 0120 - 999 - 999 <br />
                    Station : Tokyo Station 5 min/walk, Shinjuku Station 10 min/walk <br />
                    Car : Sorry No parking... <br />
                </p>
            </nav>
            <nav className={style.mapWrapper} data-fade="up">
                <iframe className={style.accessMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14790.994719964398!2d139.74773701613685!3d35.6865130386701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d8064d%3A0xd11a5f0b379e6db7!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1764591796487!5m2!1sja!2sjp" allowFullScreen loading="lazy"></iframe>
            </nav>
        </section>
    );
}