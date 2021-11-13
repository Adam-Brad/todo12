import React, { useState } from "react";
import Todo from "../../types/Todo";
import DeleteButton from "../DeleteButton/DeleteButton";
import ToggleCompleteButton from "../ToggleCompleteButton/ToggleCompleteButton"
import ItemText from "../ItemText/ItemText";
import { useDispatch } from "react-redux";
import { setEditTodo } from "../../redux/listSlice";
import EditableInput from "../EditableInput/EditableInput";

interface Props {
  todo: Todo;
}

const ListItem = ({todo}: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [updatedTask, setUpdatedTask] = useState<string>(todo.text);

  const dispatch = useDispatch();

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  }

  const handleSave = () => {
    dispatch(setEditTodo({
      text: updatedTask,
      isCompleted: todo.isCompleted,
      id: todo.id
    }));
    toggleEditable();
  }

  return (
    <div>
      { isEditable ?
          <EditableInput
            updatedTask={updatedTask}
            setUpdatedTask={setUpdatedTask}
            handleSave={handleSave}
          />
        :
          <div data-testid={`${todo.text}-list-item`}>
            <ItemText todo={todo} />
            <button onClick={toggleEditable}>Click to edit</button>
          </div>
      }
      <DeleteButton todo={todo} />
      <ToggleCompleteButton todo={todo} />
    </div>
  );
}

export default ListItem;
