import Layout from '../Layout';
import PostSummary from '../PostSummary';
import styles from './post.module.css';

export default function PostLayout(frontMatter) {
  return ({children}) => {
    return (
      <Layout title={frontMatter.title}>
        <PostSummary
          title={frontMatter.title}
          description={frontMatter.description}
          date={frontMatter.date}
          link={''}
        />
        <main className={styles.post} style={{padding: '24px'}}>
         {children}
        </main>
      </Layout>
    );
  }
} 
