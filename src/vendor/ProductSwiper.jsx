import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper";
// import { FreeMode } from "swiper/modules/free-mode/free-mode";
// import { Navigation } from "swiper/modules/navigation";
// import { Thumbs } from "swiper/modules/thumbs";

//Navigation, Thumbs

function ProductSwiper({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#FEC513",
          "--swiper-pagination-color": "#000",
        }}
        //loop={true}
        preventInteractionOnTransition={true}
        spaceBetween={10}
        navigation={true}
        zoom={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Zoom]}
        className={`${data.url} mySwiper2`}
        preventClicks={true}
        preventClicksPropagation={true}
      >
        {data.gallery.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="mx-auto object-cover max-w-[90%] md:max-w-none md:max-h-none md:w-[430px] md:h-100%"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="mt-10">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`${data.url} mySwiper`}
        >
          {data.gallery.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{ height: "auto" }}
                className="border border-color_dark_gray bg-color_light_gray"
              >
                <img
                  src={item.img}
                  alt=""
                  className="block cursor-pointer h-full w-full object-cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default ProductSwiper;
