const ContactItem = ({ type, href, text, icon, props }) => {
  return (
    <div className="flex text-left text-sm lg:text-base gap-2 text-color_white hover:text-color_accent_yellow duration-200">
      {icon}
      <a href={href} target="_blank">
        {text}
      </a>
    </div>
  );
};

export default ContactItem;
