import React from 'react';
import { render, screen } from '@testing-library/react';
import cities from '../../assets/cities.json';
import VerticalStepper from '.';

const labels = cities.map(({ name }) => name);

console.log({ labels });

test('renders steps with labels', () => {
  render(<VerticalStepper length={labels.length} labels={labels} />);
  const linkElement = screen.getByText(/Paris/i);
  expect(linkElement).toBeInTheDocument();
});
