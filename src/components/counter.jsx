import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="container mt-5">
        <span className={this.renderClasses()}>{this.formatCount()}</span>
        <button onClick={this.increament} className="btn bg-primary m-2">
          Increament
        </button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  renderClasses() {
    let classes = "badge p-2 ";
    return (classes += this.state.count === 0 ? "bg-warning" : "bg-secondary");
  }
}

export default Counter;
