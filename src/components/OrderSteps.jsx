import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import oneIcon from "../assets/icons/number-circle/one.svg";
import twoIcon from "../assets/icons/number-circle/two.svg";
import threeIcon from "../assets/icons/number-circle/three.svg";
import fourIcon from "../assets/icons/number-circle/four.svg";
import fiveIcon from "../assets/icons/number-circle/five.svg";
import sixIcon from "../assets/icons/number-circle/six.svg";

function OrderSteps() {
  return (
    <>
      <Section styles="py-10 ">
        <SectionHeader
          headerText="Порядок заказа"
          subheaderText="Принимаем заявки от физических лиц и организаций. Производим любые партии от 1 шт."
          styles=""
        />

        <ul className="mt-6 md:mt-10 flex flex-col gap-3">
          <li className="grid grid-cols-[24px_1fr] gap-3">
            <div
              className="block min-w-min w-6 h-6 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${oneIcon})` }}
            ></div>
            <p className="block">
              Согласовываем модификацию и цену, заключаем договор
            </p>
          </li>
          <li className="grid grid-cols-[24px_1fr] gap-3">
            <span
              className="block w-6 h-6 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${twoIcon})` }}
            ></span>
            <p className="">Предоплата 50%</p>
          </li>
          <li className="grid grid-cols-[24px_1fr] gap-3">
            <span
              className="block w-6 h-6 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${threeIcon})` }}
            ></span>
            <p className="">Производство трактора до 30 рабочих дней</p>
          </li>
          <li className="grid grid-cols-[24px_1fr] gap-3">
            <span
              className="block w-6 h-6 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${fourIcon})` }}
            ></span>
            <p className="">Оплата оставшейся суммы</p>
          </li>
          <li className="grid grid-cols-[24px_1fr] gap-3">
            <span
              className="block w-6 h-6 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${fiveIcon})` }}
            ></span>
            <p className="">Отгрузка и доставка</p>
          </li>
          <li className="grid grid-cols-[24px_1fr] gap-3">
            <span
              className="block w-6 h-6 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${sixIcon})` }}
            ></span>
            <p className="">Эксплуатация, гарантийное обслуживание</p>
          </li>
        </ul>
      </Section>
    </>
  );
}

export default OrderSteps;
