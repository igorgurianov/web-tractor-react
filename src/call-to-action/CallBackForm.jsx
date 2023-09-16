import React, { useRef, useState } from "react";
import bgImg from "../assets/images/form/form-bg-md.png";
import { sendEmail } from "../utils/email";
import { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

const CallBackForm = () => {
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
    <div
      className={`flex h-[340px] relative max-w-[1920px] lg:mx-auto ${cursor}`}
    >
      <div className="absolute w-full h-full">
        <img
          src={bgImg}
          alt=""
          className="w-full h-full object-cover md:object-contain object-left brigtness-50 filter brightness-75"
        />
      </div>
      <div className="h-full w-full bg-gradient-to-l from-color_xl_dark_gray from-20% relative top-0 md:from-50% lg:from-70% lg:to-80%">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-4 mt-10 md:max-w-[644px] md:mr-0 md:px-6 md:ml-auto ">
            <h3 className="text-color_white text-left">
              Перебьем предложения от конкурентов!
            </h3>
            <p className="text-color_white text-left">
              Скидки от
              <span className="text-color_accent_yellow"> 10 до 25% </span> на
              стоимость трактора
            </p>
            <form
              ref={form}
              action=""
              className="flex flex-col gap-4 mt-6"
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <input
                className="bg-color_white bg-opacity-70 py-2 pl-7 placeholder:text-color_placeholder"
                required
                maxLength={20}
                disabled={isLoading}
                type="text"
                name="user_name"
                id=""
                placeholder="Ваше имя"
              />
              <input
                className="bg-color_white bg-opacity-70 py-2 pl-7 placeholder:text-color_placeholder"
                required
                maxLength={20}
                disabled={isLoading}
                type="tel"
                name="user_phone"
                id=""
                placeholder="Ваш телефон"
              />
              {/* <input type="email" name="" id="" placeholder="Ваш e-mail" /> */}
              <input
                className="bg-color_accent_yellow py-3 font-bold text-xs tracking-widest cursor-pointer hover:bg-color_dark_gray hover:text-color_white"
                type="submit"
                value={
                  isLoading ? "ОТПРАВЛЯЕМ ЗАЯВКУ ..." : "ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ"
                }
                disabled={isLoading}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallBackForm;
