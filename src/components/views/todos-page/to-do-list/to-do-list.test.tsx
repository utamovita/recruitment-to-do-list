import { render, screen, fireEvent } from '@testing-library/react';
import { ToDoList } from './to-do-list.component';
import { Todo } from '@customTypes/todos.type';
import '@testing-library/jest-dom';

describe('ToDoList Component', () => {
  const mockToggleTodo = jest.fn();

  const todos: Todo[] = [
    { id: 1, title: 'Test Todo 1', completed: false, userId: 1 },
    { id: 2, title: 'Test Todo 2', completed: true, userId: 1 },
  ];

  it('should render all todo items', () => {
    render(<ToDoList todos={todos} toggleTodo={mockToggleTodo} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(todos.length);

    todos.forEach(todo => {
      expect(screen.getByText(todo.title)).toBeInTheDocument();
    });
  });

  it('should call toggleTodo when a checkbox is clicked', () => {
    render(<ToDoList todos={todos} toggleTodo={mockToggleTodo} />);

    const checkbox = screen.getByLabelText('Test Todo 1');
    fireEvent.click(checkbox);

    expect(mockToggleTodo).toHaveBeenCalledWith(todos[0].id);
  });


  it('should render an empty list if no todos are provided', () => {
    render(<ToDoList todos={[]} toggleTodo={mockToggleTodo} />);

    expect(screen.queryByRole('listitem')).toBeNull();
  });
});
