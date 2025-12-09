import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  
  // Test 1: Initial Render
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the title is rendered
    expect(screen.getByText('My Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master Testing')).toBeInTheDocument();
  });

  // Test 2: Adding a new todo
  test('allows users to add a new todo', () => {
    render(<TodoList />);
    
    // Find the input and button
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Simulate user typing and submitting
    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);
    
    // Check if the new todo is added
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    
    // Check if input is cleared after adding
    expect(input.value).toBe('');
  });

  // Test 3: Adding multiple todos
  test('allows users to add multiple todos', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Add first todo
    fireEvent.change(input, { target: { value: 'First New Todo' } });
    fireEvent.click(addButton);
    
    // Add second todo
    fireEvent.change(input, { target: { value: 'Second New Todo' } });
    fireEvent.click(addButton);
    
    // Check if both todos are added
    expect(screen.getByText('First New Todo')).toBeInTheDocument();
    expect(screen.getByText('Second New Todo')).toBeInTheDocument();
  });

  // Test 4: Preventing empty todos
  test('does not add empty todos', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Get initial todo count
    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;
    
    // Try to add empty todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Count should remain the same
    const finalTodos = screen.getAllByRole('listitem');
    expect(finalTodos.length).toBe(initialCount);
  });

  // Test 5: Toggling todo completion
  test('toggles todo completion status when clicked', () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText('Learn React');
    
    // Initially, todo should not be completed (no line-through)
    expect(todoItem).toHaveStyle({ textDecoration: 'none' });
    
    // Click to toggle
    fireEvent.click(todoItem);
    
    // Todo should now be completed (line-through)
    expect(todoItem).toHaveStyle({ textDecoration: 'line-through' });
    
    // Click again to toggle back
    fireEvent.click(todoItem);
    
    // Todo should not be completed again
    expect(todoItem).toHaveStyle({ textDecoration: 'none' });
  });

  // Test 6: Deleting a todo
  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    // Find the todo and its delete button
    const todoItem = screen.getByText('Build a Todo App');
    expect(todoItem).toBeInTheDocument();
    
    // Find all delete buttons
    const deleteButtons = screen.getAllByText('Delete');
    
    // Click the delete button for the second todo (index 1)
    fireEvent.click(deleteButtons[1]);
    
    // Todo should be removed
    expect(screen.queryByText('Build a Todo App')).not.toBeInTheDocument();
    
    // Other todos should still be there
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Master Testing')).toBeInTheDocument();
  });

  // Test 7: Deleting all todos
  test('displays message when all todos are deleted', () => {
    render(<TodoList />);
    
    // Get all delete buttons
    const deleteButtons = screen.getAllByText('Delete');
    
    // Delete all todos
    deleteButtons.forEach(button => fireEvent.click(button));
    
    // Check for empty state message
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
  });

  // Test 8: Todo counter
  test('displays correct number of todos', () => {
    render(<TodoList />);
    
    // Initially 3 todos
    let todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(3);
    
    // Add a new todo
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'Fourth Todo' } });
    fireEvent.click(addButton);
    
    // Now should have 4 todos
    todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(4);
    
    // Delete one todo
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    
    // Should have 3 todos again
    todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(3);
  });

  // Test 9: Form submission with Enter key
  test('adds todo when pressing Enter key', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    // Type and press Enter
    fireEvent.change(input, { target: { value: 'Todo via Enter' } });
    fireEvent.submit(input.closest('form'));
    
    // Check if todo is added
    expect(screen.getByText('Todo via Enter')).toBeInTheDocument();
  });

  // Test 10: Input field accessibility
  test('input field has correct attributes', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', 'Add a new todo...');
  });
});
