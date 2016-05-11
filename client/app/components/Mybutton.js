import React from "react";

class Mybutton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button className={ "btn " + this.props.class }
      onClick={ this.props.callback }>
      { this.props.value }
    </button>;
  }
}

export default Mybutton;
