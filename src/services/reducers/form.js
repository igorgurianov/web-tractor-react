import {
  FORM_FAILED,
  FORM_SEND,
  FORM_SUCCESS,
  CLOSE_CONTACT_POPUP,
  OPEN_CONTACT_POPUP,
} from "../actions/form";

const initialState = {
  isSending: false,
  success: false,
  contactPopup: false,
  contactSuccess: false,
  contactFail: false,
  phone: "",
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CONTACT_POPUP: {
      return { ...state, contactPopup: true };
    }

    case FORM_SUCCESS:
      return {
        ...state,
        isSending: false,
        success: true,
        contactPopup: false,
        contactSuccess: true,
      };
    case FORM_SEND:
      return { ...state, isSending: true, phone: action.payload.phone };
    case FORM_FAILED:
      return { ...state, isSending: false, success: false };
    case CLOSE_CONTACT_POPUP:
      return {
        ...state,
        contactSuccess: false,
        contactPopup: false,
      };
    default:
      return state;
  }
};
