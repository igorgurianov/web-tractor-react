const SpecTag = ({ data }) => {
  return (
    <li className="border border-color_middle_gray flex p-2 gap-1 lg:gap-2 items-center">
      <img src={data.tagImg} alt={data.alt} className="w-3 md:w-4 lg:w-5" />
      <span className="text-color_dark_gray text-xs xl:text-sm">
        {data.description}
      </span>
    </li>
  );
};

export default SpecTag;
