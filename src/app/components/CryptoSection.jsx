export default function CryptoSection() {
  const images = ["/cryptoimage.jpg", "/cryptoimage.jpg", "/cryptoimage.jpg"];

  const cardData = [
    {
      title: "Lorem Ipsum",
      description:
        "Est quisque interdum gravida dui. Egestas morbi maecenas eu massa.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Est quisque interdum gravida dui. Egestas morbi maecenas eu massa.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Est quisque interdum gravida dui. Egestas morbi maecenas eu massa.",
    },
  ];

  return (
    <section className="bg-[#021620] py-10 sm:py-28">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2
          className="text-white text-[24px] sm:text-3xl lg:text-4xl font-bold mb-4"
          style={{
            fontFamily: '"Geist", "Inter", sans-serif',
            letterSpacing: "0.03em",
          }}
        >
          Most Trusted Cryptocurrency Platform
        </h2>
        <p className="text-gray-300 mb-10 text-base md:text-lg font-normal max-w-2xl mx-auto">
          Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu
          orci aliquet laoreet blandit. Nam velit euismod egestas in. Sed purus.
        </p>
        <div className="flex py-5 flex-col md:flex-row items-center justify-center gap-6 w-full">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative rounded-2xl w-auto md:w-[380px] md:h-[500px] h-auto overflow-hidden shadow-lg bg-[#081b25] flex items-center justify-center"
              style={{
                boxShadow: "0 8px 24px 0 rgba(0,0,0,0.18)",
              }}
            >
              <img
                src={src}
                alt={`Crypto App Screenshot ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading={i === 0 ? "eager" : "lazy"}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-center sm:translate-y-full sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <span
                  className="text-white text-[24px] sm:text-[26px] font-bold mb-2 block"
                  style={{
                    fontFamily: '"Geist", "Inter", sans-serif',
                  }}
                >
                  {cardData[i].title}
                </span>
                <p
                  className="text-gray-200 text-sm leading-relaxed"
                  style={{
                    fontFamily: '"Geist", "Inter", sans-serif',
                  }}
                >
                  {cardData[i].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
