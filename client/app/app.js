/*
 * Note: IIFE not required due to browserify auto scoping to
 *        preventing global pollution
 */
import React from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";

// Rest of the app's scripts goes here
const myVar = "Testing ES6 Features";
const myFunc = () => console.log(myVar);
myFunc();

const myStr = "a sample string";
const app = document.getElementById("app");

ReactDOM.render(<Layout data={ myStr } />, app);
