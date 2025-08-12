'use client'
import Image from "next/image";
import styles from "./readMore.module.scss";

import ShortInfo from "./shortInfo";
import { useState } from "react";
import BiggerImg from "./biggerImg";

interface ImagesInfo {
  img: string;
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

interface ReadMore {
  infoImg: ImagesInfo[];
  blockText: TextAbout[];
}

export default function ReadMore({infoComponent}:{infoComponent:ReadMore}) {

  const [openImg, setOpenImg] = useState(false);
  const [openData, setOpenData] = useState<ImagesInfo | null>(null);

  function open(id: number) {
    const found = infoComponent.infoImg.find((img) => img.id === id);
    if (found) {
      setOpenData(found);
      setOpenImg(true);
    }
  }

  function close() {
    setOpenImg(false);
    setOpenData(null);
  }

  return (
    <div className={styles.containerMoreInfo}>
      <div className={styles.imagesBlock}>
        {infoComponent.infoImg.map((item, key) => (
          <div
            key={key}
            className="hover:cursor-pointer"
            onClick={() => open(item.id)}
          >
            <Image src={item.img} alt={item.alt} width={10000} height={10000}/>
          </div>
        ))}
      </div>

      <div className={styles.shortInfoContainer}>
        {infoComponent.blockText.map((item, key) => (
          <ShortInfo
            mainHeader={item.mainHeader}
            describtion={item.describtion}
            links={item.links}
            key={key}
          />
        ))}
      </div>

    {openImg && openData && (
    <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
            <button onClick={close} className={styles.closeButton}>✖</button>
            <BiggerImg
                imgData={openData.img}
                describtion={openData.imgDescribtion}
                alt={openData.alt}
            />
        </div>
    </div>
    )}
    </div>
  );
}
