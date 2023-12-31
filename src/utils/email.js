const EMAIL_JS_API = "https://api.emailjs.com/api/v1.0/email/send";

const SERVICE_ID = "service_nqk2ujr";
const TEMPLATE_ID = "template_ld2jtmw";
const PUBLIC_KEY = "J8yH73fN--FgfwZoV";

const checkResponse = (res) => {
  return res.ok ? res : res.then((err) => Promise.reject(err));
};

export const sendEmail = (form, token) => {
  return fetch(`${EMAIL_JS_API}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        name: form.name,
        phone: form.phone,
        "g-recaptcha-response": token,
      },
    }),
  }).then(checkResponse);
};

const BACKEND_API_NEW = "https://mailservice20231202163932.azurewebsites.net";

export const sendEmailToBackend = (values, token) => {
  return fetch(`${BACKEND_API_NEW}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: values.name,
      phone: values.phone,
      captchaResponse: token,
    }),
  }).then((res) => res.json());
  // .then((res) => console.log(res))
  // .catch((error) => console.log("error", error))
};
