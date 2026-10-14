
const images = [
  "/scroll/scroll1.jpg",
  "/scroll/scroll2.jpg",
  "/scroll/scroll3.jpg",
  "/scroll/scroll4.jpg",
  "/scroll/scroll5.jpg",
  "/scroll/scroll6.jpg",
];

export default function Slide() {
  return (
    <section className="w-full overflow-hidden py-6 pt-10">

      {/* Heading and Description */}
      <div className="text-center px-4 mb-8 sm:mb-10">
        <h2 className="font-mulish text-3xl font-semibold text-[#3B2A20]
                       sm:text-4xl md:text-5xl">
          Trends On Image Feed
        </h2>

        <p className="font-mulish mt-3 text-sm text-gray-600
                      sm:text-base md:text-lg">
          After many months design and development of a modern online retailer
        </p>
      </div>

      {/* Image Slider */}
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="mx-3 w-64 shrink-0 sm:w-80"
          >
            <img
              src={image}
              alt={`Trending product ${(index % images.length) + 1}`}
              className="h-64 w-full rounded-lg object-contain sm:h-80"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
