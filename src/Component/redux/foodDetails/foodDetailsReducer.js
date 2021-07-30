import { FOOD_DETAILS } from './foodDetalisTypes';

const initailState = {
    items: {},
};

const foodDetailsReducer = (state = initailState, action) => {
    switch (action.type) {
        case FOOD_DETAILS:
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
};

export default foodDetailsReducer;
