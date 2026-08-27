import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the welcome screen', () => {
  render(<App />);
  expect(screen.getByText('Welcome')).toBeInTheDocument();
  expect(screen.getByText('Touch anywhere to begin.')).toBeInTheDocument();
});
