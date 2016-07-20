// React
import * as React from "react";

// Connect
import {connect} from "react-redux";

// Ownee components
import Sidebar from "../../components/sidebar/sidebar";
import {SearchForm} from "../../components/search-form/search-form";
import {Content} from "../../components/content/content";
import {Hamburger} from "../../components/hamburger/hamburger";

// Action
import {getDoc, searchDoc, showOffcanvas, hidePasswordPrompt} from "./doc.act";

// Styles
const style: any = require("./doc.css");

// Service
// import {includes} from "../../services/array/index";

/*
 * Import --------------------
 */

export class PromptModal extends React.Component<any, {}> {
  render(): React.ReactElement<{}> {
    const {className, show, cancelCallback, enterCallback} = this.props;
    const {password}: any = this.refs;
    return (
      <div className={`${style.modal} ${className} ${show ? style.modalShow : ""}`}>
        <div className={style.modalOuter}>
          <div className={style.modalIcon}>
            <i className="icon-ios-information-outline"/>
          </div>
          <div className={style.modalTitle}>Password Protected</div>
          <div className={style.modalDescription}>You need password to open this</div>
          <div className={style.modalInput}>
            <input type="password" placeholder="Enter Password" ref="password"/>
          </div>
          <div className={style.modalButton}>
            <button
              className={style.modalCancelButton}
              onClick={() => cancelCallback(password.value) }>Cancel</button>
            <button className={style.modalEnter} onClick={() => enterCallback(password.value) }>Submit</button>
          </div>
        </div>
      </div>
    );
  }
};

export class Doc extends React.Component<any, {}> {
    public defaultSlug = "introduction";
    componentDidMount() {
      const {dispatch, params} = this.props;
      if (params.slug !== undefined) {
        dispatch(getDoc(params.slug));
        return;
      }
      dispatch(getDoc(this.defaultSlug));
    }

    componentWillReceiveProps(props) {
      const {dispatch} = this.props;
      const oldSlug = this.props.params.slug;
      let slug = props.params.slug;

      // Check slug
      if (oldSlug !== slug) {
        if (slug === undefined) {
          slug = this.defaultSlug;
        }
        dispatch(getDoc(slug));
      }
    }

    processPassword(password) {
      const {slug} = this.props.params;
      const {dispatch} = this.props;
      dispatch(hidePasswordPrompt());
      dispatch(getDoc(slug, password));
    }

    findCatParent(cat, catLib) {
      const filteredCat = catLib.filter((o, key) => {
        if (o.slug === cat.slug) {
          return true;
        }
        return false;
      });

      if (filteredCat !== undefined && filteredCat.length) {
        const slug = filteredCat[0].slug;
        const name = filteredCat[0].name;
        const parent = filteredCat[0].parent;

        if (parent === 0) {
          return {name, slug};
        } else {
          const result: any = this.findCatByID(parent, catLib);
          return {name: result.name, slug: result.slug};
        }
      }
    }

    findCatByID(id, catLib) {
      const filteredCat = catLib.filter((o, key) => {
        if (o.ID === id) {
          return true;
        }
        return false;
      });

      if (filteredCat !== undefined && filteredCat.length) {
        const slug = filteredCat[0].slug;
        const name = filteredCat[0].name;
        return {name, slug};
      } else {
        return {name: undefined, slug: undefined};
      }
    }

    render(): React.ReactElement<{}> {
        const {docs, dispatch, params, sidebarData} = this.props;
        const {data, status, search, onSearchPage, offcanvasActive} = docs;
        let parent;
        if (data.categories !== undefined && data.categories !== null) {
          const cat = data.categories[Object.keys(data.categories)[0]];
          const catLib = sidebarData.categories;
          parent = this.findCatParent(cat, catLib);
          console.log(parent);
        }

        return (
          <div className={`doc ${style.doc} ${offcanvasActive ? style.offcanvasActive : ""}`}>
            <Hamburger
              className={style.hamburger}
              onClick={() => offcanvasActive ? dispatch(showOffcanvas(false)) : dispatch(showOffcanvas(true)) } />
              <Sidebar
                currentSlug={params.slug}
                hiddenCategory={["uncategorized", "password-protected"]}
                className={`${style.sidebar} ${offcanvasActive ? style.sideBarActive : ""}`} />
              <SearchForm
                status={status}
                className={`${style.searchForm} ${offcanvasActive ? style.searchFormPushRight : ""}`}
                searchDoc={(query) => dispatch(searchDoc(query)) } />
              <Content
                className={`${style.content} ${offcanvasActive ? style.contentPushRight : ""}`}
                title={data.title}
                onSearchPage={onSearchPage}
                searchData={search.posts}
                parent={data.categories !== undefined && data.categories !== null ? this.findCatParent(data.categories[Object.keys(data.categories)[0]], sidebarData.categories) : null}
                content={data.content} />
              <PromptModal
                show={status === "NEED_PASSWORD" ? true : false}
                enterCallback={(password) => this.processPassword(password) }
                cancelCallback={() => dispatch(hidePasswordPrompt())} />
            </div>
        );
    }
};

export default connect(function(state: any): any {
  return {
    docs: state.docReducer,
    sidebarData: state.sidebarReducer
  };
})(Doc);
