// React
import * as React from "react";

// Styles
const style: any = require("./sidebar.css");

// Connect
import {connect} from "react-redux";

// Component
import {Logo} from "../../components/logo/logo";

// Action
import {getCategories, toogleOpenCategory} from "./sidebar.act";
import {immutable} from "../../services/immutable/immutable";
// import {moveArrayItem} from "../../services/array/move";
import {Link} from "react-router";
import {includes} from "../../services/array/index";
import {decodeEntities} from "../../services/string/decodeEntities";

/*
 * Import --------------------
 */

export class Sidebar extends React.Component<any, any> {
    componentDidMount() {
      const {dispatch} = this.props;
      dispatch(getCategories());
    }

    orderCategory(catArray) {
      catArray = catArray.map((cat, key) => {
        const desc = cat.description;
        if (desc === undefined || desc === "") {
          return immutable(cat, {description: 99});
        }
        return cat;
      });

      function mycomparator(a, b) {
        return parseInt(a.description, 10) - parseInt(b.description, 10);
      }
      catArray.sort(mycomparator);
      return catArray;
    }

    checkForActiveCat(catArray) {
      // Check if category is active
      const {currentSlug} = this.props;
      catArray = catArray.map((cat, key) => {
        const {posts = []} = cat;
        let isActive = false;
        posts.map((post, key) => {
          const {slug} = post;
          if (slug === currentSlug) {
            isActive = true;
          }
        });
        if (isActive) {
          return immutable(cat, {active: true});
        } else {
          return cat;
        }
      });
      return catArray;
    }

    categoryParser (categories = []) {
      "use strict";
      if (!categories.length) {
        return;
      }
      categories = this.checkForActiveCat(categories);

      // Grab all parent category
      const filteredCat = categories.filter((cat, key) => {
        if (cat.parent === 0) {
          return true;
        }
        return false;
      });

      let catWithChildren =  filteredCat.map((cat, key) => {
        const catID = cat.ID;
        let {active = false} = cat;
        if (!active) {
          categories.map((cat) => {
            if (catID === cat.parent) {
              if (cat.active) {
                active = true;
              }
            }
          });
        }

        let children = this.orderCategory(categories.filter((cat, key) => {
          if (catID === cat.parent) {
            return true;
          }
          return false;
        }));

        return immutable(cat, {
          children: children,
          active: active
        });
      });

      return this.orderCategory(catWithChildren);
    };

    toogleOpenCategory(categoryID, opened) {
      const {dispatch} = this.props;
      dispatch(toogleOpenCategory(categoryID, opened));
    }

    componentWillReceiveProps(props) {
      // console.log(this.props.sidebarData, "xxxx");
      const oldStatus = this.props.sidebarData.status;
      const newStatus = props.sidebarData.status;
      if (oldStatus !== newStatus && newStatus === "COMPLETE") {
        // const categories = this.categoryParser(props.sidebarData.categories);
        // console.log(categories, "categories");
      }
    }

    render(): React.ReactElement<{}> {
      const {sidebarData, className, currentSlug, hiddenCategory = []} = this.props;
      const {status} = sidebarData;
      const categories = this.categoryParser(sidebarData.categories);
      // console.log(categories, "categories");
      return (
        <div className={`sidebar ${className}`}>
          <div className={style.logo}>
            <Logo />
          </div>
          <div
            className={style.categories}>
            {status === "COMPLETE" && categories.length ? categories.map((category, key) => {
              const {name, slug, ID, posts = [], children = [], active = false} = category;
              let {opened} = category;
              if (hiddenCategory.length && includes.call(hiddenCategory, slug)) {
                return;
              }
              return (
                <div
                  className={`${style.mainCategory} ${opened || active ? style.opened : style.closed}`}
                  key={key}>
                  <h3
                    className={style.mainCategoryTitle}
                    onClick={(e) => opened ? this.toogleOpenCategory(ID, false) : this.toogleOpenCategory(ID, true) }>
                    {decodeEntities(name)}
                  </h3>
                  <div
                    className={style.listWrapper}>
                    <ul>
                      {posts.map((post, key) => {
                        const {title, slug} = post;
                        return (
                          <li className={slug === currentSlug ? style.currentPage : ""} key={key}>
                            <Link to={`/doc/${slug}`}>{decodeEntities(title)}</Link>
                          </li>
                        );
                      })}

                      {children.map((post, key) => {
                        const {name, ID, opened, posts = [], active} = post;
                        return (
                          <li key={key} className={opened || active ? style.opened : style.closed}>
                            <span
                              className={`${style.parentLabel} ${opened ? style.parentLabelOpened : ""}`}
                              onClick={() => opened ? this.toogleOpenCategory(ID, false) :
                              this.toogleOpenCategory(ID, true)}>
                              {decodeEntities(name)}
                            </span>
                            {posts.length ?
                              <div
                                className={style.listWrapper}>
                                <ul>
                                  {posts.map((post, key) => {
                                    const {title, slug} = post;
                                    return (
                                      <li key={key} className={slug === currentSlug ? style.currentPage : ""}>
                                        <Link to={`/doc/${slug}`}>
                                          {decodeEntities(title)}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            : null}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            }) : null }
          </div>
        </div>
      );
    }
};

export default connect(function(state: any): any {
  return {
    sidebarData: state.sidebarReducer
  };
})(Sidebar);
