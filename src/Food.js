import React from "react";
import propTypes from "prop-types";

// Component
function Food(props) { // child
    // props.favor == {favor}
    console.log(props);

    return (
    <div>
        <h2> Food props : {props.favor} </h2>
    </div>
    );
    }
    
function Food2({favor2, style}) { // child
    return (
    <div>
        <h1> Food 2 props : {favor2}</h1>
    </div>
    );
}
const foodILike = ['aa', 'bb', 'vv'];
const foodILIkeObj = [{id : 1, name : "AA"}, {id : 2, name : "BB"}, {id : 3, name : "CC"}, {id : 4, name : "VV"}];

// propTypes 사용
// 여기서 제안한 것과 다른 props가 컴포넌트에 들어온다면, 에러메시지를 출력해준다. 매우 유용 !!
Food2.propTypes = {
favor2 : propTypes.string.isRequired,
style : propTypes.string
};

function mainFood() { // parent
    // 배열의 각 아이템에 반복적으로 함수를 적용할 수 있음 : map
    foodILike.map(currentItem => {
      console.log(currentItem);
      return currentItem;
    });
  
    foodILIkeObj.map(function(currentItem) {
      return currentItem.name + "hi";
    }) // 각 아이템에 리턴한 값이 담긴다.
  
    function foodFunction(arrayItems) {
      // return <h3>{arrayItems.name + "add by function"} </h3>
      return <Food key={arrayItems.id} favor={arrayItems.name + "add by function component"}></Food>
    }
  
    return (
      <div className="App">
        <h1> helo</h1>
        {/* props */}
        <Food favor="props favor" />
        <Food2 favor2={12}/>
  
        {foodILIkeObj.map(Items => (
          <Food2 key={Items.id} favor2={Items.name}/>
        ))}
  
        {foodILIkeObj.map(foodFunction)}
      </div>
    );
}

export default mainFood;