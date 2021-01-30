import Container from './container';

export default function Footer() {
  return (
    <footer className='bg-accent-1 border-t border-accent-2'>
      <Container>
        <div className='py-20 flex flex-col lg:flex-row items-center justify-between'>
          <div>
            <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4'>
              Digital Rain
            </h3>
            <p>A collection of process and learning.</p>
          </div>
          <div className='flex flex-col lg:flex-row justify-end items-center lg:pl-4'>
            <p className='font-bold hover:underline'>David Quick @2021</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}