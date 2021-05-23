import { v1 as uuid } from 'uuid';
import * as types from '../types/types';
import { combineReducers } from 'redux';

export const todosInitialState: types.Todo[] = [
  {
    id: uuid(),
    task: 'You have no tasks: delete me',
    isDone: true,
    type: 'short-term',
  },
];

export const todosReducer = (
  state: types.Todo[] = todosInitialState,
  action: types.TodoActionTypes,
) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.payload];
    case 'TOGGLE':
      console.log(
        'This is the action Payload: ' + JSON.stringify(action.payload),
      );
      console.log(
        'This is the state after dispatch: ' +
          JSON.stringify(
            JSON.stringify(state.filter((todo) => todo.id !== action.payload)),
          ),
      );
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isDone: !todo.isDone }
          : todo,
      );
    case 'REMOVE':
      const newTodos = state.filter((todo) => todo.id !== action.payload.id);
      return newTodos;
  }
  return state;
};

export const rootReducer = combineReducers({
  todos: todosReducer,
});
