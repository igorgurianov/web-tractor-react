import bg from "../assets/images/cta/discount.png";
import ContactUsBtn from "../UI/ContactUsBtn";
const Discount = () => {
  return (
    <div className="relative bg-color_light_gray pb-28 md:pb-0 flex justify-center">
      <div className="mr-0 ml-auto flex justify-end h-full max-w-[90%]">
        <img src={bg} alt="" className="  " />
      </div>
      <div className="absolute top-0 h-full w-full max-w-[1200px] ">
        <div className="bg-color_accent_red absolute inline-block py-2 px-8 text-color_white top-0 left-3 lg:left-6">
          <span className="text-color_white">Скидки до</span>
          <h3 className="text-color_white">350 000 ₽</h3>
        </div>
        <div className="text-left left-3 absolute top-20 md:left-44 lg:left-72 lg:top-16">
          <h2 className="text-color_accent_red">Акция</h2>
          <h3>Только до 10.11.2023</h3>
        </div>
        <div
          className="absolute flex w-full justify-center md:items-center bottom-5 md:top-8
         lg:ml-20"
        >
          <ContactUsBtn
            text="Условия акции"
            style="text-sm py-3 px-8 text-color_xl_dark_gray hover:bg-color_dark hover:text-color_white"
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
