import { combineReducers } from 'redux'
import {productsReducer} from './getAllProducts'
import {productDetails} from './getProductById'
// import {addCart} from './addCart'
import { deleteCart } from './deleteCart'
import addItems from './addCart'
import handleCart from './handleCart'


const rootReducer = combineReducers({
    allProducts:productsReducer,
    details:productDetails,
    // addItems,
    handleCart,
    // add:addCart,
    // delete:deleteCart

  })

export default rootReducer 