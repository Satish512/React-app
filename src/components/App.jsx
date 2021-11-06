import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Counters from "../components/Counters";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Demo from "./Demo";
import Header from '../components/Layout/Header'; //Include Heder
import Footer from '../components/Layout/Footer'; //Include Footer

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }],
  };

  handleIncrement = (counter) => {
    console.log("handleIncrement", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterid) => {
    console.log("HandleDelete clicked via props", counterid);
    const counters = this.state.counters.filter((c) => c.id !== counterid);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    //console.log(counters);
  };

  selectCountry(val) {
    console.log(val);
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { country, region } = this.state;
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        
        <main className="container">
          <Demo></Demo>
          {/* <Counters
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            counters={this.state.counters}
          /> */}
          {/* <CountryDropdown
            value={country}
            onChange={(val) => this.selectCountry(val)}
          />
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => this.selectRegion(val)}
          /> */}
        </main>
        
      </React.Fragment>
    );
  }
}

export default App;
