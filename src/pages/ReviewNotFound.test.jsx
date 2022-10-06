import { render, screen, fireEvent } from '@testing-library/react';
import ReviewNotFound from './ReviewNotFound';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe('ReviewNotFound component tests', () => {
    let wrapper, history;

    beforeEach(() => {
        history = createMemoryHistory();

        wrapper = render(
            <Router history={history}>
                <ReviewNotFound />
            </Router>
        );
    });

    test('matches the snaphot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('has The review you are looking for does not exist text', () => {
        const text = screen.getByText(/the review you are looking for does not exist./i);
        expect(text).toBeInTheDocument();
    });

    test('navigates to home page when button clicked', () => {
        const backButton = screen.getByRole('link');
        fireEvent.click(backButton);

        expect(history.location.pathname).toBe('/');
      });
});