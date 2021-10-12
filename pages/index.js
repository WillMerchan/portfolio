import Layout from "../components/layout";
import PostPreview from "../components/post-preview";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  return (
    <Layout activePage='home'>
      <Head>
        <title>Will Merchan | Blog</title>
      </Head>
      {allPosts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
          type='post'
        />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
