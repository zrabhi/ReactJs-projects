import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const data = {
  author: {
    firstName: "ZAKARIA",
    lastName: "RABHI",
    Job: "Senior Devloper",
    Country: "Morocco",
  },
};

root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);
