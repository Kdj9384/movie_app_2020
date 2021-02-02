import React from "react";
import CompTest from "./Compoent_test";


// Component
function Food(props) {

// props.favor == {favor}
  console.log(props);

  return (
    <div>
      <h3> comp test 2</h3>
      <h2> Food props : {props.favor} </h2>
    </div>
  );
}

function Food2({favor2}) {
  return (
    <div>
      <h1> Food 2 props : {favor2}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1> helo</h1>
      <CompTest />
      {/* props */}
      <Food favor="props favor" />
      <Food2 favor2={12}/>
      <Food2 favor2="test2"/>
      <Food2 favor2="third"/>
      <Food2 favor2="포쓰"/>
    </div>
  );
}

export default App;
