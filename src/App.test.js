import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';

test('renders header logo', () => {
  const { getAllByAltText } = render(<App />);
  const linkElement = getAllByAltText(/headerLogo/i)[0];
  expect(linkElement).toBeInTheDocument();
});

test('renders Article', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/New Games/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Article and display get started button', () => {
  const { getAllByRole } = render(<App />);
  const linkElement = getAllByRole(/GetStarted/i)[0];
  expect(linkElement).toBeInTheDocument();
});

test('renders Section', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/How it Works/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders Sub Section', () => {
//   const { getByText } = render(<App />);
//   const stepElement = await waitForElement(
//     () => getByLabelText(/01/i),
//     { container }
//   )
//   expect(stepElement).toBeInTheDocument();
// });