import React, { Component } from "react";

import Counter from "./Counter";

class Counters extends Component {
render() { 
  const {onDelete,onIncrement,onReset} = this.props;  
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-sm btn-primary m-2"
        >
          Reste
        </button>
        {this.props.counters.map(counter => (
          <Counter onDelete={onDelete}
          onIncrement = {onIncrement}
          counter={counter} />
        ))}
      </div>
    );
  }
}

export default Counters;
