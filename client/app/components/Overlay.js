import React from "react";

class Overlay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let displayStyle = {
      display: (this.props.show)? "block": "none",
      textAlign: "center"
    };

    return <div className="hire-us__overlay" style={ displayStyle }>
      <a className="btn btn--primary" href="javascript:void(0)"
        onClick={ this.props.toggleOverlay }>
        Close Screen Opened by Button: { this.props.num }
      </a>
    </div>
  }
}

export default Overlay;
