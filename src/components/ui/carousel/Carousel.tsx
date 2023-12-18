"use client";

// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";
import { NextButton, PrevButton } from "./CarouselControls";
import React from "react";

// Define the props
type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  return (
    <div className="flex justify-between items-center">
      <PrevButton
        canScrollPrev={canScrollPrev}
        onPrev={() => emblaApi?.scrollPrev()}
      />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <NextButton
        canScrollNext={canScrollNext}
        onNext={() => emblaApi?.scrollNext()}
      />
    </div>
  );
};
export default Carousel;
