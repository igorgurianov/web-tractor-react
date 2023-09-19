import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import tractorData from "../utils/data";
import Section from "../components/Section";
import PromoTag from "../components/PromoTag";
import SpecTag from "../components/SpecTag";
import OurSpareParts from "../components/OurSpareParts";
import ContactUsBtn from "../UI/ContactUsBtn";
import Breadcrumbs from "../UI/Breadcrumbs";
import CallBackForm from "../call-to-action/CallBackForm";
import TractorSlider from "../components/TractorSlider";
import Information from "../components/Information";
import Tab from "../UI/Tab";
import { useSelector } from "react-redux";

const SingleTractorPage = () => {
  const tractors = useSelector((store) => store.content.content);

  const { id, tab } = useParams();
  const [tractor, setTractor] = useState(null);

  useEffect(() => {
    const tractor = tractors.find((singleTractor) => singleTractor.url === id);
    setTractor(tractor);
  }, [tractor, id]);

  return (
    <div>
      {tractor && (
        <div>
          <div>
            {tractor.url === "VZGM-90" && (
              <Helmet>
                <title>ВЗГМ - Гусеничный трактор ВЗГМ-90</title>
                <meta
                  name="description"
                  content="Исследуйте гусеничный трактор ВЗГМ-90 - усовершенствованную модель легендарного трактора ДТ-75. Узнайте о его конструктивных отличиях, повышенной безопасности кабины, использовании современных материалов и применении в различных областях: сельском хозяйстве, строительстве и транспортных работах. Получите подробные характеристики, информацию о лизинге и вариантах комплектации, а также о модификациях для разных задач."
                />
                <link rel="canonical" href="https://vzgm.ru/tractors/VZGM-90" />
              </Helmet>
            )}
            {tractor.url === "VZGM-150" && (
              <Helmet>
                <title>ВЗГМ - Колесный трактор ВЗГМ-150</title>
                <meta
                  name="description"
                  content="Исследуйте усовершенствованный колесный трактор ВЗГМ-150 – наследник модели ХТЗ-150. Волгоградский завод-производитель тракторов. Производим модели ВЗГМ-90 и ВЗГМ-150. Предоставляем услуги сервиса, ТО, промежуточного и капитального ремонта. Продаём запчасти, в том числе двигатель ЯМЗ-238 (236). Узнайте о производительности, характеристиках и ценах. Эффективное решение для земельной обработки, пахоты, посева урожая. Купите с выгодными скидками и подарками. Мощный двигатель, скорость до 30 км/ч. Универсальность в сельском хозяйстве."
                />
                <link
                  rel="canonical"
                  href="https://vzgm.ru/tractors/VZGM-150"
                />
              </Helmet>
            )}
          </div>
          <div>
            <Section styles="md:my-6 lg:my-8 xl:my-12">
              <Breadcrumbs />
              <div className="mt-6 lg:mt-8 grid grid-cols-2 md:grid-cols-4 md:gap-6 auto-rows-min">
                <div className="col-span-2 md:col-start-3">
                  <h3 className="text-left text-xl xl:text-3xl">
                    {tractor.name}
                  </h3>
                </div>

                <div className="col-span-2 md:order-[-1] md:mt-0 md:row-span-3 ">
                  <TractorSlider
                    slides={tractor.gallery}
                    className={tractor.url}
                  />
                </div>
                <ul className="flex mt-5 md:mt-0 gap-6 md:gap-2 flex-col md:order-0 md:justify-between lg:flex-row lg:row-start-3 lg:col-start-3 lg:col-span-2 lg:mt-0 lg:items-center">
                  {tractor.promo.map((promoItem, index) => {
                    return <PromoTag data={promoItem} key={index} />;
                  })}
                </ul>
                <div className="mt-5 flex gap-2 items-end flex-col justify-between md:mt-0">
                  <div className="flex flex-col justify-end">
                    <p className="text-sm text-color_dark_gray text-right">
                      Базовая комплектация:
                    </p>
                    <h2 className="text-color_accent_red text-right">
                      {tractor.price} &#x20bd;
                    </h2>
                  </div>
                  <h5 className="font-normal tracking-normal text-right">
                    В кредит <br /> ОТ 12 000 &#x20bd;/МЕС.
                  </h5>
                  <ContactUsBtn
                    text="КУПИТЬ"
                    style="w-full hover:bg-color_dark hover:text-color_white md:px-20 md:py-2"
                  />
                </div>
                <ul className=" mt-6 md:mt-0 flex gap-2 col-span-2 flex-wrap lg:col-start-3 lg:col-span-1 lg:row-start-2 md:content-start">
                  {tractor.keySpecs.map((spec, index) => {
                    return <SpecTag data={spec} key={index} />;
                  })}
                </ul>
              </div>
              <div className="flex overflow-scroll md:overflow-auto mt-6 md:mt-12 justify-between">
                <Tab to={`/tractors/${id}/description`} text="Описание" />
                <Tab to={`/tractors/${id}/leasing`} text="Лизинг" />
                <Tab
                  to={`/tractors/${id}/characteristics`}
                  text="Характеристики"
                />
                <Tab to={`/tractors/${id}/modifications`} text="Модификации" />
              </div>
              <div className="border border-color_accent_yellow mt-2 p-2">
                <Information tab={tab} tractor={tractor} />
              </div>
            </Section>
            <CallBackForm />
            <OurSpareParts />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTractorPage;
