import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    const heading = screen.getByText(/My Todo List/i);
    expect(heading).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByRole('button', { name: /Add Todo/i });

    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    
    fireEvent.click(todoText);

    const todoItem = todoText.closest('li');
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    const deleteButtons = screen.getAllByRole('button', { name: /Delete/i });

    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
