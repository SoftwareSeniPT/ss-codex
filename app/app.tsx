/*
 * Import -------------------
 */ 

// React
import * as React from "react";
import * as ReactDOM  from "react-dom";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// Redux thunk
const thunk = require("redux-thunk").default;

// Reducers
import {appReducer} from "./app.red";

// React Router
import { Router, Route, IndexRoute, hashHistory } from "react-router";
 
// Ownee Component
import Doc from "./pages/doc/doc";

// Global styles
const style = require("./app.css");

/*
 * Import --------------------
 */

class App extends React.Component<any, {}> {
    constructor() {
      super();
    }

    render(): React.ReactElement<{}> {
      return (
          <div className={`app ${style.app}`}>
            {this.props.children}
          </div>
        
      );
    }
};

let store: (any) = createStore(
  appReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Doc} />
          <Route path="doc" component={Doc} />
          <Route path="doc/:slug" component={Doc} />
          <Route path="doc/:slug/:password" component={Doc} />
        </Route>
      </Router>
    </Provider>
  ), 
  document.getElementById("main")
);
