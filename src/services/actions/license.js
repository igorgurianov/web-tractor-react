export const OPEN_LICENCE_POPUP = "OPEN_LICENCE_POPUP";
export const CLOSE_LISENCE_POPUP = "CLOSE_LISENCE_POPUP";

export const openLicencePopup = (content) => {
  return {
    type: OPEN_LICENCE_POPUP,
    payload: content,
  };
};

export const closeLicencePopup = () => {
  return {
    type: CLOSE_LISENCE_POPUP,
  };
};
