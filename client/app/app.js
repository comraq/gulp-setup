/*
 * Note: IIFE not required due to browserify auto scoping to
 *        preventing global pollution
 */

// Include external global scripts from vendors (such as jQuery/angular)
import React from "react";
import ReactDOM from "react-dom";

import Mycomp from "./components/Mycomp";

// Rest of the app's scripts goes here
const myVar = "Testing ES6 Features";
const myFunc = () => console.log(myVar);
myFunc();

const app = document.getElementById("app");
ReactDOM.render(<Mycomp />, app);
