
const images = [
  "/scroll/scroll1.jpg",
  "/scroll/scroll2.jpg",
  "/scroll/scroll3.jpg",
  "/scroll/scroll4.jpg",
];

export default function Slide() {
  return (
    <div className="w-full overflow-hidden py-6 pt-10">
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]"></div>
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="mx-3 w-64 shrink-0 sm:w-80"
          >
            <img
              src={image}
              alt={`Trending product ${index + 1}`}
              className="h-64 w-full rounded-lg object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
