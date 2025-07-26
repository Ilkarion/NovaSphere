import Image, { StaticImageData } from "next/image";
import styles from "./biggerImage.module.scss";

export default function BiggerImg({
  imgData,
  describtion,
  alt,
}: {
  imgData: StaticImageData;
  describtion: string;
  alt: string;
}) {
  return (
    <div className={styles.biggerImgContainer}>
      <div>
          <Image src={imgData} alt={alt} />
      </div>
      <p className={styles.description}>{describtion}</p>
    </div>
  );
}
