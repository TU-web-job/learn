import Footer from "../common/Footer";
import Header from "../common/Header";
import Calendar from "./calendar";
import style from "./reserve.module.css";

export default function Reserve() {
    return(
        <div className={style.reserve}>
            <Header headerImg={false}/>
            <Calendar />
            <Footer />
        </div>
    );
}