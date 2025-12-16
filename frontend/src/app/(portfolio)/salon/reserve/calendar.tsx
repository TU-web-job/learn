"use client"

import { useState } from "react";
import { CommonModal } from "../hooks/modal";
import style from "./calendar.module.css";

type textType = {
    name: string;
    position: string;
    debut: number;
    birthday: number;
}

export default function Calendar(){

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const textList : textType[] = [
        {name: "", position: "", debut: 0, birthday: 0},
        {name: "dummy", position: "dummy", debut: 10, birthday: 20}
    ]

    return(
        <section className={style.calendar}>
            <h2>Reserve Calendar</h2>
                {textList.map((list) => (
                <nav className={style.list} key={list.name}>
                    <label className={style.stylieText}><span>名前 </span> : {list.name}</label>
                    <label className={style.stylieText}><span>役職 </span> : {list.position}</label>
                    <label className={style.stylieText}><span>経験年数 </span> : {list.debut}年</label>
                    <label className={style.stylieText}><span>年齢 </span> : {list.birthday}歳</label>
                    <p onClick={openModal} className={style.modalText}>
                        カレンダーを表示させる
                    </p>
                    <CommonModal isOpen={isOpen} closeModal={closeModal}>
                        <nav>
                            <p>確認テスト</p>
                            <button type="button">送信する</button>
                            
                        </nav>
                    </CommonModal>
                </nav>
                ))}
        </section>
    );
}