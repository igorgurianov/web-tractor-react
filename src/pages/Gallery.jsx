import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import capitalBefore from "../assets/images/compare-gallery/capitalBefore.jpeg";
import capitalAfter from "../assets/images/compare-gallery/capitalAfter.jpeg";
import Breadcrumbs from "../UI/Breadcrumbs";
import { Helmet } from "react-helmet";
import { galleryData } from "../utils/const";
import BaseSwiper from "../vendor/BaseSwiper";
import ContactUsBtn from "../UI/ContactUsBtn";

const GalleryPage = () => {
  return (
    <div>
      <Helmet>
        <title>ВЗГМ - Галерея наших работ</title>
        <meta
          name="description"
          content="Разнообразие тракторов и сельхозтехники в нашей галерее. Познакомьтесь с моделями ВЗГМ-90, ВЗГМ-150, ДТ-75, К-700 и другими популярными марками. Ознакомьтесь с нашими достижениями и опытом в производстве и ремонте техники."
        />
        <link rel="canonical" href="https://vzgm.ru/gallery" />
      </Helmet>
      <Section styles="md:my-6">
        <Breadcrumbs />
        <SectionHeader
          headerText="Галерея работ"
          subheaderText="Посмотрите галерею, чтобы узнать больше о наших тракторах"
          styles="mt-6"
        />

        {/* <BaseSwiper
          slides={galleryData}
          sliderName="Gallery-Page"
          // isClickable
          slidesPerViewMdScreen="4"
          spaceBetween="0"
        /> */}
      </Section>

      <div className="relative mb-5">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className={`swiper swiper-gallery`}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={1}
          preventClicks={true}
          preventClicksPropagation={true}
        >
          {galleryData.map((slide, index) => (
            <SwiperSlide
              //className=" "
              // className={`${
              //   isClickable ? "hover:cursor-pointer hover:shadow-lg" : ""
              // } swiper-slide`}
              key={index}
              // onClick={isClickable ? () => clickHandler(slide.imgLg) : null}
            >
              <div className="h-full w-full">
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="mx-auto object-contain h-full w-full object-center md:grayscale hover:cursor-pointer hover:grayscale-0 hover:duration-200"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div
        className={`swiper-button-prev-custom swiper-button-prev-${sliderName}`}
      ></div>
      <div
        className={`swiper-button-next-custom swiper-button-next-${sliderName}`}
        // onClick={onClick}
      ></div> */}
      </div>
      <Section styles="mt-5">
        <div className="flex flex-col justify-center items-center gap-5 mb-10">
          <div>
            <h2>Не нашли подходящий? Свяжитесь с нами!</h2>
            <p> Изготовим трактор специально под ваши задачи</p>

            <p></p>
          </div>
          <ContactUsBtn
            text="Связаться"
            style="hover:bg-color_dark hover:text-color_white basis-1/2 px-8 md:px-10 max-w-[300px] rounded-sm"
          />
        </div>
      </Section>
    </div>
  );
};

export default GalleryPage;
