import NewsSwiper from "./NewsSwiper";
import { newsData } from "../utils/newsData";

const NewsSlider = () => {
  return (
    <div>
      <NewsSwiper slides={newsData} sliderName="news"></NewsSwiper>
    </div>
  );
};

export default NewsSlider;
