import React from "react";
import { useSelector } from "react-redux";
import StoreState from "../../types/StoreState";
import { v4 as uuidv4 } from 'uuid';


const List = () => {
  const list = useSelector((state: StoreState) => state.list);
  const displayedList = list.map(todo => <li key={uuidv4()}>{todo.text}</li>);

  return (
    <>
      {displayedList}
    </>
  );
}

export default List;
