'use client'
import { useState } from "react"
import ThemeImg from "../../../imgs/theme.svg"
import Image from "next/image"
import { useTheme } from "next-themes"
import styles from "./themeBtn.module.scss"

export default function LightDarkBtn() {
    const [change, setChange] = useState(true)
    const { setTheme } = useTheme()

    function returnName(state:boolean) {
        if(state) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    return(
        <div onClick={() => {
            const newState = !change
            setChange(newState)
            returnName(newState)
        }}
        className={`${styles.imageLogo}`}
        >
            <Image src={ThemeImg} alt="Change Theme" />
        </div>
    )
};
