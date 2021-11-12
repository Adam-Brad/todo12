import StoreState from "../../types/StoreState";
import reducer, { setDeleteTodo } from '../../redux/listSlice'

test('should handle deleting a todo', () => {
  const previousState: StoreState = {
    list: [
      {
        text: 'get bread',
        isCompleted: false,
        id: '123'
      }
    ]
  }

  const listAfterDelete = reducer(previousState, setDeleteTodo('123'));

  expect(listAfterDelete).toMatchObject({
    list: []
  });
})
