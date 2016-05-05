/*
 * Note: IIFE not required due to browserify auto scoping to
 *        preventing global pollution
 */
((window, document) => {
  // Include external global scripts from vendors (such as jQuery/angular)
  require("../vendors/scripts");

  // Include non-global scripts/libraries
  var React = require("react"),
      ReactDOM = require("react-dom");

  // Rest of the app's scripts goes here
  let myVar = "Testing ES6 Features";
  let myFunc = () => console.log(myVar);
  myFunc();

  let MyComp = React.createClass({
    render: () => {
      let htmlStr = { __html: require("./htmlString") };
      return <div dangerouslySetInnerHTML={htmlStr}></div>;
    }
  });

  (() => {
    ReactDOM.render(
      <MyComp />,
      document.getElementById("my-div")
    );
  })();
})(window, document);
