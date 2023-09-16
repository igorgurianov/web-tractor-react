import React, { useRef, useState } from "react";
import Section from "../components/Section";
import { sendEmail } from "../utils/email";
import brand0 from "../assets/images/brands/brand-0.png";
import brand1 from "../assets/images/brands/brand-1.png";
import brand2 from "../assets/images/brands/brand-2.png";
import brand3 from "../assets/images/brands/brand-3.png";
import brand4 from "../assets/images/brands/brand-4.png";
import brand5 from "../assets/images/brands/brand-5.png";
import TelegramIcon from "../UI/TelegramIcon";
import WhatsAppIcon from "../UI/WhatsAppIcon";
import { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

const brandImgs = [brand0, brand1, brand2, brand3, brand4, brand5];

const Brands = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisable] = useState(true);
  const { formSuccess, setFormSuccess, setIsPopupOpen } =
    useContext(PopupContext);
  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    window.ym(94606235, "reachGoal", "lead");
    document.body.style.overflow = "hidden";
    setIsLoading(true);
    sendEmail(form.current)
      .then(
        (result) => {
          // console.log(result.text);
          e.target.reset();
        },
        (error) => {
          // console.log(error.text);
        }
      )
      .then(() => {
        setIsLoading(false);
        setIsPopupOpen(true);
        setFormSuccess(true);
      });
  };

  const cursor = isLoading ? "cursor-wait" : "cursor-auto";

  return (
    <div className={`${cursor}`}>
      <Section styles="py-10 md:py-14 lg:py-10">
        <div className="md:flex gap-10 lg:gap-20">
          <div>
            <h3 className="text-left md:text-xl lg:text-3xl">
              Мы ремонтируем все марки тракторов
            </h3>
            <p className="text-left">Свяжитесь с нами соц сетях</p>
            <ul className="grid grid-cols-6 gap-4 mt-6 justify-items-center">
              {brandImgs.map((item, index) => {
                return (
                  <li key={index}>
                    <img
                      src={item}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-6 justify-center mt-10 md:basis-1/3">
            <form
              ref={form}
              onSubmit={submitHandler}
              action=""
              className="flex flex-col w-full gap-4"
            >
              <input
                className=" bg-color_white bg-opacity-70 py-2 pl-7 placeholder:text-color_placeholder"
                required
                disabled={isLoading}
                maxLength={20}
                type="text"
                name="user_name"
                id=""
                placeholder="Ваше имя"
              />
              <input
                className="bg-color_white bg-opacity-70 py-2 pl-7 placeholder:text-color_placeholder"
                required
                disabled={isLoading}
                maxLength={20}
                type="tel"
                name="user_phone"
                id=""
                placeholder="Ваш телефон"
              />
              <input
                className="bg-color_accent_yellow py-3 font-bold text-xs tracking-widest cursor-pointer hover:bg-color_dark_gray hover:text-color_white"
                type="submit"
                disabled={isLoading}
                value={isLoading ? "ОТПРАВЛЯЕМ ЗАЯВКУ ..." : "ЗАКАЗАТЬ ЗВОНОК"}
              />
            </form>
            <div className="flex gap-10">
              <TelegramIcon size="50" circleFill="#FEC513" />
              <WhatsAppIcon size="50" circleFill="#FEC513" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Brands;
