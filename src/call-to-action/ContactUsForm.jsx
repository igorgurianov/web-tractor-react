import { useDispatch, useSelector } from "react-redux";
import { sendForm } from "../services/actions/form";
import { useForm } from "../hooks/useForm";
import { closePopup } from "../services/actions/form";
import TelegramIcon from "../UI/TelegramIcon";
import WhatsAppIcon from "../UI/WhatsAppIcon";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ContactUsForm = () => {
  const dispatch = useDispatch();
  const { contactPopup, isSending, success } = useSelector(
    (store) => store.form
  );

  const { values, handleChange } = useForm();

  const closeHandler = () => {
    dispatch(closePopup());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    window.ym(94606235, "reachGoal", "lead");
    dispatch(sendForm(values));
  };

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
        <h3 className="mt-4 uppercase text-lg md:text-3xl">
          Ваша заявка принята!
        </h3>
        <h4 className="mt-6">Мы свяжемся с Вами в течение часа</h4>
        <p className="mt-6">Наши профили в соц. сетях:</p>
        <div className="flex flex-row items-center gap-14 mx-auto mt-6">
          <TelegramIcon size="50" />
          <WhatsAppIcon size="50" />
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
            {/* <input type="email" name="" id="" placeholder="Ваш e-mail" /> */}
            <input
              className="bg-color_accent_yellow py-3 font-bold text-xs tracking-widest cursor-pointer hover:bg-color_dark_gray hover:text-color_white duration-200"
              type="submit"
              value={
                isSending ? "ОТПРАВЛЯЕМ ЗАЯВКУ ..." : "ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ"
              }
              disabled={isSending}
            />
          </form>
          <h3 className="uppercase text-lg md:text-3xl mt-6 md:mt-8 text-center">
            Или напишите нам в соц сетях
          </h3>
        </div>
        <div className="flex flex-row items-center gap-14 mx-auto mt-6 md:mt-8">
          <TelegramIcon size="50" />
          <WhatsAppIcon size="50" />
        </div>
      </div>
    );
  }
};

export default ContactUsForm;
