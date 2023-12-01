/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const items = [
  "/img/sponsors/8.png",
  "/img/sponsors/9.png",
  "/img/sponsors/10.png",
  "/img/sponsors/12.png",
  "/img/sponsors/apple.png",
];

export const DotButton = ({
  selected,
  onClick,
}: {
  selected: any;
  onClick: any;
}) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

export const PrevButton = ({
  enabled,
  onClick,
}: {
  enabled: any;
  onClick: any;
}) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
);

export const NextButton = ({
  enabled,
  onClick,
}: {
  enabled: any;
  onClick: any;
}) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);

const EmblaCarousel = ({ slides }: { slides: any }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: any) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList() as any);
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((slide: any) => (
              <div className="embla__slide" key={slide}>
                <div className="embla__slide__inner">
                  <img
                    className="embla__slide__img"
                    src={""}
                    alt="A cool cat."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default function LogoCloud() {
  const imgItems = items.map((item, i) => {
    return (
      <Image
        key={`logo-${i}`}
        src={item}
        alt=""
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        width={158}
        height={48}
      />
    );
  });

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-white py-20">
        <h2 className="text-center text-4xl font-extrabold leading-8 text-blue">
          I nostri sostentitori
        </h2>
        <img src="/img/underline.svg" alt="" className="mx-auto mt-2" />
        <div className="mt-10 max-w-lg items-center sm:max-w-xl lg:mx-0 lg:max-w-none flex flex-row">
          <EmblaCarousel slides={["1", "2", "3"]} />
        </div>
      </div>
    </>
  );
}
