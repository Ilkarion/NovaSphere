import Image, { StaticImageData } from "next/image";
import styles from "./biggerImage.module.scss";

export default function BiggerImg({
  imgData,
  describtion,
  alt,
}: {
  imgData: string;
  describtion: string;
  alt: string;
}) {
  return (
    <div className={styles.biggerImgContainer}>
      <div>
          <Image src={imgData} alt={alt} width={100} height={100}/>
      </div>
      <p className={styles.description}>{describtion}</p>
    </div>
  );
}
