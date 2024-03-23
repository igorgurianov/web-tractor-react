import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import OurTractor from "../components/OurTractor";
import bannerImg2 from "../assets/images/main-banner/banner1.jpg";
import ContactUsBtn from "../UI/ContactUsBtn";
import OrderSteps from "../components/OrderSteps";
import SectionHeader from "../components/SectionHeader";
import tractorData from "../utils/data";
import SpecTag from "../components/SpecTag";
import LinkBtn from "../UI/LinkBtn";
import Breadcrumbs from "../UI/Breadcrumbs";
import Discount from "../call-to-action/Discount";

import TractorSlider from "../vendor/TractorSlider";

import tickIcon from "../assets/icons/tick.svg";
import oneIcon from "../assets/icons/number-circle/one.svg";
import twoIcon from "../assets/icons/number-circle/two.svg";
import threeIcon from "../assets/icons/number-circle/three.svg";
import fourIcon from "../assets/icons/number-circle/four.svg";
import fiveIcon from "../assets/icons/number-circle/five.svg";
import sixIcon from "../assets/icons/number-circle/six.svg";

const TractorsCataloguePage = () => {
  const tractors = useSelector((store) => store.content.content);

  // const [tractor, setTractor] = useState("DT-75");
  // const [activeTractor, setActiveTractor] = useState(null);

  // useEffect(() => {
  //   const showData = tractors.find(
  //     (tractorItem) => tractorItem.url === tractor
  //   );
  //   setActiveTractor(showData);
  // }, [activeTractor, tractor]);

  // const renderButtonSelect = (button) => {
  //   const classes =
  //     "btn text-sm p-2 md:p-3 w-[153px] font-bold hover:bg-color_dark hover:text-color_white hover:border";
  //   if (button === tractor) {
  //     return classes + " bg-color_accent_yellow";
  //   } else {
  //     return classes + " bg-color_white border border-color_accent_yellow";
  //   }
  // };

  if (tractors) {
    return (
      <>
        <Helmet>
          <title>ВЗГМ - Купить трактор ДТ 75 | Купить трактор ХТЗ 150</title>
          <meta
            name="description"
            content="Купить гусеничный трактор ДТ 75 или обновленную модель ВЗГМ 90. Купить колесный трактор ХТЗ 150 или обновленную версию ВЗГМ 150. Цена трактора ДТ 75 - 3 100 000 рублей. Цена трактора ХТЗ 150 - 5 800 000 рублей."
          />
          <link rel="canonical" href="https://vzgm.ru/tractors/" />
        </Helmet>

        <div
          style={{ backgroundImage: `url(${bannerImg2})` }}
          className="w-full h-full bg-cover bg-no-repeat bg-center"
        >
          <div className="bg-gradient-to-r from-20% from-[#171717] to-[#3B3B3B4D] to-100% w-full h-full">
            <div className="flex flex-col items-start text-left px-4 pt-4 pb-9 mx-auto md:pt-14 md:pb-10 lg:pt-16 lg:pb-28 pl-[5%] lg:pl-0  lg:max-w-[1200px]">
              {/* <p className="text-color_accent_yellow md:text-2xl">qweqwe</p> */}
              <h1 className="text-2xl text-color_light_gray mt-4 lg:mt-6  md:text-4xl max-w-[700px]">
                Купить <br />
                гусеничный трактор ДТ-75
                <br />
                колесный ХТЗ Т-150 <br />
              </h1>
              {/* <h1 className="text-color_white text-base mt-6 md:text-xl lg:mt-10 font-normal lowercase font-primary">
                  
                </h1> */}
              <ul className="md:max-w-[500px] mt-5">
                <li>
                  <p className="text-color_white md:text-xl ">
                    Сертифицированный производитель
                  </p>
                </li>
                <li>
                  <p className="text-color_white md:text-xl ">
                    Гарантия 1 год, консультация по обслуживанию в течение всего
                    срока эксплуатации
                  </p>
                </li>
                <li>
                  <p className="text-color_white md:text-xl ">Есть лизинг</p>
                </li>
                <li>
                  <p className="text-color_white md:text-xl ">
                    Работаем с НДС и без
                  </p>
                </li>
                <li>
                  <p className="text-color_white md:text-xl ">
                    Бесплатная доставка
                  </p>
                </li>
              </ul>

              <ContactUsBtn
                text="Связаться с нами"
                style="mt-14 lg:mt-20 lg:py-5 lg:px-16 lg:text-base hover:bg-color_dark hover:text-color_white"
              />
            </div>
          </div>
        </div>
        <Section>
          <Breadcrumbs />
          <div>
            {tractors && (
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-7 mt-10">
                {tractors.map((item, index) => {
                  return (
                    <li key={index}>
                      <OurTractor data={item} className={item.url} />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </Section>

        <div className="bg-color_light_gray">
          <Section styles="py-10 md:py-14 lg:py-20">
            <div className="flex items-center flex-col md:flex-row justify-center gap-10">
              <div>
                <p>Не нашли подходящий? Свяжитесь с нами!</p>
                <p> Изготовим трактор специально под ваши задачи</p>
              </div>
              <ContactUsBtn
                text="Связаться"
                style=" hover:bg-color_dark hover:text-color_white basis-1/2 px-12 max-w-[300px]"
              />
            </div>
          </Section>
        </div>
        {/* <div className="bg-color_light_gray"> */}

        <OrderSteps />
        {/* <ContactUsBtn
              text="Заявка на капитальный ремонт"
              style="mt-6 hover:bg-color_dark hover:text-color_white"
              type="repair"
            /> */}

        {/* </div> */}
        {/* <Discount /> */}
      </>
    );
  }
};

export default TractorsCataloguePage;
