'use client'

import addArticleImg from "@/imgs/addArticle.svg"
import Image from "next/image"
import styles from "./add.module.scss"

import { useState } from "react"
import DropImg from "./dragDropImg/dropImg"
import LinksManager from "./LinkManager/linkManager"
import Link from "next/link"
import ShortInfo from "../../readMore/shortInfo"
import { ArticleObject } from "../interface/allTypes"
import { uploadImage } from "./dragDropImg/uploadImg"

import { sendArticle } from "./sendArticle"
import { useTranslations } from "next-intl"

import { LinksSource, SectionObj } from "../interface/allTypes"


export default function AddArticle({category}:{category:string}) {
    const [ open, setOpen ] = useState(false)

    const [links, setLinks] = useState<LinksSource[]>([]);
    const [linkName, setLinkName] = useState('');
    const [linkURL, setLinkURL] = useState('');

    //section obj taking data
    const [inputHeader, setInputHeader] = useState('')
    const [sectionExplain, setSectionExplain] = useState('')
    const [sectionObj, setSectionObj] = useState<SectionObj[]>([])
    function collectData(header:string, describtion:string, links:LinksSource[]) {
        if(inputHeader && sectionExplain) {
            const newObj = {
                title: {
                    text: header,
                    links: links
                },
                text: describtion
            }
            setSectionObj([...sectionObj, newObj])        
        } else {
            alert("Please write something in 'Name section' and 'Explain section' fields")
        }
    }

    //Big Images Describtion
    const [imgOneText, setImgOneText] = useState('')
    const [imgTwoText, setImgTwoText] = useState('')
    const [imgOne, setImgOne] = useState<File | null>(null)
    const [imgTwo, setImgTwo] = useState<File | null>( null)

    //Mini Version
    const [inputMiniV, setInputMiniV] = useState('')
    const [miniDescribt, setMiniDescribt] = useState('')
    const [imgMiniV, setImgMiniV] = useState<File | null>(null)


    const addLink = () => {
        if (linkName && linkURL) {
            setLinks([...links, { text: linkName, href: linkURL }]);
            setLinkName('');
            setLinkURL('');
        }
    };


    //Translations
    const t = useTranslations("NewArticle")



async function finalForm() {
    if (!imgMiniV || !imgOne || !imgTwo) {
        alert("Please upload all images.");
        return;
    }

    const miniImageUrl = await uploadImage(imgMiniV);
    const bigImgUrlOne = await uploadImage(imgOne);
    const bigImgUrlTwo = await uploadImage(imgTwo);

    const articleObj: ArticleObject = {
        miniVersions: [
            {
                title: inputMiniV,
                image: miniImageUrl ?? '',
                describtion: miniDescribt,
            },
        ],

        biggerVersions: [
            {
                readMore: {
                    infoImg: [
                        {
                            img: bigImgUrlOne ?? '',
                            imgDescribtion: imgOneText,
                            alt: "image 1",
                            id: 1,  // id для UI, можно оставить
                        },
                        {
                            img: bigImgUrlTwo ?? '',
                            imgDescribtion: imgTwoText,
                            alt: "image 2",
                            id: 2,
                        },
                    ],
                    blockText: sectionObj.map((section, index) => ({
                        mainHeader: section.title.text,
                        describtion: section.text,
                        links: section.title.links,
                    })),
                },
            },
        ],
    };

    const success = await sendArticle(articleObj, category);
    if (success) {
        alert("Success!!!")
    }
}

    return(
        <>
            <div className={styles.containerBtn}>
                <div className={styles.btn} onClick={()=>setOpen(true)}>
                    <div><Image src={addArticleImg} alt="add article" /></div>
                </div>
            </div>

            {open && 
                <div className={styles.containerAdd}>

                    <span className="
                    absolute top-1 right-1
                    text-[#2FDDE6] underline
                    hover:cursor-pointer"
                    onClick={()=>setOpen(false)}>close</span> {/* close add-new-article */}

                    <p className={styles.newArtcl}>{t("titleMain")}</p>

                    <section>
                        <p className={styles.version}>Mini version</p>
                        <div className={styles.containerMini}>
                            <div className={`${styles.dragDrop} ${styles.miniVersion}`}>
                                <DropImg onChange={(file) => {
                                    setImgMiniV(file)
                                }}/>
                                {/* Drag and Drop */}
                            </div>
                            <div className={styles.textMini}>
                                <input type="text" placeholder={t("titleMini")} maxLength={100}
                                onChange={(e)=>setInputMiniV(e.target.value)}
                                value={inputMiniV}/>

                                <textarea placeholder={t("titleMiniDescrib")} maxLength={200}
                                onChange={(e)=>{setMiniDescribt(e.target.value)}}
                                value={miniDescribt}/>
                            </div>
                        </div>
                    </section>

                    <section>
                        <p className={`${styles.version} ${styles.bigMarginVers}`}>Big version</p>
                        <div className={styles.bigDragDrop}>
                            <div className={`${styles.dragDrop} ${styles.bigImages}`}>
                                <DropImg onChange={(file)=>{setImgOne(file)}}/>
                                {/* Drag and Drop */}
                                <textarea name="imgText" className={styles.describeImg} placeholder={t("imageDescrib")} maxLength={2000}
                                onChange={(e)=>setImgOneText(e.target.value)}
                                value={imgOneText}/>
                            </div>
                            <div className={`${styles.dragDrop} ${styles.bigImages} ${styles.marginMedia}`}>
                                <DropImg onChange={(file)=>{setImgTwo(file)}}/>
                                {/* Drag and Drop */}
                                <textarea name="imgText" className={styles.describeImg} placeholder={t("imageDescrib")} maxLength={2000}
                                onChange={(e)=>setImgTwoText(e.target.value)}
                                value={imgTwoText}/>
                            </div>
                        </div>
                    </section>

                    <section className={styles.sectionArea}>
                        <input type="text" placeholder={t("nameSection")} className={styles.sectionName}
                            onChange={(e)=> setInputHeader(e.target.value)}
                            value={inputHeader}/>
                        <div className={styles.linksRow}>
                            <div className={styles.question}>
                                <LinksManager 
                                links={links}
                                linkName={linkName}
                                linkURL={linkURL}
                                setLinkName={setLinkName}
                                setLinkURL={setLinkURL}
                                addLink={addLink}
                                removeLink={(index) =>
                                    setLinks(links.filter((_, i) => i !== index))
                                }
                                />{/* Add Links */}
                                <div><span><Link href="#question">?</Link></span></div>
                            </div>
                        </div>
                        <textarea placeholder={t("sectionDescrib")} maxLength={3000} 
                        className={styles.explainSection}
                        onChange={(e)=>setSectionExplain(e.target.value)}
                        value={sectionExplain}/>
                        <div className={styles.addSection}>
                            <button onClick={()=>collectData(inputHeader, sectionExplain, links)}>{t("addBtn")}</button>
                        </div>
                        {sectionObj && 
                            <div className={styles.shortInfoDemoContainer}>
                                <div className={styles.shortInfoDemo}>
                                        {sectionObj.map((item, key) => (
                                        <ShortInfo
                                            mainHeader={item.title.text}
                                            describtion={item.text}
                                            links={item.title.links}
                                            key={key}
                                            showClose={true}
                                            sectionObj={sectionObj}
                                            setSectionObj={setSectionObj}
                                            index={key}
                                        />
                                        ))}
                                </div>
                            </div>
                        }
                    </section>

                    <p className={styles.hint} id="question">
                        ? -- {t("question")}
                    </p>

                    <button className={styles.addArticleBtn} onClick={()=>finalForm()}>{t("articleBtn")}</button>
                </div>
            }      
        </>

    )
};
