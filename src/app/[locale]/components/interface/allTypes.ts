
//--------------------------------------------
//ArticleObject {
//   miniVersions: MiniVersion[];
//   biggerVersions: BiggerVersion[];
// }
//--------------------------------------------

interface ImagesInfo {
  img: string;
  imgDescribtion: string;
  alt: string;
  id: number;
}

export interface LinksSource {
  href: string;
  text: string;
}

interface TextAbout {
  mainHeader: string;
  describtion: string;
  links: LinksSource[];
}

export interface ReadMoreI {
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

export interface ArticleObject {
  miniVersions: MiniVersion[];
  biggerVersions: BiggerVersion[];
}

//--------------------------------------------Search smth component--------------------------------------------
export interface Article {
  id: number;
  data: ArticleObject;
};


//--------------------------------------------addArticle.tsx--------------------------------------------
export interface SectionObj {
    title: {
        text: string,
        links: LinksSource[]
    },
    text: string
}




//--------------------------------------------CardArticle--------------------------------------------
export interface Card {
  id: number;
  title: string;
  image: string;
  description: string;
}



interface TextAbout {
  mainHeader: string;
  describtion: string;
  links: LinksSource[];
}


interface BiggerVersions {
  id: number;
  readMore: ReadMoreI;
}

export interface AllInfoObject {
  miniVersions: Card[]; // Используем Card с image:string
  biggerVersions: BiggerVersions[];
}

export interface Article {
  id: number;
  created_at: string;
  data: {
    miniVersions: {
      image: string;
      title: string;
      describtion: string;
    }[];
    biggerVersions: {
      readMore: {
        infoImg: ImagesInfo[];
        blockText: TextAbout[];
      };
    }[];
  };
}