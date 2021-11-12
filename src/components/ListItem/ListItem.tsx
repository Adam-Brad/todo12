import React from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "../../types/Todo";
import DeleteButton from "../DeleteButton/DeleteButton";

interface Props {
  todo: Todo;
}

const ListItem = ({todo}: Props) => {

  return (
    <>
      <li key={uuidv4()}>{todo.text}</li>
      <DeleteButton todo={todo} />
    </>
  );
}

export default ListItem;
