import React from "react";
import ReactDom from "react-dom/client";

// App Js
import App from "./app";

// Stylesheet
import "./index.css";
import "./app.css";

const root = ReactDom.createRoot(document.querySelector("#root"));

function Main() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}


root.render(<Main/>);