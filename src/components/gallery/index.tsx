"use client";


import { useState } from "react";

export default function Galleri() {
  interface Gallery {
    src: string;
  }

  const images: Gallery[] = [
    {
      src: "/gallery/img1.jpg",
    },
    { 
      src: "/gallery/img2.jpg" 
    },
    { 
      src: "/gallery/img3.jpg" 
    },
    {
      src: "/gallery/img4.jpg",
    },
    {
      src: "/gallery/img5.jpg",
    },
    {
      src: "/gallery/img6.jpg",
    },
    {
      src: "/gallery/img7.jpg",
    },
    {
      src: "/gallery/img8.jpg",
    },
    {
      src: "/gallery/img9.jpg",
    },
    {
      src: "/gallery/img10.jpg",
    },
    {
      src: "/gallery/img11.jpg",
    },
    {
      src: "/gallery/img12.jpg",
    },
    {
      src: "/gallery/img13.jpg",
    },
    {
      src: "/gallery/img14.jpg",
    },
    {
      src: "/gallery/img15.jpg",
    },
    {
      src: "/gallery/img16.jpg",
    },
    {
      src: "/gallery/img17.jpg",
    },
    {
      src: "/gallery/img18.jpg",
    },
    {
      src: "/gallery/img19.jpg",
    },
    {
      src: "/gallery/img20.jpg",
    },
    {
      src: "/gallery/img21.jpg",
    },
    {
      src: "/gallery/img22.jpg",
    },
  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const showNext = () => {
    setSelectedImageIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  };

  const showPrev = () => {
    setSelectedImageIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  };

  return (
    <div className="">
      <div className="grid grid-cols-4 pb-10 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt="Paphos Sea Cruise Images"
            onClick={() => handleImageClick(index)}
            className="cursor-pointer"
            width={1000}
            height={1000}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            X
          </button>
          <button
            onClick={showPrev}
            className="absolute left-4 text-white text-3xl"
          >
            &#8592;
          </button>
          <img
            src={images[selectedImageIndex].src}
            className="max-h-[90%] max-w-[90%]"
            alt="Paphos Sea"

          />
          <button
            onClick={showNext}
            className="absolute right-4 text-white text-3xl"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}
