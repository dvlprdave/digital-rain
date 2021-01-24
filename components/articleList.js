import Articles from './articles';

const ArticleList = ({ posts}) => {
  return (
    <section>
      <div>
        {posts.map((post) => (
          <Articles
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};
 export default ArticleList