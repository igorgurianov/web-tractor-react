import SpecTag from "./SpecTag";
import PromoTag from "./PromoTag";
import ContactUsBtn from "../UI/ContactUsBtn";
import LinkBtn from "../UI/LinkBtn";
import TractorSlider from "./TractorSlider";

const OurTractor = ({ data, className }) => {
  const { name, promo, keySpecs, price, url, gallery } = data;

  return (
    <div
      className="py-4 px-2 border border-color_middle_gray 
    
     md:p-5 md:px-3"
    >
      <div className="grid gap-x-2 md:gap-x-0 grid-cols-2 md:grid-cols-[35%,65%]">
        <div className="md:w-full row-span-2 md:order-2 min-w-0">
          <TractorSlider slides={gallery} className={className} />
        </div>
        <div className="flex items-center md:gap-1 my-3 justify-end order-6 col-span-2">
          <p className="text-sm mr-2 text-color_dark_gray">
            Базовая комплектация:
          </p>
          <h4 className="md:text-xs lg:text-lg">{price} &#x20bd;</h4>
        </div>
        <h4 className="mb-4 col-span-2 text-left order-first md:col-span-1 md:order-1">
          {name}
        </h4>

        <ul className="flex mt-2 gap-2 flex-col md:gap-4 md:mt-0 md:order-2 md:flex-col md:col-span-1">
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
          style="bg-color_dark_gray max-h-[40px] text-color_white border-color_dark_gray border hover:text-color_dark hover:bg-color_white hover:border hover:border-color_dark_gray basis-1/3"
          to={`/tractors/${url}/leasing`}
          text="ЛИЗИНГ"
        />
        <ContactUsBtn
          text="КУПИТЬ"
          style=" hover:bg-color_dark hover:text-color_white basis-1/3 px-1 md:px-2"
        />
        <LinkBtn
          style=" w-full h-full text-color_white bg-color_dark hover:bg-color_accent_yellow hover:text-color_dark basis-1/3"
          to={`/tractors/${url}/description`}
          text="ПОДРОБНЕЕ"
        />
      </div>
    </div>
  );
};

export default OurTractor;
