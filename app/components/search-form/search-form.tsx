/*
 * Interface
 */

interface ISearchFormProps {
  status: string;
  className: string;
  onClick: () => void;
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
    render(): React.ReactElement<{}> {
        const {status, className, onClick} = this.props;
        return (
            <div
              onClick={onClick}
              className={`search-form ${className} ${style.searchForm} ${status === "COMPLETE" ? style.loadingComplete : style.loading}`}>
              <input
                className={style.searchInput}
                placeholder="Enter your search term..."
                type="text" />
            </div>
        );
    }
};
