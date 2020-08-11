import styles from './PostSummary.module.css';
import Link from 'next/link';

export default function PostSummary({ title, description, date, link }) {
  return (
    <Link href={link}>
      <a>
        <div className={styles.PostSummary}>
          <h1>{title}</h1>
          <div className={styles.metadata}>
            <p className={styles.description}>{description}</p>
            <p className={styles.writtenOn}>Written on {new Date(date).toLocaleDateString("en-GB")}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
