import Todo from "./Todo";

export default interface TodoAction {
  type: string;
  payload: Todo;
}
