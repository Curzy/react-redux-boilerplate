import * as React from "react";

import { useDispatch, useSelector } from "react-redux";
import { plus, minus } from "./actionCreator";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div>
      <h1>Count</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(plus())}>PLUS</button>
      <button onClick={() => dispatch(minus())}>MINUS</button>
    </div>
  );
};
