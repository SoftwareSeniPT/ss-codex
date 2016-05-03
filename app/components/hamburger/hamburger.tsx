// Import ReactJS    
import * as React from "react";

// Import CSS
const css = require("./hamburger.css");

export class Hamburger extends React.Component<any, {}> {
  render(): React.ReactElement<{}> {
    const {className, onClick} = this.props;
    return (
      <div className={`${css.hamburger} ${className}`} onClick={() => onClick()}>
        <svg version="1.1" id="Layer_1" x="0px" y="0px" width="20px" height="18px" viewBox="0.875 0.688 20 18" enable-background="new 0.875 0.688 20 18" className="svg replaced-svg">
          <rect x="0.875" y="0.688" fill="#FFFFFF" width="20" height="2"></rect>
          <rect x="0.875" y="8.688" fill="#FFFFFF" width="20" height="2"></rect>
          <rect x="0.875" y="16.688" fill="#FFFFFF" width="20" height="2"></rect>
        </svg>
      </div >
    );
  }
};
