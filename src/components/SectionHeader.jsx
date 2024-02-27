const SectionHeader = ({ headerText, subheaderText, styles, type }) => {
  return (
    <div
      className={`mb-6 justify-start flex flex-col mx-auto lg:mb-8 ${styles} `}
    >
      <div className="border-l-8 border-color_accent_yellow border-solid pl-4">
        {type === "h1" ? (
          <h1 className="text-left text-lg md:text-3xl">{headerText}</h1>
        ) : (
          <h2 className="text-left">{headerText}</h2>
        )}

        <h3 className="text-left text-color_dark font-normal  font-primary tracking-normal">
          {subheaderText}
        </h3>
      </div>
    </div>
  );
};

export default SectionHeader;
