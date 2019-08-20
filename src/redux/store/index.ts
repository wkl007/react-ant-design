import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '@/redux/reducers'

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const debug: boolean = process.env.NODE_ENV !== 'production'

const middleware: Array<any> = [
  debug && logger,
  thunkMiddleware
].filter(Boolean)

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
)

export default function configureStore (): any {
  return createStore(rootReducer, enhancer)
}
