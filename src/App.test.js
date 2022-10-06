import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ReviewProvider } from './store/ReviewContext';

describe('App component tests', () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();

    render(
      <ReviewProvider>
        <Router history={history}>
          <App />
        </Router>
      </ReviewProvider>
    );
  });

  test('renders the header', () => {
    expect(screen.getByRole('heading', {name: 'Reviews'})).toBeInTheDocument();
  })

  test('renders all cards in the main screen', () => {
    expect(screen.getAllByRole('button')).toHaveLength(25);
  });

  test('navigates to review detail page when clicked on a card', () => {
    const cards = screen.getAllByRole('button');
    fireEvent.click(cards[0]);

    expect(history.location.pathname).toBe('/reviews/5d707203b65083001e956f0a');
  })
});
