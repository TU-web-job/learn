import Link from "next/link";
import style from "./header.module.css";

type Props = {
    headerImg? : boolean;
};

export default function Header({ headerImg = false }: Props){
    const showHeaderImg = !!headerImg;
    return(
        <header className={style.header}>
            <section className={style.headerListWrapper}>
                <h1>Sample Beauty Salon</h1>
                <nav className={style.headerList}>
                    <Link href="/salon" className={style.list}>Home</Link>
                    <Link href="/salon/reserve" className={style.list}>Reserve</Link>
                    <Link href="/salon/contact" className={style.list}>Contact</Link>
                    <Link href="/salon" className={style.list}>ShopList</Link>
                </nav>
            </section>
            {showHeaderImg  && (
            <section className={style.headerImgWrapper}>
                <img src="/image/salonHeader.jpg" alt="headerImage" className={style.headerImg}/>
                <p className={style.imgText}>~Everybody become Beauty with us~</p>
            </section>
            )}
        </header>
    );
}