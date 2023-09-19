export const GET_CONTENT_REQUEST = "GET_CONTENT_REQUEST";
export const GET_CONTENT_SUCCESS = "GET_CONTENT_SUCCESS";
export const GET_CONTENT_FAILED = "GET_CONTENT_FAILED";

export const setContent = (data) => {
  return {
    type: GET_CONTENT_SUCCESS,
    payload: data,
  };
};
