import { initialState } from './../reducers/index'
import { rootReducer } from './../reducers/index'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from '../epics'

const epicMiddleware = createEpicMiddleware()
const composeEnhancer = composeWithDevTools({
  name: 'Redux-Observable Week6',
})

const store = createStore(
  rootReducer,
  initialState as any,
  composeEnhancer(applyMiddleware(epicMiddleware))
)

epicMiddleware.run(rootEpic as any)
console.log(initialState)
export default store
