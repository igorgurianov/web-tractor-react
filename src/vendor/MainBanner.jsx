import React from "react";
//import { Swiper, SwiperSlide } from "swiper/react";

import ContactUsBtn from "../UI/ContactUsBtn";
import bannerImg1 from "../assets/images/main-banner/banner2.jpg";
import bannerImg2 from "../assets/images/main-banner/banner1.jpg";
import bannerImg3 from "../assets/images/main-banner/dtbanner.webp";
import twotractors from "../assets/images/main-banner/banner2tractors.jpg";

// import { register } from "swiper/element/bundle";
// import rightArrow from "../assets/icons/right-arrow-white.svg";
// import leftArrow from "../assets/icons/left-arrow-white.svg";

// Old Import
// import React, { useEffect, useRef } from "react";
// import Swiper from "swiper";

//New import

// import Swiper from "swiper";

// import "swiper/css";

// раскоментить если в проде не заработает
// import SwiperCore, { Navigation } from "swiper";
// SwiperCore.use([Navigation]);

const slide = {
  header: "Надежные трактора",
  subHeader: "для широкого спектра работ",
  text1: "купить тракторы ДТ 75 и ХТЗ Т-150 ",
  text2: " с оборудованием и гарантией от производителя",
  img: twotractors,
};
// {
//   header: "доставка",
//   subHeader: "в помощь покупателю",
//   text1: "помощь в погрузке",
//   text2: " и материалы для первого  ТО",
//   img: bannerImg2,
// },

const MainSwiper = ({ sliderName }) => {
  return (
    <div className="relative h-[300px] md:h-[500px]">
      <div
        style={{ backgroundImage: `url(${slide.img})` }}
        className="w-full h-full bg-cover bg-no-repeat bg-left md:bg-center brightness-75 contrast-75 md:brightness-90 md:contrast-75"
      ></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto h-full">
        <div
          className="flex flex-col h-full items-left md:items-center px-4 pt-4 pb-9 mx-auto md:pt-14 md:pb-10 lg:pt-16 lg:pb-28 md:max-w-[600px] 
        "
        >
          <p className="text-color_accent_yellow md:text-2xl">
            {slide.subHeader}
          </p>
          <h2 className="text-2xl text-color_light_gray mt-4 lg:mt-6 whitespace-nowrap md:text-5xl">
            {slide.header}
          </h2>
          <h1 className="text-color_white text-base mt-6 md:text-xl lg:mt-10 lowercase ">
            {slide.text1}
          </h1>
          <p className="text-color_white md:text-xl text-left font-semibold">
            {slide.text2}
          </p>

          <ContactUsBtn
            text="Связаться с нами"
            style="mt-6 lg:mt-20 md:py-2 lg:text-base hover:bg-color_dark hover:text-color_white max-w-[250px] md:max-w-[350px] self-center px-6 md:px-8 "
          />
        </div>
      </div>
    </div>

    // <div>
    //   <Swiper
    //     className={`swiper ${sliderName}`}
    //     slidesPerView={1}
    //     navigation={{
    //       prevEl: ".swiper-button-prev",
    //       nextEl: ".swiper-button-next",
    //     }}
    //     // pagination={{ el: ".swiper-pagination-main" }}
    //   >
    //     <div className="swiper-wrapper">
    //       {mainBannerData.map((slide, index) => {
    //         return (
    //           <SwiperSlide className="swiper-slide" key={index}>

    //           </SwiperSlide>
    //         );
    //       })}
    //     </div>
    //     <div className="swiper-button-prev swiper-button-prev-main"></div>
    //     <div className="swiper-button-next swiper-button-next-main"></div>
    //     <div className="relative lg:max-w-[1335px] md:max-w-[990px] top-1/2 mx-auto"></div>
    //     {/* <div className="swiper-pagination-main"></div> */}
    //   </Swiper>
    // </div>
  );
};

export default MainSwiper;
