//import modual 的obj
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";

//babel會把element轉譯成物件 which type:h1,props:children: "HI"
ReactDOM.render(<App />, document.getElementById("root"));
