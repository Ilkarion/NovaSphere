'use client'
import { useState } from "react";
import Image from "next/image";
import searchImg from "../../../../../imgs/search.svg";
import styles from "./searchsmth.module.scss";
import { useTranslations } from "next-intl";
import FoundedSearch from "./foundedSearch";

import { Article } from "../../interface/allTypes";

import { useLocale } from "next-intl";


export default function SearchSmth() {
  const lang = useLocale()
  const t = useTranslations("HomePage");
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function handleSearch() {
    if (query.length < 3) {
      setError("Minimum 3 symbols");
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
        setError("Search error");
      }
    } catch {
      setError("Connection error");
    }
    console.log(lang)
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
