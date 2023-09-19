import { Link } from "react-router-dom";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { ourServices } from "../utils/const";
import Card from "../components/Card";
import OurSpareParts from "../components/OurSpareParts";
import Brands from "../call-to-action/Brands";
import Breadcrumbs from "../UI/Breadcrumbs";
import { Helmet } from "react-helmet";

const ServicesCatalogue = () => {
  return (
    <div>
      <Helmet>
        <title>ВЗГМ - Сервисы</title>
        <meta
          name="description"
          content="Мы предоставляем профессиональные услуги по ремонту тракторов всех марок. Промежуточный и капитальный ремонт, замена запчастей, обслуживание и ТО. Опытные специалисты, высокое качество обслуживания."
        />
        <link rel="canonical" href="https://vzgm.ru/services" />
      </Helmet>
      <Section styles="md:mb-14 md:mt-6 lg:mb-20">
        <Breadcrumbs />
        <SectionHeader headerText="Сервис" styles="mt-6 lg:mt-8" />
        <div className="flex md:h-[260px] flex-col gap-5 md:grid md:grid-cols-3 justify-evenly container mx-auto">
          {ourServices.map((item, index) => {
            return (
              <Link to={item.to}>
                <div className="h-full">
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
      <OurSpareParts />
    </div>
  );
};

export default ServicesCatalogue;
