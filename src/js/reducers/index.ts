import { combineReducers } from "redux";
import { previewReducer } from "./preview";

const rootReducer = combineReducers({
    preview: previewReducer
});

export default rootReducer;

