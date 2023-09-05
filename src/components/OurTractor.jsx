import SpecTag from "./SpecTag";
import PromoTag from "./PromoTag";
import ContactUsBtn from "../UI/ContactUsBtn";
import LinkBtn from "../UI/LinkBtn";
import TractorSlider from "./TractorSlider";

const OurTractor = ({ data, className }) => {
  const { name, img, promo, keySpecs, price, url, alt, gallery } = data;

  // md:max-w-[461px] lg:max-w-[588px]
  return (
    <div
      className="py-4 px-2 border border-color_middle_gray 
    
     md:p-5 md:px-3"
    >
      <div className="grid gap-x-2 md:gap-x-0 grid-cols-2 md:grid-cols-[35%,65%]">
        {/* <img
          src={img}
          alt={alt}
          className="object-cover md:w-full row-span-2 md:order-2"
        /> */}
        <div className="md:w-full row-span-2 md:order-2 min-w-0">
          <TractorSlider slides={gallery} className={className} />
        </div>
        <div className="grid items-center md:gap-1 md:flex md:mt-3 md:justify-between md:order-6 md:col-start-2">
          <div className="flex items-center justify-end">
            <p className="text-sm mr-2 font-bold">от</p>
            <h4 className="md:text-xs lg:text-lg">{price} &#x20bd;</h4>
          </div>
          <h5 className="font-normal tracking-normal text-right md:font-bold md:text-xs">
            КРЕДИТ ОТ 115 000 &#x20bd;/МЕС.
          </h5>
        </div>
        <h4 className="mb-4 col-span-2 text-left order-first md:col-span-1 md:order-1">
          {name}
        </h4>

        <ul className="flex mt-2 gap-2 flex-col md:justify-between md:mt-4 md:order-2 md:flex-col md:col-span-1">
          {promo.map((promoItem, index) => {
            return <PromoTag data={promoItem} key={index} />;
          })}
        </ul>
      </div>
      <ul className="grid grid-cols-2 gap-2 mt-2 md:flex md:justify-between md:mt-4 xl:mt-1">
        {keySpecs.map((spec, index) => {
          return <SpecTag data={spec} key={index} />;
        })}
      </ul>
      <div className="flex items-center mt-4">
        <LinkBtn
          to={`/tractors/${url}`}
          style="bg-color_dark_gray max-h-[40px] text-color_white border-color_dark_gray border hover:text-color_dark hover:bg-color_white hover:border hover:border-color_dark_gray basis-1/3"
          text="ЛИЗИНГ"
        />
        <ContactUsBtn
          text="ЗАБРОНИРОВАТЬ"
          style="w-full h-full basis-[36%] hover:bg-color_dark hover:text-color_white basis-1/3 px-1 md:px-2"
        />
        <LinkBtn
          to={`/tractors/${url}`}
          style="btn w-full h-full text-color_white bg-color_dark hover:bg-color_accent_yellow hover:text-color_dark basis-1/3"
          text="ПОДРОБНЕЕ"
        />
      </div>
    </div>
  );
};

export default OurTractor;
