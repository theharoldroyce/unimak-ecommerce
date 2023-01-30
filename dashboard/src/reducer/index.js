import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import adminReducer from './admin.reducer';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    category: categoryReducer,
    product: productReducer,
});

export default rootReducer; 
