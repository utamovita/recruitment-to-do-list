import { Todo } from "@customTypes/todos.type";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const ToDoItem = ({ todo, toggleTodo }: TodoItemProps) => {
  const htmlId = `todo-${todo.id}`;

  return (
    <li className="flex items-center py-2 gap-2">
      <input
        type="checkbox"
        id={htmlId}
        className="cursor-pointer peer"
        onChange={() => toggleTodo(todo.id)}
        checked={todo.completed}
      />
      <label
        htmlFor={htmlId}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500 w-full"
      >
        {todo.title}
      </label>
    </li>
  );
};

export { ToDoItem }
