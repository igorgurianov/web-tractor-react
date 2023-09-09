import TelegramIcon from "../UI/TelegramIcon";
import WhatsAppIcon from "../UI/WhatsAppIcon";
import { useState, useContext, useRef } from "react";
import { sendEmail } from "../utils/email";
import { PopupContext } from "../context/PopupContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisable] = useState(true);
  const { formSuccess, setFormSuccess, setIsPopupOpen, closePopup } =
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
    <div className="flex p-6 flex-col fixed z-20 text-center bg-color_light_gray rounded-lg">
      <div
        className="absolute top-2 right-2 md:-top-10 md:-right-10 cursor-pointer hover:text-color_accent_yellow hover:scale-110 duration-200"
        onClick={closePopup}
      >
        <AiOutlineCloseCircle size={40} />
      </div>
      <h3 className="uppercase text-lg md:text-3xl mt-8 md:mt-5">
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
          className="bg-color_accent_yellow py-3 font-bold text-xs tracking-widest cursor-pointer hover:bg-color_dark_gray hover:text-color_white duration-200"
          type="submit"
          value={isLoading ? "ОТПРАВЛЯЕМ ЗАЯВКУ ..." : "ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ"}
          disabled={isLoading}
        />
      </form>
      <h3 className="uppercase text-lg md:text-3xl mt-6 md:mt-8 text-center">
        Или напишите нам в соц сетях
      </h3>
      <div className="flex flex-row items-center gap-14 mx-auto mt-6 md:mt-8">
        <TelegramIcon size="50" />
        <WhatsAppIcon size="50" />
      </div>
    </div>
  );
};

export default ContactUsForm;
