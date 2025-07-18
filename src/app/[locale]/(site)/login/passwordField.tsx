'use client'

import Image from "next/image"
import hideImg from "../../../../imgs/hide_password.svg"
import showImg from "../../../../imgs/show_password.svg"
import { useState } from "react"
import styles from "./showhidepass.module.scss"

export default function PasswordField() {
  const [show, setShow] = useState(false)

  return (
    <>
      <label htmlFor="password">Password:</label>

      <div className={`${styles.showHidePass}`}>

        <input id="password" name="password" type={show ? "text" : "password"} required />

        <div onClick={() => setShow(!show)}>
          <Image src={show ? showImg : hideImg} alt="Toggle password" />
        </div>
      </div>
    </>
  )
}
