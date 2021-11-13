import React from "react";
import Todo from "../../types/Todo";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  completed: {
    textDecoration: "line-through"
  },
}));

interface Props {
  todo: Todo;
}

const ItemText = ({todo}: Props) => {
  const classes = useStyles();

  const textStyles = todo.isCompleted ? `${classes.completed}` : '';

  return (
    <li
      key={uuidv4()}
      className={textStyles}
    >
      {todo.text}
    </li>
  )
}

export default ItemText;
