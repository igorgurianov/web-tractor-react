import File from "../assets/icons/file-text-ico.svg";
import {
  FiHeadphones,
  FiUsers,
  FiFileText,
  FiPackage,
  FiTruck,
  FiTriangle,
} from "react-icons/fi";

const HowWeWork = () => {
  return (
    <div>
      <ul className="grid gap-5 justify-center md:grid-flow-col">
        <li className="grid grid-flow-col auto-cols-min gap-x-3 items-center grid-rows-2 justify-start md:grid-cols-2 md:grid-rows-2">
          <span className="text-color_accent_red font-bold text-3xl md:text-6xl xl:text-7xl">
            1
          </span>
          <FiHeadphones className="w-6 h-6 md:w-12 md:h-12 col-start-2 md:col-start-2 lg:w-16 lg:h-16" />
          <h4 className="whitespace-nowrap col-start-3 md:text-sm md:col-span-2 md:row-start-2 md:column-start-1 xl:text-xl">
            Свяжитесь с нами
          </h4>
          <FiTriangle
            className="rotate-180 md:rotate-90 row-start-2 md:row-start-1"
            color="#FEC513"
          />
        </li>
        <li className="grid grid-flow-col gap-x-3 items-center grid-rows-2 justify-start md:grid-cols-2 md:grid-rows-2">
          <span className="text-color_accent_red font-bold text-3xl md:text-6xl xl:text-7xl">
            2
          </span>
          <FiUsers className=" w-6 h-6 md:w-12 md:h-12 col-start-2 md:col-start-2 lg:w-16 lg:h-16" />
          <h4 className="whitespace-nowrap col-start-3 md:text-sm md:col-span-2 md:row-start-2 md:column-start-1 xl:text-xl">
            Обсудим модификацию
          </h4>
          <FiTriangle
            className="rotate-180 md:rotate-90 row-start-2 md:row-start-1"
            color="#FEC513"
          />
        </li>
        <li className="grid grid-flow-col gap-x-3 items-center grid-rows-2 justify-start md:grid-cols-2 md:grid-rows-2">
          <span className="text-color_accent_red font-bold text-3xl md:text-6xl xl:text-7xl">
            3
          </span>
          <FiFileText className="w-6 h-6 md:w-12 md:h-12 col-start-2 md:col-start-2 lg:w-16 lg:h-16" />
          <h4 className="whitespace-nowrap col-start-3 md:text-sm md:col-span-2 md:row-start-2 md:column-start-1 xl:text-xl">
            Заключим договор / лизинг
          </h4>
          <FiTriangle
            className="rotate-180 md:rotate-90 row-start-2 md:row-start-1"
            color="#FEC513"
          />
        </li>
        <li className="grid grid-flow-col gap-x-3 items-center grid-rows-2 justify-start md:grid-cols-2 md:grid-rows-2">
          <span className="text-color_accent_red font-bold text-3xl md:text-6xl xl:text-7xl">
            4
          </span>
          <FiTruck className=" w-6 h-6 md:w-12 md:h-12 col-start-2 md:col-start-2 lg:w-16 lg:h-16" />
          <h4 className="whitespace-nowrap col-start-3 md:text-sm md:col-span-2 md:row-start-2 md:column-start-1 xl:text-xl">
            Доставим в срок
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default HowWeWork;
