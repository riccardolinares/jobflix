// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import dynamic from "next/dynamic";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

export function Slider({ items }: { items: React.ReactNode[] }) {
  return (
    <Swiper
      // centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="w-full h-full"
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 3,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 5,
        },
      }}
    >
      {items.map((item, i) => {
        return (
          <SwiperSlide
            className="text-center text-base flex justify-center items-center"
            key={`slide-${i}`}
          >
            {item}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

// Slider with dynamic import
const SliderDynamic = dynamic(() => Promise.resolve(Slider), {
  ssr: false,
  loading: () => <div>Caricamento partner</div>,
});

export default SliderDynamic;
