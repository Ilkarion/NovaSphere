export interface ArticleData {
  miniVersions: MiniVersion[];
  biggerVersions: BiggerVersion[];
}

export interface MiniVersion {
  // Убрал id, оно не нужно здесь
  title: string;
  image: string;
  describtion: string;
}

export interface BiggerVersion {
  // Убрал id, оно не нужно здесь
  readMore: ReadMore;
}

export interface ReadMore {
  infoImg: InfoImg[];
  blockText: BlockText[];
}

export interface InfoImg {
  id: number;
  img: string;
  imgDescribtion: string;
  alt: string;
  // Убрал id здесь тоже
}

export interface BlockText {
  mainHeader: string;
  describtion: string;
  links: Link[];
}

export interface Link {
  href: string;
  text: string;
}
