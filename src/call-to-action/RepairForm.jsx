import { useDispatch, useSelector } from "react-redux";
import { createRef, useState, useEffect, useRef } from "react";
import { sendForm, sendFormToAWSBackend } from "../services/actions/form";
import { useForm } from "../hooks/useForm";
import { closePopup } from "../services/actions/form";
import TelegramIcon from "../UI/TelegramIcon";
import WhatsAppIcon from "../UI/WhatsAppIcon";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import icon from "../assets/icons/powerIcon.svg";
import { CLOSE_REPAIR_FORM_POPUP } from "../services/actions/repairs";
import { sendRepairForm } from "../services/actions/repairs";

const RepairForm = () => {
  //const recaptchaRef = createRef();
  const recaptchaRef = useRef();
  const dispatch = useDispatch();

  const { repairFormPending, repairFormSuccess, repairForm } = useSelector(
    (store) => store.repair
  );

  const [captchaValue, setCaptchaValue] = useState(null);

  const { values, handleChange } = useForm();

  const closeHandler = () => {
    dispatch({ type: CLOSE_REPAIR_FORM_POPUP });
  };

  //   useEffect(() => {

  //   }, [recaptchaRef]);

  const submitHandler = (e) => {
    e.preventDefault();

    recaptchaRef.current.executeAsync().then((res) => {
      dispatch(sendRepairForm(values, res));
    });

    // console.log(token);

    // if (!captchaValue) {
    //   alert("Please complete the reCAPTCHA.");
    //   return;
    // }
    //dispatch(sendRepairForm(values, captchaValue));
    //   window.ym(94606235, "reachGoal", "lead");
    //recaptchaRef.current.execute();
  };

  const handleReCaptchaChange = (value) => {
    // if (value === "") {
    //   console.log("Вы не прошли капчу");
    // } else {

    //   //   window.ym(94606235, "reachGoal", "lead");
    //   //   dispatch(sendForm(values, value));
    // }
    setCaptchaValue(value);
  };

  const cursor = repairFormPending ? "cursor-wait" : "cursor-auto";

  if (repairFormSuccess) {
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

  if (repairForm) {
    return (
      <div
        className="flex p-6 md:py-10 flex-col md:max-w-[600px] fixed z-20 text-center bg-color_light_gray rounded-lg"
        style={{ cursor: cursor }}
      >
        <div
          className="absolute top-2 right-2 md:-top-10 md:-right-10 cursor-pointer hover:text-color_accent_yellow hover:scale-110 duration-200"
          onClick={closeHandler}
        >
          <AiOutlineCloseCircle size={40} />
        </div>

        <div>
          <h3 className="uppercase text-lg md:text-3xl">Остались вопросы ?</h3>

          <div className="mt-4">
            <span className="">
              Оставьте заявку на бесплатную консультацию или позвоните по номеру
              <strong className=""> 8 (902) 386-80-00</strong>
            </span>
          </div>

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
              sitekey="6Ldhs9goAAAAAFfjVwDW0dUrqC2frWNHZk3D9mDs"
              //   onChange={handleReCaptchaChange}
              //   data-action="submit"
            />
            <input
              className="bg-color_white bg-opacity-70 mt-3 py-2 pl-7 placeholder:text-color_placeholder"
              required
              maxLength={20}
              disabled={repairFormPending}
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
              disabled={repairFormPending}
              onChange={handleChange}
              value={values.phone}
              type="tel"
              name="phone"
              id=""
              placeholder="Ваш телефон"
            />

            <span className="md:mt-3 text-sm text-left">
              Я даю согласие на обработку персональных данных в соответствии с
              политикой конфиденциальности.
            </span>

            <input
              //class="g-recaptcha"
              //data-sitekey=""
              //data-callback="onSubmit"
              className="bg-color_accent_yellow py-4 font-bold text-xs tracking-widest cursor-pointer hover:bg-color_dark_gray hover:text-color_white duration-200"
              type="submit"
              value={
                repairFormPending
                  ? "ОТПРАВЛЯЕМ ЗАЯВКУ ..."
                  : "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
              }
              disabled={repairFormPending}
            />
          </form>
        </div>
      </div>
    );
  }
};

export default RepairForm;
