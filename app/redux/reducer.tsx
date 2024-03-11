import {
    ADD_TASK,
    TOGGLE_TASK,
    REMOVE_TASK,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    FILTER_TASKS,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_TERM,
  } from './actionTypes';
import { RootState } from './store';
  
  export interface TaskState {
    tasks: Task[];
    filter: string;
    searchTerm: string;
  }
  
  interface Task {
    text: string;
    completed: boolean;
  }
  
  type TaskAction =
    | { type: typeof ADD_TASK; payload: { text: string } }
    | { type: typeof TOGGLE_TASK; payload: { id: number } }
    | { type: typeof REMOVE_TASK; payload: { id: number } }
    | { type: typeof MARK_COMPLETED; payload: { id: number } }
    | { type: typeof MARK_INCOMPLETE; payload: { id: number } }
    | { type: typeof FILTER_TASKS; payload: { filter: string } }
    | { type: typeof UPDATE_SEARCH_TERM; payload: { searchTerm: string } }
    | { type: typeof MARK_ALL_COMPLETED };
  
  const initialState: TaskState = { tasks: [], filter: 'ALL', searchTerm: '' };
  
  const taskReducer = (state: TaskState = initialState, action: TaskAction): TaskState => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, { text: action.payload.text, completed: false }],
        };
  
      case TOGGLE_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task, index) =>
          index.toString() === action.payload.id.toString() ? { ...task, completed: !task.completed } : task
          ),
        };
  
      case REMOVE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter((_task, index) => index.toString() !== action.payload.id.toString()),
        };
  
      case MARK_COMPLETED:
        return {
          ...state,
          tasks: state.tasks.map((task, index) =>
          index.toString() === action.payload.id.toString() ? { ...task, completed: true } : task
          ),
        };
  
      case MARK_INCOMPLETE:
        return {
          ...state,
          tasks: state.tasks.map((task, index) =>
          index.toString() === action.payload.id.toString() ? { ...task, completed: false } : task
          ),
        };
  
      case FILTER_TASKS:
        return {
          ...state,
          filter: action.payload.filter,
        };
  
      case UPDATE_SEARCH_TERM:
        return {
          ...state,
          searchTerm: action.payload.searchTerm,
        };
  
      case MARK_ALL_COMPLETED:
        return {
          ...state,
          tasks: state.tasks.map((task) => ({ ...task, completed: true })),
        };
  
      default:
        return state;
    }
    
  };
  export default taskReducer;
  