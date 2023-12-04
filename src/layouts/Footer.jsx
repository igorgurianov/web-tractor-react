import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall, FiMapPin, FiHeadphones } from "react-icons/fi";
import LocationMaps from "../vendor/YandexMaps";
import CustomLink from "../UI/CustomLink";
import TelegramIcon from "../UI/TelegramIcon";
import WhatsAppIcon from "../UI/WhatsAppIcon";
import FooterFrame from "../components/FooterFrame";
import { organizationInfo } from "../utils/const";
import ContactItem from "../UI/ContactItem";
import Logo from "../components/Logo";

const Footer = () => {
  const defaultStyle = "text-color_white text-base";
  const activeStyle = "text-color_accent_yellow text-base";

  return (
    <footer>
      <div>
        <LocationMaps />
      </div>
      <div className="">
        <div className="bg-gradient-to-r from-[#0B0A0A90]  via-[#CCCAC9] to-[#0B0A0A90] text-[#2D2D2D]">
          <ul className="flex gap-2 md:gap-0 md:px-6 py-3 px-2 mx-auto md:max-w-[1200px] md:py-5 flex-col md:flex-row justify-between items-center">
            <li className="">
              <FooterFrame
                text={organizationInfo.address}
                href="#"
                icon={<FiMapPin className="w-6 h-6 " />}
              />
            </li>
            <li className=" hover:text-color_white">
              <FooterFrame
                text={`Заказ техники ${organizationInfo.phone.callNow.toShow}`}
                href={`tel:${organizationInfo.phone.callNow.toLink}`}
                icon={<FiPhoneCall className="w-6 h-6" />}
              />
            </li>
            <li className=" hover:text-color_white">
              <FooterFrame
                text={`Консультация ${organizationInfo.phone.aroundClock.toShow}`}
                href={`tel:${organizationInfo.phone.aroundClock.toLink}`}
                icon={<FiHeadphones className="w-6 h-6" />}
              />
            </li>
          </ul>
        </div>
        <div className="bg-[#2D2D2D]">
          <div className="flex justify-between mx-auto md:max-w-[1200px] px-14 md:px-6 py-4 md:py-7 lg:py-9 section-container">
            <div className="flex w-full justify-between items-center md:w-auto md:flex-col md:justify-normal md:items-start">
              <Logo styles=" w-[156px] h-[46px] md:w-[190px] md:h-[56px] lg:w-[263px] lg:h-[78px] " />
              <div className="flex gap-5 md:gap-7 md:mt-4">
                <WhatsAppIcon size="41" />
                <TelegramIcon size="41" />
              </div>
            </div>
            <div className="hidden md:flex gap-10">
              <div>
                <h6 className="text-left md:text-xl tracking-widest font-medium uppercase text-color_white mb-1">
                  Меню
                </h6>
                <div className="w-[51px] h-px border-solid border-color_white border-t"></div>
                <nav>
                  <ul>
                    <li className="text-left mt-6">
                      <CustomLink
                        to="/"
                        defaultStyle={defaultStyle}
                        activeStyle={activeStyle}
                      >
                        Главная
                      </CustomLink>
                    </li>
                    <li className="text-left my-1">
                      <CustomLink
                        to="/tractors"
                        defaultStyle={defaultStyle}
                        activeStyle={activeStyle}
                      >
                        Наша Техника
                      </CustomLink>
                    </li>
                    <li className="text-left my-1">
                      <CustomLink
                        to="/services/"
                        defaultStyle={defaultStyle}
                        activeStyle={activeStyle}
                      >
                        Сервис
                      </CustomLink>
                    </li>
                    <li className="text-left my-1">
                      <CustomLink
                        to="/eqipment"
                        defaultStyle={defaultStyle}
                        activeStyle={activeStyle}
                      >
                        Оборудование
                      </CustomLink>
                    </li>
                    <li className="text-left my-1">
                      <CustomLink
                        to="/about"
                        defaultStyle={defaultStyle}
                        activeStyle={activeStyle}
                      >
                        О нас
                      </CustomLink>
                    </li>
                    <li className="text-left my-1">
                      <CustomLink
                        to="/gallery"
                        defaultStyle={defaultStyle}
                        activeStyle={activeStyle}
                      >
                        Галерея
                      </CustomLink>
                    </li>
                    <li className="text-left mt-1">
                      <CustomLink
                        to="/news"
                        defaultStyle={defaultStyle}
                        activeStyle={activeStyle}
                      >
                        Новости
                      </CustomLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <h6 className="text-left md:text-xl uppercase text-color_white font-bold tracking-widest mb-1">
                  Услуги
                </h6>
                <div className="w-[66px] h-px border-solid border-color_white border-t"></div>
                <ul className="">
                  <li className="text-left my-1 text-color_white">
                    <CustomLink to={"/services/"} activeStyle={activeStyle}>
                      Капитальный ремонт
                    </CustomLink>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-left md:text-xl uppercase text-color_white font-bold tracking-widest mb-1">
                  Контакты
                </h6>
                <div className="w-[94px] h-px border-solid border-color_white border-t"></div>
                <ul>
                  <li className="mt-6">
                    <ContactItem
                      text={organizationInfo.phone.aroundClock.toShow}
                      icon={<FiPhoneCall size={24} />}
                      href={`tel:${organizationInfo.phone.aroundClock.toLink}`}
                    />
                  </li>
                  <li className="mt-2 pb-5 border-solid border-color_dark_gray border-b">
                    <ContactItem
                      text={organizationInfo.phone.callNow.toShow}
                      icon={<FiPhoneCall size={24} />}
                      href={`tel:${organizationInfo.phone.callNow.toLink}`}
                    />
                  </li>
                  <li className="py-[19px] border-solid border-[#5E5E5E] border-b">
                    <ContactItem
                      text={organizationInfo.email}
                      icon={<AiOutlineMail size={24} />}
                      href={`mailto:${organizationInfo.email}`}
                    />
                  </li>
                  <li className="text-left py-2 pt-5 max-w-[221px]">
                    <ContactItem
                      text={organizationInfo.address}
                      icon={<FiMapPin size={34} />}
                      href={`#`}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#171717]">
          <div className="flex flex-col px-14 mx-auto md:max-w-[1200px] md:px-6 py-7 md:flex-row justify-between section-container ">
            <p className="text-xs text-color_white">
              © 2023 ВЗГМ. All right reserved.
            </p>
            <p className="text-xs text-color_white">
              Политика конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
