import ContactUsBtn from "../UI/ContactUsBtn";

import bannerImg1 from "../assets/images/main-banner/banner2.jpg";
import bannerImg2 from "../assets/images/main-banner/banner1.jpg";

// import { register } from "swiper/element/bundle";
// import rightArrow from "../assets/icons/right-arrow-white.svg";
// import leftArrow from "../assets/icons/left-arrow-white.svg";

// Old Import
// import React, { useEffect, useRef } from "react";
// import Swiper from "swiper";

//New import

import React from "react";
// import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const mainBannerData = [
  {
    header: "Надежные трактора",
    subHeader: "для широкого спектра работ",
    text1: "лучше качество по доступной цене,",
    text2: "с возможностью продажи в лизинг",
    img: bannerImg1,
  },
  {
    header: "доставка",
    subHeader: "в помощь покупателю",
    text1: "помощь в погрузке",
    text2: " и материалы для первого  ТО",
    img: bannerImg2,
  },
  {
    header: "Надежные трактора",
    subHeader: "для широкого спектра работ",
    text1: "лучше качество по доступной цене,",
    text2: "с возможностью продажи в лизинг",
    img: bannerImg1,
  },
  {
    header: "доставка",
    subHeader: "в помощь покупателю",
    text1: "помощь в погрузке",
    text2: " и материалы для первого  ТО",
    img: bannerImg2,
  },
];

const MainSwiper = ({ slides, sliderName }) => {
  // const swiperRef = useRef(null);

  // useEffect(() => {
  //   swiperRef.current = new Swiper(`.${sliderName}`, {
  //     pagination: {
  //       el: ".swiper-pagination-main",
  //     },
  //     preventClicks: true,
  //     slidesPerView: 1,
  //     // Navigation arrows
  //     navigation: {
  //       nextEl: ".swiper-button-next-main",
  //       prevEl: ".swiper-button-prev-main",
  //     },
  //     injectStyles: [
  //       `
  //     `,
  //     ],

  //     // ...other options
  //   });
  // }, []);

  return (
    <div>
      <Swiper
        className={`swiper ${sliderName}`}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        // pagination={{ el: ".swiper-pagination-main" }}
      >
        <div className="swiper-wrapper">
          {mainBannerData.map((slide, index) => {
            return (
              <SwiperSlide className="swiper-slide" key={index}>
                <div
                  style={{ backgroundImage: `url(${slide.img})` }}
                  className="w-full h-full bg-cover bg-no-repeat bg-center"
                >
                  <div className="bg-gradient-to-r from-20% from-[#171717] to-[#3B3B3B4D] to-100% w-full h-full">
                    <div className="flex flex-col items-start text-left px-4 pt-4 pb-9 mx-auto md:pt-14 md:pb-10 lg:pt-16 lg:pb-28 pl-[5%] lg:pl-0  lg:max-w-[1200px]">
                      <p className="text-color_accent_yellow md:text-2xl">
                        {slide.subHeader}
                      </p>
                      <h1 className="text-3xl text-color_light_gray mt-4 lg:mt-6 whitespace-nowrap md:text-5xl">
                        {slide.header}
                      </h1>
                      <p className="text-color_white mt-6 md:text-xl lg:mt-10">
                        {slide.text1}
                      </p>
                      <p className="text-color_white md:text-xl ">
                        {slide.text2}
                      </p>
                      <ContactUsBtn
                        text="Связаться с нами"
                        style="mt-14 lg:mt-20 lg:py-5 lg:px-16 lg:text-base hover:bg-color_dark hover:text-color_white"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
        <div className="swiper-button-prev swiper-button-prev-main"></div>
        <div className="swiper-button-next swiper-button-next-main"></div>
        <div className="relative lg:max-w-[1335px] md:max-w-[990px] top-1/2 mx-auto"></div>
        <div className="swiper-pagination-main"></div>
      </Swiper>
    </div>
  );
};

export default MainSwiper;
