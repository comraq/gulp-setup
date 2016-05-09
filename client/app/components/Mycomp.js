import React from "react";

import customHTML from "../htmlString";

class Mycomp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: "" };

    this.handler = this.handler.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged(e) {
    this.setState({
      text: e.target.value
    })
  }

  handler() {
    console.log("Confirming jQuery is imported/bundled properly, $:");
    console.log(jQuery);
  }

  render() {
    let htmlStr = { __html: customHTML };
    return <div>
      <div dangerouslySetInnerHTML={htmlStr}></div>
      <p>Your Input: { this.state.text }</p>
      <input type="text" value={ this.state.text }
        placeholder="a placeholder" onChange={ this.inputChanged } />
      <a href="javascript:void(0)" className="btn btn-primary"
        onClick={ this.handler }>
        Log jQuery</a>
    </div>;
  }
}

export default Mycomp;
