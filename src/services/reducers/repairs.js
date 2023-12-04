import {
  ADD_REPAIR_SERVICE,
  REMOVE_REPAIR_SERVICES,
  OPEN_ADDITIONAL_INFO_POPUP,
  CLOSE_ADDITIONAL_INFO_POPUP,
  OPEN_REPAIR_FORM_POPUP,
  CLOSE_REPAIR_FORM_POPUP,
  SEND_REPAIR_FORM_FAILED,
  SEND_REPAIR_FORM_PENDING,
  SEND_REPAIR_FORM_SUCCESS,
} from "../actions/repairs";
import { repairCalculator } from "../../utils/const";

const initialState = {
  services: repairCalculator,
  subTotal: 1330000,
  discount: 30000,
  total: 1300000,
  repairPopup: false,
  popupContent: null,
  repairForm: false,
  repairFormPending: false,
  repairFormSuccess: false,
  repairFormFail: false,
};

export const repairReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPAIR_SERVICE: {
      const newServices = [...state.services, action.payload];
      const newSubTotal = newServices.reduce((prevVal, currVal) => {
        return prevVal + currVal.price;
      }, 0);

      let newDiscount = 0;
      if (newSubTotal > 1000000) {
        newDiscount = 30000;
      }

      return {
        ...state,
        services: newServices,
        subTotal: newSubTotal,
        discount: newDiscount,
        total: newSubTotal - newDiscount,
      };
    }

    case REMOVE_REPAIR_SERVICES: {
      const newServices = [
        ...state.services.filter((service) => service.id !== action.payload.id),
      ];
      const newSubTotal = newServices.reduce((prevVal, currVal) => {
        return prevVal + currVal.price;
      }, 0);

      let newDiscount = 0;
      if (newSubTotal > 1000000) {
        newDiscount = 30000;
      }

      return {
        ...state,
        services: newServices,
        subTotal: newSubTotal,
        discount: newDiscount,
        total: newSubTotal - newDiscount,
      };
    }

    case OPEN_ADDITIONAL_INFO_POPUP: {
      return {
        ...state,
        repairPopup: true,
        popupContent: action.payload,
      };
    }

    case CLOSE_ADDITIONAL_INFO_POPUP: {
      return {
        ...state,
        repairPopup: false,
        popupContent: null,
      };
    }

    case OPEN_REPAIR_FORM_POPUP: {
      return {
        ...state,
        repairForm: true,
      };
    }

    case CLOSE_REPAIR_FORM_POPUP: {
      return {
        ...state,
        repairForm: false,
        repairFormSuccess: false,
      };
    }
    case SEND_REPAIR_FORM_PENDING: {
      return {
        ...state,
        repairFormPending: true,
      };
    }

    case SEND_REPAIR_FORM_SUCCESS: {
      return {
        ...state,
        repairFormPending: false,
        repairFormSuccess: true,
        repairForm: false,
      };
    }

    case SEND_REPAIR_FORM_FAILED: {
      return {
        ...state,
        repairFormPending: false,
        repairFormFail: true,
        repairFormSuccess: false,
        repairForm: false,
      };
    }

    default:
      return state;
  }
};
