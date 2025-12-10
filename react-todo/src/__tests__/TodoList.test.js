import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('My Todo List')).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    
    const todoTexts = screen.getAllByTestId('todo-text');
    const firstTodo = todoTexts[0];
    const firstTodoItem = firstTodo.closest('li');

    expect(firstTodoItem).toHaveStyle('text-decoration: none');
    
    fireEvent.click(firstTodo);
    
    expect(firstTodoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    const deleteButtons = screen.getAllByTestId('delete-button');
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    
    fireEvent.click(deleteButtons[0]);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
