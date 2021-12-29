import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { ITodoState } from './app/reducers/todoReducers'
import { filterStatus, todoListState } from './app/selector/allSelector'
import TodoFeatures from './features/Todo'
import { ITodoItem } from './modules/models'

function App() {
  // function randomDate(start: any, end: any) {
  //   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  // }
  // const list = useSelector((state: any) => state.todoList.todoList)
  // console.log(list)
  // const add = list.map((l: any) => ({ ...l, date: new Date().toLocaleString().split(',')[0] }))
  // console.log(add)
  //const li
  const lll = useSelector(filterStatus)
  console.log(lll)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/todo" component={TodoFeatures} />
      </Switch>
    </div>
  )
}

export default App
