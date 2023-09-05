import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_nqk2ujr";
const TEMPLATE_ID = "template_ld2jtmw";
const PUBLIC_KEY = "J8yH73fN--FgfwZoV";

export const sendEmail = (form) => {
  return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
  //   .then(
  //     (result) => {
  //       //   e.target.reset();
  //       //   setIsLoading(false);
  //       console.log(result.text);
  //       console.log("MESSAGE SEND");
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     }
  //   );
};
