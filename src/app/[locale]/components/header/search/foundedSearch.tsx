'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/app/[locale]/components/smallCardArticle/card.module.scss';
import ReadMore from '@/app/[locale]/readMore/readMore';

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

interface ReadMoreI {
  infoImg: ImagesInfo[];
  blockText: TextAbout[];
}

interface MiniVersion {
  image: string;
  title: string;
  describtion: string;
}

interface BiggerVersion {
  readMore: ReadMoreI;
}

interface ArticleObject {
  miniVersions: MiniVersion[];
  biggerVersions: BiggerVersion[];
}

export default function FoundedSearch({ articles }: { articles: ArticleObject[] }) {
  const [read, setRead] = useState(false);
  const [selectedReadMore, setSelectedReadMore] = useState<ReadMoreI | null>(null);

  function open(article: ArticleObject) {
    if (article.biggerVersions.length > 0) {
      setSelectedReadMore(article.biggerVersions[0].readMore);
      setRead(true);
    }
  }

  return (
    <>
      <div className={styles.articleContainer}>
        {articles.map((article, index) => {
          const mini = article.miniVersions[0];
          return (
            <div key={index} className={styles.someArticle}>
              <div className={styles.image}>
                <Image src={mini.image} alt={mini.title} width={1000} height={1000} />
              </div>
              <div className={styles.text}>
                <h3>{mini.title}</h3>
                <p>{mini.describtion}</p>
                <button onClick={() => open(article)}>Read More</button>
              </div>
            </div>
          );
        })}
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
    </>
  );
}
