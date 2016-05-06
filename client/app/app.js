/*
 * Note: IIFE not required due to browserify auto scoping to
 *        preventing global pollution
 */

// Include external global scripts from vendors (such as jQuery/angular)
require("../vendors/scripts");

// Include non-global scripts/libraries
import React from "react";
import ReactDOM from "react-dom";

import customHTML from "./htmlString";

// Rest of the app's scripts goes here
const myVar = "Testing ES6 Features";
const myFunc = () => console.log(myVar);
myFunc();

class MyComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let htmlStr = { __html: customHTML };
    return <div dangerouslySetInnerHTML={htmlStr}></div>;
  }
}

(() => {
  ReactDOM.render(
    <MyComp />,
    document.getElementById("my-div")
  );
})();
