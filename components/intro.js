import Navbar from './navbar';
export default function Intro() {
  return (
    <section className='flex items-baseline justify-between mt-16 mb-16 md:mb-12'>
      <h1 className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
        Digital Rain
      </h1>
      {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A collection of process and learning.
      </h4> */}
      <Navbar />
    </section>
  );
}