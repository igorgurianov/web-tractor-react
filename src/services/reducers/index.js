import { combineReducers } from "redux";
import { formReducer } from "./form";
import { contentReducer } from "./content";

export const rootReducer = combineReducers({
  form: formReducer,
  content: contentReducer,
});
