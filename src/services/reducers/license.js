import { OPEN_LICENCE_POPUP, CLOSE_LISENCE_POPUP } from "../actions/license";

const initialState = {
  isOpen: false,
  content: null,
};

export const licenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LICENCE_POPUP: {
      return { ...state, isOpen: true, content: action.payload };
    }
    case CLOSE_LISENCE_POPUP: {
      return { ...state, isOpen: false, content: null };
    }
    default:
      return state;
  }
};
