'use client'

import { useState } from "react"
import styles from "./shortInfo.module.scss"
import Link from "next/link"

const blockText = {
    "main-header": "...",
    "describtion": "...",
    "links": [
        {
            "href": "https://www.nasa.gov/universe/what-are-black-holes/",
            "text": "Nasa"
        }
        
    ]
}

interface links {
    "href": string,
    "text": string
}

export default function ShortInfo({mainHeader, describtion, links}:{mainHeader:string, describtion:string, links:links[]}) {
    const [openSource, setOpenSource] = useState(false)
    return(
        <>
            <div className={styles.textContainer}>
                <h3 className="underline hover:cursor-pointer hover:text-[#2FDDE6]"
                onClick={()=>setOpenSource(true)}>{mainHeader}</h3>
                <p>
                {describtion.split("\n").map((line, i) => (
                    <span key={i}>
                    {line}
                    <br />
                    </span>
                ))}
                </p>
            </div>
            
            {openSource && 
            <div className={styles.sourceMenu}>
                <span>SOURCE:</span>
                <div>
                    {links.map((item, key) => <Link href={item.href} key={key}>{item.text}</Link>)}
                </div>
                <span className={styles.closeSource} onClick={()=>setOpenSource(false)}>close</span>
            </div>
            }
        </>
    )
};
