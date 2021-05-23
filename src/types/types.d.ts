
export interface TodoListFrameProps {
  title: string;
  ico: JSX.Element;
  type: TermType;
  // todos: Todo[];
}

export interface TodoListProps {
  type: TermType;
  // todos: Todo[];
}

export type TermType = 'short-term' | 'long-term' | 'note';

export interface Todo {
  id: string;
  task: string;
  isDone: boolean;
  type: TermType;
}
  
export interface State {
    todos: Todo[]
  }
  
export type TodoAction = {
    type: string
    // todo: Todo
  }
  
export type DispatchType = (args: TodoAction) => void

// action types

export interface CreateTodoActionType {
  type: typeof CREATE;
  payload: Todo;
}
export interface ToggleTodoActionType {
  type: typeof TOGGLE;
  payload: { id: string; 
  };
}
export interface RemoveTodoActionType {
  type: typeof REMOVE;
  payload: { id: string };
}

// reducer todo action types

export type TodoActionTypes = CreateTodoActionType | ToggleTodoActionType | DeleteTodoActionType | WriteLocalStorageActionType | LoadLocalStorageActionType;
