import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./components/app";
import Dialog from "./components/dialog";
import TaskPane from "./components/taskpane";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

if (window.location.hash === "" || window.location.hash === "#/") {
  import("./js/functions");
}

const store = window.STATE_FROM_SERVER
  ? createStore(rootReducer, window.STATE_FROM_SERVER)
  : createStore(rootReducer);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element "#root" was not found.');
}

const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/dialog" exact component={Dialog} />
        <Route path="/taskpane" exact component={TaskPane} />
      </Switch>
    </HashRouter>
  </Provider>,
);
