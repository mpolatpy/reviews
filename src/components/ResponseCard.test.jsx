import { render, screen, fireEvent } from '@testing-library/react';
import ResponseCard from './ResponseCard';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ReviewProvider } from '../store/ReviewContext';

describe('ResponseCard component tests', () => {
    let wrapper, history, text;

    beforeEach(() => {
        history = createMemoryHistory();
        text = 'Sample Response';

        wrapper = render(
            <ReviewProvider>
                <Router history={history}>
                    <ResponseCard reviewId='5d707203b65083001e956f0a' />
                </Router>
            </ReviewProvider>
        );
    });

    test('matches the snaphot', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('save response button is disabled', () => {
        const responseButton = screen.getAllByRole('button')[0];
        expect(responseButton).toBeDisabled();
    });

    test('save response button is enabled after text input entry', () => {
        const responseButton = screen.getAllByRole('button')[0];
        const textInput = screen.getByRole('textbox');
        fireEvent.change(textInput, { target: { value: text } });

        expect(responseButton).toBeEnabled();

        fireEvent.click(responseButton);
        
        expect(screen.getByText(text)).toBeInTheDocument();
    });
})