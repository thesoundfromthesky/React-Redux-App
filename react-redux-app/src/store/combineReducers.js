import { combineReducers } from "redux";
import { quoteGardenReducer } from "./quote-garden";

export const rootReducer = combineReducers({ quoteGardenReducer });
