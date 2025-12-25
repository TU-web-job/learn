"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { CommonModal } from "../hooks/modal";
import style from "./calendar.module.css";

type textType = {
    name: string;
    position: string;
    debut: number;
    birthday: number;
}

export default function Calendar(){

    const [data, setData] = useState<any>(null);
    useEffect(() => {
        axios.get("http://localhost:8080/api/calendar")
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    }, []);

    const [isCalendar, setIsCalendar] = useState(false);
    const toggleCalendar = () => {
        setIsCalendar(!isCalendar);
    };

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const textList : textType[] = [
        {name: "Test Name", position: "CEO", debut: 30, birthday: 50},
        {name: "dummy", position: "dummy", debut: 10, birthday: 20}
    ]

    return(
        <section className={style.calendar}>
            <h2>Reserve Calendar</h2>
                {textList.map((list) => (
                <nav className={style.list}>
                    <ul key={list.name}>
                        <li className={style.stylieText}><span>名前 </span> : {list.name}</li>
                        <li className={style.stylieText}><span>役職 </span> : {list.position}</li>
                        <li className={style.stylieText}><span>経験年数 </span> : {list.debut}年</li>
                        <li className={style.stylieText}><span>年齢 </span> : {list.birthday}歳</li>
                    </ul>
                    <div>
                        <p onClick={toggleCalendar}>
                            {isCalendar ? '閉じる' : '空き状況を見る'}
                        </p>
                        {isCalendar && (
                            <nav>
                                <p>カレンダー表示する</p>
                                <pre>{JSON.stringify(data, null,2)}</pre>
                            </nav>
                        )}
                    </div>

                    <p onClick={openModal} className={style.modalText}>
                        スタイリストを予約する
                    </p>
                    <CommonModal isOpen={isOpen} closeModal={closeModal}>
                        <section className={style.modal}>
                            <h2>予約する</h2>
                            <nav>
                                <p>※翌月末まで予約可能です。</p>
                            </nav>
                            <button type="button">送信する</button>
                        </section>
                    </CommonModal>
                </nav>
                ))}
        </section>
    );
}