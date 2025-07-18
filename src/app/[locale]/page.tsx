//font-size: 25px;
import styles from "./page.module.css";
import LightDarkBtn from "./components/themeBtns/lightDarkBtn";
import UserAuth from "./components/userAuth/userAuth";
import ChangeLang from "./components/changeLang/changeLang";
import LinkNavigating from "./components/header/linkNavigating";
import SearchSmth from "./components/header/search/searchSmth";
import Sections from "./components/homePage/sections/sections";
import Random from "./components/homePage/random/random";

import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations("HomePage")

  return (
    <>
      <header className={`${styles.header}`}>
        <UserAuth />
        <LightDarkBtn />
        <ChangeLang />
      </header>
      <LinkNavigating />
      <h1 className={styles.headerFirst}>{t('title')}</h1>
      <SearchSmth />
      <Sections />
      <Random />
    </>
  );
}
