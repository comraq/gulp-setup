import React from "react";

import Mynav from "./Mynav";

class Myheader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };

    this.navClicked = this.navClicked.bind(this);
  }

  navClicked(key) {
    return event => this.setState({ active: key });
  }

  
  render() {
    let navs = this.props.values.split(" ").map((e, i) =>
      <Mynav key={ i } active={ i == this.state.active } value={ e }
        callback={ this.navClicked(i) } />
    );
    return <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">{ navs }</ul>
    </nav>;
  }
}

export default Myheader;
