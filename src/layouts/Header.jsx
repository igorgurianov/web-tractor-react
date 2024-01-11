import { useState } from "react";
import CustomLink from "../UI/CustomLink";
import { FiPhoneCall, FiMapPin, FiMenu } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TelegramIcon from "../UI/TelegramIcon";
import WhatsAppIcon from "../UI/WhatsAppIcon";
import ContactUsBtn from "../UI/ContactUsBtn";
import ContactItem from "../UI/ContactItem";
import { organizationInfo } from "../utils/const";
import Logo from "../components/Logo";
import tractorLogo from "../assets/icons/tractorIcon.svg";

const Header = () => {
  const [nav, setNav] = useState(false);

  // const { isPopupOpen } = useContext(PopupContext);

  const handleNav = () => {
    setNav(!nav);
  };

  const defaultStyle = "text-color_white";
  const activeStyle = " text-color_accent_yellow";
  const style =
    "py-7 text-xl font-bold uppercase md:text-sm md:py-3 md:px-2 lg:text-base lg:px-4 xl:text-xl ";
  const styleMobile = "text-sm font-bold tracking-wider py-4 block";

  return (
    <header className="bg-[#171717] md:flex flex-col w-full justify-between items-center">
      <div className="w-full border-solid border-[#5E5E5E] border-b mx-auto">
        <div className="flex mx-auto py-3 px-4 md:max-w-[1200px] justify-between text-color_light_gray md:justify md:px-6">
          <FiMenu
            color="white"
            size={24}
            onClick={handleNav}
            className="md:hidden"
          />
          <div className="md:hidden">
            <Logo />
          </div>
          <div className="hidden md:block max-w-[350px]">
            <ContactItem
              text={organizationInfo.address2.textTop}
              textBottom={organizationInfo.address2.textBottom}
              icon={<FiMapPin size={24} />}
              // Заменить адрес на карточку бизнеса я Яндекс картах
              href="https://yandex.ru/maps/org/volgogradskiy_zavod_gusenichnykh_mashin/143044221128/?ll=44.516979%2C48.707071&z=10"
            />
          </div>
          <div className="hidden md:block max-w-[300px]">
            <ContactItem
              text={organizationInfo.address.textTop}
              textBottom={organizationInfo.address.textBottom}
              icon={<FiMapPin size={24} />}
              // Заменить адрес на карточку бизнеса я Яндекс картах
              href="https://yandex.ru/maps/org/volgogradskiy_zavod_gusenichnykh_mashin/143044221128/?ll=44.516979%2C48.707071&z=10"
            />
          </div>

          <div className="hidden md:block">
            <ContactItem
              text={organizationInfo.hours.textTop}
              textBottom={organizationInfo.hours.textBottom}
              icon={<BiTimeFive size={24} />}
              // Заменить адрес на карточку бизнеса я Яндекс картах
              href={"/"}
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-4 ">
              <TelegramIcon size="24" />
              <WhatsAppIcon size="24" />
            </div>

            <div className="hidden md:block mt-1">
              <ContactItem
                text={organizationInfo.phone.aroundClock.toShow}
                icon={<FiPhoneCall size={24} />}
                href={`tel:${organizationInfo.phone.aroundClock.toLink}`}
              />
            </div>
          </div>
        </div>
      </div>

      <nav className="hidden w-full max-w-[1200px] md:justify-between mx-auto py-6 md:flex md:items-center md:py-2 md:px-6 lg:py-5">
        <div className="flex items-center">
          <Logo />
          <div
            className="w-[50px] h-[50px] bg-contain bg-no-repeat hidden md:block"
            style={{ backgroundImage: `url(${tractorLogo})` }}
          ></div>
        </div>

        <ul className="md:flex justify-between items-center">
          <li>
            <CustomLink
              to="/"
              defaultStyle={defaultStyle}
              activeStyle={activeStyle}
              style={style}
            >
              Главная
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/tractors/"
              defaultStyle={defaultStyle}
              activeStyle={activeStyle}
              style={style}
            >
              Наша Техника
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/services/"
              defaultStyle={defaultStyle}
              activeStyle={activeStyle}
              style={style}
            >
              Сервис
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/eqipment/"
              defaultStyle={defaultStyle}
              activeStyle={activeStyle}
              style={style}
            >
              Оборудование
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/about/"
              defaultStyle={defaultStyle}
              activeStyle={activeStyle}
              style={style}
            >
              О нас
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/gallery/"
              defaultStyle={defaultStyle}
              activeStyle={activeStyle}
              style={style}
            >
              Галерея
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/news/"
              defaultStyle={defaultStyle}
              activeStyle={activeStyle}
              style={style}
            >
              Новости
            </CustomLink>
          </li>
        </ul>
        <ContactUsBtn
          text="Обратный звонок"
          style="text-sm p-3 lg:px-7 text-color_xl_dark_gray hover:bg-color_dark hover:text-color_white"
        />
      </nav>

      <div
        className={
          nav
            ? "fixed flex justify-between left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 p-5 z-50"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div
          onClick={handleNav}
          className=" absolute right-2 block md:hidden order-2 p-2"
        >
          {nav && <AiOutlineCloseCircle color="white" size={26} className="" />}
        </div>
        <div>
          <ul className="flex flex-col items-start">
            <li onClick={handleNav}>
              <CustomLink
                to="/"
                defaultStyle={defaultStyle}
                activeStyle={activeStyle}
                style={`${styleMobile}`}
              >
                Главная
              </CustomLink>
            </li>
            <li onClick={handleNav}>
              <CustomLink
                to="/tractors/"
                defaultStyle={defaultStyle}
                activeStyle={activeStyle}
                style={`${styleMobile}`}
              >
                Наша Техника
              </CustomLink>
            </li>
            <li onClick={handleNav}>
              <CustomLink
                to="/services/"
                defaultStyle={defaultStyle}
                activeStyle={activeStyle}
                style={`${styleMobile}`}
              >
                Сервис
              </CustomLink>
            </li>
            <li onClick={handleNav}>
              <CustomLink
                to="/eqipment/"
                defaultStyle={defaultStyle}
                activeStyle={activeStyle}
                style={`${styleMobile}`}
              >
                Оборудование
              </CustomLink>
            </li>
            <li onClick={handleNav}>
              <CustomLink
                to="/about/"
                defaultStyle={defaultStyle}
                activeStyle={activeStyle}
                style={`${styleMobile}`}
              >
                О нас
              </CustomLink>
            </li>
            <li onClick={handleNav}>
              <CustomLink
                to="/gallery/"
                defaultStyle={defaultStyle}
                activeStyle={activeStyle}
                style={`${styleMobile}`}
              >
                Галерея
              </CustomLink>
            </li>
            <li onClick={handleNav}>
              <CustomLink
                to="/news/"
                defaultStyle={defaultStyle}
                activeStyle={activeStyle}
                style={`${styleMobile}`}
              >
                Новости
              </CustomLink>
            </li>
          </ul>
          <div className="mt-4">
            <ContactItem
              text={organizationInfo.phone.callNow.toShow}
              icon={<FiPhoneCall size={24} />}
              href={`tel:${organizationInfo.phone.callNow.toLink}`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
