import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
// import "swiper/swiper-bundle.min.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import SwiperCore, { Navigation, FreeMode, Thumbs, Lazy, Zoom } from "swiper";

SwiperCore.use([Navigation, Lazy]);

const TractorSlider = ({ slides, className }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={{
          // prevEl: `.swiper-button-prev-tractor`,
          // nextEl: `.swiper-button-next-tractor`,
          prevEl: `.${className}-button-prev`,
          nextEl: `.${className}-button-next`,
        }}
        slidesPerGroup={1}
        slidesPerView={1}
        // zoom={true}
        // thumbs={{ swiper: thumbsSwiper }}
        // thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        lazy={true}
        modules={[Thumbs, Lazy, Zoom]}
        className={`${className} mySwiper2`}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide className="">
              {/* <div className="swiper-zoom-container"> */}
              <img
                data-src={slide}
                className={`mx-auto max-h-[300px] object-contain swiper-lazy tractor-slider-img`}
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
              {/* </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="relative md:my-4 z-10">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Lazy]}
          className={`${className} mySwiper`}
          lazy={true}
          // preventClicksPropagation
          // preventClicks
          breakpoints={{
            550: {
              slidesPerView: 8,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide className="cursor-pointer">
                <img
                  data-src={slide}
                  className="h-full w-full [60px] md:max-h-[75px] object-center object-contain swiper-lazy"
                  loading="lazy"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex absolute w-full h-full top-0 items-center justify-center">
          <div
            className={`${className}-button-prev swiper-button-prev-custom swiper-button-prev-tractor`}
          ></div>
          <div
            className={`${className}-button-next swiper-button-next-custom swiper-button-next-tractor`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TractorSlider;
