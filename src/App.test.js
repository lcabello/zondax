import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/IzariPlayground', () => () => <div>IzariPlayground</div>);

test('renders app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Izari Filecoin/i);
  expect(titleElement).toBeInTheDocument();
  const playgroundElement = screen.getByText(/IzariPlayground/i);
  expect(playgroundElement).toBeInTheDocument();
});
