'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./linkNav.module.scss"


export default function LinkNavigating() {
  const pathname = usePathname();

  if (!pathname) return null;

  const segments = pathname
    .split('/')
    .filter(Boolean); // Убираем пустые строки

  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    return { name: segment, href };
  });

  return (
    <nav className={`${styles.font}`}>
      <Link href="/" className={`${styles.underlineLink}`}>Home</Link>
      {breadcrumbs.map((crumb, index) => (
        <span key={index}>
          {' >> '}
          <Link href={crumb.href} className={`${styles.underlineLink}`}>{decodeURIComponent(crumb.name)}</Link>
        </span>
      ))}
    </nav>
  );
}
