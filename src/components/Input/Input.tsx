import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setAddTodo } from 'redux/listSlice';

const Input = () => {
  const [task, setTask] = useState<string>('');
  const dispatch = useDispatch();

  const handleAddToList = () => {
    dispatch(setAddTodo(task));
    setTask('');
  }

  return (
    <>
      <input
        onChange={(event) => setTask(event.target.value)}
        value={task}
      />
      <button onClick={handleAddToList}>Click to add</button>
    </>
  );
}

export default Input;
