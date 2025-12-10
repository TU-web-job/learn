"use client"

import { useRef } from "react";
import style from "./calendar.module.css";
import dynamic from "next/dynamic";

const FullCalendar = dynamic(() => import("@fullcalendar/react"), {ssr:false});


export default function Calendar(){

    const panelRef = useRef<HTMLDivElement | null>(null);
    const toggle = () => {
        if(!panelRef.current) return;
        panelRef.current.hidden = !panelRef.current.hidden;
    };

    return(
        <section className={style.calendar}>
            <h2>Reserve Calendar</h2>
            <nav>
                <p
                className={style.toggle}
                aria-expanded={!(panelRef.current?.hidden ?? true)}
                aria-controls="mini-toggle-panel"
                onClick={toggle}
                >空きカレンダーを見る</p>
                <div id="mini-toggle-panel" ref={panelRef} hidden>
                    <p>ここにカレンダー表示する</p>
                </div>
            </nav>
        </section>
    );
}