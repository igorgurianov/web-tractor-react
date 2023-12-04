import React from "react";
import { useEffect, useState } from "react";
import tankIcon from "../assets/icons/tankIcon.svg";
import infoIcon from "../assets/icons/info-svgrepo-com.svg";
import engineIcon from "../assets/icons/engine.svg";
import tracks from "../assets/icons/gusenitsy.svg";
import { ourServices } from "../utils/const";
import Card from "../components/Card";
import interactivePic from "../assets/images/services/interactive.jpeg";
import { totalCounter } from "../utils/totalCounter";
import Section from "./Section";
import { interactivePicRepair } from "../utils/const";
import SectionHeader from "./SectionHeader";
import {
  OPEN_ADDITIONAL_INFO_POPUP,
  CLOSE_ADDITIONAL_INFO_POPUP,
} from "../services/actions/repairs";
import { useDispatch, useSelector } from "react-redux";
import cabin from "../assets/icons/services/cabin.svg";
import chassis from "../assets/icons/services/chassiss.svg";
import engine from "../assets/icons/services/engine.svg";
import hydraulucs from "../assets/icons/services/hydraulics.svg";
import transmission from "../assets/icons/services/transmission.svg";

export default function InteractivePicRepair() {
  const dispatch = useDispatch();
  const [element, setElement] = useState("engine");
  const [elementInfo, setElementInfo] = useState(null);

  const iconClickHandler = (e) => {
    e.preventDefault();
    setElement(e.currentTarget.value);
  };

  useEffect(() => {
    setElementInfo(
      interactivePicRepair.find((item) => item.element === element)
    );
  });

  const detailsButtonHandler = (e) => {
    dispatch({
      type: OPEN_ADDITIONAL_INFO_POPUP,
      payload: element,
    });
  };

  return (
    <>
      {elementInfo ? (
        <Section styles="md:mb-14 md:mt-6 lg:mb-20">
          <SectionHeader
            headerText="Капитальный ремонт трактора"
            styles="mt-6 lg:mt-8"
            subheaderText="изучите подробности услуги в интерактивной карточке"
          />
          <div>
            <ul className="overflow-y-scroll flex gap-1 md:gap-6">
              <li className="flex flex-1 flex-col bg">
                <button
                  type="button"
                  onClick={(e) => iconClickHandler(e)}
                  value="tank"
                  className={`p-1 flex flex-col items-center border border-color_lighter_gray hover:bg-color_accent_yellow ${
                    element === "tank"
                      ? "bg-color_accent_yellow"
                      : "bg-color_light_gray"
                  }`}
                >
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 bg-contain bg-no-repeat bg-center z-10"
                    style={{ backgroundImage: `url(${hydraulucs})` }}
                  ></div>
                  <span>Гидравлика</span>
                </button>
              </li>
              <li className="flex flex-1 flex-col">
                <button
                  type="button"
                  value="engine"
                  onClick={(e) => iconClickHandler(e)}
                  className={`p-1 flex flex-col items-center border border-color_lighter_gray hover:bg-color_accent_yellow ${
                    element === "engine"
                      ? "bg-color_accent_yellow"
                      : "bg-color_light_gray"
                  }`}
                >
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 bg-contain bg-no-repeat bg-center z-10"
                    style={{ backgroundImage: `url(${engine})` }}
                  ></div>
                  <span>Двигатель</span>
                </button>
              </li>
              <li className="flex flex-1 flex-col">
                <button
                  type="button"
                  value="cabin"
                  onClick={(e) => iconClickHandler(e)}
                  className={`p-1 flex flex-col items-center border border-color_lighter_gray hover:bg-color_accent_yellow ${
                    element === "cabin"
                      ? "bg-color_accent_yellow"
                      : "bg-color_light_gray"
                  }`}
                >
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 bg-contain bg-no-repeat bg-center z-10"
                    style={{ backgroundImage: `url(${cabin})` }}
                  ></div>
                  <span>Кабина</span>
                </button>
              </li>

              <li className="flex flex-1 flex-col">
                <button
                  type="button"
                  value="transmission"
                  onClick={(e) => iconClickHandler(e)}
                  className={`p-1 flex flex-col items-center border border-color_lighter_gray hover:bg-color_accent_yellow ${
                    element === "transmission"
                      ? "bg-color_accent_yellow"
                      : "bg-color_light_gray"
                  }`}
                >
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 bg-contain bg-no-repeat bg-center z-10"
                    style={{ backgroundImage: `url(${transmission})` }}
                  ></div>
                  <span>Трансмиссия</span>
                </button>
              </li>

              <li className="flex flex-1 flex-col">
                <button
                  type="button"
                  value="chassis"
                  onClick={(e) => iconClickHandler(e)}
                  className={`p-1 flex flex-col items-center border border-color_lighter_gray hover:bg-color_accent_yellow ${
                    element === "chassis"
                      ? "bg-color_accent_yellow"
                      : "bg-color_light_gray"
                  }`}
                >
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 bg-contain bg-no-repeat bg-center z-10"
                    style={{ backgroundImage: `url(${chassis})` }}
                  ></div>
                  <span>Ходовая</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full md:h-[500px] flex flex-col gap-5 items-center md:flex-row bg-color_test_bg">
            <div className="p-4 md:max-w-[30%] bg-color_lighter_gray flex flex-col h-full self-start">
              <div className="flex flex-col flex-grow-[1] h-full">
                <div className="flex gap-6">
                  <div
                    style={{ backgroundImage: `url(${infoIcon})` }}
                    className="w-10 h-10 bg-no-repeat bg-center"
                  ></div>
                  <span className="text-color_white text-lg font-semibold inline-flex items-center">
                    {elementInfo.name}
                  </span>
                </div>
                <div className="mt-2">
                  {elementInfo.previewText.map((item, index) => {
                    if (item.type === "para") {
                      return (
                        <p
                          className="md:text-base text-color_white md:leading-5 mb-1"
                          key={index}
                        >
                          {item.content}
                        </p>
                      );
                    } else if (item.type === "list") {
                      return (
                        <ul
                          className="md:ml-8 list-decimal text-color_white mt-1"
                          key={index}
                        >
                          {item.content.map((item, index) => {
                            return (
                              <li className="ml-3 md:leading-5" key={index}>
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      );
                    }
                  })}
                </div>
              </div>
              <button
                onClick={() => detailsButtonHandler()}
                className="mt-4 bg-color_accent_yellow py-3 rounded-lg max-w-[250px] hover:bg-color_dark hover:text-color_white"
              >
                Подробнее про {elementInfo.name}
              </button>
            </div>

            <div
              className="mx-auto md:ml-auto md:mr-0 w-full max-w-[500px] h-[300px] bg-contain md:w-[700px] md:h-[500px] md:max-w-none md:bg-cover bg-no-repeat bg-center relative "
              style={{ backgroundImage: `url(${interactivePic})` }}
            >
              {/* tank */}

              <button
                type="button"
                onClick={(e) => iconClickHandler(e)}
                value="tank"
                className={`p-2 md:p-3 absolute rounded-full border inline-block top-[47%] left-[10%] hover:bg-color_accent_yellow ${
                  element === "tank"
                    ? "bg-color_accent_yellow"
                    : "bg-color_white"
                }`}
              >
                <div
                  className="w-10 h-10 bg-contain bg-no-repeat bg-center z-10"
                  style={{ backgroundImage: `url(${hydraulucs})` }}
                ></div>
              </button>

              {/* engine */}

              <button
                type="button"
                value="engine"
                onClick={(e) => iconClickHandler(e)}
                className={`p-2 md:p-3 absolute rounded-full border inline-block top-[57%] left-[30%] hover:bg-color_accent_yellow ${
                  element === "engine"
                    ? "bg-color_accent_yellow"
                    : "bg-color_white"
                }`}
              >
                <div
                  className="w-10 h-10 bg-contain bg-no-repeat bg-center z-10"
                  style={{ backgroundImage: `url(${engine})` }}
                ></div>
              </button>

              {/* cabin */}

              <button
                type="button"
                value="cabin"
                onClick={(e) => iconClickHandler(e)}
                className={`p-2 md:p-3 absolute rounded-full border inline-block top-[27%] left-[40%] hover:bg-color_accent_yellow ${
                  element === "cabin"
                    ? "bg-color_accent_yellow"
                    : "bg-color_white"
                }`}
              >
                <div
                  className="w-10 h-10 bg-contain bg-no-repeat bg-center z-10"
                  style={{ backgroundImage: `url(${cabin})` }}
                ></div>
              </button>

              {/* transmission */}

              <button
                type="button"
                value="transmission"
                onClick={(e) => iconClickHandler(e)}
                className={`p-2 md:p-3 absolute rounded-full border inline-block top-[37%] left-[60%] hover:bg-color_accent_yellow ${
                  element === "transmission"
                    ? "bg-color_accent_yellow"
                    : "bg-color_white"
                }`}
              >
                <div
                  className="w-10 h-10 bg-contain bg-no-repeat bg-center z-10"
                  style={{ backgroundImage: `url(${transmission})` }}
                ></div>
              </button>
              {/* tracks */}

              <button
                type="button"
                value="chassis"
                onClick={(e) => iconClickHandler(e)}
                className={`p-2 md:p-3 absolute rounded-full border inline-block top-[67%] left-[50%] hover:bg-color_accent_yellow ${
                  element === "chassis"
                    ? "bg-color_accent_yellow"
                    : "bg-color_white"
                }`}
              >
                <div
                  className="w-10 h-10 bg-contain bg-no-repeat bg-center z-10"
                  style={{ backgroundImage: `url(${chassis})` }}
                ></div>
              </button>
            </div>
          </div>
        </Section>
      ) : (
        ""
      )}
    </>
  );
}