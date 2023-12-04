import { sendEmailToBackend } from "../../utils/email";
export const ADD_REPAIR_SERVICE = "ADD_REPAIR_SERVICE";
export const REMOVE_REPAIR_SERVICES = "REMOVE_REPAIR_SERVICES";

export const OPEN_ADDITIONAL_INFO_POPUP = "OPEN_ADDITIONAL_INFO_POPUP";
export const CLOSE_ADDITIONAL_INFO_POPUP = "CLOSE_ADDITIONAL_INFO_POPUP";

export const OPEN_REPAIR_FORM_POPUP = "OPEN_REPAIR_FORM_POPUP";
export const CLOSE_REPAIR_FORM_POPUP = "CLOSE_REPAIR_FORM_POPUP";

export const SEND_REPAIR_FORM_SUCCESS = "SEND_REPAIR_FORM_SUCCESS";
export const SEND_REPAIR_FORM_PENDING = "SEND_REPAIR_FORM_PENDING";
export const SEND_REPAIR_FORM_FAILED = "SEND_REPAIR_FORM_FAILED";

export function sendRepairForm(values, token) {
  return function (dispatch) {
    dispatch({ type: SEND_REPAIR_FORM_PENDING });
    sendEmailToBackend(values, token)
      .then(() => {
        dispatch({ type: SEND_REPAIR_FORM_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: SEND_REPAIR_FORM_FAILED });
      });
  };
}
