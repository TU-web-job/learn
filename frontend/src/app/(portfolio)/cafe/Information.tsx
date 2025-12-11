import style from "./information.module.css";
import Link from "next/link";

type infoList = {
    title: string;
    date: string;
    sub: string;
}

const info: infoList[] = [
    {title: "Last Day",date: "2025/ 12/ 31", sub: "2025 Year Last Day "},
    {title: "Merry Christmas",date: "2025/ 12/ 25", sub: "Hello Every One, Merry Christmas With Our Presents:)"},
    {title: "Halloween",date: "2025/ 10/ 31", sub: "Happy Halloween! Tricl or Treet!"},
    {title: "Congrations",date: "2025/ 9/ 1", sub: "This Cafe Birthdays today"},
    {title: "Vacation",date: "2025/ 8/ 12 ~ 8/ 15", sub: "We have Summer Vacation for 4 days."},
]

export default function Information(){
    return (
        <section className={style.wrapper}>
            <nav className={style.container}>
                <h2>Information</h2>
                <div className={style.textContents}>
                    <ul className={style.list}>
                        {info.map((info) => (
                            <li key={info.title}>
                                <span className={style.title}>{info.title}</span>
                                <span className={style.space}></span>
                                <span className={style.date}>{info.date}</span>
                                <span> : </span>
                                <span><Link href="" className={style.link}>{info.sub}</Link></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </section>
    );
}