import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import capitalBefore from "../assets/images/compare-gallery/capitalBefore.jpeg";
import capitalAfter from "../assets/images/compare-gallery/capitalAfter.jpeg";
import Breadcrumbs from "../UI/Breadcrumbs";
import { Helmet } from "react-helmet";
import { galleryData } from "../utils/const";
import BaseSwiper from "../vendor/BaseSwiper";

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
        <SectionHeader headerText="Галерея работ" styles="mt-6 lg:mt-8" />
        <div className="max-h-[400px]">
          <BaseSwiper
            slides={galleryData}
            sliderName="Gallery-Page"
            isClickable
            slidesPerViewMdScreen="2"
            slideHeigth="400px"
          />
        </div>
      </Section>
    </div>
  );
};

export default GalleryPage;
