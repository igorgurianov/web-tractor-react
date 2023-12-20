import { useDispatch, useSelector } from "react-redux";
import { createRef, useEffect, useState } from "react";
import { sendForm } from "../services/actions/form";
import { useForm } from "../hooks/useForm";
import { closePopup } from "../services/actions/form";
import TelegramIcon from "../UI/TelegramIcon";
import WhatsAppIcon from "../UI/WhatsAppIcon";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import icon from "../assets/icons/powerIcon.svg";
import React from "react";
import { CLOSE_ADDITIONAL_INFO_POPUP } from "../services/actions/repairs";
import { priceListRepair } from "../utils/const";
import ContactUsBtn from "../UI/ContactUsBtn";
import tickIconNoframe from "../assets/icons/tickNoFrame.svg";

export default function RepairPopup() {
  const dispatch = useDispatch();
  const [activeDetails, setActiveDetails] = useState([]);
  const { popupContent } = useSelector((store) => store.repair);

  useEffect(() => {
    const activeEl = priceListRepair.find((el) => el.id === popupContent);
    setActiveDetails(activeEl);
  }, [popupContent]);

  //console.log(activeDetails.details.name);

  const closeHandler = () => {
    dispatch({ type: CLOSE_ADDITIONAL_INFO_POPUP });
  };

  if (activeDetails.details && popupContent) {
    return (
      <div className="flex max-w-[90%] max-h-[90%] md:max-w-[1152px] md:p-8 flex-col fixed z-20 text-center bg-color_light_gray rounded-lg">
        <div
          className="absolute top-2 right-2 md:-top-10 md:-right-10 cursor-pointer hover:text-color_accent_yellow hover:scale-110 duration-200"
          onClick={closeHandler}
        >
          <AiOutlineCloseCircle size={40} />
        </div>

        <div className="p-4 flex flex-col md:flex-row gap-6 overflow-y-scroll">
          <div className="md:w-1/2">
            <h3 className="uppercase text-left text-lg md:text-xl mt-8 md:mt-5">
              {activeDetails.details.name}
            </h3>
            <div className="mt-4 text-left">
              {activeDetails.details.content.description.map((item, index) => {
                if (item.type === "para") {
                  return (
                    <p className="md:text-base mb-2" key={index}>
                      {item.content}
                    </p>
                  );
                } else if (item.type === "list") {
                  return (
                    <ul className="md:ml-8 mt-2 mb-6 list-decimal" key={index}>
                      {item.content.map((item, index) => {
                        return (
                          <li className="ml-3" key={index}>
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
              })}
            </div>
            <div className="md:flex md:mt-6">
              <ContactUsBtn
                onClick={() => closeHandler()}
                text="Записаться"
                type="repair"
                style="md:px-16 w-full hover:bg-color_dark hover:text-color_white"
              />
            </div>
          </div>

          <div className="py-1 md:py-4 md:w-1/2">
            <h3 className="">Виды работ</h3>
            <table className="table-auto w-full ">
              <tbody className="">
                {activeDetails.details.content.priceTable.map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-color_light_gray "
                        : "bg-color_white"
                    }
                  >
                    <td className="text-s p-2 w-[70%] text-left md:text-base ">
                      {row.column1}
                    </td>
                    <td className="text-s p-2 w-[70%] text-left md:text-base ">
                      {/* {row.column2} */}
                      <span
                        className="block mx-auto w-6 h-6 bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url(${tickIconNoframe})` }}
                      ></span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
