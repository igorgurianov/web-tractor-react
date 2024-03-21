import { Link } from "react-router-dom";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

import OurSpareParts from "../components/OurSpareParts";
import Brands from "../call-to-action/Brands";
import Breadcrumbs from "../UI/Breadcrumbs";
import { Helmet } from "react-helmet";
import InteractivePicRepair from "../components/InteractivePicRepair";
import { useEffect, useState } from "react";
import { priceListRepair, repairCalculator } from "../utils/const";
import {
  ADD_REPAIR_SERVICE,
  REMOVE_REPAIR_SERVICES,
} from "../services/actions/repairs";
import { useDispatch, useSelector } from "react-redux";

import { numberFormatConverter } from "../utils/numberFormatConverter";
import topBannerTablet from "../assets/images/services/768х350_0.jpg";
import topBannerMobile from "../assets/images/services/320х350_0.jpg";
import tickIcon from "../assets/icons/tick.svg";
import tickIconNoframe from "../assets/icons/tickNoFrame.svg";
import ContactUsBtn from "../UI/ContactUsBtn";
import { FiFileText } from "react-icons/fi";
import photoIcon from "../assets/icons/photo.svg";
import guaranteeIcon from "../assets/icons/guarantee.svg";
import { MdOutlineAddAPhoto } from "react-icons/md";
import tractorAsNewIcon from "../assets/icons/asNew.svg";
import image from "../assets/images/gallery/ImageGallery1.png";
import whoNeedsIcon1 from "../assets/icons/tractorIcons/icon1.svg";
import whoNeedsIcon2 from "../assets/icons/tractorIcons/icon2.svg";
import whoNeedsIcon3 from "../assets/icons/tractorIcons/icon3.svg";
import whoNeedsIcon4 from "../assets/icons/tractorIcons/icon4.svg";
import testImage1 from "../assets/images/services/gallery/capital-3.jpg";
import testImage2 from "../assets/images/services/gallery/capital-6.jpg";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

import deliveryTimeIcon from "../assets/icons/deliveryTime.svg";
import wrenchTimeIcon from "../assets/icons/wrenchTime.svg";
import engineBefore from "../assets/images/services/comparisonGallery/engine/photo_2023-11-25 20.42-3-2.jpg";
import engineAfter from "../assets/images/services/comparisonGallery/engine/photo_2023-11-25 21.03-2.jpg";

import tracksBefore from "../assets/images/services/comparisonGallery/tracks/photo_2023-11-25 20.42-2-2.jpg";
import tracksAfter from "../assets/images/services/comparisonGallery/tracks/photo_2023-11-25 20.42-4.jpg";

import wholeAfter from "../assets/images/services/comparisonGallery/whole/before.jpg";
import wholeBefore from "../assets/images/services/comparisonGallery/whole/after.jpg";

import newDTtractor from "../assets/images/services/photo-dt-75-8.jpg";
import dt75modernization from "../assets/images/services/dt75modernization-2.png";

import ServiceProcess from "../components/ServiceProcess";
import HowWeDoRepair from "../components/HowWeDoRepair";

import { RepairData } from "../utils/totalCounter";

const ServicesCatalogue = () => {
  const dispatch = useDispatch();

  const { services, subTotal, discount, total } = useSelector(
    (store) => store.repair
  );

  const checkboxHandler = (e) => {
    const serviceItem = priceListRepair.find((item) => item.id === e.target.id);

    if (e.target.checked) {
      dispatch({ type: ADD_REPAIR_SERVICE, payload: serviceItem });
      //console.log(`добавлен ${e.target.id}`);
    } else {
      dispatch({ type: REMOVE_REPAIR_SERVICES, payload: serviceItem });
      //console.log(`удален ${e.target.id}`);
    }
    //totalCounter(e.target)
  };

  return (
    <div>
      <Helmet>
        <title>Капитальный ремонт трактора ДТ-75, ХТЗ Т-150</title>
        <meta
          name="description"
          content="Мы предоставляем профессиональные услуги по ремонту тракторов всех марок. Промежуточный и капитальный ремонт, замена запчастей, обслуживание и ТО. Опытные специалисты, высокое качество обслуживания."
        />
        <link rel="canonical" href="https://vzgm.ru/services" />
      </Helmet>
      <Section styles=" md:mt-6 ">
        <Breadcrumbs />
      </Section>

      <div
        className=" w-full md:max-w-[1152px] mx-auto h-[470px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${topBannerTablet})` }}
      >
        <div className="p-4 md:p-10">
          <h1 className="text-color_light_gray text-2xl md:text-3xl">
            Капитальный ремонт <br /> ДТ-75 и Т-150
          </h1>
          <ul className="flex flex-col gap-4 mt-12 md:mt-5">
            <li className="flex gap-2">
              <span
                className="block w-8 h-8 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${tickIcon})` }}
              ></span>
              <div>
                <h2 className=" text-color_accent_yellow text-base md:text-xl">
                  Гарантированный ремонт
                </h2>
                <h3 className="text-color_light_gray md:text-xl">
                  от сертифицированного производителя
                </h3>
              </div>
            </li>
            <li className="flex gap-2">
              <span
                className="block w-8 h-8 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${tickIcon})` }}
              ></span>
              <div>
                <h2 className=" text-color_accent_yellow text-base md:text-xl">
                  Скидка на капитальный ремонт:
                </h2>
                <h3 className="text-color_light_gray md:text-xl">
                  <span className="line-through">1 800 000 руб</span> 1 600 000
                  руб
                </h3>
              </div>
            </li>
            <li className="flex gap-2">
              <span
                className="block w-8 h-8 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${tickIcon})` }}
              ></span>
              <div>
                <h2 className="text-color_accent_yellow text-base md:text-xl">
                  Регионы:
                </h2>
                <h3 className="text-color_light_gray md:text-xl">
                  Поможем с доставкой из любого региона
                </h3>
              </div>
            </li>
          </ul>
          <ContactUsBtn
            text="получить предложение"
            style="mt-10 hover:bg-color_dark hover:text-color_white"
            type="repair"
          />
        </div>
      </div>

      <Section styles="md:mb-14 md:mt-6 lg:mb-20">
        <SectionHeader
          headerText="Проводимые работы и цены"
          styles="mt-6 lg:mt-8"
        />

        <div className="mt-8">
          <h2 className="text-lg my-3 border-b-2 border-color_accent_yellow">
            Описание этапа технических работ
          </h2>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-4">
            <table className="table-auto md:w-2/3 ">
              <tbody className="">
                {repairCalculator.map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-color_light_gray "
                        : "bg-color_white"
                    }
                  >
                    <td className="text-s p-2 w-[70%] text- md:text-base ">
                      {row.description}
                    </td>
                    {/* <td className="text-s p-2 text-left md:text-base min-w-[100px]">
                      {numberFormatConverter(row.price)}
                    </td> */}
                    <td className="text-s text-center flex justify-center md:text-base ">
                      {/* <span
                        className="block w-8 h-8 bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url(${tickIcon})` }}
                      ></span> */}
                      <span
                        className="block w-6 h-6 bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url(${tickIconNoframe})` }}
                      ></span>
                      {/* <input
                        className="w-5 h-5 p-2 hover:cursor-pointer"
                        type="checkbox"
                        name=""
                        id={row.id}
                        defaultChecked
                        onChange={(e) => checkboxHandler(e)}
                      /> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=" md:w-1/3  shadow-2xl p-4">
              {/* TOTAL SECTION */}
              <div className="flex gap-4">
                <div>
                  <span className="font-bold text-base md:text-3xl text-color_accent_green">
                    {/* {numberFormatConverter(total)} */}1 600 000
                    <span className="text-sm md:text-xl">&#8381;</span>
                  </span>
                </div>
                {discount ? (
                  <div className="flex gap-4">
                    <div className="flex items-center bg-color_accent_red rounded-lg px-1">
                      <span className="text-color_white font-medium text-xs">
                        {/* - {numberFormatConverter(discount)}  */}- 200 000
                        &#8381;
                      </span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="font-bold text-base text-color_dark_gray line-through">
                        {/* {numberFormatConverter(subTotal)} */}1 800 000
                      </span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div>
                <div className="flex gap-2 mt-2">
                  <span
                    className="block w-5 h-5 bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${wrenchTimeIcon})` }}
                  ></span>
                  <span className="text-sm text-color_dark_gray">
                    Выполним: {RepairData()}
                  </span>
                </div>
                <div className="flex gap-2 mt-1">
                  <span
                    className="block w-5 h-5 bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${deliveryTimeIcon})` }}
                  ></span>
                  <span className="text-sm text-color_dark_gray">
                    Доставка: до 3 дней
                  </span>
                </div>
              </div>

              {/* TOTAL SECTION */}
              <div className="mx-auto">
                <ContactUsBtn
                  text="ЗАПИСАТЬСЯ"
                  style="md:w-full mt-6 mx-auto block w-full hover:bg-color_dark hover:text-color_white"
                  type="repair"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <InteractivePicRepair />

      <ServiceProcess />
      <HowWeDoRepair />

      {/* подобрать картинки  с шириной больше 320px */}
      <Section styles="md:mb-14 md:mt-6 lg:mb-20">
        <SectionHeader
          headerText="Примеры наших работ"
          styles="mt-6 lg:mt-8"
          subheaderText="посмотрите фото наших ремонтов"
        />
        <div>
          <ul className="flex flex-col md:flex-row gap-10 mx-auto">
            <li className="flex-1">
              <div>
                <ImgComparisonSlider className="hover:cursor-pointer">
                  <img slot="first" src={engineBefore} />
                  <img slot="second" src={engineAfter} />
                </ImgComparisonSlider>

                <h3 className="text-base font-bold mt-2">
                  Капитальный ремонт двигателя А 41
                </h3>
                <p>
                  Все детали зачищены, установлена новая поршневая система,
                  головка блока опрессована, отшлифована и собрана с новыми
                  клапанами и направляющими.
                </p>
                <p>С обязательной последующей обкаткой после ремонта.</p>
                <p>Гарантия на ремонт 1 год.</p>
              </div>
            </li>
            <li className="flex-1">
              <div>
                <ImgComparisonSlider className="hover:cursor-pointer">
                  <img slot="first" src={tracksBefore} />
                  <img slot="second" src={tracksAfter} />
                </ImgComparisonSlider>

                <h3 className="text-base font-bold mt-2">
                  Ремонт ходовой части.
                </h3>
                <p>Ремонт опорных катков, рессорной пружины.</p>
                <p>Регулирование зазоров каретки.</p>
                <p>Замена пальцев.</p>
                <p>Восстановлено покрытие механизмов.</p>
              </div>
            </li>
            <li className="flex-1">
              <div>
                <ImgComparisonSlider className="hover:cursor-pointer">
                  <img slot="first" src={wholeBefore} />
                  <img slot="second" src={wholeAfter} />
                </ImgComparisonSlider>

                <h3 className="text-base font-bold mt-2">
                  Капитальный ремонт ДТ-75.
                </h3>
                <p>Восстановлен после длительного простоя</p>
                <p>
                  Ржавчина с пылью и грязью сделали свое дело обездвижив
                  ходовую. Двигатель прошел капремонт.
                </p>
                <p>
                  Фактически новый трактор за половину стоимости нового. Никаких
                  чудес, просто экономия.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      <Section styles="md:mb-14 md:mt-6 lg:mb-20 ">
        <SectionHeader headerText="Почему у нас" styles="mt-6 lg:mt-8" />
        <div>
          <ul className="grid gap-8 px-4 justify-center md:grid-cols-4">
            <li className=" flex flex-col">
              <div className="flex justify-around">
                <span className="text-color_accent_red font-bold text-3xl md:text-6xl xl:text-7xl self-center justify-self-center">
                  1
                </span>
                <MdOutlineAddAPhoto className="w-12 h-12 col-start-2 md:w-16 md:h-16 self-center justify-self-center" />
              </div>
              <div className="md:mt-6 col-span-2 row-start-2 column-start-1 ">
                <span className="md:text-xl text-lg font-bold">ФОТООТЧЕТ</span>
                <h4 className="md:text-base mt-2">
                  Вы будете получать фотоотчет о ходе ремонта каждую неделю
                </h4>
              </div>
            </li>
            <li className=" flex flex-col">
              <div className="flex justify-around">
                <span className="text-color_accent_red font-bold text-3xl md:text-6xl xl:text-7xl self-center justify-self-center">
                  2
                </span>
                <FiFileText className="w-12 h-12 col-start-2 md:w-16 md:h-16 justify-self-center" />
              </div>
              <div className="md:mt-6 col-span-2 row-start-2 column-start-1 ">
                <span className="md:text-xl text-lg font-bold">
                  ОФИЦИАЛЬНЫЙ ДОГОВОР
                </span>
                <h4 className="md:text-base mt-2">
                  преимущества официального договора
                </h4>
              </div>
            </li>
            <li className=" flex flex-col">
              <div className="flex justify-around">
                <span className="text-color_accent_red font-bold text-3xl md:text-6xl xl:text-7xl justify-self-center">
                  3
                </span>
                <div
                  className="w-12 h-12 col-start-2 md:w-16 md:h-16 bg-contain bg-no-repeat bg-center justify-self-center"
                  style={{ backgroundImage: `url(${guaranteeIcon})` }}
                ></div>
              </div>
              <div className="md:mt-6 col-span-2 row-start-2 column-start-1 ">
                <span className="md:text-xl text-lg font-bold">ГАРАНТИЯ</span>
                <h4 className="md:text-base mt-2">1 год или 1 000 моточасов</h4>
              </div>
            </li>
            <li className=" flex flex-col">
              <div className="flex justify-around">
                <span className="text-color_accent_red font-bold text-3xl md:text-6xl xl:text-7xl">
                  4
                </span>
                <div
                  className="w-12 h-12 col-start-2 md:w-16 md:h-16 bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${tractorAsNewIcon})` }}
                ></div>
              </div>
              <div className="md:mt-6 col-span-2 row-start-2 column-start-1 ">
                <span className="md:text-xl text-lg font-bold">КАК НОВЫЙ</span>
                <h4 className="md:text-base mt-2">
                  Ремонт от производителя гарантирует качество
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      <div className="bg-color_light_gray">
        <Section styles="md:mb-14 md:mt-6 lg:mb-20 py-10 md:py-14">
          <SectionHeader
            headerText="Кому подходит услуга"
            styles="mt-6 lg:mt-8"
          />
          <div className="mt-10">
            <ul className="grid mx-auto md:grid-cols-2 md:max-w-[1024px] gap-y-10 md:gap-x-16 md:gap-y-10">
              <li className="flex items-center flex-col md:flex-row gap-8">
                <img
                  src={whoNeedsIcon1}
                  className="w-full md:w-1/2 max-w-[300px]"
                  alt=""
                />
                <div className="flex items-center flex-col">
                  <h4 className="font-semibold">
                    Владельцам изношенной техники
                  </h4>
                  <h5 className="mt-2 md:mt-4 font-medium">
                    У кого старая техника необходимо произвести полный перебор и
                    капитальный ремонт
                  </h5>
                </div>
              </li>
              <li className="flex items-center flex-col md:flex-row gap-8">
                <img
                  src={whoNeedsIcon3}
                  className="w-full md:w-1/2 max-w-[300px]"
                  alt=""
                />
                <div>
                  <h4 className="font-semibold">
                    Желающим модернизировать трактор
                  </h4>
                  <h5 className="mt-2 md:mt-4 font-medium">
                    Если необходимо добавить новых функций или улучшить комфорт.
                  </h5>
                </div>
              </li>
              <li className="flex items-center flex-col md:flex-row gap-8">
                <img
                  src={whoNeedsIcon4}
                  className="w-full md:w-1/2 max-w-[300px]"
                  alt=""
                />
                <div>
                  <h4 className="font-semibold">
                    Перед открытием рабочего сезона
                  </h4>
                  <h5 className="mt-2 md:mt-4 font-medium">
                    Классическое ТО-1 и ТО-2, межсезонные работы и прочее
                  </h5>
                </div>
              </li>
              <li className="flex items-center flex-col md:flex-row gap-8">
                <img
                  src={whoNeedsIcon2}
                  className="w-full md:w-1/2 max-w-[300px]"
                  alt=""
                />
                <div>
                  <h4 className="font-semibold">В случае острой поломки</h4>
                  <h5 className="mt-2 md:mt-4 font-medium">
                    Оперативный выезд к вам или срочная транспортировка к нам в
                    ремонтный цех.
                  </h5>
                </div>
              </li>
            </ul>
          </div>
        </Section>
      </div>

      <Section styles="md:mb-14 md:mt-6 lg:mb-20">
        <SectionHeader
          headerText="капитальный ремонт или покупка нового
          ДТ-75?"
          styles="mt-6 lg:mt-8"
          subheaderText="в каких случаях капитальный ремонт выгоден по сравнению с покупкой нового трактора"
        />

        <div className="grid md:grid-cols-[1fr,2fr] gap-10">
          <div className="flex flex-col">
            <img
              src={newDTtractor}
              className="object-cover md:grayscale hover:cursor-pointer hover:grayscale-0 hover:duration-200 rounded-sm"
              alt="Капитальный ремонт трактора ДТ-75"
            />
            <h2 className="mt-6 text-lg font-semibold">
              выгоды капитального ремонта трактора ДТ-75
            </h2>

            <ul className="mt-6 md:mt-10 flex flex-col gap-3">
              <li className="grid grid-cols-[24px_1fr] gap-3">
                <div
                  className="block min-w-min w-6 h-6 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${tickIcon})` }}
                ></div>
                <p className="block">
                  Фактически новый трактор ДТ-75 с экономией 50%.
                </p>
              </li>
              <li className="grid grid-cols-[24px_1fr] gap-3">
                <span
                  className="block w-6 h-6 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${tickIcon})` }}
                ></span>
                <p className="max-w-[320px]">
                  Официальная гарантия 1 год или 800 мч.
                </p>
              </li>
              <li className="grid grid-cols-[24px_1fr] gap-3">
                <span
                  className="block w-6 h-6 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${tickIcon})` }}
                ></span>
                <p className="max-w-[320px]">
                  Ваша техника остается с вами, не нужно переучиваться.
                </p>
              </li>
              <li className="grid grid-cols-[24px_1fr] gap-3">
                <span
                  className="block w-6 h-6 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${tickIcon})` }}
                ></span>
                <p className="max-w-[320px]">
                  Ваш трактор выглядит новым, сохраняя конкурентоспособность.
                </p>
              </li>
            </ul>
            <ContactUsBtn
              text="Заявка на капитальный ремонт"
              style="mt-6 hover:bg-color_dark hover:text-color_white"
              type="repair"
            />
          </div>

          <div className="flex flex-col">
            <ul className="flex flex-col gap-3">
              <li>
                <h4>1. Экономия денег.</h4>
                <p className="">
                  Покупка нового трактора значительно дороже, чем капитальный
                  ремонт. В зависимости от состояния трактора и стоимости работ,
                  капитальный ремонт сократить затраты на покупку нового
                  трактора на 40-50%.
                </p>
                <p className="">
                  Стоимость нового оборудования продолжает расти, в то время как
                  цены на ремонт растут гораздо медленнее. Замена старых деталей
                  на новые позволяет получить фактически новый трактор при
                  минимальных вложениях.
                </p>
              </li>
              <li>
                <h4>2. Повышение производительности.</h4>
                <p className="">
                  Капитальный ремонт может включать в себя модернизацию или
                  замену компонентов, что может повысить производительность
                  трактора по сравнению с его первоначальным состоянием.
                </p>
              </li>
              <li>
                <h4>3. Поддержание работоспособности.</h4>
                <p className="">
                  Ремонт существующего трактора гарантирует, что он будет
                  оставаться в рабочем состоянии на протяжении длительного
                  времени. Новый трактор может столкнуться с проблемами в начале
                  эксплуатации, особенно если он не был тщательно проверен перед
                  покупкой.
                </p>
              </li>
              <li>
                <h4>4. Улучшение рабочего состояния.</h4>
                <p className="">
                  Капитальный ремонт улучшить внешний вид и рабочее состояние
                  трактора, делая его более привлекательным для потенциальных
                  покупателей, если вы захотите его продать.
                </p>
              </li>
            </ul>
            <p className="mt-4">
              Однако, стоит отметить, что покупка нового трактора может иметь
              свои преимущества, такие как, например, гарантия производителя. Но
              мы являемся сертифицированным производителем тракторов, участвуем
              в гос. закупках по 44-ФЗ и 223-ФЗ, заботимся о качестве и
              репутации, поэтому даем официальную гарантию на капитальный ремонт
              трактора ДТ-75 такую же как и на новый трактор - на 1 год или 1000
              м.ч.
            </p>
          </div>
        </div>
      </Section>

      <Section styles="md:mb-14 md:mt-6 lg:mb-20">
        <SectionHeader
          headerText="модернизация ДТ-75"
          styles="mt-6 lg:mt-8"
          subheaderText="проведем профессиональную модернизацию ДТ-75"
        />
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-color_dark_gray flex flex-col md:w-1/2 px-2 py-6 md:p-5">
            <h3 className="text-color_white md:mt-10">
              проведите модернизацию ДТ-75
            </h3>
            <ul className="mt-6 md:mt-6 gap-3">
              <li className="grid grid-cols-[24px_1fr] gap-3">
                <div
                  className="block min-w-min w-6 h-6 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${tickIconNoframe})` }}
                ></div>
                <p className="block text-color_white">Установка отопителя</p>
              </li>
              <li className="grid grid-cols-[24px_1fr] gap-3">
                <span
                  className="block w-6 h-6 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${tickIconNoframe})` }}
                ></span>
                <p className=" text-color_white">Установка новой кабины</p>
              </li>
              <li className="grid grid-cols-[24px_1fr] gap-3">
                <span
                  className="block w-6 h-6 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${tickIconNoframe})` }}
                ></span>
                <p className=" text-color_white">Установка кондиционера</p>
              </li>
              <li className="grid grid-cols-[24px_1fr] gap-3">
                <span
                  className="block w-6 h-6 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${tickIconNoframe})` }}
                ></span>
                <p className=" text-color_white">
                  Модернизация системы управления;
                </p>
              </li>
              <li className="grid grid-cols-[24px_1fr] gap-3">
                <span
                  className="block w-6 h-6 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${tickIconNoframe})` }}
                ></span>
                <p className=" text-color_white">Звуко/виброизоляция</p>
              </li>
              <li className="grid grid-cols-[24px_1fr] gap-3">
                <span
                  className="block w-6 h-6 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${tickIconNoframe})` }}
                ></span>
                <p className=" text-color_white">
                  Дополнительное навесное оборудование
                </p>
              </li>
            </ul>
            <ContactUsBtn
              text="Заявка на модернизацию"
              style="mt-8 md:mt-16 hover:bg-color_dark hover:text-color_white"
              type="repair"
            />
          </div>
          <div className="">
            <img
              src={dt75modernization}
              className="mx-auto object-cover md:grayscale hover:cursor-pointer hover:grayscale-0 hover:duration-200 rounded-sm"
              alt="Капитальный ремонт трактора ДТ-75"
            />
          </div>
        </div>
      </Section>

      <div className="bg-color_light_gray">{/* <Brands /> */}</div>
      <OurSpareParts />
    </div>
  );
};

export default ServicesCatalogue;
