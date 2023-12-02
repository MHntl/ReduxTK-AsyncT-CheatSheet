import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setCount } from "../Redux/slice/counterSlice";

const CounterComponent = () => {
  const countStore = useSelector((store) => store.counterSlice);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Arttır
      </button>
      <p>{countStore.count}</p>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Azalat
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(setCount(5));
        }}
      >
        SetCount
      </button>
    </div>
  );
};

export default CounterComponent;
