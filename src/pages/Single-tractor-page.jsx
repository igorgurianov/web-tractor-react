import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tractorData from "../utils/data";
import Section from "../components/Section";
import PromoTag from "../components/PromoTag";
import SpecTag from "../components/SpecTag";
import OurSpareParts from "../components/OurSpareParts";
import ContactUsBtn from "../UI/ContactUsBtn";
import Breadcrumbs from "../UI/Breadcrumbs";
import CallBackForm from "../call-to-action/CallBackForm";
import { Helmet } from "react-helmet";
import TractorSlider from "../components/TractorSlider";

const SingleTractorPage = () => {
  const { id } = useParams();

  const [tractor, setTractor] = useState(null);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const buttonClass = (index) => {
    const baseClass =
      "text-xs font-bold uppercase pt-3 pb-2 px-2 border-r-color_dark_gray border-r last-of-type:border-none w-full hover:bg-color_dark hover:text-color_white hover:duration-300 ";
    return (
      baseClass +
      (activeTab === index ? "bg-color_accent_yellow" : "bg-color_white")
    );
  };

  useEffect(() => {
    const activeTractor = tractorData.find(
      (singleTractor) => singleTractor.url === id
    );
    setTractor(activeTractor);
  }, [id]);

  return (
    <div>
      {tractor && (
        <div>
          {tractor.url === "VZGM-90" && (
            <Helmet>
              <title>ВЗГМ - Гусеничный трактор ВЗГМ-90</title>
              <meta
                name="description"
                content="Исследуйте гусеничный трактор ВЗГМ-90 - усовершенствованную модель легендарного трактора ДТ-75. Узнайте о его конструктивных отличиях, повышенной безопасности кабины, использовании современных материалов и применении в различных областях: сельском хозяйстве, строительстве и транспортных работах. Получите подробные характеристики, информацию о лизинге и вариантах комплектации, а также о модификациях для разных задач."
              />
            </Helmet>
          )}

          {tractor.url === "VZGM-150" && (
            <Helmet>
              <title>ВЗГМ - Колесный трактор ВЗГМ-150</title>
              <meta
                name="description"
                content="Исследуйте усовершенствованный колесный трактор ВЗГМ-150 – наследник модели ХТЗ-150. Волгоградский завод-производитель тракторов. Производим модели ВЗГМ-90 и ВЗГМ-150. Предоставляем услуги сервиса, ТО, промежуточного и капитального ремонта. Продаём запчасти, в том числе двигатель ЯМЗ-238 (236). Узнайте о производительности, характеристиках и ценах. Эффективное решение для земельной обработки, пахоты, посева урожая. Купите с выгодными скидками и подарками. Мощный двигатель, скорость до 30 км/ч. Универсальность в сельском хозяйстве."
              />
            </Helmet>
          )}
        </div>
      )}

      {tractor && (
        <Section styles="md:my-6 lg:my-8 xl:my-12">
          <Breadcrumbs />
          <div className="mt-6 lg:mt-8 grid grid-cols-2 md:grid-cols-4 md:gap-6 auto-rows-min">
            <div className="col-span-2 md:col-start-3">
              <h3 className="text-left text-xl xl:text-3xl">{tractor.name}</h3>
            </div>

            <div className="col-span-2 md:order-[-1] md:mt-0 md:row-span-3 ">
              <TractorSlider slides={tractor.gallery} className={tractor.url} />
            </div>
            {/* <img
              src={tractor.img}
              className="w-full h-full object-cover col-span-2 container mx-auto md:order-[-1] md:mt-0 md:row-span-3"
              alt={tractor.alt}
            /> */}
            <ul className="flex mt-5 md:mt-0 gap-2 flex-col md:order-0 md:justify-between lg:flex-row lg:row-start-3 lg:col-start-3 lg:col-span-2 lg:mt-0 lg:items-center">
              {tractor.promo.map((promoItem, index) => {
                return <PromoTag data={promoItem} key={index} />;
              })}
            </ul>
            <div className="mt-5 flex items-end flex-col justify-between md:mt-0">
              <div className="flex items-center justify-end">
                <h2 className="text-color_accent_red">
                  {tractor.price} &#x20bd;
                </h2>
              </div>
              <h5 className="font-normal tracking-normal text-right">
                В кредит <br /> ОТ 12 000 &#x20bd;/МЕС.
              </h5>
              <ContactUsBtn
                text="ЗАБРОНИРОВАТЬ"
                style=" hover:bg-color_dark hover:text-color_white lg:text-base md:px-4"
              />
            </div>
            <ul className=" mt-4 md:mt-0 flex gap-2 col-span-2 flex-wrap lg:col-start-3 lg:col-span-1 lg:row-start-2 md:content-start">
              {tractor.keySpecs.map((spec, index) => {
                return <SpecTag data={spec} key={index} />;
              })}
            </ul>
          </div>
          <div></div>

          <div className="flex overflow-scroll md:overflow-auto mt-6 md:mt-12 justify-between">
            <button
              className={buttonClass(0)}
              onClick={() => handleTabClick(0)}
            >
              Описание
            </button>

            <button
              className={buttonClass(1)}
              onClick={() => handleTabClick(1)}
            >
              Лизинг
            </button>

            <button
              className={buttonClass(2)}
              onClick={() => handleTabClick(2)}
            >
              Характеристики
            </button>

            <button
              className={buttonClass(3)}
              onClick={() => handleTabClick(3)}
            >
              Модификации
            </button>
          </div>
          <div className="border border-color_accent_yellow mt-2 p-2">
            {activeTab === 0 && (
              <div className="text-left">
                {tractor.description.map((item, index) => {
                  if (item.type === "paragraph") {
                    return (
                      <p className="md:text-base mb-2" key={index}>
                        {item.content}
                      </p>
                    );
                  } else if (item.type === "list") {
                    return (
                      <ul className="list-disc ml-8 mt-2 mb-6" key={index}>
                        {item.content.map((item, index) => {
                          return (
                            <li className="ml-3" key={index}>
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }
                })}
              </div>
            )}
            {activeTab === 1 && (
              <div className="text-left">
                {tractor.leasing.map((item, index) => {
                  if (item.type === "paragraph") {
                    return (
                      <h4 className="md:text-base mb-2" key={index}>
                        {item.content}
                      </h4>
                    );
                  } else if (item.type === "list") {
                    return (
                      <ul className="ml-8 mt-2 mb-6 list-decimal" key={index}>
                        {item.content.map((item, index) => {
                          return (
                            <li className="ml-3" key={index}>
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }
                })}
              </div>
            )}
            {activeTab === 2 && (
              <div className="md:columns-2">
                <table className="table-auto w-full ">
                  {/* <thead>
                      <tr>
                        <th>
                          <h5 className="text-left p-2 pt-2">Название</h5>
                        </th>
                        <th className="text-left p-2 pt-2">
                          <h5>{tractor.shortName}</h5>
                        </th>
                      </tr>
                    </thead> */}
                  <tbody className="">
                    {tractor.characteristics.map((row, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0
                            ? "bg-color_light_gray "
                            : "bg-color_white"
                        }
                      >
                        <td className="text-xs p-2 w-[70%] text-left md:text-base md:break-inside-avoid-column">
                          {row.column1}
                        </td>
                        <td className="text-xs p-2 text-left md:text-base md:break-inside-avoid-column">
                          {row.column2}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 3 && (
              <div className="text-left">
                {tractor.modifications.map((item, index) => {
                  if (item.type === "paragraph") {
                    return (
                      <p className="md:text-base mb-2" key={index}>
                        {item.content}
                      </p>
                    );
                  } else if (item.type === "list") {
                    return (
                      <ul className="list-disc ml-8 mt-2 mb-6" key={index}>
                        {item.content.map((item, index) => {
                          return (
                            <li className="ml-3" key={index}>
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </Section>
      )}
      <CallBackForm />
      <OurSpareParts />
    </div>
  );
};

export default SingleTractorPage;
