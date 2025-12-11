import Link from "next/link";
import Bg from "../common/bg";
import bgStyle from "../common/background.module.css";
export default function sample(){
    return(
        <>
        <Bg src="/image/bg-4.jpg" className={bgStyle.bg}/>
        <main>
            <Link href="/cafe">Cafe に飛ぶ！</Link>
            <Link href="/salon">Beauty Salon に飛ぶ！</Link>
        </main>
        </>
    );
}