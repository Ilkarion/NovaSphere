import Image from "next/image"
import searchImg from "../../../../../imgs/search.svg"
import styles from "./searchsmth.module.scss"

export default function SearchSmth() {
    return (
        <div className={`${styles.serchContainer}`}>
            <input type="text"  placeholder="Search..."/>
            <div>
                <Image src={searchImg} alt="search"/>
            </div>
        </div>
    )
};
