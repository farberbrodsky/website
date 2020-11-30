import Layout from '../components/Layout';
import { frontMatter as posts } from "./posts/*.mdx";
import PostSummary from '../components/PostSummary';

export default function Home() {
  const sortedPosts = posts.sort((a, b) => a.date - b.date);
  return (
    <div>
      <Layout>
        <main style={{padding: '24px'}}>
          <p>I'm a 15 year old from Israel, studying computer science at Tel Aviv University. A fan of foss, linux and tiling window managers, and a vim amateur.</p>
        </main>
        {sortedPosts.map((page) => (
          <PostSummary
            key={page.__resourcePath}
            title={page.title}
            description={page.description}
            date={page.date}
            link={page.__resourcePath.replace('.mdx', '')}
          />
        ))}
      </Layout>
   </div>
  );
}
