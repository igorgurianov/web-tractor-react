import React, { useState } from "react";
import SwiperCore, { Navigation, FreeMode, Thumbs, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// Import Swiper React components
// import required modules

SwiperCore.use([Navigation]);

const TractorSlider = ({ data, className, model }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={{
          prevEl: `.${className}-button-prev`,
          nextEl: `.${className}-button-next`,
        }}
        slidesPerView={1}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs, Zoom]}
        className={`${className} mySwiper2`}
      >
        {data.gallery.map((slide, index) => {
          return (
            <SwiperSlide className="" key={index}>
              <img
                src={slide}
                className={`mx-auto max-h-[280px] md:max-h-[300px] object-contain tractor-slider-img`}
                alt="Купить трактор ДТ 75. Купить трактор ХТЗ 150"
              />
            </SwiperSlide>
          );
        })}

        {data.inStock ? (
          <div className="absolute right-0 top-0 bg-color_accent_green py-1 px-4 rounded-sm z-10">
            <h5 className="text-color_white font-primary lowercase font-medium tracking-wider">
              В наличии
            </h5>
          </div>
        ) : (
          <div className="absolute right-0 top-0 bg-color_accent_yellow py-1 px-2 rounded-sm z-10">
            <h5 className="text-color_white font-primary lowercase font-normal">
              под заказ
            </h5>
          </div>
        )}
      </Swiper>
      <div className="relative my-2 md:my-6 z-10">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`${className} mySwiper`}
          breakpoints={{
            550: {
              slidesPerView: 8,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
        >
          {data.gallery.map((slide, index) => {
            return (
              <SwiperSlide
                className="cursor-pointer bg-color_light_gray rounded-xl border border-color_dark"
                key={index}
              >
                <img
                  src={slide}
                  className="h-full w-full [60px] md:max-h-[60px] object-center object-contain "
                />
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
