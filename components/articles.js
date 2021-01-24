import DateFormatter from '../components/date-formatter';
import Link from 'next/link';

const Articles = ({ title, date, excerpt, slug }) => {
  return (
    <section>
      <div className='grid grid-cols-1 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-8 max-w-3xl'>
          <div>
            <div className='mb-5'>
            </div>
            <h3 className='text-3xl mb-3 leading-snug'>
              <Link as={`/posts/${slug}`} href='/posts/[slug]'>
                <a className='hover:underline'>{title}</a>
              </Link>
            </h3>
            <div className='mb-4 md:mb-2 text-lg flex'>
              <DateFormatter dateString={date} />
            </div>
            <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
          </div>
      </div>
    </section>
  );
};

 export default Articles