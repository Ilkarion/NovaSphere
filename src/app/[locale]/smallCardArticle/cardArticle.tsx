'use client'
import styles from "./card.module.scss"
import Image from "next/image"

import { StaticImageData } from "next/image"
import { useEffect, useState } from "react";

interface Card {
  title: string;
  image: StaticImageData;
  description: string;
}

interface CardProps {
  cards: Card[];
}

export default function CardArticle({ cards }: CardProps) {
  const allCards = cards
  const startSliced = allCards.slice(0, 6)
  const [choosenCards, setChoosenCards] = useState<Card[]>(startSliced);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(allCards.length / itemsPerPage);

function getVisiblePages(current: number, total: number): (number | string)[] {
  if (total <= 4) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 3) {
    // The beginning is visible, the end is hidden
    return [1, 2, 3, "..."];
  }
  if (current >= total - 2) {
    // The end is seen, the beginning is hidden
    return ["...", total - 2, total - 1, total];
  }
  // Middle - show only one "..."
  return ["...", current, current + 1, current + 2];
}


  function diapasonSliced(pageNum: number) {
    const start = (pageNum - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const sliced = allCards.slice(start, end);
    setChoosenCards(sliced);
    setCurrentPage(pageNum); // update current page
  }

  useEffect(() => {
    function diapasonSliced(pageNum: number) {
      const start = (pageNum - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const sliced = allCards.slice(start, end);
      setChoosenCards(sliced);
      setCurrentPage(pageNum); // update current page
    }
    diapasonSliced(1);
  }, [allCards]);


  return (
    <>
      <div className={styles.articleContainer}>
        {choosenCards.map((item, key) => (
          <div key={key} className={styles.someArticle}>
            <div className={styles.image}>
              <Image src={item.image} alt="black hole" />
            </div>
            <div className={styles.text}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button>{"Read more >>"}</button>
            </div>
          </div>
        ))}
      </div>
{/* PAGINATION */}
      <div className={`flex items-center justify-center ${styles.paginationContainer}`}>
      {/* Previous Button */}
      <button
        onClick={() => currentPage > 1 && diapasonSliced(currentPage - 1)}
        disabled={currentPage === 1}
        className={` ${styles.paginBtn} ${currentPage === 1 ? `${styles.btnNoActive}` : ``}`}
      >
        {'<< Previous'}
      </button>

      {/* Page Numbers */}
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

      {/* Next Button */}
      <button disabled={currentPage === totalPages}
        onClick={() => currentPage < totalPages && diapasonSliced(currentPage + 1)}
        className={` ${styles.paginBtn} ${currentPage === totalPages ? `${styles.btnNoActive}` : ``}`}>
        {'Next >>'}
      </button>
      </div>
    </>
  );
}