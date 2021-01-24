import Container from '../components/container';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { BLOG_NAME } from '../lib/constants';
import ArticleList from '../components/articleList';
import Header from '../components/header';

export default function Blog({ allPosts }) {
  // const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Container>
          <Header />
          {allPosts.length > 0 && <ArticleList posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'tagName',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
