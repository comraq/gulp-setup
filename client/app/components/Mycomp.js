import React from "react";

import customHTML from "../htmlString";

class Mycomp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let htmlStr = { __html: customHTML };
    return <div dangerouslySetInnerHTML={htmlStr}></div>;
  }
}

export default Mycomp;
