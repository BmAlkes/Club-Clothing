import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducers from './root.reducer'

const store = createStore(rootReducers, applyMiddleware(logger))

export type RootState = ReturnType<typeof store.getState>

export default store
