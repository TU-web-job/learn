import Link from "next/link";
import style from "./header.module.css";

type list = {
    href: string;
    label: string;
}

const headerList: list[] = [
    { href: "/", label: "Top" },
    { href: "/register", label: "SignIn" },
    { href: "/login", label: "Login" },
    { href: "/customer", label: "Customer" },
    { href: "/sample", label: "SamplePage"},
];

export default function Header(){
    return (
        <header className={style.header}>
            <div className={style.header_wrapper}>
                <div className={style.header_logo}>
                    <Link href="/" className={style.logo}>MyPort</Link>
                </div>
                <div className={style.header_list}>
                    {headerList.map((list) => (
                        <Link key={list.href} href={list.href} className={style.list}>{list.label}</Link>
                    ))}
                </div>
            </div>
        </header>
    );
}