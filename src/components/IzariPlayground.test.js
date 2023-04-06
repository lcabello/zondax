import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IzariPlayground from './IzariPlayground';

test('renders code editor and output', () => {
  render(<IzariPlayground />);

  const codeEditor = screen.getByRole('textbox', { name: 'Code editor' });
  expect(codeEditor).toBeInTheDocument();

  const outputSection = screen.getByRole('heading', { name: 'Output' });
  expect(outputSection).toBeInTheDocument();
  const outputResult = screen.getByRole('textbox', { name: 'Output result' });
  expect(outputResult).toBeInTheDocument();
});

