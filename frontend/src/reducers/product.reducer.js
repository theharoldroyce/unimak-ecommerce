import { productConstants } from "../actions/constants"

const initState = {
    products: [],
    productsByPrice: {
        under50p: [],
        under100p: [],
        under150p: [],
        under200h: [],
        under300h: [],
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case productConstants.GET_PRODUCTS_BY_SLUG:
            state = {
                ...state,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice
                },
            };
            break;
    }
    return state;
}