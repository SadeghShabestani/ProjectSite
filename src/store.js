import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
})

const cartFromLocalStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
    cart: {
        cartItems: cartFromLocalStorage
    },
    userLogin: { userInfo: userInfoFromLocalStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store