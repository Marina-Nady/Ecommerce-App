import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import PromiseMW from 'redux-promise';
const middleware = [thunk]

const createStoreWithMW = applyMiddleware(PromiseMW,...middleware)(createStore)
const store = createStoreWithMW(rootReducer)


export default store

