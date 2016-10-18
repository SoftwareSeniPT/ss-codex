/*
 * Interface
 */

interface IContentProps {
  title: string;
  content: string;
  modified: string;
  author: any;
  className: string;
  parent: any;
}

interface IContentState {
}

// React
import * as React from "react";

// Styles
const style: any = require("./content.css");

import {decodeEntities} from "../../services/string/decodeEntities";

/*
 * Import --------------------
 */

export class Content extends React.Component<IContentProps, IContentState> {
    componentDidUpdate(prev) {
      if (prev.title !== this.props.title) {
        window.scrollTo(0, 0);
      }
    }
    convertDate(fullDate) {
      const date = new Date(fullDate);
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
      return `${day} ${monthNames[month]} ${year}`;
    }
    render(): React.ReactElement<{}> {
        const {title, content, className, parent, modified, author} = this.props;
        let replacedContent;
        // Replace shotcode on content
        if (typeof content === "string") {
          replacedContent = content.replace(/\{checkbox\}/g, "<input type=\"checkbox\" class=\"checkbox\"/> ");
        }

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
              <div className={`${style.singlePost} ${title === "Introduction" ? style.frontPage : null}`}>
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
                  <div className={style.lastUpdate}>Last update <span className={style.bold}>{modified !== undefined ? this.convertDate(modified) : null}</span> by <span className={style.bold}>{author !== undefined ? author.name : null}</span></div>
                  <div className={style.item} dangerouslySetInnerHTML={{ __html: replacedContent }} />
                </div>
            </div>
        );
    }
};
