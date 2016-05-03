/*
 * Interface
 */ 

interface IContentProps {
  title: string;
  content: string;
  onSearchPage: boolean;
  searchData: any;
  className: string;
}

interface IContentState {
}

// React
import * as React from "react";

// Styles
const style: any = require("./content.css");

// Link
import {Link} from "react-router";

/*
 * Import --------------------
 */

export class Content extends React.Component<IContentProps, IContentState> {
    render(): React.ReactElement<{}> {
        const {title, content, onSearchPage, searchData, className} = this.props;
        return (
            <div className={`content ${style.content} ${className}`}>
              {onSearchPage ? 
                <div className={style.search}>
                {searchData.length ? searchData.map((search, key) => {
                  const {title, excerpt, slug} = search;
                  return (
                    <div className={style.searchItem} key={key}>
                      <h2 className={style.title}>
                        <Link to={`/doc/${slug}`}>{title}</Link>
                      </h2>
                      <div className={style.item} dangerouslySetInnerHTML={{ __html: excerpt}} />
                    </div>
                  );
                }) : <div className={style.searchNotFound}>
                      Your search has no result
                     </div>}
                </div>
              : <div className={style.singlePost}>
                {title === "Introduction" ? <div className={style.hero} style={{ backgroundImage: "url(./assets/home-bg.png)"}}><h1>Software Seni Codex</h1></div> : null}
                  <h2 className={style.title}>{title}</h2>
                  <div className={style.item} dangerouslySetInnerHTML={{ __html: content }} />
                </div>}
            </div>
        );
    }
};
