import style from "./access.module.css";

type accessList = {
    title: string;
    sub: string;
}

const accessMap : accessList[] = [
    {title: "Post Code ", sub: "〒100-1000"},
    {title: "Address ", sub: "Tokyo Chiyoda Sakuradamon 1-1-1"},
    {title: "Station ", sub: "Sakuradamon Station / 5 minutes"},
    {title: "Tel ", sub: "03-1001-0110"},
]
export default function Access(){
    return(
        <section className={style.wrapper}>
            <h2>Access</h2>
            <nav className={style.container}>
                <div className={style.textContents}>
                    <h3>Access Map to Cafe</h3>
                    <ul>
                        {accessMap.map((map) => (
                            <span key={map.title}>
                                <li><span>{map.title}</span> : {map.sub}</li>
                            </span>
                        ))}
                    </ul>
                </div>
                <div className={style.mapContents}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.096739274256!2d139.75236026044388!3d35.67716024934369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be1942246f9%3A0x21cd369dfa38672d!2z44OB44Oj44O844K444K544Od44OD44OI!5e0!3m2!1sja!2sjp!4v1762773425006!5m2!1sja!2sjp" className={style.map}></iframe>
                </div>
            </nav>
        </section>
    );
}