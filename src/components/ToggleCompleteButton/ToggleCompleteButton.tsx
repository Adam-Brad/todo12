import React from 'react';
import { useDispatch } from "react-redux";
import Todo from "../../types/Todo";
import { setToggleComplete } from "../../redux/listSlice";

interface Props {
  todo: Todo;
}
const ToggleCompleteButton = ({todo}: Props) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setToggleComplete(todo.id));
  }

  return (
    <button
      onClick={handleToggle}
      data-testid={`${todo.text}-toggle`}
    >
      Toggle Complete
    </button>
  );
}

export default ToggleCompleteButton;
