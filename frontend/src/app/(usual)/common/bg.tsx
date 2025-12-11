"use client"

import clsx from "clsx";
import style from "./background.module.css";

type Props = {
    src: string;
    className?: string;
};

export default function bg({ src, className}: Props){
    return(
        <div className={clsx(style.bg, className)}
            style={{ ["--bg-url" as any]: `url('${src}')`}}
            aria-hidden
        />
    );
}