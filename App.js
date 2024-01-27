import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {id:"heading1", xyz:"abc"}, "Hello World from React!1");
const heading2 = React.createElement("h1", {id:"heading2", xyz:"abc"}, "Hello World from React!2");
const parent = React.createElement("div", {"id": "parent"}, [React.createElement("div", {id:"child"}, [heading1, heading2]), heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);