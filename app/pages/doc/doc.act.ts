const fetch = require("isomorphic-fetch");
import {MD5} from "../../services/md5/md5.ts";

function loadingDoc() {
  "use strict";
  return {
    type: "START_LOADING_DOC"
  };
}

function loadDoc(data) {
  "use strict";
  return {
    type: "LOAD_DOC",
    data: data
  };
}

function loadSearchDoc(data) {
  "use strict";
  return {
    type: "LOAD_SEARCH_DOC",
    data: data
  };
}

function onSearchPage(status) {
  "use strict";
  return {
    type: "UPDATE_SEARCH_PAGE_VISIBILITY",
    status: status
  };
}

export function showOffcanvas(status) {
  "use strict";
  return {
    type: "TOOGLE_SHOW_OFFCANVAS",
    status: status
  };
}

function showPasswordPrompt() {
  "use strict";
  return {
    type: "SHOW_PASSWORD_PROMPT"
  };
}

export function hidePasswordPrompt() {
  "use strict";
  return {
    type: "HIDE_PASSWORD_PROMPT"
  };
}

function checkIfPasswordProtected(data) {
  "use strict";
  const {categories} = data;
  let isPasswordProtected = [];
  Object.keys(categories).forEach(function(key) {
    if (categories[key].slug === "password-protected") {
      isPasswordProtected.push(categories[key]);
    }
  });

  if (isPasswordProtected.length) {
    return true;
  }
  return false;
}

export function getDoc(slug, password?) {
  "use strict";
  return function(dispatch) {
    dispatch(loadingDoc());
    dispatch(onSearchPage(false));
    dispatch(showOffcanvas(false));
    fetch(`https://public-api.wordpress.com/rest/v1.1/sites/sscodex.wordpress.com/posts/slug:${slug}`)
      .then((response) => response.json())
      .then((json) => {
        if (password !== undefined) {
          // If password is provided
          
          // Check if password is not wrong
          fetch(`https://public-api.wordpress.com/rest/v1.2/sites/sscodex.wordpress.com`)
            .then((response) => response.json())
            .then((pass) => {
              const serverPassword = pass.description;
              if (MD5(password) === serverPassword) {
                dispatch(loadDoc(json));
              } else {
                dispatch(showPasswordPrompt());
              }
            });
        } else {
          // If password not provided
          if (checkIfPasswordProtected(json)) {
            dispatch(showPasswordPrompt());
          } else {
            dispatch(loadDoc(json));
          }
        }
      });
  };
}

export function searchDoc(query) {
  "use strict";
  return function(dispatch) {
    dispatch(loadingDoc());
    dispatch(onSearchPage(true));
    if (query === "") {
      dispatch(onSearchPage(false));
    } else {
      fetch(`https://public-api.wordpress.com/rest/v1.1/sites/sscodex.wordpress.com/posts/?search=${query}&number=10&fields=ID,title,slug,excerpt`)
        .then((response) => response.json())
        .then((json) => {
          dispatch(loadSearchDoc(json));
        });
    }
  };
}
