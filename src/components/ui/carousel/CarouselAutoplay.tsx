"use client";
import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import "./embla.css";
type PropType = {
  slides: { image: string; alt?: string; url?: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <Link
              className="embla__slide"
              key={index}
              href={slide.url || "/video/5dcbcdd68b8f22fbfe0d54c6b21ab714"}
            >
              <img
                className="embla__slide__img"
                src={slide.image}
                alt={slide.alt || ""}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;