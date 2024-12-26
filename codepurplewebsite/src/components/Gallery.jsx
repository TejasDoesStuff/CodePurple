import React, { useRef, useState, useEffect } from "react";
import './NoScrollBar.css';

const galleryPhotos = import.meta.glob('../codepurplewebsite/src/assets/galleryPhotos/*.{png,jpg,jpeg,svg}', { eager: true });

function Gallery() {
  const scrollRef = useRef(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    console.log(galleryPhotos)
    const loadedPhotos = Object.keys(galleryPhotos).map((key) => galleryPhotos[key].default);
    console.log(loadedPhotos)
    setPhotos(loadedPhotos);
  }, []);


  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="h-[80vh] w-full bg-white">
      <div className="mx-24 my-16">
        <div className="relative flex flex-row justify-end items-center gap-10">
          <div className="border-codePurple border-8 rounded-full w-full h-0 absolute left-[-30%]"></div>
          <h1 className="font-kode font-extrabold text-7xl z-10 text-black">
            Gallery
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden h-[60vh] mx-8">
        <div
          ref={scrollRef}
          className="flex flex-row gap-4 overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap h-full"
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="h-[50vh] w-[30vw] bg-gray-300 flex-shrink-0 rounded-lg mx-4"
              style={{ backgroundImage: `url(${photo})`, backgroundSize: 'cover' }}
            />
          ))}
        </div>

        <button
          onClick={() => handleScroll("left")}
          className="absolute top-1/2 left-8 transform -translate-y-full bg-white px-2 py-1 rounded-full shadow-md"
        >
          ←
        </button>

        <button
          onClick={() => handleScroll("right")}
          className="absolute top-1/2 right-8 transform -translate-y-full bg-white px-2 py-1 rounded-full shadow-md"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Gallery;