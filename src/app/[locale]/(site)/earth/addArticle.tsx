import addArticleImg from "@/imgs/addArticle.svg"
import Image from "next/image"
import styles from "./add.module.scss"

export default function AddArticle() {
    return(
        <div className={styles.containerBtn}>
            <div className={styles.btn}>
                <div><Image src={addArticleImg} alt="add article" /></div>
            </div>
        </div>
    )
};
