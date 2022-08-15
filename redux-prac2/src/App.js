import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { minusOne, plusOne, addNumber, minNumber } from "./redux/modules/counter";

function App() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
  };

  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number))
  } 

  const onClickMinNumberHandler = () => {
    dispatch(minNumber(number))
  }
  console.log(number)

  // const number = useSelector((state) => state.counter.number);

  return (
    <div>
      <h1>{number}</h1>
      <h2>{globalNumber}</h2>
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        - 1
      </button>
      <input type="number" onChange={onChangeHandler}></input>
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinNumberHandler}>빼기</button>
    </div>
  );
}

export default App;
