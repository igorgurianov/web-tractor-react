import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

export default function RecommendedItems() {
  const tractors = useSelector((store) => store.content.content);
  const sliderName = "recommended";

  return (
    <div className="py-5">
      <Section>
        <SectionHeader headerText="Похожие трактора" />
        <div className="">
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
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 4,
                },
              }}
              spaceBetween={24}
              preventClicks={true}
              preventClicksPropagation={true}
            >
              {tractors.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <Link to={`/tractors/${slide.url}/`}>
                    <div className="px-2 flex flex-col h-full hover:shadow-xl hover:scale-105 hover:duration-300">
                      <div className="flex flex-col pb-4">
                        <div
                          className=" bg-color_light_gray rounded-lg"
                          // style={
                          //   slideHeigth
                          //     ? { maxHeight: `${slideHeigth}` }
                          //     : { height: "100%" }
                          // }
                        >
                          <img
                            src={slide.gallery[0]}
                            alt={slide.alt}
                            className="mx-auto object-cover h-auto w-auto md:h-[240px]"
                          />
                          {/* {slide.alt} */}
                        </div>
                      </div>
                      <span className="text-xl font-bold">{slide.price}</span>
                      <p className="font-medium">{slide.name}</p>
                    </div>
                  </Link>
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
        </div>
      </Section>
    </div>
  );
}
