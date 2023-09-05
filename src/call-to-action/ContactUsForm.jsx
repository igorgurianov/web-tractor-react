import TelegramIcon from "../UI/TelegramIcon";
import WhatsAppIcon from "../UI/WhatsAppIcon";
import { useState, useContext, useRef } from "react";
import { sendEmail } from "../utils/email";
import { PopupContext } from "../context/PopupContext";

const ContactUsForm = () => {
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
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
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
    <div className="flex p-6 flex-col fixed z-20 text-center">
      <h3 className="uppercase text-lg md:text-3xl">
        Оставьте заявку и мы перезвоним
      </h3>

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
          value={isLoading ? "ОТПРАВЛЯЕМ ЗАЯВКУ ..." : "ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ"}
          disabled={isLoading}
        />
      </form>
      <h3 className="uppercase text-lg md:text-3xl mt-10 text-center">
        Или напишите нам в соц сетях
      </h3>
      <div className="flex flex-row items-center gap-14 mx-auto mt-10 ">
        <TelegramIcon size="62" />
        <WhatsAppIcon size="62" />
      </div>
    </div>
  );
};

export default ContactUsForm;
