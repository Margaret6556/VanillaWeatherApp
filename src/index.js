import { Strictmode } from "react";
import { createRoot } from "react - dom / client";

import App from "./App.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <Strictmode>
    <App />
  </Strictmode>
);

function App() {
  return <div className="App"></div>;
}
