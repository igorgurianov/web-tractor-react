import NumbersBG from "../assets/images/numbers/Numbers-bg.jpg";

const Numbers = () => {
  return (
    <div className="relative md:my-14 lg:my-20 ">
      <div
        style={{
          backgroundImage: `url(${NumbersBG})`,
        }}
        className=" h-full w-full absolute"
      ></div>
      <div className="bg-color_dark/90 w-full h-full relative">
        <ul className="px-3 mx-auto py-6 grid grid-cols-2 auto-cols-min justify-items-start gap-y-6 md:grid-flow-col md:grid-cols-none md:justify-between lg:py-10 max-w-[1200px]">
          <li className="flex items-end gap-1">
            <span className="text-color_accent_red font-bold text-4xl uppercase tracking-tight">
              20
            </span>
            <h4 className="text-color_accent_red tracking-tight md:text-xs whitespace-nowrap lg:text-xl">
              Лет опыта
            </h4>
          </li>
          <li className="flex items-end gap-1">
            <span className="text-color_accent_red font-bold text-4xl uppercase tracking-tight">
              32
            </span>
            <h4 className="text-color_accent_red tracking-tight md:text-xs lg:text-xl">
              Специалиста
            </h4>
          </li>
          <li className="flex items-end gap-1">
            <span className="text-color_accent_red font-bold text-4xl uppercase tracking-tight">
              2.9K
            </span>
            <h4 className="text-color_accent_red tracking-tight md:text-xs lg:text-xl">
              Ремонтов
            </h4>
          </li>
          <li className="flex items-end gap-1">
            <span className="text-color_accent_red font-bold text-4xl uppercase tracking-tight">
              30+
            </span>
            <h4 className="text-color_accent_red tracking-tight md:text-xs lg:text-xl">
              Клиентов
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Numbers;
