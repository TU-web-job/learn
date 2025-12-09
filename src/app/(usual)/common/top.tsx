import style from "./top.module.css";
import Link from "next/link";

type main = {
    h2: string;
    href: string;
    label: string;
}

const mainList: main[] = [
    { h2: "登録画面", href: "/register", label: "SignIn" },
    { h2: "ログイン画面", href: "/login", label: "Login" },
    { h2: "登録者一覧画面", href: "/customer", label: "Customer" },
]

export default function Main() {
    return(
        <main className={style.main}>
            <section className={style.container}>
                <h1><span>Next.js</span>で作成されたポートフォリオ</h1>
                {mainList.map((list) => (
                    <nav className={style.nav} key={list.href}>
                        <h2 className={style.h2}>{list.h2}</h2>
                        <Link href={list.href} className={style.link}><span className={style.span}>{list.label}</span>はこちらから</Link>
                    </nav>
                ))}
            </section>
        </main>
    );
}