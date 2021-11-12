import React from "react";
import { useSelector } from "react-redux";
import StoreState from "../../types/StoreState";
import ListItem from "../ListItem/ListItem";


const List = () => {
  const list = useSelector((state: StoreState) => state.list);
  const displayedList = list.map(todo => <ListItem todo={todo} />);

  return (
    <>
      {displayedList}
    </>
  );
}

export default List;
