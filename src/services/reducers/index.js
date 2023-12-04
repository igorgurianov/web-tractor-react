import { combineReducers } from "redux";
import { formReducer } from "./form";
import { contentReducer } from "./content";
import { repairReducer } from "./repairs";

export const rootReducer = combineReducers({
  form: formReducer,
  content: contentReducer,
  repair: repairReducer,
});
