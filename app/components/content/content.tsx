/*
 * Interface
 */

interface IContentProps {
  title: string;
  content: string;
  onSearchPage: boolean;
  searchData: any;
  className: string;
  parent: any;
}

interface IContentState {
}

// React
import * as React from "react";

// Styles
const style: any = require("./content.css");

// Link
import {Link} from "react-router";
import {decodeEntities} from "../../services/string/decodeEntities";

/*
 * Import --------------------
 */

export class Content extends React.Component<IContentProps, IContentState> {
    render(): React.ReactElement<{}> {
        const {title, content, onSearchPage, searchData, className, parent} = this.props;

        let image = "";
        if (parent !== null) {
          if (parent.slug === "frontend-dev") {
            image = "front-end.png";
          }
          if (parent.slug === "backend-php") {
            image = "php.png";
          }
          if (parent.slug === "project-management") {
            image = "project-management.png";
          }
          if (parent.slug === "quality-assurance") {
            image = "qa.png";
          }
          if (parent.slug === "backend-ruby") {
            image = "ruby.png";
          }
          if (parent.slug === "backend-scala") {
            image = "scala.png";
          }
          if (parent.slug === "backend-wordpress") {
            image = "wp.png";
          }
          if (parent.slug === "support") {
            image = "support.png";
          }
        }

        return (
            <div className={`content ${style.content} ${className}`}>
              {onSearchPage ?
                <div className={style.search}>
                {searchData.length ? searchData.map((search, key) => {
                  const {title, excerpt, slug} = search;
                  return (
                    <div className={style.searchItem} key={key}>
                      <h2 className={style.title}>
                        <Link to={`/doc/${slug}`}>
                          {decodeEntities(title)}
                        </Link>
                      </h2>
                      <div className={style.item} dangerouslySetInnerHTML={{ __html: excerpt}} />
                    </div>
                  );
                }) : <div className={style.searchNotFound}>
                      Your search has no result
                     </div>}
                </div>
              : <div className={`${style.singlePost} ${title === "Introduction" ? style.frontPage : null}`}>
                  <div className={style.hero} style={{ backgroundImage: "url(./assets/home-bg.png)"}}>
                    <h1>
                      {title === "Introduction" ? "Software Seni Handbook" : (parent !== null ? parent.name : "")}
                      {image !== "" ?
                        <span className={style.titleIcon}>
                          <img src={`./assets/${image}`} />
                        </span>
                      : null}
                    </h1>

                  </div>
                  <h2 className={style.title}>
                    {decodeEntities(title)}
                  </h2>
                  <div className={style.item} dangerouslySetInnerHTML={{ __html: content }} />
                </div>}
            </div>
        );
    }
};
