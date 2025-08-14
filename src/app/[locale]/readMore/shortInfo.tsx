'use client'

import { useState } from "react"
import styles from "./shortInfo.module.scss"
import Link from "next/link"

import { LinksSource, SectionObj } from "../components/interface/allTypes"


export default function ShortInfo({mainHeader, describtion, links, showClose=false,
    sectionObj=[], setSectionObj, index=-1
}:{mainHeader:string, describtion:string, links:LinksSource[], showClose?:boolean,
    sectionObj?:SectionObj[], setSectionObj?:(sectionObj:SectionObj[])=>void, index?:number
}) {
    const [openSource, setOpenSource] = useState(false)

    function deleteSection(index:number) {
        if (setSectionObj) {
            const updated = sectionObj.filter((_, i) => i !== index);
            setSectionObj(updated);
        }
    }

    return(
        <>
            <div className={`${styles.textContainer} relative`}>
                {showClose && <span className="hover:cursor-pointer text-[red] absolute right-5"
                onClick={()=>deleteSection(index)}>✕</span>}
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
                    {links.map((item, key) => <Link href={item.href} key={key} target="_blank">{item.text}</Link>)}
                </div>
                <span className={styles.closeSource} onClick={()=>setOpenSource(false)}>close</span>
            </div>
            }
        </>
    )
};
