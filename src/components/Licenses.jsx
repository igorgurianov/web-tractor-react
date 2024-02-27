import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { sertificates } from "../utils/const";
import BaseSwiper from "../vendor/BaseSwiper";

const Licenses = () => {
  return (
    <Section styles="md:py-10">
      <SectionHeader
        headerText="Лицензии и сертификаты"
        subheaderText="Наши трактора прошли испытания и сертифицированы на соответствие требованиям ЕАЭС"
      />
      <BaseSwiper
        slides={sertificates}
        slidesPerViewSmallScreen="2"
        slidesPerViewMdScreen="4"
        sliderName="sertificates"
        isClickable={true}
      />
    </Section>
  );
};

export default Licenses;
