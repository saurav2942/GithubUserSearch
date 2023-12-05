import React from "react";
import ReactDom from "react-dom/client";
import App from "./src/Components/App";
import { Provider } from "react-redux";
import store from "./src/utils/store";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
