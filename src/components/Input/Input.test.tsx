import reducer, { setAddTodo } from '../../redux/listSlice'
import StoreState from "../../types/StoreState";
import { uuid } from "uuidv4";

test('should handle a todo being added to an empty list', () => {
  // Arrange
  const previousState: StoreState = {
    list: []
  };

  // Act
  const actual = reducer(previousState, setAddTodo('Run the tests'));

  // Assert
  expect(actual).toMatchObject({
      list: [
        {
          text: 'Run the tests',
          isCompleted: false,
          id: expect.any(String)
        },
      ]
    }
  )
})
