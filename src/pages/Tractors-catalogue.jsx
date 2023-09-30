import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import tractorData from "../utils/data";
import SpecTag from "../components/SpecTag";
import LinkBtn from "../UI/LinkBtn";
import Breadcrumbs from "../UI/Breadcrumbs";
import Discount from "../call-to-action/Discount";

const TractorsCataloguePage = () => {
  const tractors = useSelector((store) => store.content.content);

  const [tractor, setTractor] = useState("VZGM-90");
  const [activeTractor, setActiveTractor] = useState(null);

  useEffect(() => {
    const showData = tractors.find(
      (tractorItem) => tractorItem.url === tractor
    );
    setActiveTractor(showData);
  }, [activeTractor, tractor]);

  const renderButtonSelect = (button) => {
    const classes =
      "btn text-sm p-2 md:p-3 w-[153px] font-bold hover:bg-color_dark hover:text-color_white hover:border";
    if (button === tractor) {
      return classes + " bg-color_accent_yellow";
    } else {
      return classes + " bg-color_white border border-color_accent_yellow";
    }
  };

  if (activeTractor && tractors) {
    return (
      <div>
        <Helmet>
          <title>ВЗГМ - Купить трактор ДТ 75 | Купить трактор ХТЗ 150</title>
          <meta
            name="description"
            content="Купить гусеничный трактор ДТ 75 или обновленную модель ВЗГМ 90. Купить колесный трактор ХТЗ 150 или обновленную версию ВЗГМ 150. Цена трактора ДТ 75 - 3 100 000 рублей. Цена трактора ХТЗ 150 - 5 800 000 рублей."
          />
          <link rel="canonical" href="https://vzgm.ru/tractors" />
        </Helmet>
        <Section styles="md:my-6 lg:my-8 xl:my-12 lg:mb-20">
          <Breadcrumbs />
          <SectionHeader
            headerText="Наша Техника"
            subheaderText="У нас налажено собственное производство 2 видов надежных тракторов: ВЗГМ-90 (улучшенный ДТ-75) и ВЗГМ-150 (улучшенный ХТЗ-150). А также Вы можете приобрести полностью обслуженные б/у модели классических тракторов ДТ-75 и ХТЗ-150."
            styles="mt-6 lg:mt-8"
          />
          <div className="flex gap-2 md:gap-6 justify-center">
            <button
              className={renderButtonSelect("VZGM-90")}
              onClick={() => {
                setTractor("VZGM-90");
              }}
            >
              ВЗГМ-90
            </button>
            <button
              className={renderButtonSelect("VZGM-150")}
              onClick={() => {
                setTractor("VZGM-150");
              }}
            >
              ВЗГМ-150
            </button>
            {/* <button
            className={renderButtonSelect("DT-75")}
            onClick={() => {
              setTractor("DT-75");
            }}
          >
            ДТ-75
          </button>
          <button
            className={renderButtonSelect("XTZ-150")}
            onClick={() => {
              setTractor("XTZ-150");
            }}
          >
            ХТЗ-150
          </button> */}
          </div>
          <div className="md:grid  md:grid-cols-2 md:gap-6 mt-6 md:mt-10">
            <img
              className="mt-6 mx-auto w-auto max-h-[370px] md:row-start-1 md:mt-0"
              src={activeTractor.img}
              alt={activeTractor.name}
            />
            <div>
              <h1 className="mt-5 md:mt-0 text-left md:col-start-2 md:text-xl">
                {activeTractor.name}
              </h1>
              <p className="text-left mt-4 md:col-start-2 md:mt-6 md:row-start-2">
                {activeTractor.shortDescription}
              </p>
              <ul className="flex gap-2 flex-wrap mt-6 md:col-start-2 md:row-start-3 md:mt-6 md:items-center">
                {activeTractor.keySpecs.map((spec, index) => {
                  return <SpecTag data={spec} key={index} />;
                })}
              </ul>
              <div className=" flex justify-center mx-auto md:col-start-2 md:row-start-4 md:justify-start md:mt-6 self-center">
                <LinkBtn
                  text="ПОДРОБНЕЕ О МОДЕЛИ"
                  style="w-full text-sm mt-6 py-3 px-8 lg:px-8 block md:mt-0 hover:bg-color_dark hover:text-color_white"
                  to={`/tractors/${tractor}/characteristics`}
                />
              </div>
            </div>
          </div>
        </Section>
        <Discount />
      </div>
    );
  }
};

export default TractorsCataloguePage;
