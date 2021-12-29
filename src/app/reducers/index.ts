import { IFilterItem } from './../../modules/models'
import { combineReducers } from 'redux'
import filterReducer, { IFilerState, initFilterState } from './filterReducers'
import todosReducer, { initialTodoState, ITodoState } from './todoReducers'

export interface IState {
  todoList: ITodoState
  filter: IFilerState
}
export const initialState: IState = {
  todoList: initialTodoState,
  filter: initFilterState,
}

export const rootReducer = combineReducers({
  todoList: todosReducer,
  filter: filterReducer,
})
