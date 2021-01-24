import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);

      console.log('Progress Bar');
    };

    window.addEventListener('scroll', progressBarHandler);

    return () => window.removeEventListener('scroll', progressBarHandler);
  }, []);
  
  return (
    <div
      id='progressBarContainer'
      className='fixed z-10 bg-accent-1 w-full h-6 top-0 left-0 mb-20'
    >
      <div
        id='progressBar'
        className='origin-top-left h-6 bg-black transform scale-0 opacity-0'
        style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}}
      ></div>
    </div>
  );
};

export default ProgressBar