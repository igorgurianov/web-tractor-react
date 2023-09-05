import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

import Breadcrumbs from "../UI/Breadcrumbs";
import { Link } from "react-router-dom";
import Card from "../components/Card";

import { equipmentData } from "../utils/const";
import Brands from "../call-to-action/Brands";
import { Helmet } from "react-helmet";

const EquipmentPage = () => {
  const captionStyle = "p-2";

  return (
    <div>
      <Helmet>
        <title>ВЗГМ - Оборудование</title>
        <meta
          name="description"
          content="Обеспечьте бесперебойную работу вашей сельскохозяйственной техники с нашими надежными запасными частями. Мы предлагаем широкий ассортимент компонентов для тракторов и другой сельскохозяйственной техники, чтобы помочь вам поддерживать эффективность и производительность ваших машин."
        />
      </Helmet>

      <Section styles="md:my-6 lg:my-8 xl:my-12">
        <Breadcrumbs />
        <SectionHeader
          headerText="Наше оборудование и запчасти"
          subheaderText="Мы предлагаем широкий спектр надежных запасных частей для сельскохозяйственной техники"
          styles="mt-6 lg:mt-8"
        />
        <div className="grid grid-rows-3 gap-5 md:grid-cols-3 md:grid-rows-none justify-evenly container mx-auto">
          {equipmentData.map((item, index) => {
            return (
              <Link to={item.to} key={index}>
                <div className="h-full max-h-[260px]">
                  <Card
                    img={item.img}
                    caption={item.caption}
                    alt={item.alt}
                    captionStyle="p-5"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
      <div className="bg-color_light_gray">
        <Brands />
      </div>
    </div>
  );
};

export default EquipmentPage;
