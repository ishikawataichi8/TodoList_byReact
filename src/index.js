import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

//Appコンポーネントの中身をhtmlのrootidのところに挿入してhtmlとして表示させる
ReactDOM.render(<App />, document.getElementById("root"));
