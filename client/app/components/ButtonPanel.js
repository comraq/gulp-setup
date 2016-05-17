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
  }

  render() {
    let buttonsList = this.props.values.split(" ").map((e, i) =>
      <Mybutton value={ e } key={ i }
        callback={ () => this.props.toggleOverlay(i) }
        class={ buttonClasses[i % buttonClasses.length] } />
    );

    return <div>{ buttonsList }</div>;
  }
}

export default ButtonPanel;
