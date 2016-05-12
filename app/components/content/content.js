"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var style = require("./content.css");
var react_router_1 = require("react-router");
var decodeEntities_1 = require("../../services/string/decodeEntities");
var Content = (function (_super) {
    __extends(Content, _super);
    function Content() {
        _super.apply(this, arguments);
    }
    Content.prototype.render = function () {
        var _a = this.props, title = _a.title, content = _a.content, onSearchPage = _a.onSearchPage, searchData = _a.searchData, className = _a.className;
        return (React.createElement("div", {className: "content " + style.content + " " + className}, onSearchPage ?
            React.createElement("div", {className: style.search}, searchData.length ? searchData.map(function (search, key) {
                var title = search.title, excerpt = search.excerpt, slug = search.slug;
                return (React.createElement("div", {className: style.searchItem, key: key}, 
                    React.createElement("h2", {className: style.title}, 
                        React.createElement(react_router_1.Link, {to: "/doc/" + slug}, decodeEntities_1.decodeEntities(title))
                    ), 
                    React.createElement("div", {className: style.item, dangerouslySetInnerHTML: { __html: excerpt }})));
            }) : React.createElement("div", {className: style.searchNotFound}, "Your search has no result"))
            : React.createElement("div", {className: style.singlePost}, 
                title === "Introduction" ? React.createElement("div", {className: style.hero, style: { backgroundImage: "url(./assets/home-bg.png)" }}, 
                    React.createElement("h1", null, "Software Seni Codex")
                ) : null, 
                React.createElement("h2", {className: style.title}, decodeEntities_1.decodeEntities(title)), 
                React.createElement("div", {className: style.item, dangerouslySetInnerHTML: { __html: content }}))));
    };
    return Content;
}(React.Component));
exports.Content = Content;
;
