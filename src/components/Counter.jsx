import React, { Component } from "react";
import ReactPlayer from "react-player";

class Counter extends Component {
  getCssClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <span>Zero</span> : value;
  }

  render() {
    // console.log("props", this.props);
    return (
      <React.Fragment>
        <div>
          <span
            style={{ fontSize: 15, fontWeight: "bold" }}
            className={this.getCssClasses()}
          >
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-sm btn-secondary"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-sm btn-danger m-2"
          >
            Delete
          </button>
        </div>

      

      </React.Fragment>
    );
  }
}

export default Counter;
