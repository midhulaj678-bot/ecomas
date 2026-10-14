
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#FFF8F0]">

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-[62%_38%] w-full overflow-hidden">

        {/* Left Side - Content */}
        <div className="flex flex-col justify-center px-6 sm:px-8 md:px-8 lg:px-12 py-10 md:py-12 lg:py-16">

          {/* Hero Title */}
          <div>
            <h1 className="font-tangerine text-5xl text-[#c17b45]
                           sm:text-6xl md:text-7xl lg:text-8xl">
              The original
            </h1>
          </div>

          {/* Description */}
          <div className="pt-3">
            <p className="font-mulish text-black text-3xl leading-tight
                          sm:text-4xl md:text-5xl lg:text-7xl">
              Happiness
              <br />
              Comes In The Box
              <br />
              Of Jewellery
            </p>
          </div>

          {/* Shop Button */}
          <div className="pt-6 md:pt-8">
            <button className="border border-black bg-black text-white
                               px-6 py-3 sm:px-8 sm:py-4 lg:px-10
                               hover:bg-[#c17b45] hover:border-[#c17b45]
                               transition-colors duration-300">
              Shop Now
            </button>
          </div>

        </div>

        {/* Right Side - Hero Image */}
        <div className="relative w-full h-[350px] sm:h-[430px]
                        md:h-[500px] lg:h-[600px]">
          <img
            src="/hero/heroimg.jpg"
            alt="Jewellery collection"
            className="absolute inset-0 block w-full h-full
                       max-w-none object-cover object-center"
          />
        </div>

      </section >

      {/* Services */}
      <div className="grid grid-cols-1 gap-6 px-6 pt-15 pb-15
                      sm:grid-cols-2 sm:gap-8 sm:px-8
                      md:gap-10 md:pt-14
                      lg:grid-cols-4 lg:gap-6 lg:px-12 lg:pt-16">

        {/* Free Delivery */}
        <div className="flex items-center gap-4">
          <img src="/hero/car.svg" alt="Delivery"
               className="w-10 h-10 shrink-0 sm:w-11 sm:h-11 md:w-12 md:h-12" />
          <div>
            <h2 className="font-bold text-sm sm:text-base md:text-lg">
              Free Delivery
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Order from all items
            </p>
          </div>
        </div>

        {/* Return & Refund */}
        <div className="flex items-center gap-4">
          <img src="/hero/money.svg" alt="Money back"
               className="w-10 h-10 shrink-0 sm:w-11 sm:h-11 md:w-12 md:h-12" />
          <div>
            <h2 className="font-bold text-sm sm:text-base md:text-lg">
              Return &amp; Refund
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Money back guarantee
            </p>
          </div>
        </div>

        {/* Member Discount */}
        <div className="flex items-center gap-4">
          <img src="/hero/discount.svg" alt="Discount"
               className="w-10 h-10 shrink-0 sm:w-11 sm:h-11 md:w-12 md:h-12" />
          <div>
            <h2 className="font-bold text-sm sm:text-base md:text-lg">
              Member Discount
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              On every order over $140.00
            </p>
          </div>
        </div>

        {/* Support */}
        <div className="flex items-center gap-4">
          <img src="/hero/hedset.svg" alt="Customer support"
               className="w-10 h-10 shrink-0 sm:w-11 sm:h-11 md:w-12 md:h-12" />
          <div>
            <h2 className="font-bold text-sm sm:text-base md:text-lg">
              Support 24/7
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Contact us 24 hours a day
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;
