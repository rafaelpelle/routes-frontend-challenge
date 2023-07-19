import React from 'react';
import { render, screen } from '@testing-library/react';
import VerticalStepper from '.';

const labels = ['Paris', 'Lyon', 'Marseille'];
const distances = ['391.93 km', '277.94 km'];

test('renders steps without labels or distances', async () => {
  const { container } = render(<VerticalStepper length={labels.length} />);

  expect(container.getElementsByClassName('MuiStep-root').length).toBe(
    labels.length,
  );

  const parisLabel = screen.queryByText(/Paris/i);
  const marseilleLabel = screen.queryByText(/Marseille/i);
  const lionLabel = screen.queryByText(/Lyon/i);
  const dijonLabel = screen.queryByText(/Dijon/i);
  const distanceLabel = screen.queryByText(/277.94 km/i);

  expect(parisLabel).toBeNull();
  expect(marseilleLabel).toBeNull();
  expect(lionLabel).toBeNull();
  expect(dijonLabel).toBeNull();
  expect(distanceLabel).toBeNull();
});

test('renders steps with labels', () => {
  const { container } = render(
    <VerticalStepper length={labels.length} labels={labels} />,
  );

  expect(container.getElementsByClassName('MuiStep-root').length).toBe(
    labels.length,
  );

  const parisLabel = screen.queryByText(/Paris/i);
  const marseilleLabel = screen.queryByText(/Marseille/i);
  const lionLabel = screen.queryByText(/Lyon/i);
  const dijonLabel = screen.queryByText(/Dijon/i);
  const distanceLabel = screen.queryByText(/277.94 km/i);

  expect(parisLabel).toBeInTheDocument();
  expect(marseilleLabel).toBeInTheDocument();
  expect(lionLabel).toBeInTheDocument();
  expect(dijonLabel).toBeNull();
  expect(distanceLabel).toBeNull();
});

test('renders steps with labels and distances', () => {
  const { container } = render(
    <VerticalStepper
      length={labels.length}
      labels={labels}
      distances={distances}
    />,
  );

  expect(container.getElementsByClassName('MuiStep-root').length).toBe(
    labels.length,
  );

  const parisLabel = screen.queryByText(/Paris/i);
  const marseilleLabel = screen.queryByText(/Marseille/i);
  const lionLabel = screen.queryByText(/Lyon/i);
  const dijonLabel = screen.queryByText(/Dijon/i);
  const distanceParisLyonLabel = screen.queryByText(/391.93 km/i);
  const distanceLyonMarseilleLabel = screen.queryByText(/277.94 km/i);

  expect(parisLabel).toBeInTheDocument();
  expect(marseilleLabel).toBeInTheDocument();
  expect(lionLabel).toBeInTheDocument();
  expect(dijonLabel).toBeNull();
  expect(distanceParisLyonLabel).toBeInTheDocument();
  expect(distanceLyonMarseilleLabel).toBeInTheDocument();
});
