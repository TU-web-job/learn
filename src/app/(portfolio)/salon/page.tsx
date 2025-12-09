import Access from "./top/Access";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Main from "./top/main";
import Products from "./top/Products";
import style from "./salon.module.css";

export default function salon(){
    return(
        <div className={style.salon}>
        <Header headerImg={true}/>
        <Main />
        <Products />
        <Access />
        <Footer />
        </div>
    );
}