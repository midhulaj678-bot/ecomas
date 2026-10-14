import React, { useState } from "react";

const Footer = () => {
  const [category, setCategory] = useState("");

  const products = {
    Jewellery: [
      // Keep your existing Jewellery products here
    ],
    Earring: [
      // Keep your existing Earring products here
    ],
    Necklace: [
      // Keep your existing Necklace products here
    ],
    Ring: [
      // Keep your existing Ring products here
    ],
  };

  return (
    <div className="w-full px-3 pt-2 sm:px-5 md:px-8 lg:px-12">
      {/* Put your responsive Trending Products JSX here */}
    </div>
  );
};

export default Footer;