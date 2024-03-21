import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { openLicencePopup } from "../services/actions/license";
import { useDispatch } from "react-redux";
import { Navigation } from "swiper";

const BaseSwiper = ({
  slides,
  sliderName,
  slidesPerViewSmallScreen = "1",
  slidesPerViewMdScreen = "3",
  slideHeigth,
  isClickable = false,
}) => {
  const dispatch = useDispatch();

  const clickHandler = (content) => {
    dispatch(openLicencePopup(content));
  };

  const onClick = () => {
    console.log("click");
  };

  return (
    <div className="relative mt-10 md:mt-0">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.swiper-button-prev-${sliderName}`,
          nextEl: `.swiper-button-next-${sliderName}`,
        }}
        // slidesPerGroup={1}
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
          <SwiperSlide
            //className=" "
            className={`${
              isClickable ? "hover:cursor-pointer hover:shadow-lg" : ""
            } swiper-slide`}
            key={index}
            onClick={isClickable ? () => clickHandler(slide.imgLg) : null}
          >
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
                className="mx-auto object-contain h-full w-full object-center"
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
        // onClick={onClick}
      ></div>
    </div>
  );
};

export default BaseSwiper;
