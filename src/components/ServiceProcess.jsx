import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import searchIcon from "../assets/icons/howWeWork/search.svg";
import agreementIcon from "../assets/icons/howWeWork/agreement.svg";
import deliveryIcon from "../assets/icons/howWeWork/delivery.svg";
import repairIcon from "../assets/icons/howWeWork/repair.svg";
import runningInIcon from "../assets/icons/howWeWork/running-in.svg";

import { FiTriangle } from "react-icons/fi";

export default function ServiceProcess() {
  return (
    <Section styles="md:mb-14 md:mt-6 lg:mb-20">
      <SectionHeader
        headerText="Как мы работаем"
        styles="mt-6 lg:mt-8"
        subheaderText="Несколько шагов помогут вернуть ваш трактор в рабочее состояние"
      />
      <ul className="mt-20 flex flex-col md:flex-row">
        <li className="flex flex-col md:max-w-[230px] md:flex-1 md:flex-row">
          <div className="flex flex-col items-center md:w-[90%]">
            <div
              className="block min-w-min w-20 h-20 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${searchIcon})` }}
            ></div>
            <h4 className="md:text-sm mt-3">Осмотр / фотоотчет</h4>
            <p className="md:text-base md:leading-5 mt-1">
              Анализируем изношенность силовых агрегатов при необходимости
              выезжает специалист.
            </p>
          </div>
          <FiTriangle
            className="mt-4 md:mt-0 rotate-180 md:rotate-90 md:h-12 md:w-12 self-center md:self-start"
            color="#FEC513"
          />
        </li>
        <li className="flex md:flex-1 flex-col md:flex-row md:max-w-[230px]">
          <div className="flex flex-col items-center md:w-[90%]">
            <div
              className="block w-20 h-20 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${agreementIcon})` }}
            ></div>
            <h4 className=" md:text-sm mt-3">Договор</h4>
            <p className="md:text-base md:leading-5 mt-1">
              Составляем договор, фиксируем срок
            </p>
          </div>
          <FiTriangle
            className="mt-4 md:mt-0 rotate-180 md:rotate-90 md:h-12 md:w-12 self-center md:self-start"
            color="#FEC513"
          />
        </li>
        <li className="flex md:flex-1 flex-col md:flex-row md:max-w-[230px]">
          <div className="flex flex-col items-center md:w-[90%]">
            <div
              className="block min-w-min w-20 h-20 bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${deliveryIcon})` }}
            ></div>
            <h4 className=" md:text-sm mt-3">Доставка в ремонт</h4>
            <p className="md:text-base md:leading-5 mt-1">
              Берем на себя до 50% транспортных расходов по доставке трактора к
              нам и обратно.
            </p>
          </div>
          <FiTriangle
            className="mt-4 md:mt-0 rotate-180 md:rotate-90 md:h-12 md:w-12 self-center md:self-start"
            color="#FEC513"
          />
        </li>
        <li className="flex md:flex-1 flex-col md:flex-row md:max-w-[230px]">
          <div className="flex flex-col items-center md:w-[90%]">
            <div
              className="block min-w-min w-20 h-20 bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${repairIcon})` }}
            ></div>
            <h4 className=" md:text-sm mt-3">Капитальный ремонт</h4>
            <p className="md:text-base md:leading-5 mt-1">
              В соответствии с договором комплекс согласованных работ
            </p>
          </div>
          <FiTriangle
            className="mt-4 md:mt-0 rotate-180 md:rotate-90 md:h-12 md:w-12 self-center md:self-start"
            color="#FEC513"
          />
        </li>
        <li className="flex md:flex-1 flex-col md:flex-row md:max-w-[230px]">
          <div className="flex flex-col items-center md:w-[90%]">
            <div
              className="block w-20 h-20 bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${runningInIcon})` }}
            ></div>
            <h4 className="md:text-sm mt-3">Обкатка</h4>
            <p className="md:text-base md:leading-5 mt-1">
              Полная проверка все х агрегатов и механизмов
            </p>
          </div>
        </li>
      </ul>
    </Section>
  );
}
