// import Swiper from "./Swiper";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { partners } from "../utils/const";
import BaseSwiper from "../vendor/BaseSwiper";
import ContactUsBtn from "../UI/ContactUsBtn";

const Partners = () => {
  return (
    <Section styles="md:my-14 lg:my-20">
      <SectionHeader headerText="Партнеры" />
      <BaseSwiper
        slides={partners}
        slidesPerViewSmallScreen="2"
        slidesPerViewMdScreen="4"
        sliderName="partners"
      />
      <ContactUsBtn
        text="Стать партнером"
        to={"/news"}
        style="mx-auto md:mr-0 block w-full max-w-[254px] mt-8 md:mt-12 hover:bg-color_dark hover:text-color_white"
      />
    </Section>
  );
};

export default Partners;
