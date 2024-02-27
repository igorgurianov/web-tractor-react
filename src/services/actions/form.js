import { sendEmail } from "../../utils/email";
export const FORM_SEND = "ORDER_DETAILS_REQUEST";
export const FORM_SEND_TO_BACKEND = "FORM_SEND_TO_BACKEND";
export const FORM_SUCCESS = "ORDER_DETAILS_SUCCESS";
export const FORM_FAILED = "ORDER_DETAILS_FAILED";
export const OPEN_CONTACT_POPUP = "OPEN_CONTACT_POPUP";
export const CLOSE_CONTACT_POPUP = "CLOSE_CONTACT_POPUP";

export function sendForm(data, token) {
  return function (dispatch) {
    dispatch({ type: FORM_SEND, payload: data });
    sendEmail(data, token)
      .then(() => {
        dispatch({ type: FORM_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: FORM_FAILED });
      });
  };
}

export const closePopup = () => {
  return {
    type: CLOSE_CONTACT_POPUP,
  };
};
