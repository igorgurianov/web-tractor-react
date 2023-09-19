import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathNameRef = useRef(pathname);

  useEffect(() => {
    const prevPathName = prevPathNameRef.current;

    if (
      prevPathName.startsWith("/tractors/") &&
      pathname.startsWith("/tractors/")
    ) {
      return;
    }

    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });

    prevPathNameRef.current = pathname;
  }, [pathname]);

  return null;
}
