"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var style = require("./sidebar.css");
var react_redux_1 = require("react-redux");
var logo_1 = require("../../components/logo/logo");
var sidebar_act_1 = require("./sidebar.act");
var immutable_1 = require("../../services/immutable/immutable");
var move_1 = require("../../services/array/move");
var react_router_1 = require("react-router");
var index_1 = require("../../services/array/index");
var decodeEntities_1 = require("../../services/string/decodeEntities");
var Sidebar = (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar() {
        _super.apply(this, arguments);
    }
    Sidebar.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch(sidebar_act_1.getCategories());
    };
    Sidebar.prototype.categoryParser = function (categories) {
        "use strict";
        if (categories === void 0) { categories = []; }
        if (!categories.length) {
            return;
        }
        var filteredCat = categories.filter(function (cat, key) {
            if (cat.parent === 0) {
                return true;
            }
            return false;
        });
        var catWithChildren = filteredCat.map(function (cat, key) {
            var catID = cat.ID;
            return immutable_1.immutable(cat, {
                children: categories.filter(function (cat, key) {
                    if (catID === cat.parent) {
                        return true;
                    }
                    return false;
                })
            });
        });
        var categoryOrder = [{
                slug: "getting-started",
                id: 0
            }, {
                slug: "contribute",
                id: "last"
            }];
        categoryOrder.map(function (cat, key) {
            var slug = cat.slug;
            var id = cat.id;
            if (id === "last") {
                id = catWithChildren.length - 1;
            }
            var position;
            catWithChildren.map(function (cat, key) {
                if (cat.slug === slug) {
                    position = key;
                }
            });
            if (position !== undefined) {
                catWithChildren = move_1.moveArrayItem(catWithChildren, position, id);
            }
        });
        return catWithChildren;
    };
    ;
    Sidebar.prototype.toogleOpenCategory = function (categoryID, opened) {
        var dispatch = this.props.dispatch;
        dispatch(sidebar_act_1.toogleOpenCategory(categoryID, opened));
    };
    Sidebar.prototype.componentWillReceiveProps = function (props) {
        var oldStatus = this.props.sidebarData.status;
        var newStatus = props.sidebarData.status;
        if (oldStatus !== newStatus && newStatus === "COMPLETE") {
        }
    };
    Sidebar.prototype.render = function () {
        var _this = this;
        var _a = this.props, sidebarData = _a.sidebarData, className = _a.className, currentSlug = _a.currentSlug, _b = _a.hiddenCategory, hiddenCategory = _b === void 0 ? [] : _b;
        var status = sidebarData.status;
        var categories = this.categoryParser(sidebarData.categories);
        return (React.createElement("div", {className: "sidebar " + className}, 
            React.createElement("div", {className: style.logo}, 
                React.createElement(logo_1.Logo, null)
            ), 
            React.createElement("div", {className: style.categories}, status === "COMPLETE" && categories.length ? categories.map(function (category, key) {
                var name = category.name, slug = category.slug, ID = category.ID, opened = category.opened, _a = category.posts, posts = _a === void 0 ? [] : _a, _b = category.children, children = _b === void 0 ? [] : _b;
                if (hiddenCategory.length && index_1.includes.call(hiddenCategory, slug)) {
                    return;
                }
                return (React.createElement("div", {className: style.mainCategory + " " + (opened ? style.opened : style.closed), key: key}, 
                    React.createElement("h3", {className: style.mainCategoryTitle, onClick: function (e) { return opened ? _this.toogleOpenCategory(ID, false) : _this.toogleOpenCategory(ID, true); }}, decodeEntities_1.decodeEntities(name)), 
                    React.createElement("div", {className: style.listWrapper, style: opened ? { maxHeight: "100%" } : { maxHeight: 0 }}, 
                        React.createElement("ul", null, 
                            posts.map(function (post, key) {
                                var title = post.title, slug = post.slug;
                                return (React.createElement("li", {className: slug === currentSlug ? style.currentPage : "", key: key}, 
                                    React.createElement(react_router_1.Link, {to: "/doc/" + slug}, decodeEntities_1.decodeEntities(title))
                                ));
                            }), 
                            children.map(function (post, key) {
                                var name = post.name, ID = post.ID, opened = post.opened, _a = post.posts, posts = _a === void 0 ? [] : _a;
                                return (React.createElement("li", {key: key, className: opened ? style.opened : style.closed}, 
                                    React.createElement("span", {className: style.parentLabel + " " + (opened ? style.parentLabelOpened : ""), onClick: function () { return opened ? _this.toogleOpenCategory(ID, false) :
                                        _this.toogleOpenCategory(ID, true); }}, decodeEntities_1.decodeEntities(name)), 
                                    posts.length ?
                                        React.createElement("div", {className: style.listWrapper, style: opened ? { maxHeight: "100%" } : { maxHeight: 0 }}, 
                                            React.createElement("ul", null, posts.map(function (post, key) {
                                                var title = post.title, slug = post.slug;
                                                return (React.createElement("li", {key: key, className: slug === currentSlug ? style.currentPage : ""}, 
                                                    React.createElement(react_router_1.Link, {to: "/doc/" + slug}, decodeEntities_1.decodeEntities(title))
                                                ));
                                            }))
                                        )
                                        : null));
                            }))
                    )));
            }) : null)));
    };
    return Sidebar;
}(React.Component));
exports.Sidebar = Sidebar;
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(function (state) {
    return {
        sidebarData: state.sidebarReducer
    };
})(Sidebar);
