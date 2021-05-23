import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Todo, TermType } from '../types/types';
import { v1 as uuid } from 'uuid';
import { combineReducers } from '@reduxjs/toolkit';

export const todosInitialState: Todo[] = [
  {
    id: uuid(),
    task: 'You have no tasks: delete me',
    isDone: true,
    type: 'short-term',
  },
  // {
  //   id: uuid(),
  //   task: 'Set up redux',
  //   isDone: false,
  //   type: 'short-term',
  // },
  // {
  //   id: uuid(),
  //   task: 'Find new job',
  //   isDone: true,
  //   type: 'long-term',
  // },
  // {
  //   id: uuid(),
  //   task: 'Get fit',
  //   isDone: false,
  //   type: 'long-term',
  // },
  // {
  //   id: uuid(),
  //   task: 'Today I learned redux.',
  //   isDone: false,
  //   type: 'note',
  // },
  // {
  //   id: uuid(),
  //   task: 'Would like to learn .....',
  //   isDone: false,
  //   type: 'note',
  // },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    edit: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        isDone: boolean;
        task: string;
        type: TermType;
      }>,
    ) => {
      const todoToEdit = state.find((todo) => todo.id === payload.id);
      if (todoToEdit) {
        todoToEdit.task = payload.task;
      }
    },
    toggle: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        isDone: boolean;
        task: string;
        type: TermType;
      }>,
    ) => {
      const todoToggle = state.find((todo) => todo.id === payload.id);
      if (todoToggle) {
        todoToggle.isDone = payload.isDone;
      }
    },
    remove: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        isDone: Boolean;
        task: string;
        type: TermType;
      }>,
    ) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    create: {
      reducer: (
        state,
        {
          payload,
        }: PayloadAction<{
          id: string;
          task: string;
          type: TermType;
          isDone: boolean;
        }>,
      ) => {
        state.unshift(payload);
      },
      prepare: ({
        task,
        type,
        id,
        isDone,
      }: {
        task: string;
        type: TermType;
        id: string;
        isDone: boolean;
      }) => ({
        payload: {
          id: uuid(),
          task,
          type,
          isDone: false,
        },
      }),
    },
  },
});

// const selectedTodoSlice = createSlice({
//   name: 'selectedTodo',
//   initialState: null as string | null,
//   reducers: {
//     select: (state, { payload }: PayloadAction<{ id: string }>) => payload.id,
//   },
// });

export const {
  create: createTodoActionCreator,
  edit: editTodoActionCreator,
  toggle: toggleCheckedActionCreator,
  remove: deleteTodoActionCreator,
} = todosSlice.actions;

// export const { select: selectedTodoActionCreator } = selectedTodoSlice.actions;

const reducer = combineReducers({
  todos: todosSlice.reducer,
  // selected: selectedTodoSlice.reducer,
});

export default configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;
