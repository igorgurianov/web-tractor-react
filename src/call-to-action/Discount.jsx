import bg from "../assets/images/cta/discount.png";
import ContactUsBtn from "../UI/ContactUsBtn";
import PresentIcon from "../components/PresentIcon";

const Discount = () => {
  return (
    <div className="relative bg-color_light_gray pb-72 md:pb-5 flex justify-center">
      <div className="mr-0 ml-auto flex justify-end h-full max-w-[90%] md:h-[270px]">
        <img src={bg} alt="" className="  " />
      </div>
      <div className="absolute top-1 h-full w-full max-w-[1200px] ">
        {/* <div className="bg-color_accent_red absolute inline-block py-2 px-8 text-color_white top-0 left-3 lg:left-6">
          <span className="text-color_white">Скидки до</span>
          <h3 className="text-color_white">350 000 ₽</h3>
        </div> */}
        <div className="text-left px-3 absolute top-[30%] md:top-1">
          <h2 className="text-color_accent_red">Акция ! </h2>
          <h4 className="my-2">
            Выбери бонус при заказе до{" "}
            <span className="text-color_accent_red">
              15 декабря 2023 <small>г.</small>
            </span>
          </h4>

          <div>
            <ul className="my-2 flex flex-col gap-3">
              <li className="flex items-center">
                <PresentIcon size={30} />
                <span className="ml-2">Расходники для ТО-1</span>
              </li>
              <li className="flex items-center">
                <PresentIcon size={30} />
                <span className="ml-2">Бесплатная доставка до 500км.</span>
              </li>
              <li className="flex items-center">
                <PresentIcon size={30} />
                <span className="ml-2">Скидка 2%</span>
              </li>
            </ul>
          </div>
          <ContactUsBtn
            text="Оставить заявку"
            style="text-sm py-3 w-full px-8 text-color_xl_dark_gray hover:bg-color_dark hover:text-color_white"
          />
        </div>
        {/* <div
          className="absolute flex w-full justify-center md:items-center bottom-5 md:top-8
         lg:ml-20"
        >
          
        </div> */}
      </div>
    </div>
  );
};

export default Discount;
