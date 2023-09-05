const SectionHeader = ({ headerText, subheaderText, styles }) => {
  return (
    <div
      className={`mb-6 justify-start flex flex-col mx-auto lg:mb-8 ${styles} `}
    >
      <div className="border-l-8 border-color_accent_yellow border-solid pl-4">
        <h2 className="text-left">{headerText}</h2>
        <p className="text-left text-color_dark">{subheaderText}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
