import PostPreview from './post-preview';
import Link from 'next/link';

export default function MoreArticles({ posts }) {
  return (
    <section>
      <h2 className='mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
        More Articles
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32'>
        {posts.slice(0, 3).map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
        <Link href='/blog'>
          <a className='mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 self-center justify-self-center'>
            View All Articles
          </a>
        </Link>
      </div>
    </section>
  );
}
