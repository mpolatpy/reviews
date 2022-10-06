import { createContext, useContext, useReducer } from 'react';
import { initialState, reviewReducer } from './ReviewReducer';

export const ReviewContext = createContext(null);
export const ReviewDispatchContext = createContext(null);

export function ReviewProvider({ children }) {
    const [state, dispatch] = useReducer(
        reviewReducer,
        initialState
    );

    return (
        <ReviewContext.Provider value={state}>
            <ReviewDispatchContext.Provider value={dispatch}>
                {children}
            </ReviewDispatchContext.Provider>
        </ReviewContext.Provider>
    );
}

export function useReviews() {
    return useContext(ReviewContext);
}

export function useReviewsDispatch() {
    return useContext(ReviewDispatchContext);
}