import { act, renderHook } from "@testing-library/react";
import useTodo from "./use-todos.hook";
import { Todo } from "@customTypes/todos.type";
import { FilterOptions } from "@components/views/todos-page/filter/filter.component";

describe('useTodo', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize todos from localStorage if available', () => {
    const initialTodos: Todo[] = [
      { id: 1, title: 'Test Todo 1', completed: false, userId: 1 },
      { id: 2, title: 'Test Todo 2', completed: true, userId: 1  },
    ];

    localStorage.setItem('todos', JSON.stringify(initialTodos));

    const { result } = renderHook(() => useTodo([]));

    expect(result.current.todos).toEqual(initialTodos);
  });

  it('should initialize todos with initialTodos if localStorage is empty', () => {
    const initialTodos: Todo[] = [
      { id: 1, title: 'Initial Todo', completed: false, userId: 1  },
    ];

    const { result } = renderHook(() => useTodo(initialTodos));

    expect(result.current.todos).toEqual(initialTodos);
  });

  it('should toggle a todo completed status when toggleTodo is called', () => {
    const initialTodos: Todo[] = [
      { id: 1, title: 'Test Todo 1', completed: false, userId: 1 },
    ];

    const { result } = renderHook(() => useTodo(initialTodos));

    expect(result.current.todos[0].completed).toBe(false);

    act(() => {
      result.current.toggleTodo(1);
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  it('should persist toggled todo state in localStorage', () => {
    const initialTodos: Todo[] = [
      { id: 1, title: 'Test Todo 1', completed: false, userId: 1 },
    ];

    const { result } = renderHook(() => useTodo(initialTodos));

    act(() => {
      result.current.toggleTodo(1);
    });

    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    expect(storedTodos[0].completed).toBe(true);
  });

  it('should correctly filter todos based on the selected filter', () => {
    const initialTodos: Todo[] = [
      { id: 1, title: 'Test Todo 1', completed: false, userId: 1 },
      { id: 2, title: 'Test Todo 2', completed: true, userId: 1 },
      { id: 3, title: 'Test Todo 3', completed: false, userId: 1 },
    ];

    const { result } = renderHook(() => useTodo(initialTodos));

    expect(result.current.todos).toEqual(initialTodos);

    act(() => {
      result.current.setFilter(FilterOptions.INCOMPLETE);
    });

    expect(result.current.todos).toEqual([
      { id: 1, title: 'Test Todo 1', completed: false, userId: 1 },
      { id: 3, title: 'Test Todo 3', completed: false, userId: 1 },
    ]);

    act(() => {
      result.current.setFilter(FilterOptions.COMPLETED);
    });

    expect(result.current.todos).toEqual([
      { id: 2, title: 'Test Todo 2', completed: true, userId: 1 },
    ]);
  });
});
