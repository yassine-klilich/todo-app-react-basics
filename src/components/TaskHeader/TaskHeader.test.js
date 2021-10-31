import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskHeader from './TaskHeader';

describe('<TaskHeader />', () => {
  test('it should mount', () => {
    render(<TaskHeader />);
    
    const taskHeader = screen.getByTestId('TaskHeader');

    expect(taskHeader).toBeInTheDocument();
  });
});