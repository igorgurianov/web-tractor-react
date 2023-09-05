import { Link } from "react-router-dom";
import React from "react";
// import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const NewsSwiper = ({
  slides,
  sliderName,
  slidesPerViewSmallScreen = "1",
  slidesPerViewMdScreen = "4",
}) => {
  return (
    <div className="relative">
      <Swiper
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
        navigation={{
          prevEl: `.swiper-button-prev-${sliderName}`,
          nextEl: `.swiper-button-next-${sliderName}`,
        }}
      >
        {slides.map((item, index) => {
          return (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="bg-color_white hover:bg-color_dark hover:bg-opacity-5 hover:scale-105 duration-300 h-full">
                <Link to={`./news/${item.url}`} className="h-full flex">
                  <div className="flex flex-col">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="mx-auto max-h-[166px] w-full object-cover"
                    />
                    <div className="p-4 text-left flex flex-col flex-grow-[1]">
                      <span className="text-color_accent_red tracking-widest font-bold uppercase">
                        {item.tag}
                      </span>
                      <h5 className="mt-2">{item.title}</h5>
                      <p className="my-2 leading-tight">{item.previewSM}</p>
                    </div>
                    <time
                      className="text-color_dark_gray text-left ml-4 mb-2"
                      dateTime={item.date.iso}
                    >
                      {item.date.human}
                    </time>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
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

export default NewsSwiper;
