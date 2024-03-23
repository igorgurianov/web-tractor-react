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
import ProductSwiper from "../vendor/ProductSwiper";
import tickIcon from "../assets/icons/tick.svg";
import oneIcon from "../assets/icons/number-circle/one.svg";
import SectionHeader from "../components/SectionHeader";
import OrderSteps from "../components/OrderSteps";

const SingleTractorPage = () => {
  const tractors = useSelector((store) => store.content.content);

  const { id, tab } = useParams();
  const [tractor, setTractor] = useState(null);

  //console.log(tractor.url);

  useEffect(() => {
    const tractor = tractors.find((singleTractor) => singleTractor.url === id);
    setTractor(tractor);
    //console.log(`${tractor.pageTitle} ${tractor.pageDescription}`);
    // console.log(tractor);
  }, [tractor, id]);
  // console.log(tractor);
  return (
    <div>
      {tractor && tractors && (
        <div>
          <Helmet
            title={tractor.pageTitle}
            meta={[
              {
                name: "description",
                content: `${tractor.pageDescription}`,
              },
            ]}
            //pageDescription={tractor.pageDescription}
          />
          <div>
            <Section styles="md:my-6 lg:my-8 xl:my-12">
              <Breadcrumbs />

              <div className="mt-6 lg:mt-8 grid md:grid-rows-none md:grid-cols-[50%_50%] min-w-0 md:gap-6">
                <div className="flex flex-col min-w-0">
                  <h1 className="mt-10 md:mt-0 text-left text-2xl xl:text-3xl">
                    Купить новый {tractor.chassis} {tractor.name}
                  </h1>
                  <ul className="mt-8 md:pl-10">
                    <li className="flex gap-2">
                      <div
                        style={{ backgroundImage: `url(${tickIcon})` }}
                        className="h-8 w-8"
                      />
                      <p className=" max-w-[80%]">
                        Сертифицированный производитель
                      </p>
                    </li>
                    <li className="flex gap-2 mt-3">
                      <div
                        style={{ backgroundImage: `url(${tickIcon})` }}
                        className="h-8 w-8"
                      />
                      <p className=" max-w-[80%]">Гарантия 1 год</p>
                    </li>
                    <li className="flex gap-2 mt-3">
                      <div
                        style={{ backgroundImage: `url(${tickIcon})` }}
                        className="h-8 w-8 bg-no-repeat bg-cover"
                      />
                      <p className=" max-w-[80%]">
                        Срок эксплуатации от 10 лет
                      </p>
                    </li>
                    <li className="flex gap-2 mt-3">
                      <div
                        style={{ backgroundImage: `url(${tickIcon})` }}
                        className="h-8 w-8 bg-no-repeat bg-cover"
                      />
                      <p className=" max-w-[80%]">
                        Консультации по ТО и ремонту в течение всего срока
                        эксплуатации
                      </p>
                    </li>
                    <li className="flex gap-2 mt-3">
                      <div
                        style={{ backgroundImage: `url(${tickIcon})` }}
                        className="h-8 w-8"
                      />
                      <p className=" max-w-[80%]">
                        Доставка в любой регион от 0 руб.
                      </p>
                    </li>
                  </ul>

                  <span className="text-color_accent_red text-center text-lg font-semibold mt-8">
                    цена {tractor.price} руб.
                  </span>
                  <div></div>
                  <ContactUsBtn
                    text="КУПИТЬ"
                    style="w-full md:max-w-[300px] mx-auto hover:bg-color_dark hover:text-color_white md:px-20 md:py-2 mt-8"
                  />
                </div>

                <div className="order-[-1] md:mt-0 min-w-0">
                  <ProductSwiper data={tractor} />
                </div>
                {/* <ul className="flex mt-5 md:mt-0 gap-6 md:gap-2 flex-col md:order-0 md:justify-between lg:flex-row lg:row-start-3 lg:col-start-3 lg:col-span-2 lg:mt-0 lg:items-center">
                  {tractor.promo.map((promoItem, index) => {
                    return <PromoTag data={promoItem} key={index} />;
                  })}
                </ul> */}
                {/* <div className="mt-5 flex gap-2 flex-col justify-between md:mt-0 md:cols-start-[2]">
                  <div className="flex flex-col justify-end">
                    <p className="text-sm text-color_dark_gray text-right">
                      Базовая комплектация:
                    </p>
                    
                  </div>
                  <h5 className="font-normal tracking-normal text-right">
                    В кредит <br /> ОТ 12 000 &#x20bd;/МЕС.
                  </h5>
                </div> */}
                {/* <ul className=" mt-6 md:mt-0 flex gap-2 col-span-2 flex-wrap lg:col-start-3 lg:col-span-1 lg:row-start-2 md:content-start">
                  {tractor.keySpecs.map((spec, index) => {
                    return <SpecTag data={spec} key={index} />;
                  })}
                </ul> */}
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
                {/* <Information tab="modifications" tractor={tractor} /> */}
                {/* <Information tab="leasing" tractor={tractor} /> */}
              </div>
            </Section>
            {/* <CallBackForm /> */}
            <div className="bg-color_light_gray">
              <OrderSteps />
            </div>
            <RecommendedItems />
            {/* <Accordion faqList={tractorFaqList} /> */}
            {/* <OurSpareParts /> */}
            <div className="bg-color_light_gray">
              <Section styles="py-10 md:py-14 ">
                <SectionHeader headerText="Посмотрите наши трактора в деле" />
                {tractor.type === "dt-75" && (
                  <div className="flex flex-col md:flex-row gap-10">
                    <iframe
                      width="100%"
                      height="100%"
                      className="w-[300px] h-[200px] md:w-[560px] md:h-[315px]"
                      src="https://www.youtube.com/embed/K9ObIh_13AY?si=1VjErRyp7IrKlcgi"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ margin: "0 auto 0 auto" }}
                    ></iframe>
                    <iframe
                      width="100%"
                      height="100%"
                      className="w-[300px] h-[200px] md:w-[560px] md:h-[315px]"
                      src="https://www.youtube.com/embed/D89RaF-neIY?si=t3-gL4C4Rc-bOsPA"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ margin: "0 auto 0 auto" }}
                    ></iframe>
                  </div>
                )}
                {tractor.type === "t-150" && (
                  <iframe
                    width="100%"
                    height="100%"
                    className="w-[300px] h-[200px] md:w-[560px] md:h-[315px]"
                    src="https://www.youtube.com/embed/6qe5K5Oi04M?si=fSIJUTh-ohZxr9RR"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ margin: "0 auto 0 auto" }}
                  ></iframe>
                )}
              </Section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTractorPage;
