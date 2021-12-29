import axios from 'axios'
import { Epic, ofType } from 'redux-observable'
import { from } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'
import { TodosActionTypes } from '../../constants'
import { loadedTodos } from '../actions'
import { TodosAction } from './../actions/todoAction'
import { IState } from './../reducers/index'
//CALL API
export const todoEpic: Epic<TodosAction, TodosAction, IState> = (action$, state$) =>
  action$.pipe(
    ofType(TodosActionTypes.LOAD_TODOS),
    mergeMap((action) =>
      from(axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10&_page=1')).pipe(
        map((response) => {
          console.log(response)
          const data = response.data
          const dt = data.map((d: any) => ({
            ...d,
            date: new Date().toLocaleString().split(',')[0],
          }))
          return loadedTodos(dt)
        })
        // startWith(loadingTodos()),
        // catchError(() => of(loadingTodosFalied()))
      )
    )
  )
