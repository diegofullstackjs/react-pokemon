import {applyMiddleware, createStore} from 'redux'
import rootReducer from './modules'
import { IPOKEMON } from './modules/pokemon/reducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/rootSaga'
export interface ISTATE  {
    pokemon: IPOKEMON
}
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const store = createStore(rootReducer,applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)
export default store;