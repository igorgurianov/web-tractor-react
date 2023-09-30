import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sparesData from "../utils/sparesData";
import Section from "../components/Section";
import SpecTag from "../components/SpecTag";
import SectionHeader from "../components/SectionHeader";
import OurSpareParts from "../components/OurSpareParts";
import React from "react";

import ContactUsBtn from "../UI/ContactUsBtn";
import Brands from "../call-to-action/Brands";
import Breadcrumbs from "../UI/Breadcrumbs";
import { Helmet } from "react-helmet";

const SingleSparePage = () => {
  const { id } = useParams();
  const [tractor, setTractor] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const buttonClass = (index) => {
    const baseClass =
      "text-xs font-bold uppercase pt-3 pb-2 px-2 border-r-color_dark_gray border-r last-of-type:border-none w-full xl:text-xl hover:bg-color_dark hover:text-color_white hover:duration-300 ";
    return (
      baseClass +
      (activeTab === index ? "bg-color_accent_yellow" : "bg-color_white")
    );
  };

  useEffect(() => {
    setTractor(sparesData.find((singleProduct) => singleProduct.url === id));
  }, [id]);

  if (tractor) {
    return (
      <div>
        <div>
          <Helmet>
            <title>{`ВЗГМ - ${tractor.name}`}</title>
            <meta name="description" content={tractor.metaDescription} />
            <link
              rel="canonical"
              href={`https://vzgm.ru/eqipment/${tractor.category}/${tractor.url}`}
            />
          </Helmet>
        </div>
        <Section styles="lg:my-8 xl:my-12">
          <Breadcrumbs />
          <div>
            <SectionHeader headerText={tractor.name} styles="mt-6 lg:mt-8" />
            <div className="grid grid-cols-2 auto-rows-min md:grid-cols-[40%_35%_1fr] md:gap-x-6 md:gap-y-3">
              <img
                src={tractor.img}
                className="w-full h-full max-h-[169px] lg:max-h-[252px] object-contain container mx-auto md:order-[-1] md:mt-0 md:row-span-2"
                alt={tractor.alt}
              />
              <div className="flex flex-col items-end md:row-span-2 md:col-start-3 md:justify-between">
                <div className="flex items-center justify-end">
                  <h2 className="text-color_accent_red">
                    {tractor.price} &#x20bd;
                  </h2>
                </div>
                <h5 className="font-normal tracking-normal text-right">
                  В кредит <br /> ОТ 12 000 &#x20bd;/МЕС.
                </h5>
                <ContactUsBtn
                  text="ЗАБРОНИРОВАТЬ"
                  style="mt-3 md:mt-10 md:px-10 text-color_xl_dark_gray hover:bg-color_dark hover:text-color_white"
                />
              </div>
              <div className="col-span-2 text-left mt-6 md:mt-0 md:col-span-1 md:col-start-2 md:row-start-1">
                <p className="text-base xl:text-lg">
                  {tractor.shortDescription}
                </p>
              </div>
              <ul className="flex gap-2 col-span-2 flex-wrap mt-6 md:mt-0 md:col-start-2 md:row-start-2 md:col-span-1 items-end content-start">
                {tractor.keySpecs.map((spec, index) => {
                  return <SpecTag data={spec} key={index} />;
                })}
              </ul>
            </div>
            <div className="flex overflow-scroll md:overflow-auto mt-6 lg:mt-8 justify-between">
              <button
                className={buttonClass(0)}
                onClick={() => handleTabClick(0)}
              >
                Описание
              </button>

              <button
                className={buttonClass(1)}
                onClick={() => handleTabClick(1)}
              >
                Характеристики
              </button>

              <button
                className={buttonClass(2)}
                onClick={() => handleTabClick(2)}
              >
                Преимущества
              </button>

              <button
                className={buttonClass(3)}
                onClick={() => handleTabClick(3)}
              >
                Сфера применения
              </button>
            </div>
            <div className="border border-color_accent_yellow p-2 mt-4 text-color_dark">
              {activeTab === 0 && (
                <div className="text-left">
                  {tractor.fullDescription.map((item) => {
                    if (item.type === "paragraph") {
                      return (
                        <p className="md:text-base mb-2">{item.content}</p>
                      );
                    } else if (item.type === "list") {
                      return (
                        <ul className="list-disc ml-8 mt-2 mb-6">
                          {item.content.map((item) => {
                            return <li className="ml-3">{item}</li>;
                          })}
                        </ul>
                      );
                    }
                  })}
                </div>
              )}
              {activeTab === 3 && (
                <ul className="text-left">
                  {tractor.scope.map((term, index) => {
                    return <li key={index}>{term}</li>;
                  })}
                </ul>
              )}
              {activeTab === 1 && (
                <div className="md:columns-2">
                  <table className="table-auto w-full">
                    <tbody>
                      {tractor.characteristics.map((row, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0
                              ? "bg-color_light_gray md:break-inside-avoid-column"
                              : "bg-color_white md:break-inside-avoid-column"
                          }
                        >
                          <td className="text-xs p-1 w-[70%] text-left md:text-base">
                            {row.column1}
                          </td>
                          <td className="text-xs p-1 text-left md:text-base">
                            {row.column2}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === 2 && (
                <ul className="text-left">
                  {tractor.advantages.map((term, index) => {
                    return <li key={index}>{term}</li>;
                  })}
                </ul>
              )}
            </div>
          </div>
        </Section>
        <div className="bg-color_light_gray">
          <Brands />
        </div>
        <OurSpareParts />
      </div>
    );
  }
};

export default SingleSparePage;
