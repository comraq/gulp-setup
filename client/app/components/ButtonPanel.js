import React from "react";

import Mybutton from "./Mybutton";

const buttonClasses = [
  "btn-danger",
  "btn-success",
  "btn-warning",
  "btn-info",
  "btn-primary",
  "btn-blog",
  "btn-default"
];

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(key) {
    return () => alert("You clicked button " + (key + 1));
  }

  render() {
    let buttonsList = this.props.values.split(" ").map((e, i) =>
      <Mybutton value={ e } key={ i % buttonClasses.length }
        class={ buttonClasses[i] } callback={ this.buttonClicked(i) }/>
    );

    return <div>{ buttonsList }</div>;
  }
}

export default ButtonPanel;
