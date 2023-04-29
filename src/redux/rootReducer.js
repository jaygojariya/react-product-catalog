import { combineReducers } from "redux";
import commonReducer from "./reducers/common/commonReducer";
import cartReducer from "./reducers/cart/cartReducer";
import productReducer from "./reducers/product/productReducer";

const rootReducer = combineReducers({
    commonReducer: commonReducer,
    cartReducer: cartReducer,
    productReducer: productReducer
});

export default rootReducer;
