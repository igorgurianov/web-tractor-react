import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import PromoTag from "../components/PromoTag";
import SpecTag from "../components/SpecTag";
import OurSpareParts from "../components/OurSpareParts";
import ContactUsBtn from "../UI/ContactUsBtn";
import Breadcrumbs from "../UI/Breadcrumbs";
import CallBackForm from "../call-to-action/CallBackForm";
import TractorSlider from "../vendor/TractorSlider";
import Information from "../components/Information";
import Tab from "../UI/Tab";
import RecommendedItems from "../components/RecommendedItems";
import Accordion from "../components/Accordion";
import { tractorFaqList } from "../utils/faqList";

const SingleTractorPage = () => {
  const tractors = useSelector((store) => store.content.content);

  const { id, tab } = useParams();
  const [tractor, setTractor] = useState(null);

  //console.log(tractor.url);

  useEffect(() => {
    const tractor = tractors.find((singleTractor) => singleTractor.url === id);
    setTractor(tractor);
  }, [tractor, id]);

  return (
    <div>
      {tractor && tractors && (
        <div>
          <div>
            {tractor.url === "DT-75" && (
              <Helmet>
                <title>
                  Купить бульдозер ДТ-75 без навесного оборудования - ВЗГМ
                </title>
                <meta
                  name="description"
                  content="Трактор ДТ-75 без навесного оборудования предназначен для широкого спектра сельхоз работ. Может быть представлен в модификации болотник, торфяник с болотоходными гусеницами."
                />
              </Helmet>
            )}
            {tractor.url === "XTZ-150" && (
              <Helmet>
                <title>ВЗГМ - Купить гусеничный трактор ХТЗ 150</title>
                <meta
                  name="description"
                  content="Купить ХТХ 150 дешево от производителя с гарантией и доставкой. Цена трактора ХТЗ 150 - 5 800 000 руб. ВЗГМ 150 - усовершенствованная модель легендарного трактора ХТЗ 150."
                />
              </Helmet>
            )}
            {tractor.url === "DT-75-s-otvalom" && (
              <Helmet>
                <title>
                  Купить бульдозер ДТ-75 с неповоротным отвалом - ВЗГМ
                </title>
                <meta
                  name="description"
                  content="Продажа трактора, бульдозера ДТ-75 с неповоротным отвалом. Комплектуется разными двигателями мощностью до 100 л.с. Погрузка, доставка."
                />
              </Helmet>
            )}
            {tractor.url === "DT-75-s-navesnym" && (
              <Helmet>
                <title>
                  Купить бульдозер ДТ-75 с навесным оборудованием - ВЗГМ
                </title>
                <meta
                  name="description"
                  content="Продажа трактора ДТ-75 с оборудованием. Простой и доступный ДТ-75 для сельскохозяйственных работ с доставкой в РФ и СНГ."
                />
              </Helmet>
            )}
          </div>
          <div>
            <Section styles="md:my-6 lg:my-8 xl:my-12">
              <Breadcrumbs />
              <div className="mt-6 lg:mt-8 grid grid-cols-2 md:grid-cols-4 md:gap-6 auto-rows-min">
                <div className="col-span-2 md:col-start-3">
                  <h1 className="text-left text-xl xl:text-3xl">
                    {tractor.name}
                  </h1>
                </div>

                <div className="col-span-2 md:order-[-1] md:mt-0 md:row-span-3 ">
                  <TractorSlider data={tractor} className={tractor.url} />
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
              {/* <div className="flex overflow-scroll md:overflow-auto mt-6 md:mt-12 justify-between">
                <Tab to={`/tractors/${id}/description`} text="Описание" />
                <Tab to={`/tractors/${id}/leasing`} text="Лизинг" />
                <Tab
                  to={`/tractors/${id}/characteristics`}
                  text="Характеристики"
                />
                <Tab to={`/tractors/${id}/modifications`} text="Модификации" />
              </div> */}
              <div className="mt-2 p-2">
                <Information tab="description" tractor={tractor} />
                <Information tab="characteristics" tractor={tractor} />
                <Information tab="modifications" tractor={tractor} />
                <Information tab="leasing" tractor={tractor} />
              </div>
            </Section>
            <CallBackForm />
            <RecommendedItems />
            {/* <Accordion faqList={tractorFaqList} /> */}
            <OurSpareParts />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTractorPage;
