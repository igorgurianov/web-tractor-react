import React from "react";
import MainSwiper from "../vendor/MainBanner";
import SectionHeader from "../components/SectionHeader";
import OurTractor from "../components/OurTractor";
import tractorData from "../utils/data";
import Section from "../components/Section";
import Licenses from "../components/Licenses";
import LinkBtn from "../UI/LinkBtn";
import { Helmet } from "react-helmet";
import tickIcon from "../assets/icons/tick.svg";
import OrderSteps from "../components/OrderSteps";
import ContactUsBtn from "../UI/ContactUsBtn";

import sinceIcon from "../assets/icons/home/since2017.svg";
import sertifiedIcon from "../assets/icons/home/sertified.svg";
import modificationIcon from "../assets/icons/home/modifications.svg";
import warrantyIcon from "../assets/icons/home/warranty.svg";
import deliveryIcon from "../assets/icons/home/delivery.svg";
import markupIcon from "../assets/icons/home/markup.svg";

import transportIcon from "../assets/icons/home/delivery/transport.svg";
import priceIcon from "../assets/icons/home/delivery/price.svg";
import paymentIcon from "../assets/icons/home/delivery/payment.svg";
import addressIcon from "../assets/icons/home/delivery/address.svg";

import leasingIcon from "../assets/icons/home/financial-terms/leasing.svg";
import vatIcon from "../assets/icons/home/financial-terms/vat.svg";
import novatIcon from "../assets/icons/home/financial-terms/no-vat.svg";
import discountIcon from "../assets/icons/home/financial-terms/discount.svg";

const HomePage = () => {
  return (
    <div className="">
      <Helmet>
        <title>Купить трактор ДТ-75. Новый бульдозер ДТ-75, цена.</title>
        <meta
          name="description"
          content="Производство гусеничных тракторов Дт-75, продажа бульдозеров Дт-75, навесного оборудования и запчастей без посредников от российского производителя «ВЗГМ», унаследовавшие лучшие качества ДТ-75.          "
        />
        <link rel="canonical" href="https://vzgm.ru" />
      </Helmet>

      <div className="relative">
        <MainSwiper sliderName="mainCarousel" />
      </div>
      <div className="hidden md:block">
        <Section styles="">
          <SectionHeader
            headerText="Почему мы"
            subheaderText=" Завод ВЗГМ на рынке с 2017 года. Наша специализация - производство тракторов ДТ-75 и ХТЗ Т-150. Отличительные особенности наших тракторов - их исключительная надежность и неприхотливость, сочетающаяся с комфортом эксплуатации и высокой ремонтопригодностью."
            styles="lg:mb-12"
          />

          <ul className="grid md:grid-cols-3 md:mt-8 gap-4 md:px-16 md:gap-x-20">
            <li className="flex flex-col items-center ">
              <div
                style={{ backgroundImage: `url(${sinceIcon})` }}
                className="h-24 w-24"
              />
              <p className="text-center mt-5">
                Производим тракторы с 2017 года, знаем о них все
              </p>
            </li>
            <li className="flex flex-col items-center">
              <div
                style={{ backgroundImage: `url(${sertifiedIcon})` }}
                className="h-24 w-24"
              />
              <p className="text-center mt-5">
                Сертифицированный производитель
              </p>
            </li>
            <li className="flex flex-col items-center">
              <div
                style={{ backgroundImage: `url(${modificationIcon})` }}
                className="h-24 w-24"
              />
              <p className="text-center mt-5">
                Любые стандартные и нестандартные модицификации
              </p>
            </li>
            <li className="flex flex-col items-center">
              <div
                style={{ backgroundImage: `url(${warrantyIcon})` }}
                className="h-24 w-24"
              />
              <p className="text-center mt-5">
                Заводская гарантия 1 год, срок эксплуатации от 10 лет
              </p>
            </li>
            <li className="flex flex-col items-center">
              <div
                style={{ backgroundImage: `url(${deliveryIcon})` }}
                className="h-24 w-24"
              />
              <p className="text-center mt-5">
                Доставка в любой регион от 0 руб.
              </p>
            </li>
            <li className="flex flex-col items-center">
              <div
                style={{ backgroundImage: `url(${markupIcon})` }}
                className="h-24 w-24"
              />
              <p className="text-center mt-5">Без наценок посредников</p>
            </li>
          </ul>
        </Section>
      </div>

      <Section styles="md:my-14 ">
        <SectionHeader
          headerText="Трактор ДТ-75"
          subheaderText="предлагаем классическая технику в различной комплектации"
          styles="lg:mb-10"
        />

        <ul className="md:grid md:grid-cols-3 md:gap-7 md:mt-10">
          {tractorData &&
            tractorData
              .filter(
                (item) => item.type === "dt-75" && item.onMainPage === true
              )

              .map((item, index) => {
                return (
                  <li key={index}>
                    <OurTractor data={item} className={item.url} />
                  </li>
                );
              })}
        </ul>
        <div className="flex justify-center mt-8">
          <LinkBtn
            text="Все модификации &#8594;"
            style="md:px-32 px-8 hover:bg-color_dark hover:text-color_white rounded-md"
            to="/tractors/catalog-dt-75/"
          />
        </div>

        {/* <OurTractor data={tractorData[0]} className="VZGM-90-home" />
          <OurTractor data={tractorData[1]} className="VZGM-150-home" /> */}
      </Section>
      {/* <Discount /> */}

      <Section styles="py-0 md:py-2 md:mt-2 lg:pb-8">
        <SectionHeader
          headerText="Купить трактор ХТЗ-150"
          subheaderText="Оборудуем Ваш трактор поворотным, прямым или универсальным отвалом."
          styles="lg:mb-12"
        />
        <ul className="md:grid md:grid-cols-3 md:gap-7 md:mt-10">
          {tractorData &&
            tractorData
              .filter((item) => item.type === "t-150")
              .map((item, index) => {
                return (
                  <li key={index}>
                    <OurTractor data={item} className={item.url} />
                  </li>
                );
              })}
        </ul>
        <div className="flex justify-center mt-8">
          <LinkBtn
            text="Все модификации &#8594;"
            style="md:px-32 px-8 hover:bg-color_dark hover:text-color_white rounded-md"
            to="/tractors/catalog-htz-t150/"
          />
        </div>

        {/* <div className="grid grid-row-2 md:grid-cols-2 items-center justify-center gap-6">
            <OurTractor data={tractorData[2]} className="DT-75-home" />

            <OurTractor data={tractorData[3]} className="HTZ-150-home" />
          </div> */}
      </Section>

      {/* <Section styles="md:my-14 lg:my-20">
        <SectionHeader
          headerText="МОДИФИКАЦИИ СО СПЕЦОБОРУДОВАНИЕМ"
          subheaderText="Укомплектуем Ваш трактор специализированным оборудованием для различных работ"
          styles="lg:mb-12"
        />
        <div className="grid grid-row-2 md:grid-cols-2 items-center justify-center gap-6">
          <OurTractor data={tractorData[4]} className="VZGM-90-home-spec" />
          <OurTractor data={tractorData[5]} className="VZGM-150-home-spec" />
        </div>
      </Section> */}

      <div className="bg-color_light_gray">
        <OrderSteps />
      </div>
      <Licenses />

      {/* <AnyProblems /> */}
      {/* <OurSpareParts /> */}
      {/* <Numbers /> */}
      {/* <HowWeWork /> */}
      {/* <Section styles="md:my-14 lg:my-20">
        <SectionHeader headerText="Галерея наших работ" styles="lg:mb-12" />
        <div className="container mx-auto">
          <BaseSwiper
            slides={galleryData}
            sliderName="gallery"
            slideHeigth="170px"
          />
        </div>
        <LinkBtn
          text="Галерея"
          to={"/gallery/"}
          style="mx-auto md:mr-0 text-right max-w-[254px] mt-8 md:mt-12 hover:bg-color_dark hover:text-color_white"
        />
      </Section> */}

      <div className="bg-color_light_gray">
        <Section styles="py-10">
          <SectionHeader
            headerText="Доставка в любой регион РФ"
            subheaderText="Защитим, упакуем, погрузим. Срок от трех дней."
          />
          <ul className="mt:10 md:mt-16 grid grid-flow-row md:grid-flow-col gap-4 md:gap-8 md:px-10">
            <li className="flex flex-col items-center">
              <div
                style={{ backgroundImage: `url(${transportIcon})` }}
                className="h-16 w-16"
              />
              <span className="mt-5 font-semibold">Способ</span>
              <p className="text-center mt-1">
                Транспортной компанией в любой регион РФ
              </p>
            </li>
            <li className="flex flex-col items-center">
              <div
                style={{ backgroundImage: `url(${priceIcon})` }}
                className="h-16 w-16"
              />
              <span className="mt-5 font-semibold">Цена</span>
              <p className="text-center mt-1">
                До 500км бесплатно, далее по тарифам ТК
              </p>
            </li>
            <li className="flex flex-col items-center">
              <div
                style={{ backgroundImage: `url(${paymentIcon})` }}
                className="h-16 w-16"
              />
              <span className="mt-5 font-semibold">Оплата</span>
              <p className="text-center mt-1">По счету, картой или наличными</p>
            </li>
            <li className="flex flex-col items-center">
              <div
                style={{ backgroundImage: `url(${addressIcon})` }}
                className="h-16 w-16"
              />
              <span className="mt-5 font-semibold">Адреса отправки</span>
              <p className="text-center mt-1">
                Волгоград и Раменское Московской обл.
              </p>
            </li>
          </ul>
        </Section>
      </div>
      <Section styles="py-10">
        <SectionHeader
          headerText="Тендеры и госзакупки (44-ФЗ и 223-ФЗ)"
          subheaderText="Регулярно принимаем участие в закупках для государственных и коммерческих организаций"
          styles=""
        />

        <ul className="mt-6 md:mt-10 flex flex-col gap-3">
          <li className="grid grid-cols-[24px_1fr] gap-3">
            <div
              className="block min-w-min w-6 h-6 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${tickIcon})` }}
            ></div>
            <p className="block">Более 50 исполненных договоров</p>
          </li>
          <li className="grid grid-cols-[24px_1fr] gap-3">
            <span
              className="block w-6 h-6 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${tickIcon})` }}
            ></span>
            <p className="">
              Опыт изготовления больших партий без просрочек и брака
            </p>
          </li>
          <li className="grid grid-cols-[24px_1fr] gap-3">
            <span
              className="block w-6 h-6 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${tickIcon})` }}
            ></span>
            <p className="">Производим в РФ из отечественных комплектующих</p>
          </li>
          <li className="grid grid-cols-[24px_1fr] gap-3">
            <span
              className="block w-6 h-6 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${tickIcon})` }}
            ></span>
            <p className="">Предоставляем полный пакет документов</p>
          </li>
        </ul>
      </Section>
      <div className="bg-color_light_gray">
        <Section styles="py-10">
          <SectionHeader
            headerText="Финансовые условия"
            subheaderText="Мы всегда идем навстречу нашим клиентам и подбираем самые выгодные словия для кадого"
          />
          <ul className="mt-10 md:mt-16 grid grid-flow-row md:grid-flow-col gap-4 md:px-10 md:justify-around">
            <li className="flex flex-col items-center justify-center bg-color_white rounded-full md:w-[220px] md:h-[220px] pb-2">
              <div
                style={{ backgroundImage: `url(${leasingIcon})` }}
                className="h-24 w-24"
              />
              {/* <span className="mt-5 font-semibold">Лизинг</span> */}
              <p className="text-center mt-1">Лизинг</p>
            </li>
            <li className="flex flex-col items-center justify-center bg-color_white rounded-full md:w-[220px] md:h-[220px] pb-2">
              <div
                style={{ backgroundImage: `url(${vatIcon})` }}
                className="h-24 w-24"
              />
              {/* <span className="mt-5 font-semibold">С НДС</span> */}
              <p className="text-center mt-1">Для организаций</p>
            </li>
            <li className="flex flex-col items-center justify-center bg-color_white rounded-full md:w-[220px] md:h-[220px] pb-2">
              <div
                style={{ backgroundImage: `url(${novatIcon})` }}
                className="h-24 w-24"
              />
              {/* <span className="mt-5 font-semibold">Без НДС</span> */}
              <p className="text-center mt-1">Для физлиц</p>
            </li>
            <li className="flex flex-col items-center justify-center bg-color_white rounded-full md:w-[220px] md:h-[220px] pb-2">
              <div
                style={{ backgroundImage: `url(${discountIcon})` }}
                className="h-24 w-24"
              />
              {/* <span className="mt-5 font-semibold">Персональные скидки</span> */}
              <p className="text-center mt-1">Cкидки</p>
            </li>
          </ul>
          <div>
            <ContactUsBtn
              text="Свяжитесь с нами"
              style="hover:bg-color_dark hover:text-color_white px-6 mt-10 md:mt-20 mx-auto block rounded-md"
            />
          </div>
        </Section>
      </div>

      {/* <CallBackForm /> */}
      {/* <Partners /> */}

      {/* <div className="bg-color_light_gray">
        <Section styles="py-10 md:py-14 lg:py-20 xl:py-24">
          <SectionHeader headerText="Новости и обновления" />
          <NewsSlider />
          <LinkBtn
            text="Все новости"
            to={"/news/"}
            style="mx-auto md:mr-0 max-w-[254px] mt-8 md:mt-12 hover:bg-color_dark hover:text-color_white"
          />
        </Section>
      </div> */}
    </div>
  );
};

export default HomePage;
