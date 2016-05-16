import React from "react";

import Myheader from "./Myheader";
import ButtonPanel from "./ButtonPanel";

class Mycomp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: this.props.data };

    this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return <div>
      <Myheader values={ this.state.text } />
      <p>Your Input: { this.state.text }</p>
      <input type="text" value={ this.state.text }
        placeholder="a placeholder" onChange={ this.inputChanged } />
      <ButtonPanel values={ this.state.text } />
    </div>;
  }
}

export default Mycomp;
