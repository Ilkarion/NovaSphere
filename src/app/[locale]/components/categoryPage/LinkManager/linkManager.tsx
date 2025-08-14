import styles from "./linkManager.module.scss"
import { useTranslations } from "next-intl";
import { LinksSource } from "../../interface/allTypes";




type Props = {
  links: LinksSource[];
  linkName: string;
  linkURL: string;
  setLinkName: (name: string) => void;
  setLinkURL: (url: string) => void;
  addLink: () => void;
  removeLink: (index: number) => void;
};

export default function LinksManager({
  links,
  linkName,
  linkURL,
  setLinkName,
  setLinkURL,
  addLink,
  removeLink
}: Props) {
  const t = useTranslations("NewArticle")

  return (
    <div className={styles.linksBlock}>
      <div className={styles.linksRow}>
        <input 
          type="text" 
          placeholder={t("linkName")}
          value={linkName} 
          onChange={(e) => setLinkName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder={t("link")}
          value={linkURL} 
          onChange={(e) => setLinkURL(e.target.value)} 
        />
        <button onClick={addLink}>add link</button>
      </div>

      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
            <button onClick={() => removeLink(index)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
