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
import {moveArrayItem} from "../../services/array/move";

// Link
import {Link} from "react-router";

import {includes} from "../../services/array/index";

/*
 * Import --------------------
 */

export class Sidebar extends React.Component<any, any> {
    componentDidMount() {
      const {dispatch} = this.props;
      dispatch(getCategories());
    }

    categoryParser (categories = []) {
      "use strict";
      if (!categories.length) {
        return;
      }

      const filteredCat = categories.filter((cat, key) => {
        if (cat.parent === 0) {
          return true;
        }
        return false;
      });

      let catWithChildren =  filteredCat.map((cat, key) => {
        const catID = cat.ID;
        return immutable(cat, {
          children: categories.filter((cat, key) => {
            if (catID === cat.parent) {
              return true;
            }
            return false;
          })
        });
      });

      const categoryOrder = [{
          slug: "getting-started",
          id: 0
        }, {
          slug: "contribute",
          id: "last"
        }];

      categoryOrder.map((cat, key) => {
        const slug = cat.slug;
        let id = cat.id;
        if (id === "last") {
          id = catWithChildren.length - 1;
        }
        let position;
        catWithChildren.map((cat, key) => {
          if (cat.slug === slug) {
            position = key;
          }
        });
        if (position !== undefined) {
          catWithChildren = moveArrayItem(catWithChildren, position, id);
        }
      });

      return catWithChildren;
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

      return (
        <div className={`sidebar ${className}`}>
          <div className={style.logo}>
            <Logo />
          </div>
          <div 
            className={style.categories}>
            {status === "COMPLETE" && categories.length ? categories.map((category, key) => {
              const {name, slug, ID, opened, posts = [], children = []} = category;
              if (hiddenCategory.length && includes.call(hiddenCategory, slug)) {
                return;
              }
              return (
                <div className={`${style.mainCategory} ${opened ? style.opened : style.closed}`} key={key}>
                  <h3 
                    className={style.mainCategoryTitle}
                    onClick={(e) => opened ? this.toogleOpenCategory(ID, false) : this.toogleOpenCategory(ID, true) }>
                    {name}
                  </h3>
                  <div 
                    className={style.listWrapper}
                    style={opened ? { maxHeight: "100%" } : { maxHeight: 0 }}>
                    <ul>
                      {posts.map((post, key) => {
                        const {title, slug} = post;
                        return (
                          <li className={slug === currentSlug ? style.currentPage : ""} key={key}>
                            <Link to={`/doc/${slug}`}>{title}</Link>
                          </li>
                        );
                      })}

                      {children.map((post, key) => {
                        const {name, ID, opened, posts = []} = post;
                        return (
                          <li key={key} className={opened ? style.opened : style.closed}>
                            <span 
                              className={`${style.parentLabel} ${opened ? style.parentLabelOpened : ""}`}
                              onClick={() => opened ? this.toogleOpenCategory(ID, false) : 
                              this.toogleOpenCategory(ID, true)}>{name}</span>
                            {posts.length ? 
                              <div
                                className={style.listWrapper}
                                style={opened ? { maxHeight: "100%" } : { maxHeight: 0 }}>
                                <ul>
                                  {posts.map((post, key) => {
                                    const {title, slug} = post;
                                    return (
                                      <li key={key} className={slug === currentSlug ? style.currentPage : ""}>
                                        <Link to={`/doc/${slug}`}>{title}</Link>
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
