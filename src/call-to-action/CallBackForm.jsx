import React from "react";
import bgImg from "../assets/images/form/form-bg-md.png";
import { useDispatch, useSelector } from "react-redux";
import { sendForm } from "../services/actions/form";
import { useForm } from "../hooks/useForm";

const CallBackForm = () => {
  const { isSending } = useSelector((store) => store.form);

  const { values, handleChange } = useForm();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    window.ym(94606235, "reachGoal", "lead");
    dispatch(sendForm(values));
  };

  const cursor = isSending ? "cursor-wait" : "cursor-auto";

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
              Получите
              <span className="text-color_accent_yellow"> скидку </span>
              при заказе трактора :
            </p>
            <form
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
                disabled={isSending}
                onChange={handleChange}
                value={values.name}
                type="text"
                name="name"
                id=""
                placeholder="Ваше имя"
              />
              <input
                className="bg-color_white bg-opacity-70 py-2 pl-7 placeholder:text-color_placeholder"
                required
                maxLength={20}
                disabled={isSending}
                onChange={handleChange}
                value={values.phone}
                type="tel"
                name="phone"
                id=""
                placeholder="Ваш телефон"
              />
              <input
                className="bg-color_accent_yellow py-3 font-bold text-xs tracking-widest cursor-pointer hover:bg-color_dark_gray hover:text-color_white"
                type="submit"
                value={
                  isSending ? "ОТПРАВЛЯЕМ ЗАЯВКУ ..." : "ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ"
                }
                disabled={isSending}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallBackForm;
