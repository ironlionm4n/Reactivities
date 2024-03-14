import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/Layouts/App.tsx";
import "semantic-ui-css/semantic.min.css";
import { StoreContext, store } from "./App/stores/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
