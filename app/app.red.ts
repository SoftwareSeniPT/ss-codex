/*
 * Reducer for Hero component
 */ 

import {combineReducers} from "redux";
import {docReducer} from "./pages/doc/doc.red";
import {sidebarReducer} from "./components/sidebar/sidebar.red";

export const appReducer = combineReducers({
  docReducer,
  sidebarReducer
});
