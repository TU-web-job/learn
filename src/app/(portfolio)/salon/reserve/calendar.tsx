import style from "./calendar.module.css";

export default function Calendar(){
    return(
        <section className={style.calendar}>
            <h2>Reserve Calendar</h2>
            <nav>
                <p>空きカレンダーを見る</p>
                
            </nav>
        </section>
    );
}