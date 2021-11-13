import React from "react";

interface Props {
  updatedTask: string;
  setUpdatedTask: (updatedTask: string) => void;
  handleSave: () => void;
}

const EditableInput = ({updatedTask, setUpdatedTask, handleSave}: Props) => {
  return (
    <>
      <input
        onChange={(event) => setUpdatedTask(event.target.value)}
        value={updatedTask}
      />
      <button onClick={handleSave}>Save</button>
    </>
  );
}

export default EditableInput
