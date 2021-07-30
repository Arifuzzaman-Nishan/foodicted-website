/* eslint-disable import/prefer-default-export */
import { FOOD_DETAILS } from './foodDetalisTypes';

export const foodDetails = (item) => {
    console.log(item);
    return {
        type: FOOD_DETAILS,
        payload: item,
    };
};
