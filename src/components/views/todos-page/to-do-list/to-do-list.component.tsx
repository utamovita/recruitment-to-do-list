import { ToDoItem }from "../to-do-item/to-do-item.component";
import { Todo } from "@customTypes/todos.type";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const ToDoList = ({ todos, toggleTodo }: TodoListProps) => {
  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export { ToDoList };