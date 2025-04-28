import { useMemo, useState, useEffect } from "react";
import { Todo } from "@customTypes/todos.type";
import { FilterOptions } from "@components/views/todos-page/filter/filter.component";


const useTodo = (initialTodos: Todo[]) => {
  const [filter, setFilter] = useState<FilterOptions.ALL | FilterOptions.INCOMPLETE | FilterOptions.COMPLETED>(FilterOptions.ALL);
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    setIsLoading(false);
  }, []);

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return updatedTodos;
    });
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case FilterOptions.INCOMPLETE:
        return todos.filter((todo) => !todo.completed);
      case FilterOptions.COMPLETED:
        return todos.filter((todo) => todo.completed);
      case FilterOptions.ALL:
      default:
        return todos;
    }
  }, [todos, filter]);

  return {
    todos: filteredTodos,
    toggleTodo,
    filter,
    setFilter,
    isLoading
  };
};

export default useTodo;
