import { combineReducers } from 'redux'
import {productsReducer} from './getAllProducts'


export default combineReducers({
    allProducts:productsReducer

  })