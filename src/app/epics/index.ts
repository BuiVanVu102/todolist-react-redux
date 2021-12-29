import { todoEpic } from './todoEpic'
import { combineEpics } from 'redux-observable'

const rootEpic = combineEpics(todoEpic)
export default rootEpic
