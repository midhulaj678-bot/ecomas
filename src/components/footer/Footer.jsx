
import React, { useState } from "react";

const Footer = () => {
  const [category, setCategory] = useState("");

  const products = {
    Jewellery: [
      { image: "/footer/image13.jpg",name:"Marmont Gold-Tone Ring",description:"Sterling silver erring", price: 499 },
      { image: "/footer/image2.jpg", name:"Pop Gold Baselight",description:"Gold vermail,pearl", price: 59.9 },
      { image: "/footer/image3.jpg", name:"Diamond vintage Ring",description:"Yellow Gold", price: 69.9 },
      { image: "/footer/image4.jpg",name:"Amber Errings",description:"White Topaz", price: 79.9 },
      { image: "/footer/image5.jpg",name:"Gold Malachate",description:"Sterling Silver", price: 89.9 },
      { image: "/footer/image6.jpg",name:"Gold jwellery Baselight",description:"14k Yellow gold", price: 9.99 },
      { image: "/footer/image7.jpg",name:"Prong Diamond",description:"White Gold", price: 109.9 },
      { image: "/footer/image8.png",name:"Malachite Earrings",description:"Gold vermeli", price: 49.9 },
      { image: "/footer/image9.png",name:"Man Malachate",description:"Gold vermail,pearl", price: 59.9 },
      { image: "/footer/image10.png",name:"Pop Gold White",description:"Gold vermail,pearl", price: 69.9 },
      { image: "/footer/image11.png",name:"Pop Gold Yellow",description:"Gold vermail,pearl", price: 79.9 },
      { image: "/footer/image12.png",name:"Pop Gold Green",description:"Gold vermail,pearl", price: 89.9 },
      { image: "/footer/image14.jpg",name:"Pop Gold Red",description:"Gold vermail,pearl", price: 9.99 },
      { image: "/footer/image15.jpg",name:"Pop Gold Orange",description:"Gold vermail,pearl", price: 10.99 },
      { image: "/footer/image16.jpg",name:"Pop Gold Black",description:"Gold vermail,pearl", price: 11.99 },
      { image: "/footer/image17.jpg",name:"Pop Gold Silver",description:"Gold vermail,pearl", price: 12.99 },
      { image: "/footer/image18.jpg",name:"Gold Diamond",description:"Gold vermail,pearl", price: 13.99 },
    ],

    Earring: [
       {
    image: "/footer/earings/earring2.png",
    name: "Pearl Drop Earrings",
    description: "Classic pearl drops for special occasions",
    price: 39.9,
  },
  {
    image: "/footer/earings/earring3.png",
    name: "Crystal Sparkle Earrings",
    description: "Shimmering crystal design",
    price: 49.9,
  },
  {
    image: "/footer/earings/earring4.png",
    name: "Golden Hoop Earrings",
    description: "Stylish hoops for everyday wear",
    price: 59.9,
  },
  {
    image: "/footer/earings/earring5.png",
    name: "Traditional Jhumka",
    description: "Beautiful ethnic-inspired design",
    price: 69.9,
  },
  {
    image: "/footer/earings/earring6.jpg",
    name: "Silver Heart Studs",
    description: "Cute heart-shaped earrings",
    price: 34.9,
  },
  {
    image: "/footer/earings/earring7.jpg",
    name: "Elegant Dangle Earrings",
    description: "Graceful dangling style for parties",
    price: 44.9,
  },
  {
    image: "/footer/earings/earring8.jpg",
    name: "Minimalist Gold Earrings",
    description: "Simple and modern everyday style",
    price: 54.9,
  },
  {
    image: "/footer/earings/festivel.jpg",
    name: "Festive Statement Earrings",
    description: "Eye-catching earrings for celebrations",
    price: 79.9,
  },
    ],

    Necklace: [
       {
    image: "/footer/Necklase/necklace1.jpg",
    name: "Golden Pearl Necklace",
    description: "Elegant pearl detailing for a timeless look",
    price: 99.9,
  },
  {
    image: "/footer/Necklase/necklace2.jpg",
    name: "Classic Gold Chain",
    description: "Minimal gold-tone chain for everyday wear",
    price: 129.9,
  },
  {
    image: "/footer/Necklase/necklace3.jpg",
    name: "Floral Pendant Necklace",
    description: "Beautiful floral design for special occasions",
    price: 149.9,
  },
  {
    image: "/footer/Necklase/necklace4.jpg",
    name: "Traditional Statement Necklace",
    description: "A stylish traditional design for celebrations",
    price: 179.9,
  },
    ],

    Ring: [
     {
    image: "/footer/ring/ring1.jpg",
    name: "Classic Gold Ring",
    description: "Elegant gold-tone design for everyday wear",
    price: 399,
  },
  {
    image: "/footer/ring/ring2.jpg",
    name: "Elegant Crystal Ring",
    description: "Sparkling details for a stylish look",
    price: 599,
  },
  {
    image: "/footer/ring/ring3.jpg",
    name: "Floral Statement Ring",
    description: "Beautiful floral-inspired design for special occasions",
    price: 799,
  },
    ],
  };

  return (
    <div className="px-3 pt-2">
      <div className="px-6 pt-14 font-mulish font-bold">
        <h1 className="text-2xl">Trending Products</h1>
      </div>

      {/* Category buttons */}
      <div className="mt-4 flex flex-wrap gap-4 px-6 pb-7">
        {Object.keys(products).map((item) => (
          <button
            key={item}
            onClick={() =>
              setCategory(category === item ? "" : item)
            }
            className={`rounded-lg border px-6 py-3 ${
              category === item
                ? " bg-black text-white flex justify-center"
                : "border-gray-300 bg-white text-black"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Product images and prices */}
      {category && (
        <div className="mt-6 flex flex-wrap gap-5 px-5">
          {products[category].map((product, index) => (
            <div key={product.image} className="w-48">
              <img
                src={product.image}
                alt={`${category} product ${index + 1}`}
                className="h-48 w-48 rounded-lg object-cover shadow-md"
              />

              <p className="mt-2 text-lg font-bold">
                ${product.price}
              </p>
                <h2 className="mt-3 font-semibold text-gray-800">
          {product.name}
        </h2>
           <p className="mt-1 text-sm text-gray-500">
  {product.description}
</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Footer;
