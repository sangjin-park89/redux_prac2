import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { addNumber, minusNumber } from "./redux/modules/counterSlice";

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
    dispatch(minusNumber(number))
  }

  // const number = useSelector((state) => state.counter.number);

  return (
    <div>
      <h2>{globalNumber}</h2>

      <input type="number" onChange={onChangeHandler}></input>
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinNumberHandler}>빼기</button>
    </div>
  );
}

export default App;