import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>HHHHH </h1>;
}

// After React 18 version
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Before React 18 version
/*
import React from "react";
import ReactDOM from "react-dom";
React.render(<App />);
*/
