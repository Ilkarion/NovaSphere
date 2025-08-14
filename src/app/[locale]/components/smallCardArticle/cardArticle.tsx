'use client'
import styles from "./card.module.scss"
import Image from "next/image"
import { useEffect, useState } from "react"
import ReadMore from "../../readMore/readMore"

import { createClient } from "../../../../../utils/supabase/client"

import { useLocale, useTranslations } from "next-intl"
import { Article, AllInfoObject, Card, ReadMoreI } from "../interface/allTypes"



function convertArticlesToAllInfo(data: Article[]): AllInfoObject {
  const allInfo: AllInfoObject = {
    miniVersions: [],
    biggerVersions: [],
  };

  data.forEach(({ id, data: { miniVersions, biggerVersions } }) => {
    miniVersions.forEach((mini) => {
      allInfo.miniVersions.push({
        id,
        title: mini.title,
        image: mini.image,  // оставляем строку
        description: mini.describtion,
      });
    });

    biggerVersions.forEach((big) => {
      allInfo.biggerVersions.push({
        id,
        readMore: {
          infoImg: big.readMore.infoImg.map((img) => ({ ...img })),
          blockText: big.readMore.blockText.map((block) => ({ ...block, links: [...block.links] })),
        },
      });
    });
  });

  return allInfo;
}

export default function CardArticle({mode, category}:{mode:string, category: string}) {
  const supabase = createClient();
  const [convertedData, setConvertedData] = useState<AllInfoObject | null>(null);
  const [choosenCards, setChoosenCards] = useState<Card[]>([]);
  const [read, setRead] = useState(false);
  const [selectedReadMore, setSelectedReadMore] = useState<ReadMoreI | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [randomArticles, setRandomArticles] = useState<Card[]>([]);
  const itemsPerPage = 3;

  const totalPages = Math.ceil((convertedData?.miniVersions.length || 0) / itemsPerPage);
  const locale = useLocale();
  const t = useTranslations("HomePage");

  useEffect(() => {
    async function supDataGet() {
      let data, error;

      if (mode === "main-page") {
        const res = await supabase.from('articles').select('*').eq('lang', locale);
        data = res.data;
        error = res.error;
      } else if (mode === "articles-page") {
        const res = await supabase
          .from('articles')
          .select('*')
          .eq('category', category)
          .eq('lang', locale);
        data = res.data;
        error = res.error;
      }

      if (error) {
        alert('Fetch error: ' + error.message);
        return;
      }

      const finalData = convertArticlesToAllInfo(data as Article[]);
      setConvertedData(finalData);
    }

    supDataGet();
  }, [mode, category, locale, supabase]);

  useEffect(() => {
    if (convertedData) diapasonSliced(1);
  }, [convertedData]);

  function diapasonSliced(pageNum: number) {
    if (mode === "articles-page") {
      const start = (pageNum - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const sliced = convertedData?.miniVersions.slice(start, end) || [];
      setChoosenCards(sliced);
      setCurrentPage(pageNum);
    } else if (mode === "main-page" && convertedData) {
      if (convertedData.miniVersions.length === 0) return;

      const randomIndex = Math.floor(Math.random() * convertedData.miniVersions.length);
      let randomIndexTwo = Math.floor(Math.random() * convertedData.miniVersions.length);

      const chosenTwoRandom: Card[] = [];

      if (convertedData.miniVersions.length === 1) {
        chosenTwoRandom.push(convertedData.miniVersions[0]);
      } else {
        while (randomIndex === randomIndexTwo) {
          randomIndexTwo = Math.floor(Math.random() * convertedData.miniVersions.length);
        }
        chosenTwoRandom.push(convertedData.miniVersions[randomIndex]);
        chosenTwoRandom.push(convertedData.miniVersions[randomIndexTwo]);
      }

      setRandomArticles(chosenTwoRandom);
    }
  }

  function open(id: number) {
    const foundBig = convertedData?.biggerVersions.find((item) => item.id === id);
    if (foundBig) {
      setSelectedReadMore(foundBig.readMore);
      setRead(true);
    }
  }

  function getVisiblePages(current: number, total: number): (number | string)[] {
    if (total <= 4) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, "..."];
    if (current >= total - 2) return ["...", total - 2, total - 1, total];
    return ["...", current, current + 1, current + 2];
  }

  if (!convertedData) return null;

  return (
    <>
      <div className={styles.articleContainer}>
        {(mode === "main-page" ? randomArticles : choosenCards).map((item, key) => (
          <div key={key} className={styles.someArticle}>
            <div className={styles.image}>
              <Image src={item.image} alt={item.title} width={1000} height={1000} />
            </div>
            <div className={styles.text}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button onClick={() => open(item.id)}>{t("readMore")}</button>
            </div>
          </div>
        ))}
      </div>

      {read && selectedReadMore && <ReadMore infoComponent={selectedReadMore} />}
      {read && (
        <div
          onClick={() => setRead(false)}
          className="absolute z-10 top-2 right-7 text-[#2FDDE6] underline hover:cursor-pointer"
        >
          <span>close</span>
        </div>
      )}

      {mode === "articles-page" && (
        <div className={`flex items-center justify-center ${styles.paginationContainer}`}>
          <button
            onClick={() => currentPage > 1 && diapasonSliced(currentPage - 1)}
            disabled={currentPage === 1}
            className={` ${styles.paginBtn} ${currentPage === 1 ? `${styles.btnNoActive}` : ``}`}
          >
            {'<< Previous'}
          </button>

          <ul className="flex gap-2">
            {getVisiblePages(currentPage, totalPages).map((page, i) => (
              <li
                key={i}
                onClick={() => typeof page === "number" && diapasonSliced(page)}
                className={`cursor-pointer
                  ${styles.pageOption} 
                  ${page === currentPage ? styles.activePage : styles.noActivePage}
                  ${typeof page === "string" ? "pointer-events-none bg-none" : ""}`}
              >
                {page}
              </li>
            ))}
          </ul>

          <button
            disabled={currentPage === totalPages}
            onClick={() => currentPage < totalPages && diapasonSliced(currentPage + 1)}
            className={` ${styles.paginBtn} ${currentPage === totalPages ? `${styles.btnNoActive}` : ``}`}
          >
            {'Next >>'}
          </button>
        </div>
      )}
    </>
  );
}
