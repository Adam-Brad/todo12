import React, { useState } from 'react';
import { useDispatch } from "react-redux";
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
      <button
        onClick={handleAddToList}
        data-testid="add-button"
      >Click to add</button>
    </>
  );
}

export default Input;
