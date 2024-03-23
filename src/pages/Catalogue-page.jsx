import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import sparesData from "../utils/sparesData";
import Breadcrumbs from "../UI/Breadcrumbs";
import Brands from "../call-to-action/Brands";

import ContactUsBtn from "../UI/ContactUsBtn";

const CataloguePage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState();
  const [items, setItems] = useState([]);

  const captionStyle = "p-2";

  useEffect(() => {
    setCategory(id);
    setItems(sparesData.filter((item) => item.category === category));
  }, [category]);

  return (
    <div className="mb-10">
      {category && (
        <div>
          {category === "blade" && (
            <Helmet>
              <title>Отвалы и бульдозерное оборудование ДТ-75 | ВЗГМ</title>
              <meta
                name="description"
                content="Купить отвалы и бульдозерное оборудование для трактора ДТ-75 по ценам производителя, доставка во все регионы Росиии и стран СНГ"
              />
              <link rel="canonical" href="https://vzgm.ru/eqipment/blade" />
            </Helmet>
          )}

          {category === "spare" && (
            <Helmet>
              <title>Купить запчасти на трактор ДТ-75 | ВЗГМ</title>
              <meta
                name="description"
                content="Купить ведущее и направляющее колесо, каретки, коробка передач, задний мост, гусеницы. Цены уточняйте у менеджеров, доставка по всей России. "
              />
              <link rel="canonical" href="https://vzgm.ru/eqipment/spare" />
            </Helmet>
          )}
          {category === "engine" && (
            <Helmet>
              <title>
                Купить двигатели для ДТ-75: А-41, Д-260, Д-245 | ВЗГМ
              </title>
              <meta
                name="description"
                content="Купить двигатели для трактора ДТ-75 по выгодным ценам от производителя. Двигатели А-41, Д-260, Д-245 с доставкой по всей РФ и СНГ"
              />
              <link rel="canonical" href="https://vzgm.ru/eqipment/engine" />
            </Helmet>
          )}
        </div>
      )}

      <Section styles={"md:mt-6"}>
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
                        img={item.gallery[0].img}
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
                        img={item.gallery[0].img}
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
      <Section styles="mt-10">
        <div className="flex flex-col justify-center items-center gap-5 mb-10">
          <div>
            <h2>Не нашли подходящую деталь? Свяжитесь с нами!</h2>
            <p>Подберем и доставим в кратчайшие сроки</p>

            <p></p>
          </div>
          <ContactUsBtn
            text="Связаться"
            style="hover:bg-color_dark hover:text-color_white basis-1/2 px-8 md:px-10 max-w-[300px] rounded-sm"
          />
        </div>
      </Section>
      {/* <div className="bg-color_light_gray">
        <Brands />
      </div> */}
    </div>
  );
};

export default CataloguePage;
