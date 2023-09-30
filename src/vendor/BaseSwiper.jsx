import React from "react";
// import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// SwiperCore.use([Navigation]);

const BaseSwiper = ({
  slides,
  sliderName,
  slidesPerViewSmallScreen = "1",
  slidesPerViewMdScreen = "3",
  slideHeigth,
}) => {
  return (
    <div className="relative mt-10 md:mt-0">
      <Swiper
        // modules={[Navigation]}
        navigation={{
          prevEl: `.swiper-button-prev-${sliderName}`,
          nextEl: `.swiper-button-next-${sliderName}`,
        }}
        slidesPerGroup={1}
        className={`swiper ${sliderName}`}
        breakpoints={{
          320: {
            slidesPerView: slidesPerViewSmallScreen,
          },
          1000: {
            slidesPerView: slidesPerViewMdScreen,
          },
        }}
        spaceBetween={24}
        preventClicks={true}
        preventClicksPropagation={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div
              className="h-full w-full"
              style={
                slideHeigth
                  ? { maxHeight: `${slideHeigth}` }
                  : { height: "100%" }
              }
            >
              <img
                src={slide.img}
                alt={slide.alt}
                className="mx-auto object-cover h-full w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`swiper-button-prev-custom swiper-button-prev-${sliderName}`}
      ></div>
      <div
        className={`swiper-button-next-custom swiper-button-next-${sliderName}`}
      ></div>
    </div>
  );
};

export default BaseSwiper;
