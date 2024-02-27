import React from "react";
import { closeLicencePopup } from "../services/actions/license";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

function LargeImagePopup() {
  const dispatch = useDispatch();
  const license = useSelector((store) => store.license);

  const closeHandler = () => {
    dispatch(closeLicencePopup());
  };

  return (
    <div className="flex md:p-6 p-2 flex-col fixed z-20 text-center bg-color_light_gray rounded-lg max-h-[80%] ">
      <div
        className="absolute top-2 right-2 md:-top-10 md:-right-10 cursor-pointer hover:text-color_accent_yellow hover:scale-110 duration-200"
        onClick={closeHandler}
      >
        <AiOutlineCloseCircle size={40} />
      </div>
      <div className="overflow-y-scroll mt-12 md:mt-0">
        <img src={license.content} alt="" className="" />
      </div>
    </div>
  );
}

export default LargeImagePopup;
