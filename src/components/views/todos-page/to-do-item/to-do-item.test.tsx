import { render, screen, fireEvent } from '@testing-library/react';
import { ToDoItem } from './to-do-item.component';
import { Todo } from '@customTypes/todos.type';
import '@testing-library/jest-dom';

describe('ToDoItem Component', () => {
  const mockToggleTodo = jest.fn();

  const todo: Todo = {
    id: 1,
    title: 'Test Todo',
    completed: false,
    userId: 1,
  };

  beforeEach(() => {
    mockToggleTodo.mockClear();
  });

  it('should render the todo title', () => {
    render(<ToDoItem todo={todo} toggleTodo={mockToggleTodo} />);

    expect(screen.getByText(todo.title)).toBeInTheDocument();
  });

  it('should render the checkbox as unchecked if completed is false', () => {
    render(<ToDoItem todo={todo} toggleTodo={mockToggleTodo} />);

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should render the checkbox as checked if completed is true', () => {
    const completedTodo: Todo = { ...todo, completed: true };

    render(<ToDoItem todo={completedTodo} toggleTodo={mockToggleTodo} />);

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should call toggleTodo with the correct id when the checkbox is clicked', () => {
    render(<ToDoItem todo={todo} toggleTodo={mockToggleTodo} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockToggleTodo).toHaveBeenCalledWith(todo.id);
  });
});
