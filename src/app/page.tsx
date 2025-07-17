//font-size: 25px;
import styles from "./page.module.css";
import LightDarkBtn from "./components/themeBtns/lightDarkBtn";
import UserAuth from "./components/userAuth/userAuth";
import ChangeLang from "./components/changeLang/changeLang";
import LinkNavigating from "./components/header/linkNavigating";
import SearchSmth from "./components/header/search/searchSmth";
import Sections from "./components/homePage/sections/sections";
import Random from "./components/homePage/random/random";

export default function Home() {
  return (
    <>
      <header className={`${styles.header}`}>
        <UserAuth />
        <LightDarkBtn />
        <ChangeLang />
      </header>
      <LinkNavigating />
      <h1 className={styles.headerFirst}>Encyclopedia</h1>
      <SearchSmth />
      <Sections />
      <Random />
    </>
  );
}
