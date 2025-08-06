'use client'

import { useState } from "react"
import styles from "./linkManager.module.scss"

interface Link {
  text: string;
  href: string;
}


type Props = {
  links: Link[];
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
  return (
    <div className={styles.linksBlock}>
      <div className={styles.linksRow}>
        <input 
          type="text" 
          placeholder="link name..." 
          value={linkName} 
          onChange={(e) => setLinkName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="link..." 
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
