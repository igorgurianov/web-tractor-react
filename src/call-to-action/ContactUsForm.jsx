import { useDispatch, useSelector } from "react-redux";
import { createRef } from "react";
import { sendForm } from "../services/actions/form";
import { useForm } from "../hooks/useForm";
import { closePopup } from "../services/actions/form";
import TelegramIcon from "../UI/TelegramIcon";
import WhatsAppIcon from "../UI/WhatsAppIcon";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import icon from "../assets/icons/powerIcon.svg";

const ContactUsForm = () => {
  const recaptchaRef = createRef();
  const dispatch = useDispatch();
  const { contactPopup, isSending, success } = useSelector(
    (store) => store.form
  );

  const { values, handleChange } = useForm();

  const closeHandler = () => {
    dispatch(closePopup());
  };

  // function onSubmit(token) {
  //   debugger;
  //   console.log("onSubmit");
  //   submitHandler(token);
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
  };

  const handleReCaptchaChange = (value) => {
    if (value === "") {
      console.log("Вы не прошли капчу");
    } else {
      window.ym(94606235, "reachGoal", "lead");
      dispatch(sendForm(values, value));
    }
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
          {/* <div className="mt-4 text-left">
            <span className="m-0">
              Акция только до
              <strong className="text-color_accent_red"> 25.01.2024 </strong>
            </span>
            <span className="m-0">выберите свой бонус в подарок:</span>
          </div> */}
          {/* <div className="flex flex-col items-start justify-between py-1 md:py-4">
            <div className="py-1">
              <input type="radio" name="discount" id="option_2" />
              <label className="ml-2 cursor-pointer" htmlFor="option_2">
                Расходники для ТО - 1
              </label>
            </div>

            <div className="py-1 text-left">
              <input type="radio" name="discount" id="option_1" />
              <label className="ml-2 cursor-pointer" htmlFor="option_1">
                Бесплатная доставка до 500км
              </label>
            </div>

            <div className="py-1">
              <input type="radio" name="discount" id="option_3" />
              <label className="ml-2 cursor-pointer" htmlFor="option_3">
                Скидка 2%
              </label>
            </div>
          </div> */}

          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <ReCAPTCHA
              style={{ display: "inline-block" }}
              ref={recaptchaRef}
              size="invisible"
              sitekey="6LcOIc8oAAAAAKq31Zp9lOjnJ5hIj7RuR4aAnuGz"
              onChange={handleReCaptchaChange}
            />
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
            {/* <input type="email" name="" id="" placeholder="Ваш e-mail" /> */}
            <input
              //class="g-recaptcha"
              //data-sitekey=""
              //data-callback="onSubmit"
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
