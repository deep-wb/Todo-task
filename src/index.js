import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./components/todo";
import * as serviceWorker from "./serviceworker";

ReactDOM.render(<Todo />, document.getElementById("root"));

serviceWorker.unregister();
