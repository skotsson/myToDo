import * as types from '../../src/types/types';
import { v1 as uuid } from 'uuid';

// ACTION TYPES
export const CREATE = 'CREATE';
export const WRITE = 'WRITE';
export const TOGGLE = 'TOGGLE';
export const REMOVE = 'REMOVE';
export const SAVE = 'SAVE';
export const LOAD = 'LOAD';

// ACTION CREATORS

export const createTodoActionCreator = (todo: {
  task: string;
  type: types.TermType;
}): types.CreateTodoActionType => {
  const { task, type } = todo;
  return {
    type: CREATE,
    payload: {
      id: uuid(),
      isDone: false,
      task,
      type,
    },
  };
};

export const toggleTodoActionCreator = ({
  id,
  isDone,
}: {
  id: string;
  isDone: boolean;
}): types.ToggleTodoActionType => {
  return {
    type: TOGGLE,
    payload: { id },
  };
};

export const removeTodoActionCreator = ({
  id,
}: {
  id: string;
}): types.RemoveTodoActionType => {
  return {
    type: REMOVE,
    payload: { id },
  };
};
