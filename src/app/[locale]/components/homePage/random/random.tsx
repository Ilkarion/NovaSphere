import styles from "./random.module.scss"
import Image from "next/image"
import blackHoleImg from "@/imgs/blackHoleDesctop.svg"
import antImg from "@/imgs/antDesctop.svg"

import { useTranslations } from "next-intl"
import CardArticle from "../../smallCardArticle/cardArticle"

export default function Random() {
    const t = useTranslations("HomePage")
    return(
        <>
            <h2 className={styles.headerSecond}>{t("articles")}</h2>

            <div className={styles.articleContainer}>
                {/* <div className={styles.someArticle}>
                    <div className={styles.image}><Image src={blackHoleImg} alt="black hole"/></div>
                    <div className={styles.text}>
                        <h3>Black Hole</h3>
                        <p>{"They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon."}</p>
                        <button>{"Read more >>"}</button>
                    </div>
                </div> */}
                
                <CardArticle mode="main-page" category="null"/>
            </div>
        </>
    )
};
