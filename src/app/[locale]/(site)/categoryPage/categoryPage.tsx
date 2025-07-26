import SearchSmth from "../../components/header/search/searchSmth";

import AddArticle from "./addArticle";
import styles from "./catPage.module.scss"

import CardArticle from "../../components/smallCardArticle/cardArticle";




export default function CategoryPage({ header}:{header:string}) {
    return(
        <>
            <h2 className={styles.mainHeader}>{header}</h2>
            <SearchSmth />
            <AddArticle /> {/* btn to add new card */}
            <CardArticle/> {/*depending which page we have we will GET those cards*/}
        </>
    )
};
