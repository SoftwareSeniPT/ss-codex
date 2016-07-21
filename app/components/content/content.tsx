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

        let image;
        if (parent !== null) {
          switch (parent.slug) {
            case "frontend-dev":
              image = "front-end.png";
              break;
            case "backend-php":
              image = "php.png";
              break;
            case "project-management":
              image = "project-management.png";
              break;
            case "quality-assurance":
              image = "qa.png";
              break;
            case "backend-ruby":
              image = "ruby.png";
              break;
            case "backend-scala":
              image = "scala.png";
              break;
            case "backend-wordpress":
              image = "wp.png";
              break;
            case "support":
              image = "support.png";
              break;
            case "graphic-design":
              image = "graphic-design.png";
              break;
            default:
              image = null;
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
                      {image !== null ?
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
