import styles from './Layout.module.css';
import { useEffect } from 'react';
import { card } from '../styles/card.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { Children } from 'react';
import { useRouter } from 'next/router'

export default function Layout({children, title}) {
  const router = useRouter();
  useEffect(function () {
    // listen for $ keypresses
    const onKey = (event) => {
      if (event.key === '$') {
        router.push('/terminal');
      }
      return 5;
    }

    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
    }
  });

  return (
    <div className={styles.layout}>
      <Head>
        <title>{title ? title : "Misha Farber Brodsky"}</title>
      </Head>
      <header className={`${styles.header} ${card}`}>
        <div className={`${styles.linkCluster} ${styles.leftFlex}`}>
          <div className={styles.tooltip}>
            <a href="mailto:misha@farberbrodsky.com" target="_blank" >
              <svg className={styles.linkIcon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>
            </a>
            <p className={styles.tooltipText}>misha@farberbrodsky.com</p>
          </div>
          <div className={styles.tooltip}>
            <a>
              <svg className={styles.linkIcon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z" />
              </svg>
            </a>
            <p className={styles.tooltipText}>Tacode#8707</p>
          </div>
          <div className={styles.tooltip}>
            <a>
              <svg className={styles.linkIcon} viewBox="0 0 24 24">
                <path d="m22.56 8.64c0.7953 0 1.44 0.64472 1.44 1.44 0 5.3019-4.2981 9.6-9.6 9.6-0.79528 0-1.44-0.6447-1.44-1.44s0.64472-1.44 1.44-1.44c3.7113 0 6.72-3.0086 6.72-6.72 0-0.79528 0.6447-1.44 1.44-1.44zm-21.12 6.72c-0.79529 0-1.44-0.64473-1.44-1.44-2.3175e-7 -5.3019 4.2981-9.6 9.6-9.6 0.79528 0 1.44 0.64472 1.44 1.44s-0.64472 1.44-1.44 1.44c-3.7114 0-6.72 3.0086-6.72 6.72 0 0.79528-0.64472 1.44-1.44 1.44zm13.92 7.2c0 0.7953-0.64473 1.44-1.44 1.44-5.3019 0-9.6-4.2981-9.6-9.6 0-0.79528 0.64472-1.44 1.44-1.44s1.44 0.64472 1.44 1.44c0 3.7113 3.0086 6.72 6.72 6.72 0.79528 0 1.44 0.6447 1.44 1.44zm-6.72-21.12c0-0.79529 0.64472-1.44 1.44-1.44 5.3019 0 9.6 4.2981 9.6 9.6 0 0.79528-0.6447 1.44-1.44 1.44s-1.44-0.64472-1.44-1.44c0-3.7114-3.0086-6.72-6.72-6.72-0.79528 0-1.44-0.64472-1.44-1.44z" fill="currentColor" />
              </svg>
            </a>
            <p className={styles.tooltipText}>@mishafb:matrix.org</p>
          </div>
        </div>
        <h1 className={styles.mainTitle}><Link href="/"><a>Misha Farber Brodsky's website</a></Link></h1>
        <div className={`${styles.linkCluster} ${styles.rightFlex}`}>
          <div className={styles.tooltip}>
            <a href="https://github.com/farberbrodsky" target="_blank">
              <svg className={styles.linkIcon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              <p className={styles.tooltipText}>farberbrodsky</p>
            </a>
          </div>
          <div className={styles.tooltip}>
            <a href="https://mastodon.online/@misha" target="_blank">
              <svg className={styles.linkIcon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M20.94,14C20.66,15.41 18.5,16.96 15.97,17.26C14.66,17.41 13.37,17.56 12,17.5C9.75,17.39 8,16.96 8,16.96V17.58C8.32,19.8 10.22,19.93 12.03,20C13.85,20.05 15.47,19.54 15.47,19.54L15.55,21.19C15.55,21.19 14.27,21.87 12,22C10.75,22.07 9.19,21.97 7.38,21.5C3.46,20.45 2.78,16.26 2.68,12L2.67,8.57C2.67,4.23 5.5,2.96 5.5,2.96C6.95,2.3 9.41,2 11.97,2H12.03C14.59,2 17.05,2.3 18.5,2.96C18.5,2.96 21.33,4.23 21.33,8.57C21.33,8.57 21.37,11.78 20.94,14M18,8.91C18,7.83 17.7,7 17.15,6.35C16.59,5.72 15.85,5.39 14.92,5.39C13.86,5.39 13.05,5.8 12.5,6.62L12,7.5L11.5,6.62C10.94,5.8 10.14,5.39 9.07,5.39C8.15,5.39 7.41,5.72 6.84,6.35C6.29,7 6,7.83 6,8.91V14.17H8.1V9.06C8.1,8 8.55,7.44 9.46,7.44C10.46,7.44 10.96,8.09 10.96,9.37V12.16H13.03V9.37C13.03,8.09 13.53,7.44 14.54,7.44C15.44,7.44 15.89,8 15.89,9.06V14.17H18V8.91Z" />
              </svg>
            </a>
            <p className={styles.tooltipText}>@misha@mastodon.online</p>
          </div>
        </div>
      </header>
      {Children.map(children, child => (
        <div className={`${card} ${styles.content} fade-on-transition`}>
          {child}
        </div>
      ))}
    </div>
  )
}
