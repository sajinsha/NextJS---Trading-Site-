"use client";
import { useState, useEffect } from "react";

export default function CarouselSection() {
  const [direction, setDirection] = useState("left");
  const [translateX, setTranslateX] = useState(0);

  const testimonials = [
    {
      image: "/avatarone.jpg",
      name: "Lorem ipsum dolor",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
    },
    {
      image: "/avatartwo.jpg",
      name: "Lorem ipsum dolor",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
    },
    {
      image: "/avatarthree.jpg",
      name: "Lorem ipsum dolor",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
    },
    {
      image: "/avatarfour.jpg",
      name: "Lorem ipsum dolor",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
    },
    {
      image: "/avatarfive.jpg",
      name: "Lorem ipsum dolor",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
    },
  ];

  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prevTranslateX) => {
        const cardWidth = 350;
        const maxTranslate = testimonials.length * cardWidth;

        if (direction === "left") {
          const newTranslateX = prevTranslateX + 2;
          if (newTranslateX >= maxTranslate) {
            setDirection("right");
            return maxTranslate;
          }
          return newTranslateX;
        } else {
          const newTranslateX = prevTranslateX - 2;
          if (newTranslateX <= 0) {
            setDirection("left");
            return 0;
          }
          return newTranslateX;
        }
      });
    }, 16);

    return () => clearInterval(interval);
  }, [direction, testimonials.length]);

  return (
    <section className="bg-[#021620] py-16 overflow-hidden">
      <div className="w-full">
        <div
          className="flex gap-6 transition-none"
          style={{
            transform: `translateX(-${translateX}px)`,
            width: `${duplicatedTestimonials.length * 350}px`,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-[320px]"
            >
              <div className="bg-[#0a2832] rounded-2xl p-6 h-full shadow-lg mx-3">
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3
                  className="text-white text-lg font-semibold text-center mb-2"
                  style={{
                    fontFamily: '"Geist", "Inter", sans-serif',
                  }}
                >
                  {testimonial.name}
                </h3>

                <p
                  className="text-gray-300 text-sm text-center mb-4"
                  style={{
                    fontFamily: '"Geist", "Inter", sans-serif',
                  }}
                >
                  {testimonial.title}
                </p>

                <p
                  className="text-gray-300 text-sm leading-relaxed text-center"
                  style={{
                    fontFamily: '"Geist", "Inter", sans-serif',
                  }}
                >
                  {testimonial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
