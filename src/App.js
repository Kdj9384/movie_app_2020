import React from "react";
import propTypes from "prop-types";

import Food from "./Food";
import ClassComponent from "./Counter";

function TestCase() {
  return (
    <div>
      {/* <Food/> */}
      <p>-----------------------------------------------</p>
      <br/>
      <ClassComponent/>
    </div>
    
  )
}

class App extends React.Component { // parent
  state = {
    isLoading : true,
    movies : [],
    test : [],
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading : false});
    }, 3000);
  }

  render() {
    const isLoading = this.state.isLoading;
    // const {isLoading} = this.state; // what different??

    return (
      <div className="App">
        <TestCase/>
  
        <h1>{isLoading ? "Loading..." : "I am ready! Hello "}</h1>
      </div>
    );
  }
}

export default App;
