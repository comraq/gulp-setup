import React from "react";

class Mynav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li className={ (this.props.active)? "active": "" }>
      <a href="javascript:void(0)" onClick={ this.props.callback }>
        { this.props.value }
      </a>
    </li>;
  }
}

export default Mynav;
