import { createStore } from 'redux';
import todoReducer from './reducer';

export type RootState = ReturnType<typeof todoReducer>;

const store = createStore(todoReducer);

export default store;