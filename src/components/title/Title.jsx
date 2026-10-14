
import React from 'react'

const Title = () => {
  return (
    <section className="bg-[#4B2E1F] text-white font-sans
                        grid grid-cols-1 overflow-hidden
                        sm:grid-cols-2">

      {/* Festive Image */}
      <div className="w-full">
        <img
          src="/title/festivel.jpg"
          alt="Festive jewellery collection"
          className="w-full h-64 object-cover
                     sm:h-full sm:min-h-[500px]
                     md:min-h-[600px]
                     lg:min-h-[650px]"
        />
      </div>

      {/* Text Content */}
      <div className="px-6 py-8
                      sm:px-6 sm:py-10
                      md:px-8 md:py-12
                      lg:px-12 lg:py-16">

        <h2 className="text-[#B9824B] text-xl
                       sm:text-2xl
                       md:text-3xl">
          Festive Sale Offers
        </h2>

        <h1 className="pt-3 font-bold text-3xl leading-tight
                       sm:text-3xl
                       md:text-4xl
                       lg:text-5xl">
          Handmade <br />
          Jewellery For <br />
          Special <br className="hidden lg:block" />
          Occasions
        </h1>

        <p className="pt-4 pb-6 text-sm leading-6 text-gray-200
                      sm:text-sm
                      md:text-base md:leading-7">
          Aliquet eget sit amet tellus cras adipiscing enim.
          Non quam lacus suspendisse faucibus interdum posuere.
          Lobortis mattis aliquam faucibus purus in massa tempor.
        </p>

        {/* Discount Badge */}
        <div className="flex items-center">
          <div className="flex h-20 w-20 flex-col items-center
                          justify-center rounded-full bg-[#393939]
                          text-white
                          sm:h-24 sm:w-24
                          md:h-28 md:w-28">

            <span className="text-xl font-medium sm:text-2xl">
              17%
            </span>

            <span className="text-lg font-medium sm:text-xl">
              Offer
            </span>
          </div>

          <div className="ml-4 h-px w-10 bg-[#B9824B]
                          sm:w-14 md:w-20" />
        </div>

        {/* Product Details */}
        <div className="pt-5">
          <h2 className="pb-2 text-xl font-bold
                         sm:text-2xl
                         md:text-3xl">
            Double Row Earrings
          </h2>

          <p className="pb-6 text-sm text-gray-300 sm:text-base">
            Antique Luxury
          </p>
        </div>

        {/* Shop Button */}
        <button
          className="inline-flex items-center justify-center gap-3
                     border border-white bg-white px-6 py-3
                     text-sm font-semibold text-black
                     transition-colors duration-300
                     hover:border-[#B9824B]
                     hover:bg-[#B9824B] hover:text-white
                     sm:px-8 sm:py-3
                     md:text-base"
        >
          Shop Now <span aria-hidden="true">→</span>
        </button>

      </div>
    </section>
  )
}

export default Title
