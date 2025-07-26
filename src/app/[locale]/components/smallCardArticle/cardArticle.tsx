'use client'
import styles from "./card.module.scss"
import Image from "next/image"

import { StaticImageData } from "next/image"
import { useEffect, useState } from "react";

import ReadMore from "../../readMore/readMore";

import blackHoleImg from "@/imgs/blackHoleDesctop.svg"
import nasaBlackHoleImg  from "@/imgs/nasablackHole.svg"
import antImg from "@/imgs/antDesctop.svg"
import blackHoleMorInfoImg from "@/imgs/nasaBlackHoleInfo.svg"

interface Card {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
}


interface ImagesInfo {
  img: StaticImageData;
  imgDescribtion: string;
  alt: string;
  id: number;
}

interface LinksSource {
  href: string;
  text: string;
}

interface TextAbout {
  mainHeader: string;
  describtion: string;
  links: LinksSource[];
}

interface MiniVersion {
  id: number,
  title: string,
  image: StaticImageData,
  description: string
}

interface ReadMoreI {
  infoImg: ImagesInfo[];
  blockText: TextAbout[];
}

interface BiggerVersions {
  id: number,
  readMore: ReadMoreI
}

interface AllInfoObject {
  miniVersions: MiniVersion[],
  biggerVersions: BiggerVersions[]
}



const infoEncy: AllInfoObject = {
  "miniVersions": [
    {
      "id": 1,
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
      "id": 2,
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
      "id": 3,
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
      "id": 4,
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
  ],
  "biggerVersions": [
    {
      "id": 1,
      "readMore": {
        "infoImg": [
            {
                "img": nasaBlackHoleImg,
                "imgDescribtion": "In 2019 the Event Horizon Telescope (EHT) collaboration released the first image ever recorded of a black hole. The EHT saw the black hole in the center of galaxy M87 while the telescope was examining the event horizon or the area past which nothing can escape from a black hole. The image maps the sudden loss of photons (particles of light). It also opens up a whole new area of research in black holes, now that astronomers know what a black hole looks like.",
                "alt": "black Hole from telescope",
                "id": 1
            },
            {
                "img": blackHoleMorInfoImg,
                "imgDescribtion": "",
                "alt": "black Hole build",
                "id": 2
            }
        ],

        "blockText": [
            {
            "mainHeader": "What is a Black Hole?",
            "describtion": "Space object with very strong gravity. Nothing can escape from it — not even light.\nIt has a “point” in the center called a singularity.\nAround it is the event horizon — the point of no return.",
            "links": [
                {
                    "href": "https://www.space.com/15421-black-holes-facts-formation-discovery-sdcmp.html",
                    "text": "Space"
                }
                
            ]
            },
            {
            "mainHeader": "How Black Holes Form?",
            "describtion": "When a big star dies, it can collapse into a black hole.\nBlack holes can also be made when two neutron stars crash into each other.\nBig galaxies (like our Milky Way) have a supermassive black hole in the center.",
            "links": [
                {
                    "href": "https://www.nasa.gov/universe/what-are-black-holes/",
                    "text": "Nasa"
                }
                
            ]    
            } 
        ]
      }
    }
  ]
}



export default function CardArticle() {
  const [read, setRead] = useState(false)
  const [selectedReadMore, setSelectedReadMore] = useState<ReadMoreI | null>(null);



  const allCards = infoEncy.miniVersions
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

  function open(id: number) {
    const foundBig = infoEncy.biggerVersions.find((item) => item.id === id);
    if (foundBig) {
      setSelectedReadMore(foundBig.readMore);
      setRead(true);
    }
  }

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
              <button onClick={()=> open(item.id)}>{"Read more >>"}</button>
            </div>
          </div>
        ))}
      </div>
      {read && selectedReadMore && <ReadMore infoComponent={selectedReadMore} />}
      {read && <div onClick={()=>setRead(false)} className="absolute z-10 top-2 right-7 text-[#2FDDE6] underline hover:cursor-pointer"><span>close</span></div>}
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