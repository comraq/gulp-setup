import React from "react";

import Myheader from "./components/Myheader";
import ButtonPanel from "./components/ButtonPanel";
import Overlay from "./components/Overlay";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.data,
      overlay: false,
      buttonNum: 0
    };

    this.inputChanged = this.inputChanged.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  inputChanged(e) {
    this.setState({
      text: e.target.value
    })
  }

  toggleOverlay(key) {
    this.setState({
      overlay: !this.state.overlay,
      buttonNum: key + 1
    })
    //return alert("You clicked button " + (key + 1));
  }

  render() {
    return <div>
      <Myheader values={ this.state.text } />
      <p>Your Input: { this.state.text }</p>
      <input type="text" value={ this.state.text }
        placeholder="a placeholder" onChange={ this.inputChanged } />
      <ButtonPanel values={ this.state.text }
        toggleOverlay={ this.toggleOverlay }/>
      <Overlay show={ this.state.overlay } num={ this.state.buttonNum }
        toggleOverlay={ this.toggleOverlay }/>
    </div>;
  }

}

export default Layout;
