/*
 * Interface
 */ 

interface ISearchFormProps {
  status: string;
  searchDoc: (string) => void;
  className: string;
}

interface ISearchFormState {
}

// React
import * as React from "react";

// Styles
const style: any = require("./search-form.css");

/*
 * Import --------------------
 */

export class SearchForm extends React.Component<ISearchFormProps, ISearchFormState> {
    public timer;

    render(): React.ReactElement<{}> {
        const {status, searchDoc, className} = this.props;
        return (
            <div className={`search-form ${className} ${style.searchForm} ${status === "COMPLETE" ? style.loadingComplete : style.loading}`}>
              <input 
                className={style.searchInput} 
                placeholder="Enter your search term..." 
                type="text"
                onChange={(event) => {
                  const {value}: any = event.target;
                  clearTimeout(this.timer);
                  this.timer = setTimeout(
                    () => searchDoc(value), 
                    300
                  );
                }} />
            </div>
        );
    }
};
