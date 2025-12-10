"use client"

import style from "./login.module.css";
import Bg from "../common/bg";
import bgStyle from "../common/background.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
// import { auth } from "@/lib/firebase/client";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function login(){
    type loginType = {
        email: string;
        password: string;
    }

    const [ email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");

    // const onSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setError("");
    //     try{
    //         await signInWithEmailAndPassword(auth, email, password);
    //     } catch( e: any) {
    //         setError(e.message ?? "ログインに失敗しました。");
    //     }
    // }
    
    const  { handleSubmit, formState:{errors}, reset} = useForm<loginType>();

    const handleClear = () => {
        reset();
    }

    return(
    <>
    <Bg src="/image/bg-3.jpeg" className={bgStyle.bg}/>
    <main className={style.mainWrapper}>
        <div className={style.wrapper}>
            <h1>ログイン画面</h1>
            <form className={style.formWrapper}>
                <nav className={style.container}>
                    <label>メールアドレス</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    {errors.email && <p className={style.error}>{errors.email.message}</p>}
                </nav>
                <nav className={style.container}>
                    <label>パスワード</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    {errors.password && <p className={style.error}>{errors.password.message}</p>}
                </nav>
                <div className={style.btnWrapper}>
                    <button type="submit" className={style.submit}>ログイン</button>
                    <button type="button" className={style.clear} onClick={handleClear}>クリア</button>
                </div>
            </form>
        </div>
    </main>
    </>
    );
}