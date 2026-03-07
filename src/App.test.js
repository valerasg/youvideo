import { render, screen } from '@testing-library/react';
import App from './App';

// Mocking some parts if needed, but App.js already contains BrowserRouter
// If Feed or other components have heavy API calls, they might need mocking.

test('renders navbar logo link', () => {
  render(<App />);
  const logoLink = screen.getByRole('link', { name: /logo/i });
  expect(logoLink).toBeInTheDocument();
});
