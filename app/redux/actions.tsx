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
  
  
  interface TaskPayload {
    text: string;
  }
  
  interface IdPayload {
    id: string;
  }
  
  interface FilterPayload {
    filter: string;
  }
  
  interface SearchTermPayload {
    searchTerm: string;
  }
  
  
  export const addTask = (text: string): { type: string; payload: TaskPayload } => ({
    type: ADD_TASK,
    payload: { text },
  });
  
  export const toggleTask = (id: string): { type: string; payload: IdPayload } => ({
    type: TOGGLE_TASK,
    payload: { id },
  });
  
  export const removeTask = (id: string): { type: string; payload: IdPayload } => ({
    type: REMOVE_TASK,
    payload: { id },
  });
  
  export const markCompleted = (id: string): { type: string; payload: IdPayload } => ({
    type: MARK_COMPLETED,
    payload: { id },
  });
  
  export const markIncomplete = (id: string): { type: string; payload: IdPayload } => ({
    type: MARK_INCOMPLETE,
    payload: { id },
  });
  
  export const filterTasks = (filter: string): { type: string; payload: FilterPayload } => ({
    type: FILTER_TASKS,
    payload: { filter },
  });
  
  export const markAllCompleted = (): { type: string } => ({
    type: MARK_ALL_COMPLETED,
  });
  
  export const updateSearchTerm = (searchTerm: string): { type: string; payload: SearchTermPayload } => ({
    type: UPDATE_SEARCH_TERM,
    payload: { searchTerm },
  });
  