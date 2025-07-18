import Image from "next/image"
import styles from "./sections.module.scss"

import earthImg from "@/imgs/earthDesctop.svg"
import spaceImg from "@/imgs/spaceDesctop.svg"
import inventionsImg from "@/imgs/inventionsDesctop.svg"
import Link from "next/link"

export default function Sections() {
    return(
        <div className={styles.sectionContainer}>
            {/* 3 sections */}

            <Link href="/earth">
                <div className={styles.section}>
                    <span>Nature of Earth</span>
                    <div>
                        <Image src={earthImg} alt="Earth picture"/>
                    </div>
                </div>
            </Link>

            <Link href="/space">
                <div className={styles.section}>
                    <span>Space</span>
                    <div>
                        <Image src={spaceImg} alt="Space picture"/>
                    </div>
                </div>
            </Link>

            <Link href="/inventions">
                <div className={styles.section}>
                    <span>Inventions of Mankind</span>
                    <div>
                        <Image src={inventionsImg} alt="Inventions picture"/>
                    </div>
                </div>
            </Link>
        </div>
    )
};
