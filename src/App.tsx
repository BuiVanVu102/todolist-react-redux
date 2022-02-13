import { Route, Switch } from 'react-router-dom'
import './App.css'
import TodoFeatures from './features/Todo'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/todo" component={TodoFeatures} />
      </Switch>
    </div>
  )
}

export default App
