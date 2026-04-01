import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";

import App from "./App";
import { store } from "./redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
