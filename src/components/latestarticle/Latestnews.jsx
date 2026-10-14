
import React from 'react'

const Latestnews = () => {
  const articles = [
    {
      image: "/Latest/latest1.jpg",
      title: (
        <>
          Seasonal Decorating Bringing The
          <br className="hidden lg:block" />
          Spirit Of the Season Into Your Home
        </>
      ),
    },
    {
      image: "/Latest/latest2.jpg",
      title:
        "Artful arrangements mastering the art of styling shelves and vignettes",
    },
    {
      image: "/Latest/latest3.jpg",
      title:
        "Outdoor oasis creating a stylish and functional outdoor living space",
    },
  ]

  return (
    <section className="pt-12 px-3 sm:px-5 sm:pt-16 md:px-8 md:pt-20 lg:px-12">

      {/* Heading */}
      <h1 className="font-bold font-mulish text-xl text-center pb-8
                     sm:text-2xl sm:pb-10
                     md:text-3xl
                     lg:pb-12">
        Latest News &amp; Articles
      </h1>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-8
                      sm:grid-cols-2 sm:gap-6
                      lg:grid-cols-3 lg:gap-8">

        {articles.map((article, index) => (
          <article key={article.image} className="w-full min-w-0">

            {/* Article Image */}
            <img
              src={article.image}
              alt={`Latest article ${index + 1}`}
              className="w-full aspect-[4/3] object-cover rounded-md"
            />

            {/* Category */}
            <h6 className="text-[#55585B] pt-4 px-1 text-xs
                           sm:pt-5 sm:text-sm
                           md:pt-6">
              Fashion, Lifestyle, News
            </h6>

            {/* Article Title */}
            <h2 className="font-semibold font-mulish px-1 pt-3
                           text-base leading-6
                           sm:text-lg sm:leading-7
                           md:text-xl">
              {article.title}
            </h2>

          </article>
        ))}

      </div>
    </section>
  )
}

export default Latestnews
