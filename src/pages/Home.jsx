import React from "react";
import { Link } from "react-router-dom";
import MainSwiper from "../vendor/MainBanner";
import NewsSlider from "../vendor/newsSlider";
import BaseSwiper from "../vendor/BaseSwiper";
import SectionHeader from "../components/SectionHeader";
import OurTractor from "../components/OurTractor";
import tractorData from "../utils/data";
import Card from "../components/Card";
import Section from "../components/Section";
import OurSpareParts from "../components/OurSpareParts";
import Numbers from "../components/Numbers";
import HowWeWork from "../components/HowWeWork";
import { galleryData, whatWeDo } from "../utils/const";
import Licenses from "../components/Licenses";
import Partners from "../components/Partners";
import LinkBtn from "../UI/LinkBtn";
import CallBackForm from "../call-to-action/CallBackForm";
import { Helmet } from "react-helmet";
import AnyProblems from "../call-to-action/Any-problems";

const HomePage = () => {
  return (
    <div className="">
      <Helmet>
        <title>ВЗГМ - Купить ДТ-75</title>
        <meta
          name="description"
          content="Купить обновленную модель трактора ДТ 75 или трактора ХТЗ-150. Купить гусеничный или колесный трактор, запасные части для сельского хозяйства."
        />
        <link rel="canonical" href="https://vzgm.ru" />
      </Helmet>

      <div className="relative">
        {/* <MainBanner /> */}
        <MainSwiper sliderName="mainCarousel" />
      </div>

      <Section styles="md:my-14 lg:my-20">
        <SectionHeader
          headerText="НОВЫЕ МОДЕЛИ ТРАКТОРОВ ДТ 75 И ХТЗ 150"
          subheaderText="предлагаем классическая технику в базовом исполнении без навесного оборудования"
          styles="lg:mb-12"
        />

        <div className="grid grid-row-2 md:grid-cols-2 items-center justify-center gap-6">
          <OurTractor data={tractorData[0]} className="VZGM-90-home" />
          <OurTractor data={tractorData[1]} className="VZGM-150-home" />
        </div>
      </Section>
      <div className="bg-color_light_gray">
        <Section styles="py-10 md:py-14 lg:py-20">
          <SectionHeader
            headerText="ТРАКТОР ДТ 75 И ХТЗ 150 С ОТВАЛОМ"
            subheaderText="Оборудуем Ваш трактор поворотным, прямым или универсальным отвалом."
            styles="lg:mb-12"
          />

          <div className="grid grid-row-2 md:grid-cols-2 items-center justify-center gap-6">
            <OurTractor data={tractorData[2]} className="DT-75-home" />

            <OurTractor data={tractorData[3]} className="HTZ-150-home" />
          </div>
        </Section>
      </div>
      <Section styles="md:my-14 lg:my-20">
        <SectionHeader
          headerText="МОДИФИКАЦИИ СО СПЕЦОБОРУДОВАНИЕМ"
          subheaderText="Укомплектуем Ваш трактор специализированным оборудованием для различных работ"
          styles="lg:mb-12"
        />
        <div className="grid grid-row-2 md:grid-cols-2 items-center justify-center gap-6">
          <OurTractor data={tractorData[4]} className="VZGM-90-home-spec" />
          <OurTractor data={tractorData[5]} className="VZGM-150-home-spec" />
        </div>
      </Section>
      <div className="bg-color_light_gray">
        <Section styles="py-10 md:py-14 lg:py-20">
          <SectionHeader
            headerText="Чем мы занимаемся"
            subheaderText="У нас налажено производство собственной сельскохозяйственной техники. Мы делаем 2 вида надежных тракторов. 
Помимо этого предоставляем услуги по полному техническому обслуживанию сельскохозяйственной техники. 
А также продаем запчасти"
            styles="lg:mb-12"
          />
          <div className="flex flex-col md:flex-row md:gap-4 container mx-auto">
            {whatWeDo.map((item, index) => {
              return (
                <div className="h-full" key={index}>
                  <Link to={item.to}>
                    <Card
                      img={item.img}
                      alt={item.alt}
                      caption={item.caption}
                      captionStyle="p-2 pl-4"
                    />
                    <p className="text-left mt-4 mb-6">{item.text}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </Section>
      </div>

      <AnyProblems />
      <OurSpareParts />

      <Numbers />

      <Section styles="md:my-14 lg:my-20">
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
          to={"/gallery"}
          style="mx-auto md:mr-0 text-right max-w-[254px] mt-8 md:mt-12 hover:bg-color_dark hover:text-color_white"
        />
      </Section>
      <div className="bg-color_light_gray">
        <Section styles="py-10 md:py-14 lg:py-20 xl:py-24">
          <SectionHeader headerText="Как мы работаем" />
          <HowWeWork />
        </Section>
      </div>
      <Licenses />
      <CallBackForm />
      <Partners />

      <div className="bg-color_light_gray">
        <Section styles="py-10 md:py-14 lg:py-20 xl:py-24">
          <SectionHeader headerText="Новости и обновления" />
          <NewsSlider />
          <LinkBtn
            text="Все новости"
            to={"/news"}
            style="mx-auto md:mr-0 max-w-[254px] mt-8 md:mt-12 hover:bg-color_dark hover:text-color_white"
          />
        </Section>
      </div>
    </div>
  );
};

export default HomePage;
