'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import userImg from "../../../../imgs/user.svg"
import styles from "./userAuth.module.scss"
import { createClient } from "../../../../../utils/supabase/client"
import Link from "next/link"

export default function UserAuth() {
    const [showMenu, setShowMenu] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
        const checkUser = async () => {
            const supabase = createClient()
            const { data: {user} } = await supabase.auth.getUser()

            setIsLoggedIn(!!user)
        }
        checkUser()
    }, [])


    return (
        <div className={`${styles.userMenu}`}>
            <div onClick={()=>setShowMenu(!showMenu)} className={`${styles.imageLogo}`}>
                <Image src={userImg} alt="about user" />
            </div>

            {showMenu ? (
                <div className={`${styles.containerMenu}`}>
                    <ul className={`${styles.menu}`}>
                        {isLoggedIn ? 
                        (
                        <>
                            <li>
                                <form action="/auth/signout" method="post">
                                    <button type="submit" className={`${styles.signOut}`}>
                                        Sign out
                                    </button>
                                </form>
                            </li>
                            <li><Link href="/account">Account</Link></li>
                        </>
                        )
                         : 
                        <>
                            <li><Link href="/login">Sign up</Link></li>
                            <li><Link href="/login">Login</Link></li>
                        </>
                        }

                    </ul>
                </div>
                ) : (<div></div>)}
        </div>
    )
};
