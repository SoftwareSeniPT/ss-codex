// Immutable
import {immutable} from "../../services/immutable/immutable";
// import {removeArrayItem, moveArrayItem} from "../../services/array/index";

const initialState: any = {
  status: "EMPTY",
  data: {},
  onSearchPage: false,
  offcanvasActive: false,
  search: {
    posts: []
  }
};
export const docReducer: any = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "START_LOADING_DOC":
      return immutable(state, { status: "LOADING" });
    case "LOAD_DOC":
      return immutable(state, {
        status: "COMPLETE",
        data: action.data
      });      
    case "UPDATE_SEARCH_PAGE_VISIBILITY":
      return immutable(state, {
        onSearchPage: action.status
      });      
    case "SHOW_PASSWORD_PROMPT":
      return immutable(state, {
        status: "NEED_PASSWORD"
      });     
    case "HIDE_PASSWORD_PROMPT":
      return immutable(state, {
        status: "COMPLETE"
      });      
    case "TOOGLE_SHOW_OFFCANVAS":
      return immutable(state, {
        offcanvasActive: action.status
      });    
    case "LOAD_SEARCH_DOC":
      return immutable(state, {
        status: "COMPLETE",
        search: action.data
      });
    default:
      return state;
  }
};
