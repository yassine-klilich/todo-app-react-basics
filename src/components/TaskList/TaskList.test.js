import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskList from './TaskList';

describe('<TaskList />', () => {
  test('it should mount', () => {
    render(<TaskList />);
    
    const taskList = screen.getByTestId('TaskList');

    expect(taskList).toBeInTheDocument();
  });
});