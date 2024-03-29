const ContactItem = ({ type, href, text, textBottom, icon, props }) => {
  return (
    <div className="flex text-left text-sm lg:text-base gap-2  text-[#A9A9A9] hover:text-color_accent_yellow duration-200">
      {icon}
      <a href={href} target="_blank" className="block w-full">
        {text}
        <br />
        {textBottom}
      </a>
    </div>
  );
};

export default ContactItem;
