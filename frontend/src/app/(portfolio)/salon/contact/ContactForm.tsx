import style from "./contact.module.css";

export default function ContactForm(){
    return(
        <section className={style.contact}>
            <h2>Contact Form</h2>
            <nav className={style.formWrapper}>
                <p>First Name : <input type="text" /></p>
                <p>Last Name : <input type="text" /></p>
                <p>E-mail : <input type="email"/></p>
            </nav>
        </section>
    )
}