import React, { useState, useEffect } from 'react';

function Videoo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const content = [
    { type: 'video', src: '/video/video_2.mp4' },
    { type: 'video', src: 'https://cdn.pixabay.com/video/2020/03/05/33256-396487978_large.mp4' },
    { type: 'video', src: '/video/video_3.mp4' },
    { type: 'video', src: '/video/video_4.mp4' },
    { type: 'video', src: '/video/123629-728697948.mp4' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % content.length);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="flex">
      <section className="relative h-screen flex flex-col items-center justify-center text-center w-full">
        <div
          className={`absolute top-0 left-0 w-full h-full overflow-hidden transition-opacity duration-500 ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <video
            className="min-w-full min-h-full absolute object-cover filter"
            src={content[currentSlide].src}
            autoPlay
            muted
            loop
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>
        </div>

        <div className="relative z-20 space-y-4 px-4">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black animate-fadeInScale">
            "Discover Modern Cafe"
          </h1>
          <h3 className="font-light text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4 animate-fadeInDelay">
            "Where Taste, Social Vibes, and Moments Converge—Enjoy the Café Your Way."
          </h3>
        </div>
      </section>
    </div>
  );
}

export default Videoo;
