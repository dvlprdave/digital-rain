import Link from 'next/link';
import Navbar from './navbar';

export default function Header({ progress }) {
  return (
    <section className='flex items-baseline justify-between mb-16 md:mb-12'>
      <h2
        className={`text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 xl:mb-20 mt-8 ${
          progress ? 'mt-8' : ''
        }`}
      >
        <Link href='/'>
          <a className='hover:underline'>Digital Rain</a>
        </Link>
        .
      </h2>
      <Navbar />
    </section>
  );
}
