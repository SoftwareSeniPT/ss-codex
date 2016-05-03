// Service
// import {immutable} from "../../services/immutable/immutable";

const fetch = require("isomorphic-fetch");

function loadingSidebar() {
  "use strict";
  return {
    type: "START_LOADING"
  };
}

function loadCategory(data) {
  "use strict";
  return {
    type: "LOAD_CATEGORY",
    data: data
  };
}

function markComplete() {
  "use strict";
  return {
    type: "MARK_COMPLETE"
  };
}

export function toogleOpenCategory(categoryID, opened) {
  "use strict";
  return {
    type: "TOOGLE_OPEN_CATEGORY",
    categoryID: categoryID,
    opened: opened
  };
}

function addPostToCategory(categoryID, data) {
  "use strict";
  return {
    type: "ADD_POST_TO_CATEGORY",
    categoryID: categoryID,
    data: data
  };
}

function initPostToCategory(categorySlug, callback) {
  "use strict";
  // Fetch post title for each category
  fetch(`https://public-api.wordpress.com/rest/v1.1/sites/sscodex.wordpress.com/posts/?category=${categorySlug}&order=ASC&fields=ID,title,categories,slug&number=100`)
    .then((response) => response.json())
    .then((json) => {
      const {posts = []} = json;
      if (!posts.length) {
        return;
      }

      const filteredPost = posts.filter((post, key) => {
        const {categories = []} = post;
        let contained = false;

        Object.keys(categories).forEach(function(key) {
          if (categories[key].slug === categorySlug) {
            contained = true;
          }
        });

        if (contained) {
          return true;
        } else {
          return false;
        }
      });

      callback(filteredPost);
    });
}

export function getCategories() {
  "use strict";
  return function(dispatch, getState) {
    dispatch(loadingSidebar());
    fetch("https://public-api.wordpress.com/rest/v1.1/sites/sscodex.wordpress.com/categories")
      .then((response) => response.json())
      .then((json) => {
        dispatch(loadCategory(json));
        if (json.categories === undefined || json.categories.length) {
          json.categories.map((category, key) => {
            initPostToCategory(category.slug, (data) => {
              dispatch(addPostToCategory(key, data));
            });

            // Mark as completed task
            if (key === json.categories.length - 1) {
              dispatch(markComplete());
            }
          });
        }       
    });
  };
}
