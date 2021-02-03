import React from "react";

function funcComponent() { // function component!!
  return (
    <div>

    </div>
  );
}

// 클래스 컴포넌트는 대문자로 시작해야함.
class ClassComponent extends React.Component { // class component!!

  // 클래스 컴포넌트를 사용하는 이유 -> state를 사용하기 위해서
  // state는 object이고 이 데이터는 동적이다!!
  state = {
    count : 0,
    other : 1000,
  };

  // javascript code
  add = () => {
    this.setState({count : this.state.count + 1}); // Not Recommanded!! Bad way
  };

  minus = () => {
    this.setState(current => ({count : current.count - 1})); // Recommand!! Good way
  };

  // react code
  constructor(props) {
    super(props);
    console.log("constructor!");
  }

  componentDidMount() {
    console.log("componentDidMount??");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate??");
  }


  
  // 렌더 함수
  render() {
    console.log("I'm Rendered!!");
    return (
      <div className="parent">
        <h3>class component - Current Number is : {this.state.count}</h3>
        <h1> Other is : {this.state.other}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }

}
function Counter() { // parent
  return (
    <div className="App">
      <p>-----------------------------------------------</p>
      <br/>
      <ClassComponent/>
    </div>
  );
}

export default Counter;
