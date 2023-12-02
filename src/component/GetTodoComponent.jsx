import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../Redux/asyncThunk/userAction";

const GetTodoComponent = () => {
  const data = useSelector((store) => store.todoSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, []);
  console.log(data.todos);
  return (
    <div>
      {data.todos.map((item, i) => (
        <p>
          {i + 1} - {item.title}
        </p>
      ))}
    </div>
  );
};

export default GetTodoComponent;
