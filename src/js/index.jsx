import "scss/base.scss";
import ReactDOM from "react-dom";
import React from "react";
import Root from "~/containers/Root";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "~/store/configreStore";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);
