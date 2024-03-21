import { Link } from "react-router-dom";
import Card from "./Card";
import LinkBtn from "../UI/LinkBtn";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import sparesData from "../utils/sparesData";

const captionStyle = "p-2";

const OurSpareParts = ({ children }) => {
  return (
    <Section styles="md:my-6 lg:my-8 xl:my-12">
      <SectionHeader
        headerText="Наши запчасти"
        subheaderText="Мы предлагаем широкий спектр надежных запасных частей для сельскохозяйственной техники"
      />

      <div className="flex flex-col">
        <ul className="grid grid-cols-2 grid-rows-[repeat(4,130px)] gap-4 md:gap-6 md:grid-cols-4 md:grid-rows-[repeat(2,160px)]">
          {sparesData.map((item, index) => {
            if (item.position === "span-2" && item.category !== "blade") {
              return (
                <li key={index} className="row-span-2 h-auto">
                  <Link to={`/eqipment/${item.category}/${item.url}`}>
                    <Card
                      img={item.gallery[0].img}
                      alt={item.alt}
                      caption={item.name}
                      captionStyle={captionStyle}
                      style=""
                    />
                  </Link>
                </li>
              );
            } else if (item.category !== "blade") {
              return (
                <li key={index} className="">
                  <Link to={`/eqipment/${item.category}/${item.url}`}>
                    <Card
                      img={item.gallery[0].img}
                      alt={item.alt}
                      caption={item.name}
                      captionStyle={captionStyle}
                    />
                  </Link>
                </li>
              );
            }
          })}
        </ul>

        <LinkBtn
          text="Каталог запчастей"
          to={"/eqipment"}
          style="w-full self-center max-w-[254px] mt-8 md:mt-12 md:self-end hover:bg-color_dark hover:text-color_white"
        />
      </div>
    </Section>
  );
};

export default OurSpareParts;
