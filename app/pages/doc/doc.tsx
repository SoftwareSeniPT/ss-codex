// React
import * as React from "react";

// Connect
import {connect} from "react-redux";

// Ownee components
import Sidebar from "../../components/sidebar/sidebar";
import {SearchForm} from "../../components/search-form/search-form";
import {Content} from "../../components/content/content";
import {Hamburger} from "../../components/hamburger/hamburger";
import {decodeEntities} from "../../services/string/decodeEntities";
import {hashHistory} from "react-router";

// Action
import {getDoc, searchDoc, showOffcanvas, hidePasswordPrompt, openSearchModal, loadSearchDoc} from "./doc.act";

// Styles
const style: any = require("./doc.css");

// Service
// import {includes} from "../../services/array/index";

/*
 * Import --------------------
 */

class PromptModal extends React.Component<any, {}> {
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

class SearchModal extends React.Component<any, {}> {
  public onSearch = false;
  render(): React.ReactElement<{}> {
    const {className, show, onClose, searchDoc, searchData, status} = this.props;
    return (
      <div className={`${style.modal} ${style.seachModal} ${className} ${show ? style.modalShow : ""}`}>
        <div className={style.modalOuter}>
            <div className={style.searchModalHead}>
              <span className={style.searchModalClose} onClick={onClose}>x</span>
              <input
                autoFocus
                type="text"
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    const {value}: any = event.target;
                    searchDoc(value);
                    this.onSearch = true;
                  }
                }} />
            </div>
            <div className={style.search}>
              {searchData.length ? searchData.map((search, key) => {
                const {title, excerpt, slug} = search;
                return (
                  <div className={style.searchItem} key={key}>
                    <h2 className={style.title} onClick={() => {
                      hashHistory.push(`/doc/${slug}`);
                      onClose();
                    }}>
                      {decodeEntities(title)}
                    </h2>
                    <div className={style.item} dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 200)}} />
                  </div>
                );
              })
              : <div className={style.searchNotFound}>
                  {!this.onSearch && status !== "COMPLETE" ? "Enter your search query" : "Your search has no result"}
                 </div>
              }
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
        const {data, status, search, offcanvasActive} = docs;
        let parent;
        if (data.categories !== undefined && data.categories !== null) {
          const cat = data.categories[Object.keys(data.categories)[0]];
          const catLib = sidebarData.categories;
          parent = this.findCatParent(cat, catLib);
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
                onClick={() => dispatch(openSearchModal())}
                className={`${style.searchForm} ${offcanvasActive ? style.searchFormPushRight : ""}`} />
              <Content
                className={`${style.content} ${offcanvasActive ? style.contentPushRight : ""}`}
                title={data.title}
                parent={data.categories !== undefined && data.categories !== null ? this.findCatParent(data.categories[Object.keys(data.categories)[0]], sidebarData.categories) : null}
                content={data.content} />
              <PromptModal
                show={status === "NEED_PASSWORD" ? true : false}
                enterCallback={(password) => this.processPassword(password) }
                cancelCallback={() => dispatch(hidePasswordPrompt())} />

              {docs.openSearchModal ?
                <SearchModal
                  show={true}
                  searchData={search.posts}
                  status={status}
                  onClose={() => {
                    dispatch(openSearchModal());
                    dispatch(loadSearchDoc({
                      posts: []
                    }));
                  }}
                  enterCallback={(password) => this.processPassword(password) }
                  searchDoc={(query) => dispatch(searchDoc(query)) }
                  cancelCallback={() => dispatch(hidePasswordPrompt())} />
              : null}

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
