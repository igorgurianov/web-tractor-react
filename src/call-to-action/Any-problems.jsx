import TelegramIcon from "../UI/TelegramIcon";
import WhatsAppIcon from "../UI/WhatsAppIcon";
import img from "../assets/images/cta/any-problems.png";
import Section from "../components/Section";
import ContactUsBtn from "../UI/ContactUsBtn";

const AnyProblems = () => {
  return (
    <div className="relative h-[270px] md:h-[340px] max-w-[1920px] lg:mx-auto md:mb-24 mx-auto w-full">
      <div className="absolute w-full h-full overflow-x-hidden">
        <img
          src={img}
          alt=""
          className=" h-full object-cover md:h-full right-[-120px] md:right-0 absolute md:object-contain md:object-right"
        />
      </div>
      <div className="relative w-full h-[220px] md:h-[280px] top-[51px] md:top-[65px] bg-gradient-to-r from-color_light_gray from-50% via-40% via-color_light_gray md:from-45% lg:from-60% md:to-70%">
        <div className="max-w-[1200px] h-full mx-auto ">
          <div className="absolute top-0 h-full max-w-[190px] flex gap-2 justify-center flex-col items-start px-4 md:max-w-[644px] md:px-6">
            <h3 className="text-left">
              Мы готовы решить любые проблемы <br /> с вашим трактором!
            </h3>
            <p className="text-color_accent_red">Свяжитесь с нами.</p>

            <div>
              <ContactUsBtn
                text="Оставить заявку"
                style="text-sm md:my-3 md:py-3 w-full px-8 text-color_xl_dark_gray hover:bg-color_dark hover:text-color_white"
              />
            </div>
            <div className="flex gap-6 mt-2">
              <TelegramIcon size="35" circleFill="#FEC513" />
              <WhatsAppIcon size="35" circleFill="#FEC513" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnyProblems;
