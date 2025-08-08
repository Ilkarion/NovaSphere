import { useTranslations } from "next-intl"
import CategoryPage from "../../components/categoryPage/categoryPage"

export default function Page() {
    const t = useTranslations("HomePage")
    const categories: string[] = t.raw("categories")
    return(
        <>
            <CategoryPage header={categories[2]}/>
        </>
    )
};
