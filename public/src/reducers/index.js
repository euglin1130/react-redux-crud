import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// The variable name determines the name of state
import { products, selectedProducts } from '../reducers/products';
import categories from '../reducers/categories';
import register from '../reducers/users';
import auth from '../reducers/auth';

const rootReducer = combineReducers({
    products,
    selectedProducts,
    categories,
    register,
    auth,
    routing: routerReducer
});

export default rootReducer;