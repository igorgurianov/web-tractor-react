import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import servicesData from "../utils/servicesData";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import OurSpareParts from "../components/OurSpareParts";
import Brands from "../call-to-action/Brands";
import BaseSwiper from "../vendor/BaseSwiper";
import { servicesImages } from "../utils/const";
import Breadcrumbs from "../UI/Breadcrumbs";
import { Helmet } from "react-helmet";

const SingleServicePage = () => {
  const { id } = useParams();

  const [service, setService] = useState(null);

  useEffect(() => {
    const activeProduct = servicesData.find((item) => item.name === id);
    setService(activeProduct);
  }, [id]);

  return (
    <div>
      {service && (
        <div>
          {service.url === "capital" && (
            <Helmet>
              <title>ВЗГМ - Капитальный ремонт</title>
              <meta
                name="description"
                content="Профессиональный капитальный ремонт для тракторов ВЗГМ-90, ВЗГМ-150 и других марок. Восстановление работоспособности и потребительских свойств до уровня новой машины. Разборка, замена узлов, обкатка и гарантия 1 год. Капитальный ремонт гусеничных и колесных тракторов разных комплектаций."
              />
              <link rel="canonical" href="https://vzgm.ru/services/capital" />
            </Helmet>
          )}

          {service.url === "technical" && (
            <Helmet>
              <title>ВЗГМ - Техническое обслуживание</title>
              <meta
                name="description"
                content="Качественное техническое обслуживание тракторов ВЗГМ-150 и других марок. Профессиональные виды ТО и ремонтов. Опытные специалисты, замена масла, смазка, регулировка, проверка системы. Сезонное обслуживание."
              />

              <link rel="canonical" href="https://vzgm.ru/services/technical" />
            </Helmet>
          )}
          {service.url === "profilactic" && (
            <Helmet>
              <title>ВЗГМ - Профилактическое обслуживание</title>
              <meta
                name="description"
                content="Эффективное профилактическое обслуживание для ВЗГМ-90. Регулярное ТО муфты сцепления и ходовой части. Качественная смазка, регулировка и замена изношенных деталей. Гарантия надежной работы и продления срока службы вашей техники."
              />
              <link
                rel="canonical"
                href="https://vzgm.ru/services/profilactic"
              />
            </Helmet>
          )}
        </div>
      )}
      <Section>
        {service && (
          <div>
            <Breadcrumbs />
            <SectionHeader headerText={service.header} styles="mt-6 lg:mt-8" />

            <div className="container mx-auto">
              <BaseSwiper
                slides={servicesImages}
                sliderName="capital"
                slidesPerViewMdScreen="4"
              />
            </div>

            <h4 className="text-left mt-6">{service.subheader}</h4>

            <div className="text-left pt-3 md:columns-2">
              {/* {service.text.map((item, index) => {
                return (
                  <li className="py-2" key={index}>
                    <p className="text-left">{item}</p>
                  </li>
                );
              })} */}
              {service.text.map((item) => {
                if (item.type === "paragraph") {
                  return <p className="md:text-base mb-2">{item.content}</p>;
                } else if (item.type === "subheader") {
                  return (
                    <h3 className="md:text-base mb-2 break-after-avoid">
                      {item.content}
                    </h3>
                  );
                } else if (item.type === "list") {
                  return (
                    <ul className="list-disc ml-8 mt-2 mb-6">
                      {item.content.map((item) => {
                        return <li className="ml-3">{item}</li>;
                      })}
                    </ul>
                  );
                }
              })}
            </div>
            {/* <div className="mt-4">
              <h4 className="uppercase text-right">
                стоимость
                <span className="text-color_accent_red text-xl pl-10">
                  {service.price} &#x20bd;
                </span>
              </h4>
            </div> */}
          </div>
        )}
      </Section>
      <div className="bg-color_light_gray">
        <Brands />
      </div>
      <OurSpareParts />
    </div>
  );
};

export default SingleServicePage;
