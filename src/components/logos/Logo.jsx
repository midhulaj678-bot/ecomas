
import { useState, useEffect } from "react";

const images = [
  "/brandlogo/brand1.png",
  "/brandlogo/brand2.png",
  "/brandlogo/brand3.png",
  "/brandlogo/brand4.png",
  "/brandlogo/brand5.png",
  "/brandlogo/brand6.png",
  "/brandlogo/brand7.png",
  "/brandlogo/brand8.png",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  // Automatic movement
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const previousImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative mx-auto w-full overflow-hidden
                 bg-white px-10 py-4
                 sm:px-14 sm:py-5
                 md:px-16 md:py-6
                 lg:px-20"
    >
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={image}
            className="flex w-full shrink-0 items-center justify-center"
          >
            <img
              src={image}
              alt={`Brand ${index + 1}`}
              className="h-12 w-28 object-contain
                         sm:h-14 sm:w-32
                         md:h-16 md:w-36
                         lg:h-20 lg:w-40"
              onError={() => {
                console.error("Image not found:", image);
              }}
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={previousImage}
        aria-label="Previous logo"
        className="absolute left-2 top-1/2 -translate-y-1/2
                   rounded-full bg-white p-2 text-xl text-black
                   shadow-md transition hover:bg-[#c17b45]
                   hover:text-white sm:left-4"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        aria-label="Next logo"
        className="absolute right-2 top-1/2 -translate-y-1/2
                   rounded-full bg-white p-2 text-xl text-black
                   shadow-md transition hover:bg-[#c17b45]
                   hover:text-white sm:right-4"
      >
        &#8594;
      </button>
    </div>
  );
}
