import {
  GET_CONTENT_FAILED,
  GET_CONTENT_REQUEST,
  GET_CONTENT_SUCCESS,
} from "../actions/content";

const initialState = {
  loading: false,
  success: false,
  fail: false,
  content: [],
};

export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT_REQUEST: {
      return { ...state, loading: true };
    }

    case GET_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        content: action.payload,
      };
    case GET_CONTENT_FAILED:
      return { ...state, loading: false, success: false };

    default:
      return state;
  }
};
