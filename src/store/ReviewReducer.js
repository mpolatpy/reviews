import reviewList from './reviews.json';
import { ReviewActionTypes } from './ActionTypes';

export const initialState = {
    reviews: reviewList.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
    }, {})
}

export function reviewReducer(state, action) {
    switch (action.type) {
        case ReviewActionTypes.UPDATE_RESPONSE: {
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    [action.payload.id]: {
                        ...state.reviews[action.payload.id],
                        response: action.payload.response
                    }
                }
            }
        }
        case ReviewActionTypes.DELETE_RESPONSE: {
            console.log(action, state)
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    [action.payload.id]: {
                        ...state.reviews[action.payload.id],
                        response: undefined
                    }
                }
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}