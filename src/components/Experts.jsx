// import Swiper from "./Swiper";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { sertificates } from "../utils/const";
import { experts } from "../utils/const";

const Experts = () => {
  return (
    <Section>
      <SectionHeader headerText="Наши эксперты" />
      {/* <Swiper
        data={experts}
        slidesPerViewSmallScreen="2"
        slidesPerViewMdScreen="4"
      /> */}
    </Section>
  );
};

export default Experts;
