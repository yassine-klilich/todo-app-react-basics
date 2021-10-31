import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskForm from './TaskForm';

describe('<TaskForm />', () => {
  test('it should mount', () => {
    render(<TaskForm />);
    
    const taskForm = screen.getByTestId('TaskForm');

    expect(taskForm).toBeInTheDocument();
  });
});