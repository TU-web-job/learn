import Footer from "../common/Footer";
import Header from "../common/Header";
import ContactForm from "./ContactForm";

export default function contact() {
    return(
        <>
        <Header headerImg={false} />
        <ContactForm />
        <Footer />
        </>
    )
}