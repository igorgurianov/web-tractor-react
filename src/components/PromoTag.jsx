import PresentIcon from "./PresentIcon";

const PromoTag = ({ data }) => {
  return (
    <li className="flex gap-2 items-center">
      <PresentIcon size="32" circleFill="#DADADA" />
      <div className="flex flex-col text-sm items-start">
        <h5 className="leading-none">{data.name}</h5>
        <span className="text-color_dark_gray leading-none">
          {data.description}
        </span>
      </div>
    </li>
  );
};

export default PromoTag;
