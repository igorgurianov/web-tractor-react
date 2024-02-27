import React from "react";
import { useSelector } from "react-redux";

import { Helmet } from "react-helmet";
import ContactUsBtn from "../../UI/ContactUsBtn";
import Section from "../../components/Section";
import OurTractor from "../../components/OurTractor";
import OrderSteps from "../../components/OrderSteps";
import banner from "../../assets/images/main-banner/dt-catalog-banner.webp";
import Breadcrumbs from "../../UI/Breadcrumbs";

function CatalogDt75() {
  const tractors = useSelector((store) => store.content.content);
  if (tractors) {
    return (
      <>
        <Helmet>
          <title>ВЗГМ - Купить трактор ДТ 75</title>
          <meta
            name="description"
            content="Купить гусеничный трактор ДТ 75 или обновленную модель ВЗГМ 90. Купить колесный трактор ХТЗ 150 или обновленную версию ВЗГМ 150. Цена трактора ДТ 75 - 3 100 000 рублей. Цена трактора ХТЗ 150 - 5 800 000 рублей."
          />
          <link rel="canonical" href="https://vzgm.ru/tractors/" />
        </Helmet>

        {/* <div
          style={{ backgroundImage: `url(${banner})` }}
          className="w-full h-full bg-cover bg-no-repeat bg-center brightness-90 contrast-75"
        >
          <div className=" w-full h-full">
            <div className="flex flex-col items-start text-left px-4 pt-4 pb-9 mx-auto md:pt-14 md:pb-10 lg:pt-16 lg:pb-28 pl-[5%] lg:pl-0  lg:max-w-[1200px]">
              <h1 className="text-2xl text-color_light_gray mt-4 lg:mt-6  md:text-4xl max-w-[700px]">
                Купить трактор ДТ-75 <br />
                от производителя
              </h1>
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
        </div> */}

        <div className="relative h-[310px] md:h-[500px]">
          <div
            style={{ backgroundImage: `url(${banner})` }}
            className="w-full h-full bg-cover bg-no-repeat bg-right md:bg-center brightness-75 contrast-75"
          ></div>
          <div className="absolute top-0 bottom-0 left-0 right-0 m-auto h-full md:max-w-[1152px]">
            <div
              className="flex flex-col h-full gap-5 px-4 pt-4 pb-4 md:pt-14 md:pb-10 lg:pt-16 lg:pb-28  
        "
            >
              <h1 className="text-2xl text-color_light_gray mt-4 lg:mt-6  md:text-4xl max-w-[700px]">
                Купить трактор ХТЗ Т-150 <br />
                от производителя
              </h1>
              <ul className="md:max-w-[600px] mt-5 text-lg">
                <li>
                  <p className="text-color_white text-lg md:text-xl  ">
                    &#8226; Сертифицированный производитель
                  </p>
                </li>
                <li>
                  <p className="text-color_white text-lg md:text-xl  ">
                    &#8226; Гарантия 1 год <br />
                  </p>
                </li>
                <li>
                  <p className="text-color_white text-lg md:text-xl  ">
                    &#8226; Консультация онлайн
                  </p>
                </li>
                <li>
                  <p className="text-color_white text-lg md:text-xl  ">
                    &#8226; Есть лизинг
                  </p>
                </li>
                <li>
                  <p className="text-color_white text-lg md:text-xl  ">
                    &#8226; Работаем с НДС и без
                  </p>
                </li>
                <li>
                  <p className="text-color_white text-lg md:text-xl  ">
                    &#8226; Бесплатная доставка
                  </p>
                </li>
              </ul>

              <ContactUsBtn
                text="Связаться с нами"
                style="text-sm p-3 lg:px-7 text-color_xl_dark_gray hover:bg-color_dark hover:text-color_white max-w-[250px]"
              />
            </div>
          </div>
        </div>

        <Section>
          <div>
            <Breadcrumbs />
            {tractors && (
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-7 mt-10">
                {tractors
                  .filter((item) => item.type === "dt-75")
                  .map((item, index) => {
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
          <Section styles="py-10 md:py-10">
            <div className="flex flex-col md:flex-row justify-center gap-10">
              <div>
                <p>Не нашли подходящий? Свяжитесь с нами!</p>
                <p> Изготовим трактор специально под ваши задачи</p>
              </div>
              <ContactUsBtn
                text="Связаться"
                style=" hover:bg-color_dark hover:text-color_white basis-1/2 px-1 md:px-2 max-w-[300px]"
              />
            </div>
          </Section>
        </div>
        <OrderSteps />
      </>
    );
  }
}

export default CatalogDt75;
