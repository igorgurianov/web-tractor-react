import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import icon from "../assets/icons/top-arrow-5-svgrepo-com.svg";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathNameRef = useRef(pathname);

  const scroll = useEffect(() => {
    const prevPathName = prevPathNameRef.current;

    // if (
    //   prevPathName.startsWith("/tractors/") &&
    //   pathname.startsWith("/tractors/")
    // ) {
    //   return;
    // }

    window.scrollTo({
      top: 0,
    });

    prevPathNameRef.current = pathname;
  }, [pathname]);

  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="fixed p-1 md:p-2 z-20 right-[5%] bottom-[3%] md:right-[12%] md:bottom-[10%] bg-color_dark_gray bg-opacity-50 rounded-full hover:cursor-pointer"
    >
      <div
        className="h-10 w-10"
        style={{
          background: `url(${icon})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
