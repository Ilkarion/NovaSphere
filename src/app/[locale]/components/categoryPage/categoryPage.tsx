import SearchSmth from "../../components/header/search/searchSmth";

import AddArticle from "./addArticle";
import styles from "./catPage.module.scss"

import CardArticle from "../../components/smallCardArticle/cardArticle";




export default function CategoryPage({ header}:{header:string}) {
    return(
        <>
            <h2 className={styles.mainHeader}>{header}</h2>
            <SearchSmth />
            <AddArticle category={header} /> {/* btn to add new card */}
            <CardArticle mode="articles-page" category={header}/> {/*depending which page we have we will GET those cards*/}
        </>
    )
};
