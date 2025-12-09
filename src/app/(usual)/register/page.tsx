"use client"


import style from "./register.module.css";
import Bg from "../common/bg";
import bgStyle from "../common/background.module.css";
import { useForm } from "react-hook-form";

export default function register() {
    type FormValues = {
        name: string;
        email: string;
        phone: number;
        address: string;
        age: number;
        password: string;
        memo: string;
    } 

    const { register, handleSubmit, formState:{errors}, reset} = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        const res = await fetch("/api/registration", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data),
        });
        const json = await res.json();
        if(!res.ok) {
            alert("Error is Now...");
            return;
        }

        alert("Success!");
        reset();
    }

    const handleClear = () => {
        reset();
    }

    return (
        <>
        <Bg src="/image/bg-2.jpg" className={bgStyle.bg}/>
        <main className={style.mainWrapper}>
            <div className={style.wrapper}>
            <h1>登録画面</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <nav className={style.container}>
                    <label>お名前 : </label>
                    <input type="text" id="name" {...register("name", {required:"必須入力です"})} />
                    {errors.name && <p className={style.error}>{errors.name.message}</p>}
                </nav>
                <nav className={style.container}>
                    <label>メールアドレス *  : </label>
                    <input type="email" {...register("email", {required:"必須入力です"})} />
                    {errors.email && <p className={style.error}>{errors.email.message}</p>}
                </nav>
                <nav className={style.container}>
                    <label>電話番号(ハイフンなし) : </label>
                    <input type="tel" {...register("phone", {required:"必須入力です",
                        pattern:{
                            value:/^\d{2,3}\d{3,4}\d{4}$/,
                            message:"数字のみ11桁以内で入力してください。"
                        }
                    })} />
                    {errors.phone && <p className={style.error}>{errors.phone.message}</p>}
                </nav>
                <nav className={style.container}>
                    <label>住所(都道府県) : </label>
                    <input type="text" {...register("address", {required:"必須入力です"})} />
                    {errors.address && <p className={style.error}>{errors.address.message}</p>}
                </nav>
                <nav className={style.container}>
                    <label>誕生日 : </label>
                    <input type="date" {...register("age", {required:"必須入力です"})} />
                    {errors.age && <p className={style.error}>{errors.age.message}</p>}
                </nav>
                <nav className={style.container}>
                    <label>パスワード *  : </label>
                    <input type="text" {...register("password", {required: "必須入力です",
                        min: 8, max: 16, 
                    })} />
                    {errors.password && <p className={style.error}>{errors.password.message}</p>}
                </nav>
                <nav className={style.container}>
                    <label>備考 : </label>
                    <textarea {...register("memo")} />
                </nav>
                <div className={style.btnWrapper}>
                    <button className={style.submit} type="submit">登録</button>
                    <button className={style.clear} type="button" onClick={handleClear}>クリア</button>
                </div>

                <p className={style.pText}>*の項目はログインで必要になります。</p>
            </form>
            </div>
        </main>
        </>
    );
}