import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import sparesData from "../utils/sparesData";
import Breadcrumbs from "../UI/Breadcrumbs";
import Brands from "../call-to-action/Brands";
import { Helmet } from "react-helmet";

const CataloguePage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState();
  const [items, setItems] = useState([]);

  const captionStyle = "p-2";

  console.log(id);

  useEffect(() => {
    setCategory(id);

    setItems(
      sparesData.filter((item) => {
        return item.category === category;
      })
    );
  }, [category]);

  return (
    <div className="mb-10">
      {category && (
        <div>
          {category === "blade" && (
            <Helmet>
              <title>ВЗГМ - Навесное оборудование</title>
              <meta
                name="description"
                content="Усовершенствуйте свою тракторную технику с нашими прямыми отвалами БНДТ-10 и БНДТ-20. Эти неповоротные бульдозерные отвалы отлично подходят для дорожно-строительных и промышленных задач, таких как перемещение грунта, планировка поверхности, засыпка ям и многие другие. Отвалы устанавливаются спереди на тракторах с гусеничным шасси и управляются из кабины с помощью гидроцилиндров. Ознакомьтесь с характеристиками и преимуществами наших прямых отвалов прямо сейчас!"
              />
            </Helmet>
          )}

          {category === "spare" && (
            <Helmet>
              <title>ВЗГМ - Запчасти</title>
              <meta
                name="description"
                content="Обеспечьте надежную работу вашей сельскохозяйственной техники с нашими запасными частями. В нашем ассортименте вы найдете реверс редуктор и трансмиссию для тракторов ВЗГМ-90 и модификаций ДТ-75. Реверс редуктор позволяет настраивать передачи переднего и заднего хода, увеличивая производительность и упрощая управление техникой. Трансмиссия обеспечивает передачу мощности и имеет гидромеханическое исполнение. Ознакомьтесь с характеристиками и преимуществами наших запасных частей прямо сейчас!"
              />
            </Helmet>
          )}
          {category === "engine" && (
            <Helmet>
              <title>ВЗГМ - Двигатели</title>
              <meta
                name="description"
                content="Обеспечьте надежное функционирование вашей сельскохозяйственной техники с нашим широким ассортиментом запасных частей. Предлагаем компоненты для дизельных двигателей, включая модели А-41 и ЯМЗ-238. Наши запчасти обеспечат эффективность и долгий срок службы вашей техники. Познакомьтесь с характеристиками и преимуществами наших запасных частей прямо сейчас!"
              />
            </Helmet>
          )}
        </div>
      )}

      <Section>
        <Breadcrumbs />
        <SectionHeader
          headerText="Наши запчасти"
          subheaderText="Мы предлагаем широкий спектр надежных запасных частей для сельскохозяйственной техники"
          styles="mt-6 lg:mt-8"
        />
        <div>
          <ul className="grid grid-cols-2 grid-rows-[repeat(4,130px)] gap-4 md:gap-6 md:grid-cols-4 md:grid-rows-[230px]">
            {items.map((item, index) => {
              if (item.position === "span-2") {
                return (
                  <li key={index} className="row-span-2 h-auto">
                    <Link to={`/eqipment/${item.category}/${item.url}`}>
                      <Card
                        img={item.img}
                        alt={item.alt}
                        caption={item.name}
                        captionStyle={captionStyle}
                        style=""
                      />
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={index} className="">
                    <Link to={`/eqipment/${item.category}/${item.url}`}>
                      <Card
                        img={item.img}
                        alt={item.alt}
                        caption={item.name}
                        captionStyle={captionStyle}
                      />
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </Section>
      <div className="bg-color_light_gray">
        <Brands />
      </div>
    </div>
  );
};

export default CataloguePage;
