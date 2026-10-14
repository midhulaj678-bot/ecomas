
import { useState, useEffect } from "react";

const images = [
  {
 image: "/trend/code1.jpg",
    name: "Crystal Sparkle Earrings",
    description: "Shimmering crystal design",
    price: 49.9,
  },
  {
    image: "/trend/code2.jpg",
    name: "Crystal Sparkle Earrings",
    description: "Shimmering crystal design",
    price: 49.9,
  },
  {
    image: "/trend/code3.jpg",
    name: "Golden Hoop Earrings",
    description: "Stylish hoops for everyday wear",
    price: 59.9,
  },
  {
    image: "/trend/code4.jpg",
    name: "Traditional Jhumka",
    description: "Beautiful ethnic-inspired design",
    price: 69.9,
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const product = images[current];

  return (
    
  <div className="w-full px-4 py-6 text-center">

    <h1 className="mb-6 text-3xl font-bold text-black">
      Trending Product
    </h1>

    <img
      src={product.image}
      alt={product.name}
      className="mx-auto h-64 w-full rounded-lg object-contain sm:h-80 lg:h-96"
    />

    <h2 className="mt-4 text-xl font-semibold text-amber-900">
      {product.name}
    </h2>

    <p className="mt-2 text-gray-600">
      {product.description}
    </p>

    <p className="mt-2 text-lg font-bold text-amber-800">
      ${product.price.toFixed(2)}
    </p>

    <div className="mt-4 flex justify-center gap-2">
      {images.map((item, index) => (
        <button
          key={item.image}
          onClick={() => setCurrent(index)}
          aria-label={`Show ${item.name}`}
          className={`h-3 w-3 rounded-full ${
            current === index ? "bg-amber-800" : "bg-gray-300"
          }`}
        />
      ))}
    </div>

  </div>
);
}