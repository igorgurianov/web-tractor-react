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
import Information from "../components/Information";
import { Helmet } from "react-helmet";
import ProductSwiper from "../vendor/ProductSwiper";

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
            <meta
              name="description"
              content={`купить ${tractor.name} для трактора ДТ-75 ХТЗ-150 Т-150 и другие запчасти`}
            />
            <link
              rel="canonical"
              href={`https://vzgm.ru/eqipment/${tractor.category}/${tractor.url}/`}
            />
          </Helmet>
        </div>
        <Section styles="lg:my-8 xl:my-12">
          <Breadcrumbs />
          <div>
            <SectionHeader
              type="h1"
              headerText={tractor.name}
              styles="mt-6 lg:mt-8"
            />
            <div className="grid auto-rows-min md:grid-cols-[40%_35%_1fr] md:gap-x-6 md:gap-y-3">
              {/* <img
                src={tractor.photos[0].img}
                className="w-full h-full max-h-[169px] lg:max-h-[252px] object-contain container mx-auto md:order-[-1] md:mt-0 md:row-span-2"
                alt={tractor.alt}
              /> */}
              <div className="min-w-0 w-full">
                <ProductSwiper data={tractor} />
              </div>
              <div className="flex mt-4 md:mt-0 flex-col items-end md:row-span-2 md:col-start-3 ">
                <div className="flex items-center justify-start">
                  <h2 className="text-color_accent_red">{tractor.price}</h2>
                </div>
                <h5 className="font-normal tracking-normal text-right">
                  В кредит <br /> ОТ 12 000 &#x20bd;/МЕС.
                </h5>
                <ContactUsBtn
                  text="ЗАБРОНИРОВАТЬ"
                  style="mt-3 md:mt-10 w-full md:px-10 text-color_xl_dark_gray hover:bg-color_dark hover:text-color_white"
                />
              </div>
              <div className="text-left mt-6 md:mt-0 md:col-span-1 md:col-start-2 md:row-start-1">
                <p className="text-base xl:text-lg">
                  {tractor.shortDescription}
                </p>
                <ul className="flex gap-2 flex-wrap mt-6 md:mt-0  items-end content-start">
                  {tractor.keySpecs?.map((spec, index) => {
                    return <SpecTag data={spec} key={index} />;
                  })}
                </ul>
              </div>
            </div>

            <div className="mt-2 p-2">
              <Information tab="fullDescription" tractor={tractor} />
              <Information tab="characteristics" tractor={tractor} />
              <Information tab="advantages" tractor={tractor} />
              <Information tab="scope" tractor={tractor} />
            </div>
          </div>
        </Section>
        {/* <div className="bg-color_light_gray">
          <Brands />
        </div> */}
        <OurSpareParts />
      </div>
    );
  }
};

export default SingleSparePage;
