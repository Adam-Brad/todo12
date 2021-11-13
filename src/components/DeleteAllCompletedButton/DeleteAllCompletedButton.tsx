import React from "react";
import { useDispatch } from "react-redux";
import { setDeleteAllCompleted } from "../../redux/listSlice"

const DeleteAllCompletedButton = () => {
  const dispatch = useDispatch();

  const handleDeleteCompleted = () => {
    dispatch(setDeleteAllCompleted)
  }
  return (
    <button
      onClick={handleDeleteCompleted}
      data-testid='delete-all-completed'
    >
      Delete all completed
    </button>
  );
}

export default DeleteAllCompletedButton;
