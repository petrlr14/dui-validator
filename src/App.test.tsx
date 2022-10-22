import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render', () => {
    render(<App />);

    expect(screen).toBeTruthy;
  });

  it('should have correct title  ', () => {
    render(<App />);

    expect(screen.getByText('Mi DUI es valido?')).toBeInTheDocument();
  });
  it('should have validar button', () => {
    const { getByText } = render(<App />);

    expect(getByText('Validar')).toHaveTextContent('Validar');
  });

  it('should have an input', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('input')).toBeInTheDocument();
  });
});
