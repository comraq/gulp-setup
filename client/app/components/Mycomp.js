import React from "react";

import customHTML from "../htmlString";

class Mycomp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let htmlStr = { __html: customHTML };
    return <div>
      <div dangerouslySetInnerHTML={htmlStr}></div>
      <input type="text" value="" placeholder="hi there" />
    </div>;
  }
}

export default Mycomp;
