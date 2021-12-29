import { combineReducers } from 'redux'
import {productsReducer} from './getAllProducts'
import {productDetails} from './getProductById'


export default combineReducers({
    allProducts:productsReducer,
    details:productDetails

  })