import { Link, useLocation } from "react-router-dom";
import breadCrumbIcon from "../assets/icons/breadCrumb.svg";
import homeIcon from "../assets/icons/home.svg";

const breadCrumbsTranslate = [
  { en: "tractors", ru: "Наша техника" },
  { en: "VZGM-150", ru: "ВЗГМ-150" },
  { en: "VZGM-90", ru: "ВЗГМ-90" },
  { en: "services", ru: "Сервис" },
  { en: "news", ru: "Новости" },
  { en: "technical", ru: "Техническое обслуживание" },
  { en: "capital", ru: "Капитальный ремонт" },
  { en: "profilactic", ru: "Профилактическое обслуживание" },
  { en: "eqipment", ru: "Оборудование" },
  { en: "about", ru: "О нас" },
  { en: "gallery", ru: "Галерея" },
  { en: "catalogue", ru: "Каталог" },
  { en: "engine", ru: "Двигатели" },
  { en: "blade", ru: "Навесное оборудование" },
  { en: "spare", ru: "Запчасти" },
  { en: "DT-75", ru: "ДТ-75" },
  { en: "XTZ-150", ru: "ХТЗ-150" },
  { en: "description", ru: "Описание" },
  { en: "leasing", ru: "Лизинг" },
  { en: "modifications", ru: "Модификации" },
  { en: "characteristics", ru: "Характеристики" },
  { en: "DT-75-s-navesnym", ru: "ДТ-75" },
  { en: "XTZ-150-s-navesnym", ru: "ХТЗ-150" },
  { en: "XTZ-150-s-otvalom", ru: "ХТЗ-150 с отвалом" },
  { en: "DT-75-s-otvalom", ru: "ДТ-75 с отвалом" },
  { en: "catalog-htz-t150", ru: "Каталог Т-150" },
  { en: "catalog-dt-75", ru: "Каталог ДТ-75" },
  {},
];

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  let crumbsRu = [];

  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  crumbs.forEach((item, index, arr) => {
    var obj = {};
    obj.en = item;
    let ruName;
    for (let i = 0; i < breadCrumbsTranslate.length; i++) {
      if (item === breadCrumbsTranslate[i].en) {
        ruName = breadCrumbsTranslate[i].ru;
      }
    }
    obj.ru = ruName;
    crumbsRu.push(obj);
  });

  return (
    <div className="flex text-color_dark_gray gap-1 md:gap-3 items-center">
      <Link
        to="/"
        className=" hover:text-color_dark text-xs md:text-base flex gap-2 items-center"
      >
        <div
          className="h-4 w-4 lg:h-6 lg:w-6 bg-no-repeat bg-cover"
          style={{
            background: `url(${homeIcon})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <span className="hidden md:block">Главная</span>
      </Link>

      {crumbsRu.map((crumb, index) => {
        currentLink += `/${crumb.en}`;
        return (
          <div
            className="flex items-center  gap-1 md:gap-3 last-of-type:text-color_accent_red"
            key={index}
          >
            <div
              className="h-[10px] w-[7px]"
              style={{
                background: `url(${breadCrumbIcon})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <Link
              to={currentLink}
              className="hover:text-color_dark text-sm md:text-base text-center"
            >
              {crumb.ru}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
