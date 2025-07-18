import styles from "./random.module.scss"
import Image from "next/image"
import blackHoleImg from "@/imgs/blackHoleDesctop.svg"
import antImg from "@/imgs/antDesctop.svg"

import { useTranslations } from "next-intl"

export default function Random() {
    const t = useTranslations("HomePage")
    return(
        <>
            <h2 className={styles.headerSecond}>{t("articles")}</h2>

            <div className={styles.articleContainer}>
                <div className={styles.someArticle}>
                    <div className={styles.image}><Image src={blackHoleImg} alt="black hole"/></div>
                    <div className={styles.text}>
                        <h3>Black Hole</h3>
                        <p>{"They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon."}</p>
                        <button>{"Read more >>"}</button>
                    </div>
                </div>
                
                <div className={styles.someArticle}>
                    <div className={styles.image}><Image src={antImg} alt="ant"/></div>
                    <div className={styles.text}>
                        <h3>Ant</h3>
                        <p>{"Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms."}</p>
                        <button>{"Read more >>"}</button>
                    </div>
                </div>
            </div>
        </>
    )
};
