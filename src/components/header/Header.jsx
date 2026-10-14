
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white flex items-center justify-between gap-3 w-full px-3 py-3
                       sm:px-5 sm:gap-4
                       md:px-8 md:gap-6
                       lg:px-12 lg:py-4">

      {/* Logo */}
      <img
        src="/header/logo.svg"
        alt="Logo"
        className="w-20 h-auto sm:w-24 md:w-28 lg:w-36 shrink-0"
      />

      {/* Navigation - Large Screens Only */}
      <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
        <a href="/" className="text-sm xl:text-base hover:text-[#c17b45]">Home</a>
        <a href="/pages" className="text-sm xl:text-base hover:text-[#c17b45]">Pages</a>
        <a href="/shop" className="text-sm xl:text-base hover:text-[#c17b45]">Shop</a>
        <a href="/blog" className="text-sm xl:text-base hover:text-[#c17b45]">Blog</a>
        <a href="/contact" className="text-sm xl:text-base hover:text-[#c17b45] whitespace-nowrap">Contact Us</a>
      </nav>

      {/* Right Side Icons */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">

        {/* Search */}
        <img
          src="/header/search.svg"
          alt="Search"
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 cursor-pointer lg:hidden"
        />

        {/* Cart */}
        <img
          src="/header/cart.svg"
          alt="Cart"
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 cursor-pointer"
        />

        {/* Menu - Small and Medium Screens Only */}
        <img
          src="/header/menubar.svg"
          alt="Menu"
          className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer lg:hidden"
        />

      </div>
    </header>
  );
};

export default Header;
