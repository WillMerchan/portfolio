import { getAllWork } from "../../lib/api";
import PostPreview from "../../components/post-preview";
import Layout from "../../components/layout";

export default function Portfolio({ allWork }) {
  return (
    <Layout activePage='portfolio'>
      {allWork.map((work) => (
        <PostPreview
          key={work.slug}
          title={work.title}
          coverImage={work.coverImage}
          date={work.date}
          author={work.author}
          slug={work.slug}
          excerpt={work.excerpt}
          type='work'
        />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const allWork = getAllWork([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allWork },
  };
}
