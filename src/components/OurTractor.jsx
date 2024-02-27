import SpecTag from "./SpecTag";
import PromoTag from "./PromoTag";
import ContactUsBtn from "../UI/ContactUsBtn";
import LinkBtn from "../UI/LinkBtn";
import TractorSlider from "../vendor/TractorSlider";

const OurTractor = ({ data, className }) => {
  const { name, promo, keySpecs, price, url, gallery, catalog } = data;

  //hover:scale-105 hover:duration-200 hover:shadow-lg hover:cursor-pointer
  return (
    <div className=" py-4 px-2 border border-color_middle_gray md:p-5 md:px-3 ">
      <div className="grid gap-x-2 grid-cols-1 ">
        <div className="md:w-full row-span-2 md:order-2 min-w-0">
          <TractorSlider data={data} className={className} />
        </div>
        <div className="flex items-center md:gap-1 my-3 justify-center order-6 col-span-2">
          {/* <p className="text-sm mr-2 text-color_dark_gray">Стоимость:</p> */}
          <h4 className="text-xs lg:text-base text-color_accent_red">
            {price} &#x20bd;
          </h4>
        </div>
        <div className="col-span-2 order-first md:h-[48px]">
          <h4 className="text-center text-base ">{name}</h4>
        </div>
      </div>

      <div className="flex items-center mt-4 gap-3">
        <ContactUsBtn
          text="Заказать"
          style=" hover:bg-color_dark hover:text-color_white basis-1/2 px-1 md:px-2 rounded-md"
        />
        <LinkBtn
          style=" w-full h-full text-color_white bg-color_dark hover:bg-color_accent_yellow hover:text-color_dark basis-1/2 rounded-md"
          to={`/tractors/${catalog}/${url}/`}
          text="Подробнее"
        />
      </div>
    </div>
  );
};

export default OurTractor;
