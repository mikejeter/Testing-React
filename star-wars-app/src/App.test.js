import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders button text', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/next/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders button text', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/previous/i);
  expect(buttonElement).toBeInTheDocument();
});