import React from "react";
import UserAuth from "../components/userAuth/userAuth";
import LightDarkBtn from "../components/themeBtns/lightDarkBtn";
import ChangeLang from "../components/changeLang/changeLang";
import LinkNavigating from "../components/header/linkNavigating";
import styles from "../page.module.css";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
  <>
    <header className={styles.header}>
      <UserAuth />
      <LightDarkBtn />
      <ChangeLang />
    </header>
    <LinkNavigating />
    <main>{children}</main>
  </>

  );
}
