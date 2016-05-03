// Immutable
import {immutable} from "../../services/immutable/immutable";
// import {removeArrayItem, moveArrayItem} from "../../services/array/index";

const initialState: any = {
  status: "EMPTY",
  categories: []
};

export const sidebarReducer: any = (state: any = initialState, action: any) => {
    switch (action.type) {
      case "START_LOADING":
        return immutable(state, { status: "LOADING" });  

      case "LOAD_CATEGORY":
        return immutable(state, { 
          categories: action.data.categories.map((cat, key) => {
            return immutable(cat, { opened: false });
          })
        });   

      case "MARK_COMPLETE":
        return immutable(state, { 
          status: "COMPLETE"
        });       
        
      case "ADD_POST_TO_CATEGORY":
        return immutable(state, {
          categories: state.categories.map((cat, key) => {
            if (key === action.categoryID) {
              return immutable(cat, { posts: action.data });
            }
            return cat;
          })
        });       
         
      case "TOOGLE_OPEN_CATEGORY":
        let catParent = state.categories.filter((cat, key) => {
          if (cat.ID === action.categoryID) {
            return true;
          }
          return false;
        });
        catParent = catParent !== undefined && catParent.length ? catParent[0].parent : 0;

        return immutable(state, {
          categories: state.categories.map((cat, key) => {
            if (cat.ID === action.categoryID) {
              if (action.opened) {
                return immutable(cat, { opened: true });
              }
              return immutable(cat, { opened: false });
            } else {
              if (cat.parent === 0 && cat.ID !== catParent) {
                return immutable(cat, { opened: false });
              }
              return cat;
            }
            
          })
        });
      default:
        return state;
    }
};
