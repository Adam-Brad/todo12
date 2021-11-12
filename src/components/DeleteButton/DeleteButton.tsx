import React from "react";
import { useDispatch } from "react-redux";
import { setDeleteTodo } from "../../redux/listSlice";
import Todo from "../../types/Todo";

interface Props {
  todo: Todo;
}

const DeleteButton = ({todo}: Props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(setDeleteTodo(todo.id))
  }

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteButton;
