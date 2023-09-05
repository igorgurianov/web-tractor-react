import TelegramIcon from "../UI/TelegramIcon";
import WhatsAppIcon from "../UI/WhatsAppIcon";

const FormSuccess = () => {
  return (
    <div className="flex flex-col fixed z-20">
      <h3 className="uppercase text-lg md:text-3xl">Ваша заявка принята!</h3>
      <h4 className="mt-4">Мы свяжемся с Вами в течение часа</h4>
      <p className="mt-4">Наши профили в соц. сетях</p>
      <div className="flex flex-row items-center gap-14 mx-auto mt-10 ">
        <TelegramIcon size="62" />
        <WhatsAppIcon size="62" />
      </div>
    </div>
  );
};

export default FormSuccess;
