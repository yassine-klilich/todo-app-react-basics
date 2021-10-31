import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskItem from './TaskItem';

describe('<TaskItem />', () => {
  test('it should mount', () => {
    render(<TaskItem />);
    
    const taskItem = screen.getByTestId('TaskItem');

    expect(taskItem).toBeInTheDocument();
  });
});