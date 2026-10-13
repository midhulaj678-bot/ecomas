
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full overflow-hidden py-4 pt-18">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex w-full shrink-0 items-center justify-center px-2"
          >
            <img
              src={image}
              alt={`Brand ${index + 1}`}
              className="h-24 w-full object-contain sm:h-32 lg:h-40"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-1 text-xl shadow"
      >
        &#8592;
      </button>

      <button
        onClick={() =>
          setCurrent((prev) => (prev + 1) % images.length)
        }
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-1 text-xl shadow"
      >
        &#8594;
      </button>
    </div>
  );
}
