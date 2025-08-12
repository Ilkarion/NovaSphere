'use client'
import { useState } from "react";
import Image from "next/image";
import searchImg from "../../../../../imgs/search.svg";
import styles from "./searchsmth.module.scss";
import { useTranslations } from "next-intl";
import FoundedSearch from "./foundedSearch";

type Link = {
  href: string;
  text: string;
};

type BlockText = {
  links: Link[];
  mainHeader: string;
  describtion: string;
};

type InfoImg = {
  id: number;
  alt: string;
  img: string;
  imgDescribtion: string;
};

type ReadMore = {
  infoImg: InfoImg[];
  blockText: BlockText[];
};

type BiggerVersion = {
  readMore: ReadMore;
};

type MiniVersion = {
  image: string;
  title: string;
  describtion: string;
};

type ArticleData = {
  miniVersions: MiniVersion[];
  biggerVersions: BiggerVersion[];
};

type Article = {
  id: number;
  data: ArticleData;
};


export default function SearchSmth() {
  const t = useTranslations("HomePage");
  const [query, setQuery] = useState<string>("");
  const [lang, setLang] = useState<string>("en");
  const [results, setResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function handleSearch() {
    if (query.length < 3) {
      setError("Введите минимум 3 символа");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/search?query=${encodeURIComponent(query)}&lang=${lang}`);
      const data: Article[] = await res.json();
      if (res.ok) {
        setResults(data);
      } else {
        setError("Ошибка поиска");
      }
    } catch {
      setError("Ошибка сети");
    }
    setLoading(false);
  }

  return (
    <div className={"flex flex-col w-full"}>
      <div  className={styles.serchContainer}>
        <input
          type="text"
          placeholder={t("search")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button onClick={handleSearch} aria-label="Search button">
          <Image src={searchImg} alt="search" />
        </button>
      </div>
      {loading && <p>Загрузка...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
          <FoundedSearch articles={results.map(article => article.data)} />
        </ul>
    </div>
  );
}
