import React, { Component } from "react";

class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.incrementCount}>
          Count {this.state.count}
        </button>
      </div>
    );
  }
}

export default componentName;
