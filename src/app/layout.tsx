import style  from "./common.module.css";



export default function RootLayout({children,} : {children: React.ReactNode;}){
    return(
        <html lang="ja">
            <body className={style.body}>{children}</body>
        </html>
    );
}