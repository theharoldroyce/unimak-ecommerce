import { productConstants } from "../actions/constants"

const initState = {
    products: [],
    productByPrice: {
        under1h: [],
    }
}

export default (state = initState, action) => {
    switch(action.type){
        case productConstants.GET_PRODUCTS_BY_SLUG:
            state ={
                ...state,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productByPrice
                }
            }
            break;
    }
    return state;
}