'use client'
import Image from "next/image"
import { useState } from "react"
import languageImg from "../../../../imgs/languages.svg"
import styles from "./lang.module.scss"
import Link from "next/link"


export default function ChangeLang() {
    const [ showMenu, setShowMenu] = useState(false)

    return (
        <div className={`${styles.langContainer}`}>
            <div className={`${styles.langBtn}`} onClick={()=>setShowMenu(!showMenu)}>
                <Image src={languageImg} alt="change language"/>
            </div>

            {showMenu ? 
            <ul className={`${styles.langMenu}`}>
                <li><Link href={`/en`}>English</Link></li>
                <li><Link href={'/pl'}>Polska</Link></li>
                <li><Link href={`/ru`}>Русский</Link></li>
                <li><Link href={'/ukr'}>Україньська</Link></li>
            </ul>
             : 
            <></>
            }
        </div>
    )
};
