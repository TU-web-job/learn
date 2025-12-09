import style from "./footer.module.css";

export default function Footer(){
    return (
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <p className={style.cp}>&copy; 2025 MyPort</p>
            </div>
        </footer>
    );
}