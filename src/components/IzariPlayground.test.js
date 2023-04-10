import React from 'react';
import { render, screen } from '@testing-library/react';
import IzariPlayground from './IzariPlayground';
import CodeMirror from 'react-codemirror';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock('@zondax/izari-filecoin', () => ({
  Address: {
    fromString: () => ({
      getNetworkPrefix: () => 'f',
    }),
  },
}));

jest.mock('react-codemirror', () => ({
  __esModule: true,
  default: () => (
    <>
      <p>Code Editor</p>
      <textarea />
    </>
  ),
}));

test('renders code editor and output', () => {
  render(<IzariPlayground />);

  const codeEditor = screen.getByText(/Code Editor/i);
  expect(codeEditor).toBeInTheDocument();

  const outputSection = screen.getByRole('heading', { name: 'Output' });
  expect(outputSection).toBeInTheDocument();

  const output = screen.getByText(/f/i);
    expect(output).toBeInTheDocument();
});
