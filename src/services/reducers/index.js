import { combineReducers } from "redux";
import { formReducer } from "./form";
import { contentReducer } from "./content";
import { repairReducer } from "./repairs";
import { licenseReducer } from "./license";

export const rootReducer = combineReducers({
  form: formReducer,
  content: contentReducer,
  repair: repairReducer,
  license: licenseReducer,
});
