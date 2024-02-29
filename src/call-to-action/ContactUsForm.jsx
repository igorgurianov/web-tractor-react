import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { createRef, useState } from "react";
import { sendForm } from "../services/actions/form";
import { useForm } from "../hooks/useForm";
import { closePopup } from "../services/actions/form";
import TelegramIcon from "../UI/TelegramIcon";
import WhatsAppIcon from "../UI/WhatsAppIcon";
import { AiOutlineCloseCircle } from "react-icons/ai";

import icon from "../assets/icons/powerIcon.svg";
import { organizationInfo } from "../utils/const";
import tickIcon from "../assets/icons/tick-in-circle.svg";

const ContactUsForm = () => {
  const recaptchaRef = createRef();
  const dispatch = useDispatch();
  const { contactPopup, isSending, success, phone } = useSelector(
    (store) => store.form
  );

  const { values, handleChange } = useForm();

  const closeHandler = () => {
    dispatch(closePopup());
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   recaptchaRef.current.execute();
  // };

  // const handleReCaptchaChange = (value) => {
  //   if (value === "") {
  //     console.log("Вы не прошли капчу");
  //   } else {
  //     window.ym(94606235, "reachGoal", "lead");
  //     dispatch(sendForm(values, value));
  //   }
  // };

  const submitWithReCaptcha = async (e) => {
    e.preventDefault();
    window.ym(94606235, "reachGoal", "lead");
    const token = await recaptchaRef.current.executeAsync();
    dispatch(sendForm(values, token));
  };

  //console.log(values.phone);
  // const handleReCaptchaChange = (value) => {
  //   if (value === "") {
  //     console.log("Вы не прошли капчу");
  //   } else {
  //     window.ym(94606235, "reachGoal", "lead");
  //     dispatch(sendForm(values, value));
  //   }
  // };

  const cursor = isSending ? "cursor-wait" : "cursor-auto";

  if (success) {
    return (
      <div className="flex p-6 flex-col fixed z-20 text-center bg-color_light_gray rounded-lg">
        <div
          className="absolute top-2 right-2 md:-top-10 md:-right-10 cursor-pointer hover:text-color_accent_yellow hover:scale-110 duration-200"
          onClick={closeHandler}
        >
          <AiOutlineCloseCircle size={40} />
        </div>
        <div className="md:max-w-[540px] flex flex-col items-center">
          <div
            style={{ backgroundImage: `url(${tickIcon})` }}
            className="h-20 w-20"
          />
          <h3 className="mt-4 text-xl md:text-2xl">Заявка отправлена</h3>

          <p className="mt-6">
            Специалисты свяжутся с вами в течение одного рабочего дня по номеру:{" "}
            {phone}. Если что-то пойдет не так, звоните:{" "}
            {organizationInfo.phone.aroundClock.toShow} или напишите нам в
            соцсетях
          </p>
          <div className="flex flex-row items-center justify-center gap-14 mx-auto mt-6">
            <TelegramIcon size="50" />
            <WhatsAppIcon size="50" />
          </div>
        </div>
      </div>
    );
  }

  if (contactPopup) {
    return (
      <div
        className="flex p-6 flex-col fixed z-20 text-center bg-color_light_gray rounded-lg"
        style={{ cursor: cursor }}
      >
        <div
          className="absolute top-2 right-2 md:-top-10 md:-right-10 cursor-pointer hover:text-color_accent_yellow hover:scale-110 duration-200"
          onClick={closeHandler}
        >
          <AiOutlineCloseCircle size={40} />
        </div>
        <div>
          <h3 className="uppercase text-lg md:text-3xl mt-8 md:mt-5">
            Оставьте заявку и мы перезвоним
          </h3>
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              submitWithReCaptcha(e);
            }}
          >
            <ReCAPTCHA
              style={{ display: "inline-block" }}
              ref={recaptchaRef}
              size="invisible"
              sitekey="6LcOIc8oAAAAAKq31Zp9lOjnJ5hIj7RuR4aAnuGz"
              // onChange={handleReCaptchaChange}
            />
            <div className="flex flex-col md:mt-8">
              <input
                className="bg-color_white bg-opacity-70 py-2 pl-7 placeholder:text-color_placeholder border border-color_accent_yellow"
                required
                maxLength={20}
                disabled={isSending}
                onChange={handleChange}
                value={values.name}
                type="text"
                name="name"
                id=""
                placeholder="Введите имя"
              />

              <span className="text-color_accent_red text-sm text-left ml-2 h-[20px]">
                {values.name ? "" : "Заполните имя"}
              </span>
            </div>
            <div className="flex flex-col">
              <input
                className="bg-color_white bg-opacity-70 py-2 pl-7 placeholder:text-color_placeholder border border-color_accent_yellow"
                required
                maxLength={20}
                disabled={isSending}
                onChange={handleChange}
                value={values.phone}
                type="tel"
                name="phone"
                id=""
                placeholder="Введите телефон"
              />
              <span className="text-color_accent_red text-sm text-left ml-2 h-[20px]">
                {values.phone ? "" : "Заполните телефон"}
              </span>
            </div>
            <input
              className="bg-color_accent_yellow py-3 font-bold text-xs tracking-widest cursor-pointer hover:bg-color_dark_gray hover:text-color_white duration-200"
              type="submit"
              value={
                isSending ? "ОТПРАВЛЯЕМ ЗАЯВКУ ..." : "ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ"
              }
              disabled={isSending}
            />
          </form>
          <h3 className="uppercase text-lg mt-6 text-center">
            Или напишите нам в соц сетях
          </h3>
        </div>
        <div className="flex flex-row items-center gap-14 mx-auto mt-6">
          <TelegramIcon size="50" />
          <WhatsAppIcon size="50" />
        </div>
      </div>
    );
  }
};

export default ContactUsForm;
