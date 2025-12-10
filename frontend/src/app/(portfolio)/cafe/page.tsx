import Drink from "./Drink";
import Explain from "./Explain";
import Header from "./Header";
import Food from "./Food";
import Information from "./Information";
import Access from "./Access";
import Footer from "./Footer";

export default function cafe(){
    return(
    <>
        <Header />
        <main>
            <Explain />
            <Drink />
            <Food />
            <Information />
            <Access />
        </main>
        <Footer />
    </>
    );
}