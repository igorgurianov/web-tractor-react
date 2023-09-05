import React from "react";
// import Swiper from "swiper";
// import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

import SwiperCore, { Lazy, Navigation } from "swiper";
SwiperCore.use([Navigation, Lazy]);

const BaseSwiper = ({
  slides,
  sliderName,
  slidesPerViewSmallScreen = "1",
  slidesPerViewMdScreen = "3",
  isClickable = false,
  slideHeigth,
}) => {
  // const swiperRef = useRef(null);

  const { setImgPopup, setImg } = useContext(PopupContext);

  const handleImgCLick = (img) => {
    setImgPopup(true);
    setImg(img);
  };

  // useEffect(() => {
  //   new Swiper(`.${sliderName}`, {
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },
  //     preventClicks: true,
  //     preventClicksPropagation: true,
  //     // Navigation arrows
  //     navigation: {
  //       nextEl: `.swiper-button-next-${sliderName}`,
  //       prevEl: `.swiper-button-prev-${sliderName}`,
  //     },
  //     //   // And if we need scrollbar
  //     //   scrollbar: {
  //     //     el: ".swiper-scrollbar",
  //     //   },
  //     // Configure the Swiper options here
  //     spaceBetween: 24,
  //     breakpoints: {
  //       320: {
  //         slidesPerView: slidesPerViewSmallScreen,
  //         spaceBetween: 24,
  //       },
  //       1000: {
  //         slidesPerView: slidesPerViewMdScreen,
  //       },
  //     },
  //     // ...other options
  //   });
  // }, []);

  return (
    <div className="relative mt-10 md:mt-0">
      <Swiper
        // modules={[Navigation]}
        navigation={{
          prevEl: `.swiper-button-prev-${sliderName}`,
          nextEl: `.swiper-button-next-${sliderName}`,
        }}
        className={`swiper ${sliderName}`}
        lazy={true}
        modules={[Lazy]}
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
              {isClickable ? (
                <img
                  data-src={slide.img}
                  alt={slide.alt}
                  className="mx-auto object-cover h-full w-full cursor-pointer hover:shadow-xl swiper-lazy"
                  onClick={() => handleImgCLick(slide.img)}
                  loading="lazy"
                />
              ) : (
                <img
                  data-src={slide.img}
                  alt={slide.alt}
                  loading="lazy"
                  className="mx-auto object-cover h-full w-full swiper-lazy"
                />
              )}
            </div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
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
