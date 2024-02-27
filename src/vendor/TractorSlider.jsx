import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const TractorSlider = ({ data, className, model }) => {
  return (
    <div className="">
      <Swiper
        spaceBetween={10}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        preventInteractionOnTransition={true}
        className={`${className} mySwiper2`}
      >
        {data.gallery.map((slide, index) => {
          return (
            <SwiperSlide className="" key={index}>
              <div className="my-6 md:my-10 flex items-center">
                <img
                  src={slide.img}
                  className={`mx-auto w-[90%] md:w-auto max-w-[270px] md:h-[270px] object-contain`}
                  alt="Купить трактор ДТ 75. Купить трактор ХТЗ 150"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TractorSlider;
