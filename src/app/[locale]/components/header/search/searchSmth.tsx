import Image from "next/image"
import searchImg from "../../../../../imgs/search.svg"
import styles from "./searchsmth.module.scss"
import { useTranslations } from "next-intl"

export default function SearchSmth() {
    const t = useTranslations("HomePage")
    return (
        <div className={`${styles.serchContainer}`}>
            <input type="text"  placeholder={`${t("search")}`}/>
            <div>
                <Image src={searchImg} alt="search"/>
            </div>
        </div>
    )
};
